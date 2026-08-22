export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }

  try {
    const { name, email, company, projectType, message, turnstileToken } = req.body || {}

    // -----------------------------
    // Validate form
    // -----------------------------

    if (!name?.trim() || !email?.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Name and email are required.',
      })
    }

    if (!turnstileToken) {
      return res.status(400).json({
        success: false,
        message: 'Please complete the security verification.',
      })
    }

    // -----------------------------
    // Cloudflare Turnstile
    // -----------------------------

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

    if (!turnstileResult.success) {
      return res.status(403).json({
        success: false,
        message: 'Security verification failed.',
      })
    }

    // -----------------------------
    // Prepare data
    // -----------------------------

    const contactData = {
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || '',
      projectType: projectType || '',
      message: message?.trim() || '',
    }

    // -----------------------------
    // Google Sheets
    // -----------------------------

    const sheetsResponse = await fetch(process.env.GOOGLE_SHEETS_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    })

    if (!sheetsResponse.ok) {
      throw new Error('Google Sheets submission failed.')
    }

    // -----------------------------
    // Brevo
    // -----------------------------

    const brevoResponse = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',

      headers: {
        accept: 'application/json',
        'api-key': process.env.BREVO_KEY,
        'content-type': 'application/json',
      },

      body: JSON.stringify({
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
      }),
    })

    if (!brevoResponse.ok) {
      const error = await brevoResponse.text()

      console.error('Brevo error:', error)

      throw new Error('Email delivery failed.')
    }

    return res.status(200).json({
      success: true,
      message: 'Your project brief has been received.',
    })
  } catch (error) {
    console.error('Contact API error:', error)

    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    })
  }
}

// --------------------------------
// HTML escaping
// --------------------------------

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
