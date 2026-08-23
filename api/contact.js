export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }

  try {
    const { name, email, company, projectType, message, turnstileToken } = req.body || {}

    // =========================================================
    // VALIDATION
    // =========================================================

    if (!name?.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name is required.',
      })
    }

    if (!email?.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email is required.',
      })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please enter a valid email address.',
      })
    }

    if (!turnstileToken) {
      return res.status(400).json({
        success: false,
        message: 'Please complete the security verification.',
      })
    }

    // =========================================================
    // ENVIRONMENT VARIABLES CHECK
    // =========================================================

    const requiredEnv = ['TURNSTILE_SECRET_KEY', 'GOOGLE_SHEETS_API', 'BREVO_KEY']

    const missingEnv = requiredEnv.filter((key) => !process.env[key])

    if (missingEnv.length > 0) {
      console.error('Missing environment variables:', missingEnv)

      return res.status(500).json({
        success: false,
        message: `Server configuration error: missing ${missingEnv.join(', ')}`,
      })
    }

    // =========================================================
    // CLOUDFLARE TURNSTILE
    // =========================================================

    const turnstileResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',

        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      },
    )

    const turnstileResult = await turnstileResponse.json()

    console.log('Turnstile result:', turnstileResult)

    if (!turnstileResult.success) {
      return res.status(403).json({
        success: false,
        message: 'Security verification failed.',
        errors: turnstileResult['error-codes'] || [],
      })
    }

    // =========================================================
    // CONTACT DATA
    // =========================================================

    const contactData = {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || '',
      projectType: projectType || '',
      message: message?.trim() || '',
    }

    console.log('Contact data:', {
      ...contactData,
      // Don't log captcha token
    })

    // =========================================================
    // GOOGLE SHEETS
    // =========================================================

    console.log('Sending data to Google Sheets...')

    const sheetsResponse = await fetch(process.env.GOOGLE_SHEETS_API, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(contactData),
    })

    const sheetsText = await sheetsResponse.text()

    console.log('Google Sheets status:', sheetsResponse.status)
    console.log('Google Sheets response:', sheetsText)

    if (!sheetsResponse.ok) {
      throw new Error(`Google Sheets failed: ${sheetsResponse.status}`)
    }

    console.log('Google Sheets saved successfully.')

    // =========================================================
    // BREVO
    // =========================================================

    console.log('Sending email through Brevo...')

    const brevoPayload = {
      sender: {
        name: 'Momentum Lab',
        email: 'info@momentumlab.in',
      },

      to: [
        {
          email: 'info@momentumlab.in',
          name: 'Momentum Lab',
        },
      ],

      replyTo: {
        email: contactData.email,
        name: contactData.name,
      },

      subject: `New Project Inquiry — ${contactData.name}`,

      htmlContent: `
        <div style="font-family:Arial,sans-serif;max-width:650px;margin:auto">

          <h2 style="color:#D4AF37">
            New Project Inquiry
          </h2>

          <p>
            A new project inquiry has been submitted
            through <strong>Momentum Lab</strong>.
          </p>

          <hr>

          <p>
            <strong>Name:</strong><br>
            ${escapeHtml(contactData.name)}
          </p>

          <p>
            <strong>Email:</strong><br>
            ${escapeHtml(contactData.email)}
          </p>

          <p>
            <strong>Company:</strong><br>
            ${escapeHtml(contactData.company || 'Not provided')}
          </p>

          <p>
            <strong>Project Type:</strong><br>
            ${escapeHtml(contactData.projectType || 'Not specified')}
          </p>

          <p>
            <strong>Project Overview:</strong><br>
            ${escapeHtml(contactData.message || 'Not provided')}
          </p>

          <hr>

          <p style="font-size:12px;color:#777">
            Momentum Lab · momentumlab.in
          </p>

        </div>
      `,
    }

    console.log('Brevo sender:', brevoPayload.sender)
    console.log('Brevo recipient:', brevoPayload.to)

    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',

      headers: {
        accept: 'application/json',
        'api-key': process.env.BREVO_KEY,
        'content-type': 'application/json',
      },

      body: JSON.stringify(brevoPayload),
    })

    const brevoText = await brevoResponse.text()

    console.log('Brevo status:', brevoResponse.status)
    console.log('Brevo response:', brevoText)

    // =========================================================
    // BREVO ERROR
    // =========================================================

    if (!brevoResponse.ok) {
      let brevoError

      try {
        brevoError = JSON.parse(brevoText)
      } catch {
        brevoError = {
          message: brevoText,
        }
      }

      console.error('BREVO ERROR:', brevoError)

      return res.status(502).json({
        success: false,
        message: brevoError?.message || 'Email delivery failed.',
        brevoError: process.env.NODE_ENV !== 'production' ? brevoError : undefined,
      })
    }

    // =========================================================
    // SUCCESS
    // =========================================================

    return res.status(200).json({
      success: true,
      message: 'Your project brief has been received.',
    })
  } catch (error) {
    console.error('CONTACT API ERROR:', error)

    return res.status(500).json({
      success: false,
      message: error?.message || 'Something went wrong. Please try again later.',
    })
  }
}

// =========================================================
// HTML ESCAPE
// =========================================================

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
