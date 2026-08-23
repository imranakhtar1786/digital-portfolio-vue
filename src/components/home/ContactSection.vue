<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { Motion } from 'motion-v'

import {
  Sparkles,
  Send,
  CheckCircle2,
  ShieldCheck,
  Mail,
  ArrowUpRight,
  X,
  MessageSquare,
  Layers3,
  Clock3,
  Globe2,
  Phone,
  AlertCircle,
  Loader2,
} from 'lucide-vue-next'

/* =========================================================
   PROPS / EMITS
========================================================= */

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

/* =========================================================
   CONFIG
========================================================= */

const API_URL = '/api/contact'

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY

/* =========================================================
   CONTACT DETAILS
========================================================= */

const contactInfo = {
  name: 'Imran Akhtar',
  email: 'info@momentumlab.in',
  phone: '+919155161786',
}

/* =========================================================
   FORM
========================================================= */

const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  message: '',
})

const projectTypes = [
  'Website',
  'Web Application',
  'E-commerce',
  'SaaS',
  'Mobile App',
  'Custom Software',
  'Other',
]

/* =========================================================
   VALIDATION
========================================================= */

const errors = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  message: '',
})

const errorMessage = ref('')

/* =========================================================
   STATUS
========================================================= */

const formSubmitted = ref(false)
const isSubmitting = ref(false)

/* =========================================================
   TURNSTILE
========================================================= */

const mainTurnstileToken = ref('')
const modalTurnstileToken = ref('')

const turnstileReady = ref(false)

const turnstileContainer = ref(null)
const modalTurnstileContainer = ref(null)

let turnstileWidgetId = null
let modalTurnstileWidgetId = null

/* =========================================================
   LOAD TURNSTILE
========================================================= */

const loadTurnstileScript = () => {
  return new Promise((resolve, reject) => {
    if (window.turnstile) {
      turnstileReady.value = true
      resolve()
      return
    }

    const existingScript = document.querySelector(
      'script[src*="challenges.cloudflare.com/turnstile/v0/api.js"]',
    )

    if (existingScript) {
      const checkReady = setInterval(() => {
        if (window.turnstile) {
          clearInterval(checkReady)

          turnstileReady.value = true
          resolve()
        }
      }, 100)

      setTimeout(() => {
        clearInterval(checkReady)

        if (!window.turnstile) {
          reject(new Error('Cloudflare Turnstile failed to load.'))
        }
      }, 10000)

      return
    }

    const script = document.createElement('script')

    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

    script.async = true
    script.defer = true

    script.onload = () => {
      turnstileReady.value = true
      resolve()
    }

    script.onerror = () => {
      reject(new Error('Unable to load Cloudflare Turnstile.'))
    }

    document.head.appendChild(script)
  })
}

/* =========================================================
   RENDER TURNSTILE
========================================================= */

const renderTurnstile = async (container, type = 'main') => {
  if (!container) return

  if (!window.turnstile) return

  if (!TURNSTILE_SITE_KEY) {
    console.error('VITE_TURNSTILE_SITE_KEY is missing.')

    errorMessage.value = 'Security verification is not configured correctly.'

    return
  }

  try {
    container.innerHTML = ''

    const widgetId = window.turnstile.render(container, {
      sitekey: TURNSTILE_SITE_KEY,

      theme: 'dark',

      size: 'flexible',

      callback: (token) => {
        if (type === 'main') {
          mainTurnstileToken.value = token
        } else {
          modalTurnstileToken.value = token
        }

        errorMessage.value = ''
      },

      'expired-callback': () => {
        if (type === 'main') {
          mainTurnstileToken.value = ''
        } else {
          modalTurnstileToken.value = ''
        }

        errorMessage.value = 'Security verification expired. Please verify again.'
      },

      'timeout-callback': () => {
        if (type === 'main') {
          mainTurnstileToken.value = ''
        } else {
          modalTurnstileToken.value = ''
        }

        errorMessage.value = 'Security verification timed out. Please try again.'
      },

      'error-callback': () => {
        if (type === 'main') {
          mainTurnstileToken.value = ''
        } else {
          modalTurnstileToken.value = ''
        }

        errorMessage.value = 'Security verification failed. Please try again.'
      },
    })

    if (type === 'main') {
      turnstileWidgetId = widgetId
    } else {
      modalTurnstileWidgetId = widgetId
    }
  } catch (error) {
    console.error('Turnstile render error:', error)

    errorMessage.value = 'Security verification could not be loaded.'
  }
}

/* =========================================================
   RESET TURNSTILE
========================================================= */

const resetTurnstile = (type = 'main') => {
  try {
    if (!window.turnstile) return

    const widgetId = type === 'main' ? turnstileWidgetId : modalTurnstileWidgetId

    if (widgetId !== null && widgetId !== undefined) {
      window.turnstile.reset(widgetId)
    }

    if (type === 'main') {
      mainTurnstileToken.value = ''
    } else {
      modalTurnstileToken.value = ''
    }
  } catch (error) {
    console.error('Turnstile reset error:', error)
  }
}

/* =========================================================
   VALIDATION HELPERS
========================================================= */

const clearErrors = () => {
  errors.value = {
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  }

  errorMessage.value = ''
}

const validateEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

  return pattern.test(email)
}

const validateForm = () => {
  clearErrors()

  let valid = true

  const name = form.value.name.trim()
  const email = form.value.email.trim()
  const company = form.value.company.trim()
  const projectType = form.value.projectType
  const message = form.value.message.trim()

  /* NAME */

  if (!name) {
    errors.value.name = 'Please enter your name.'
    valid = false
  } else if (name.length < 2) {
    errors.value.name = 'Name must contain at least 2 characters.'
    valid = false
  } else if (name.length > 80) {
    errors.value.name = 'Name must be less than 80 characters.'
    valid = false
  }

  /* EMAIL */

  if (!email) {
    errors.value.email = 'Please enter your email.'
    valid = false
  } else if (!validateEmail(email)) {
    errors.value.email = 'Please enter a valid email address.'
    valid = false
  } else if (email.length > 150) {
    errors.value.email = 'Email is too long.'
    valid = false
  }

  /* COMPANY */

  if (company.length > 120) {
    errors.value.company = 'Company name must be less than 120 characters.'

    valid = false
  }

  /* PROJECT TYPE */

  if (!projectType) {
    errors.value.projectType = 'Please select a project type.'

    valid = false
  }

  /* MESSAGE */

  if (message.length > 3000) {
    errors.value.message = 'Project description must be less than 3000 characters.'

    valid = false
  }

  return valid
}

/* =========================================================
   FIELD HELPERS
========================================================= */

const clearFieldError = (field) => {
  errors.value[field] = ''
  errorMessage.value = ''
}

const selectProjectType = (type) => {
  form.value.projectType = type
  errors.value.projectType = ''
  errorMessage.value = ''
}

/* =========================================================
   INITIALIZE MAIN TURNSTILE
========================================================= */

const initializeMainTurnstile = async () => {
  try {
    await loadTurnstileScript()

    await nextTick()

    if (turnstileContainer.value) {
      await renderTurnstile(turnstileContainer.value, 'main')
    }
  } catch (error) {
    console.error(error)

    errorMessage.value = 'Security verification could not be loaded. Please refresh the page.'
  }
}

/* =========================================================
   INITIALIZE MODAL TURNSTILE
========================================================= */

const initializeModalTurnstile = async () => {
  try {
    await loadTurnstileScript()

    await nextTick()

    if (modalTurnstileContainer.value) {
      await renderTurnstile(modalTurnstileContainer.value, 'modal')
    }
  } catch (error) {
    console.error(error)
  }
}

/* =========================================================
   SAFE JSON RESPONSE
========================================================= */

const parseResponse = async (response) => {
  const text = await response.text()

  if (!text) {
    return {
      success: false,
      message: `Server returned ${response.status} ${response.statusText}`,
    }
  }

  try {
    return JSON.parse(text)
  } catch {
    return {
      success: false,
      message: 'The server returned an invalid response.',
      raw: text,
    }
  }
}

/* =========================================================
   SUBMIT FORM
========================================================= */

const submitForm = async () => {
  if (isSubmitting.value) {
    return
  }

  errorMessage.value = ''

  /* VALIDATE */

  const isValid = validateForm()

  if (!isValid) {
    errorMessage.value = 'Please correct the highlighted fields.'

    return
  }

  /* CAPTCHA */

  const captchaToken = props.isOpen ? modalTurnstileToken.value : mainTurnstileToken.value

  if (!captchaToken) {
    errorMessage.value = 'Please complete the security verification.'

    return
  }

  isSubmitting.value = true

  try {
    const payload = {
      name: form.value.name.trim(),

      email: form.value.email.trim(),

      phone: form.value.phone.trim(),

      company: form.value.company.trim(),

      projectType: form.value.projectType,

      message: form.value.message.trim(),

      turnstileToken: captchaToken,
    }

    console.log('Sending contact request:', {
      ...payload,
      turnstileToken: '[HIDDEN]',
    })

    const response = await fetch(API_URL, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },

      body: JSON.stringify(payload),
    })

    const result = await parseResponse(response)

    console.log('Contact API response:', {
      status: response.status,
      result,
    })

    if (!response.ok || !result.success) {
      throw new Error(result.message || `Request failed with status ${response.status}`)
    }

    /* SUCCESS */

    formSubmitted.value = true

    if (props.isOpen) {
      resetTurnstile('modal')
    } else {
      resetTurnstile('main')
    }
  } catch (error) {
    console.error('Contact form error:', error)

    errorMessage.value = error?.message || 'Something went wrong. Please try again later.'

    if (props.isOpen) {
      resetTurnstile('modal')
    } else {
      resetTurnstile('main')
    }
  } finally {
    isSubmitting.value = false
  }
}

/* =========================================================
   RESET FORM
========================================================= */

const resetForm = async () => {
  formSubmitted.value = false

  isSubmitting.value = false

  clearErrors()

  form.value = {
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  }

  mainTurnstileToken.value = ''
  modalTurnstileToken.value = ''

  await nextTick()

  if (props.isOpen) {
    if (turnstileReady.value && modalTurnstileContainer.value) {
      await renderTurnstile(modalTurnstileContainer.value, 'modal')
    }
  } else {
    if (turnstileReady.value && turnstileContainer.value) {
      await renderTurnstile(turnstileContainer.value, 'main')
    }
  }
}

/* =========================================================
   CLOSE MODAL
========================================================= */

const closeModal = () => {
  resetTurnstile('modal')

  formSubmitted.value = false

  clearErrors()

  emit('close')
}

/* =========================================================
   MODAL WATCH
========================================================= */

watch(
  () => props.isOpen,
  async (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    if (isOpen) {
      formSubmitted.value = false

      clearErrors()

      await nextTick()

      setTimeout(async () => {
        if (modalTurnstileContainer.value && turnstileReady.value) {
          await renderTurnstile(modalTurnstileContainer.value, 'modal')
        } else if (!turnstileReady.value) {
          await initializeModalTurnstile()
        }
      }, 150)
    } else {
      resetTurnstile('modal')
    }
  },
)

/* =========================================================
   MOUNT
========================================================= */

onMounted(async () => {
  await initializeMainTurnstile()
})

/* =========================================================
   CLEANUP
========================================================= */

onBeforeUnmount(() => {
  document.body.style.overflow = ''

  try {
    if (window.turnstile) {
      if (turnstileWidgetId !== null && turnstileWidgetId !== undefined) {
        window.turnstile.remove(turnstileWidgetId)
      }

      if (modalTurnstileWidgetId !== null && modalTurnstileWidgetId !== undefined) {
        window.turnstile.remove(modalTurnstileWidgetId)
      }
    }
  } catch (error) {
    console.error('Turnstile cleanup error:', error)
  }
})
</script>

<template>
  <!-- =========================================================
       CONTACT SECTION
  ========================================================== -->

  <section
    id="contact"
    class="relative min-h-screen overflow-hidden border-t border-white/[0.06] bg-[#030303] text-white"
  >
    <!-- BACKGROUND -->

    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.035] blur-[150px]"
    ></div>

    <div
      class="pointer-events-none absolute inset-0 opacity-[0.018]"
      style="
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
        background-size: 80px 80px;
      "
    ></div>

    <!-- CONTAINER -->

    <div
      class="relative z-10 mx-auto flex min-h-screen w-[90%] max-w-7xl flex-col justify-center py-14 sm:py-16 lg:py-12"
    >
      <!-- HEADER -->

      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{
          duration: 0.7,
          ease: 'easeOut',
        }"
        class="mb-8 flex flex-col gap-5 border-b border-white/[0.06] pb-7 lg:mb-10 lg:flex-row lg:items-end lg:justify-between"
      >
        <div>
          <div
            class="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]"
          >
            <Sparkles :size="12" />

            <span>Start a Conversation</span>
          </div>

          <h2
            class="mt-4 max-w-3xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-5xl lg:text-6xl"
          >
            Let's build
            <span class="text-[#D4AF37]"> something. </span>
          </h2>
        </div>

        <div class="max-w-md lg:pb-1">
          <p class="text-xs leading-[1.8] text-zinc-500 sm:text-sm">
            Have a project, product, or idea in mind? Tell us what you're working on and we'll help
            you figure out the right direction.
          </p>
        </div>
      </Motion>

      <!-- WORKSPACE -->

      <div class="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <!-- LEFT -->

        <div class="flex flex-col gap-4">
          <!-- CONTACT CARD -->

          <Motion
            :initial="{ opacity: 0, x: -35 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :viewport="{ once: true, amount: 0.15 }"
            :transition="{
              duration: 0.65,
              ease: 'easeOut',
            }"
            class="relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-6 sm:p-7"
          >
            <div
              class="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/[0.05] blur-[70px]"
            ></div>

            <div class="relative">
              <div class="flex items-center justify-between">
                <div>
                  <p class="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                    Project Desk
                  </p>

                  <h3 class="mt-2 text-xl font-black uppercase tracking-[-0.04em]">
                    Start here
                    <span class="text-[#D4AF37]"> . </span>
                  </h3>
                </div>

                <div
                  class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05]"
                >
                  <MessageSquare :size="16" class="text-[#D4AF37]" />
                </div>
              </div>

              <div class="mt-7 space-y-4">
                <!-- EMAIL -->

                <a :href="`mailto:${contactInfo.email}`" class="group flex items-center gap-3.5">
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02]"
                  >
                    <Mail :size="15" class="text-zinc-500" />
                  </div>

                  <div class="min-w-0">
                    <p class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-600">
                      Email
                    </p>

                    <p class="mt-1 truncate text-xs font-medium text-zinc-300">
                      {{ contactInfo.email }}
                    </p>
                  </div>
                </a>

                <!-- PHONE -->

                <a
                  :href="`tel:${contactInfo.phone.replace(/\s/g, '')}`"
                  class="group flex items-center gap-3.5"
                >
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02]"
                  >
                    <Phone :size="15" class="text-zinc-500" />
                  </div>

                  <div>
                    <p class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-600">
                      Direct Contact
                    </p>

                    <p class="mt-1 text-xs font-medium text-zinc-300">
                      {{ contactInfo.phone }}
                    </p>
                  </div>
                </a>

                <!-- RESPONSE -->

                <div class="flex items-center gap-3.5">
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02]"
                  >
                    <Clock3 :size="15" class="text-zinc-500" />
                  </div>

                  <div>
                    <p class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-600">
                      Response
                    </p>

                    <p class="mt-1 text-xs font-medium text-zinc-300">
                      Usually within 1 business day
                    </p>
                  </div>
                </div>

                <!-- SERVICES -->

                <div class="flex items-center gap-3.5">
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02]"
                  >
                    <Layers3 :size="15" class="text-zinc-500" />
                  </div>

                  <div>
                    <p class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-600">
                      Services
                    </p>

                    <p class="mt-1 text-xs font-medium text-zinc-300">
                      Websites · Web Apps · E-commerce
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Motion>

          <!-- PROCESS -->

          <Motion
            :initial="{ opacity: 0, x: -35 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :viewport="{ once: true, amount: 0.15 }"
            :transition="{
              duration: 0.65,
              delay: 0.12,
              ease: 'easeOut',
            }"
            class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-6 sm:p-7"
          >
            <div class="flex items-center justify-between">
              <div>
                <p class="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                  Simple Process
                </p>

                <h3 class="mt-2 text-lg font-black uppercase tracking-[-0.03em]">
                  From idea to build
                </h3>
              </div>

              <Globe2 :size="17" class="text-zinc-700" />
            </div>

            <div class="mt-6 space-y-4">
              <div class="flex items-center gap-3">
                <span
                  class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/[0.05] font-mono text-[8px] text-[#D4AF37]"
                >
                  01
                </span>

                <div>
                  <p class="text-xs font-semibold text-zinc-300">Share your idea</p>

                  <p class="mt-0.5 text-[9px] text-zinc-600">
                    Tell us what you're trying to build.
                  </p>
                </div>
              </div>

              <div class="ml-3.5 h-3 w-px bg-white/[0.08]"></div>

              <div class="flex items-center gap-3">
                <span
                  class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] font-mono text-[8px] text-zinc-500"
                >
                  02
                </span>

                <div>
                  <p class="text-xs font-semibold text-zinc-300">Discuss the direction</p>

                  <p class="mt-0.5 text-[9px] text-zinc-600">We clarify goals and requirements.</p>
                </div>
              </div>

              <div class="ml-3.5 h-3 w-px bg-white/[0.08]"></div>

              <div class="flex items-center gap-3">
                <span
                  class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] font-mono text-[8px] text-zinc-500"
                >
                  03
                </span>

                <div>
                  <p class="text-xs font-semibold text-zinc-300">Build the solution</p>

                  <p class="mt-0.5 text-[9px] text-zinc-600">Design, engineering, and launch.</p>
                </div>
              </div>
            </div>
          </Motion>

          <!-- PRIVACY -->

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true, amount: 0.15 }"
            :transition="{
              duration: 0.55,
              delay: 0.2,
            }"
            class="flex items-start gap-3 rounded-[1.5rem] border border-[#D4AF37]/10 bg-[#070709] p-5"
          >
            <ShieldCheck :size="16" class="mt-0.5 shrink-0 text-[#D4AF37]" />

            <div>
              <p class="font-mono text-[8px] uppercase tracking-[0.2em] text-[#D4AF37]">
                Private by default
              </p>

              <p class="mt-1.5 text-[10px] leading-relaxed text-zinc-600">
                Your project information is treated as private. Share only what you're comfortable
                discussing.
              </p>
            </div>
          </Motion>
        </div>

        <!-- RIGHT FORM -->

        <Motion
          :initial="{ opacity: 0, x: 40 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :viewport="{ once: true, amount: 0.15 }"
          :transition="{
            duration: 0.7,
            delay: 0.1,
            ease: 'easeOut',
          }"
          class="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#070709]"
        >
          <div
            class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D4AF37]/[0.055] blur-[90px]"
          ></div>

          <div class="relative p-6 sm:p-8 lg:p-9">
            <!-- SUCCESS -->

            <Motion
              v-if="formSubmitted"
              :initial="{ opacity: 0, scale: 0.96 }"
              :animate="{ opacity: 1, scale: 1 }"
              :transition="{ duration: 0.45 }"
              class="flex min-h-[500px] flex-col items-center justify-center px-4 text-center"
            >
              <div
                class="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/[0.06]"
              >
                <CheckCircle2 :size="38" class="text-[#D4AF37]" />
              </div>

              <p class="mt-6 font-mono text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]">
                Message Received
              </p>

              <h3 class="mt-3 text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl">
                We'll be in touch
                <span class="text-[#D4AF37]">.</span>
              </h3>

              <p class="mt-4 max-w-md text-xs leading-relaxed text-zinc-500 sm:text-sm">
                Thanks,
                <span class="text-zinc-300"> {{ form.name }} </span>. Your project details have been
                received.
              </p>

              <button
                type="button"
                class="mt-7 rounded-xl border border-white/10 px-6 py-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 transition hover:border-[#D4AF37]/40 hover:text-white"
                @click="resetForm"
              >
                Send Another Message
              </button>
            </Motion>

            <!-- FORM -->

            <form v-else class="relative space-y-5" @submit.prevent="submitForm">
              <div class="flex items-start justify-between border-b border-white/[0.06] pb-5">
                <div>
                  <p class="font-mono text-[8px] uppercase tracking-[0.25em] text-[#D4AF37]">
                    Project Brief
                  </p>

                  <h3 class="mt-2 text-xl font-black uppercase tracking-[-0.04em] sm:text-2xl">
                    Tell us about it
                    <span class="text-[#D4AF37]"> . </span>
                  </h3>
                </div>

                <ArrowUpRight :size="18" class="text-zinc-700" />
              </div>

              <!-- NAME / EMAIL -->

              <div class="grid gap-4 sm:grid-cols-2">
                <!-- NAME -->

                <div>
                  <label
                    class="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
                  >
                    Your Name *
                  </label>

                  <input
                    v-model="form.name"
                    type="text"
                    required
                    maxlength="80"
                    autocomplete="name"
                    placeholder="Your name"
                    :class="[
                      'w-full rounded-xl border bg-[#0B0B0E] px-4 py-3 text-xs text-white outline-none transition placeholder:text-zinc-700',
                      errors.name
                        ? 'border-red-500/50'
                        : 'border-white/[0.08] focus:border-[#D4AF37]/50',
                    ]"
                    @input="clearFieldError('name')"
                  />

                  <p
                    v-if="errors.name"
                    class="mt-1.5 flex items-center gap-1 text-[9px] text-red-400"
                  >
                    <AlertCircle :size="11" />
                    {{ errors.name }}
                  </p>
                </div>

                <!-- EMAIL -->

                <div>
                  <label
                    class="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
                  >
                    Email *
                  </label>

                  <input
                    v-model="form.email"
                    type="email"
                    required
                    maxlength="150"
                    autocomplete="email"
                    placeholder="you@company.com"
                    :class="[
                      'w-full rounded-xl border bg-[#0B0B0E] px-4 py-3 text-xs text-white outline-none transition placeholder:text-zinc-700',
                      errors.email
                        ? 'border-red-500/50'
                        : 'border-white/[0.08] focus:border-[#D4AF37]/50',
                    ]"
                    @input="clearFieldError('email')"
                  />

                  <p
                    v-if="errors.email"
                    class="mt-1.5 flex items-center gap-1 text-[9px] text-red-400"
                  >
                    <AlertCircle :size="11" />
                    {{ errors.email }}
                  </p>
                </div>
              </div>

              <!-- COMPANY & PHONE -->

              <div class="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    class="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
                  >
                    Company / Brand
                  </label>

                  <input
                    v-model="form.company"
                    type="text"
                    maxlength="120"
                    autocomplete="organization"
                    placeholder="Your company or brand"
                    :class="[
                      'w-full rounded-xl border bg-[#0B0B0E] px-4 py-3 text-xs text-white outline-none transition placeholder:text-zinc-700',
                      errors.company
                        ? 'border-red-500/50'
                        : 'border-white/[0.08] focus:border-[#D4AF37]/50',
                    ]"
                    @input="clearFieldError('company')"
                  />

                  <p
                    v-if="errors.company"
                    class="mt-1.5 flex items-center gap-1 text-[9px] text-red-400"
                  >
                    <AlertCircle :size="11" />
                    {{ errors.company }}
                  </p>
                </div>

                <div>
                  <label
                    class="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
                  >
                    Phone Number
                  </label>

                  <input
                    v-model="form.phone"
                    type="tel"
                    maxlength="30"
                    autocomplete="tel"
                    placeholder="+91 98765 43210"
                    :class="[
                      'w-full rounded-xl border bg-[#0B0B0E] px-4 py-3 text-xs text-white outline-none transition placeholder:text-zinc-700',
                      errors.phone
                        ? 'border-red-500/50'
                        : 'border-white/[0.08] focus:border-[#D4AF37]/50',
                    ]"
                    @input="clearFieldError('phone')"
                  />

                  <p
                    v-if="errors.phone"
                    class="mt-1.5 flex items-center gap-1 text-[9px] text-red-400"
                  >
                    <AlertCircle :size="11" />
                    {{ errors.phone }}
                  </p>
                </div>
              </div>

              <!-- PROJECT TYPE -->

              <div>
                <label
                  class="mb-2.5 block font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
                >
                  What are you building? *
                </label>

                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="type in projectTypes"
                    :key="type"
                    type="button"
                    class="rounded-lg border px-3 py-2 text-[9px] font-medium transition duration-200"
                    :class="
                      form.projectType === type
                        ? 'border-[#D4AF37]/50 bg-[#D4AF37]/[0.07] text-[#FCF6BA]'
                        : 'border-white/[0.07] bg-white/[0.015] text-zinc-500 hover:border-white/20 hover:text-zinc-300'
                    "
                    @click="selectProjectType(type)"
                  >
                    {{ type }}
                  </button>
                </div>

                <p
                  v-if="errors.projectType"
                  class="mt-2 flex items-center gap-1 text-[9px] text-red-400"
                >
                  <AlertCircle :size="11" />
                  {{ errors.projectType }}
                </p>
              </div>

              <!-- MESSAGE -->

              <div>
                <div class="mb-1.5 flex items-center justify-between">
                  <label class="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                    Project Overview
                  </label>

                  <span class="font-mono text-[7px] uppercase tracking-widest text-zinc-700">
                    Optional
                  </span>
                </div>

                <textarea
                  v-model="form.message"
                  rows="4"
                  maxlength="3000"
                  placeholder="Tell us what you're trying to build..."
                  :class="[
                    'w-full resize-none rounded-xl border bg-[#0B0B0E] px-4 py-3 text-xs leading-relaxed text-white outline-none transition placeholder:text-zinc-700',
                    errors.message
                      ? 'border-red-500/50'
                      : 'border-white/[0.08] focus:border-[#D4AF37]/50',
                  ]"
                  @input="clearFieldError('message')"
                ></textarea>

                <div class="mt-1 flex justify-between">
                  <p v-if="errors.message" class="flex items-center gap-1 text-[9px] text-red-400">
                    <AlertCircle :size="11" />
                    {{ errors.message }}
                  </p>

                  <span class="ml-auto font-mono text-[8px] text-zinc-700">
                    {{ form.message.length }}/3000
                  </span>
                </div>
              </div>

              <!-- TURNSTILE -->

              <div class="flex w-full items-start justify-start overflow-visible pt-1 text-left">
                <div
                  ref="turnstileContainer"
                  class="turnstile-left flex min-h-[65px] w-auto items-start justify-start"
                ></div>
              </div>

              <!-- ERROR -->

              <Motion
                v-if="errorMessage"
                :initial="{
                  opacity: 0,
                  y: -5,
                }"
                :animate="{
                  opacity: 1,
                  y: 0,
                }"
                class="flex items-start gap-2 rounded-xl border border-red-500/20 bg-red-500/[0.04] px-4 py-3"
              >
                <AlertCircle :size="14" class="mt-0.5 shrink-0 text-red-400" />

                <p class="text-[10px] leading-relaxed text-red-400">
                  {{ errorMessage }}
                </p>
              </Motion>

              <!-- SUBMIT -->

              <button
                type="submit"
                :disabled="isSubmitting || !mainTurnstileToken"
                class="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#D4AF37] py-3.5 text-[10px] font-black uppercase tracking-[0.2em] text-black transition duration-300 hover:bg-[#E4C55A] disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Loader2 v-if="isSubmitting" :size="14" class="animate-spin" />

                <span v-else> Send Project Brief </span>

                <Send v-if="!isSubmitting" :size="14" />
              </button>

              <div
                class="flex items-center justify-center gap-2 pt-1 font-mono text-[7px] uppercase tracking-[0.15em] text-zinc-700"
              >
                <span class="h-1 w-1 rounded-full bg-[#D4AF37]/60"></span>

                <span>No commitment</span>

                <span class="text-zinc-800">·</span>

                <span>Just a conversation</span>
              </div>
            </form>
          </div>
        </Motion>
      </div>

      <!-- BOTTOM -->

      <Motion
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 0.6 }"
        class="mt-5 flex flex-col gap-3 border-t border-white/[0.05] pt-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-700">
          Your vision → Our conversation → Your product
        </p>

        <div class="flex items-center gap-2">
          <div class="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></div>

          <span class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-600">
            Open for new projects
          </span>
        </div>
      </Motion>
    </div>
  </section>

  <!-- =========================================================
       MODAL
  ========================================================== -->

  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <!-- BACKDROP -->

      <button
        type="button"
        aria-label="Close contact"
        class="absolute inset-0 cursor-default bg-black/80 backdrop-blur-xl"
        @click="closeModal"
      ></button>

      <!-- MODAL -->

      <Motion
        :initial="{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }"
        :animate="{
          opacity: 1,
          y: 0,
          scale: 1,
        }"
        :transition="{
          duration: 0.35,
          ease: 'easeOut',
        }"
        class="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-white/[0.1] bg-[#070709] shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
      >
        <div class="relative p-6 sm:p-8">
          <!-- HEADER -->

          <div class="flex items-center justify-between border-b border-white/[0.06] pb-5">
            <div>
              <p class="font-mono text-[8px] uppercase tracking-[0.25em] text-[#D4AF37]">
                Direct Contact
              </p>

              <h3 class="mt-2 text-lg font-black uppercase tracking-tight">Start a Project</h3>
            </div>

            <button
              type="button"
              aria-label="Close contact"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] text-zinc-500 transition hover:border-white/20 hover:text-white"
              @click="closeModal"
            >
              <X :size="17" />
            </button>
          </div>

          <!-- SUCCESS -->

          <Motion
            v-if="formSubmitted"
            :initial="{
              opacity: 0,
              scale: 0.95,
            }"
            :animate="{
              opacity: 1,
              scale: 1,
            }"
            class="py-14 text-center"
          >
            <CheckCircle2 :size="48" class="mx-auto text-[#D4AF37]" />

            <h3 class="mt-5 text-2xl font-black uppercase tracking-tight">
              Message Received
              <span class="text-[#D4AF37]"> . </span>
            </h3>

            <p class="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-zinc-500">
              Thanks,
              <span class="text-zinc-300"> {{ form.name }} </span>. We'll get back to you soon.
            </p>

            <button
              type="button"
              class="mt-7 rounded-xl border border-white/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-zinc-300 transition hover:border-[#D4AF37]/40 hover:text-white"
              @click="closeModal"
            >
              Close
            </button>
          </Motion>

          <!-- MODAL FORM -->

          <form v-else class="mt-6 space-y-5" @submit.prevent="submitForm">
            <!-- NAME -->

            <div>
              <label
                class="mb-2 block font-mono text-[9px] uppercase tracking-widest text-zinc-600"
              >
                Name *
              </label>

              <input
                v-model="form.name"
                required
                maxlength="80"
                type="text"
                autocomplete="name"
                placeholder="Your name"
                :class="[
                  'w-full rounded-xl border bg-[#0B0B0E] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700',
                  errors.name
                    ? 'border-red-500/50'
                    : 'border-white/[0.08] focus:border-[#D4AF37]/50',
                ]"
                @input="clearFieldError('name')"
              />

              <p v-if="errors.name" class="mt-1.5 text-[9px] text-red-400">
                {{ errors.name }}
              </p>
            </div>

            <!-- EMAIL -->

            <div>
              <label
                class="mb-2 block font-mono text-[9px] uppercase tracking-widest text-zinc-600"
              >
                Email *
              </label>

              <input
                v-model="form.email"
                required
                maxlength="150"
                type="email"
                autocomplete="email"
                placeholder="you@company.com"
                :class="[
                  'w-full rounded-xl border bg-[#0B0B0E] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700',
                  errors.email
                    ? 'border-red-500/50'
                    : 'border-white/[0.08] focus:border-[#D4AF37]/50',
                ]"
                @input="clearFieldError('email')"
              />

              <p v-if="errors.email" class="mt-1.5 text-[9px] text-red-400">
                {{ errors.email }}
              </p>
            </div>

            <!-- COMPANY & PHONE -->

            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  class="mb-2 block font-mono text-[9px] uppercase tracking-widest text-zinc-600"
                >
                  Company / Brand
                </label>

                <input
                  v-model="form.company"
                  maxlength="120"
                  type="text"
                  autocomplete="organization"
                  placeholder="Your company or brand"
                  :class="[
                    'w-full rounded-xl border bg-[#0B0B0E] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700',
                    errors.company
                      ? 'border-red-500/50'
                      : 'border-white/[0.08] focus:border-[#D4AF37]/50',
                  ]"
                  @input="clearFieldError('company')"
                />

                <p v-if="errors.company" class="mt-1.5 text-[9px] text-red-400">
                  {{ errors.company }}
                </p>
              </div>

              <div>
                <label
                  class="mb-2 block font-mono text-[9px] uppercase tracking-widest text-zinc-600"
                >
                  Phone Number
                </label>

                <input
                  v-model="form.phone"
                  maxlength="30"
                  type="tel"
                  autocomplete="tel"
                  placeholder="+91 98765 43210"
                  :class="[
                    'w-full rounded-xl border bg-[#0B0B0E] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700',
                    errors.phone
                      ? 'border-red-500/50'
                      : 'border-white/[0.08] focus:border-[#D4AF37]/50',
                  ]"
                  @input="clearFieldError('phone')"
                />

                <p v-if="errors.phone" class="mt-1.5 text-[9px] text-red-400">
                  {{ errors.phone }}
                </p>
              </div>
            </div>

            <!-- PROJECT TYPE -->

            <div>
              <label
                class="mb-2 block font-mono text-[9px] uppercase tracking-widest text-zinc-600"
              >
                Project Type *
              </label>

              <div class="flex flex-wrap gap-2">
                <button
                  v-for="type in projectTypes"
                  :key="type"
                  type="button"
                  class="rounded-lg border px-3 py-2 text-[9px] transition"
                  :class="
                    form.projectType === type
                      ? 'border-[#D4AF37]/50 bg-[#D4AF37]/[0.07] text-[#FCF6BA]'
                      : 'border-white/[0.07] text-zinc-500 hover:border-white/20 hover:text-zinc-300'
                  "
                  @click="selectProjectType(type)"
                >
                  {{ type }}
                </button>
              </div>

              <p v-if="errors.projectType" class="mt-2 text-[9px] text-red-400">
                {{ errors.projectType }}
              </p>
            </div>

            <!-- MESSAGE -->

            <div>
              <label
                class="mb-2 block font-mono text-[9px] uppercase tracking-widest text-zinc-600"
              >
                Project Brief
              </label>

              <textarea
                v-model="form.message"
                maxlength="3000"
                rows="4"
                placeholder="Tell us briefly about your project..."
                :class="[
                  'w-full resize-none rounded-xl border bg-[#0B0B0E] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700',
                  errors.message
                    ? 'border-red-500/50'
                    : 'border-white/[0.08] focus:border-[#D4AF37]/50',
                ]"
                @input="clearFieldError('message')"
              ></textarea>

              <div class="mt-1 flex justify-between">
                <p v-if="errors.message" class="text-[9px] text-red-400">
                  {{ errors.message }}
                </p>

                <span class="ml-auto font-mono text-[8px] text-zinc-700">
                  {{ form.message.length }}/3000
                </span>
              </div>
            </div>

            <!-- TURNSTILE -->

            <div class="!flex w-full !items-start !justify-start overflow-visible pt-1 text-left">
              <div
                ref="modalTurnstileContainer"
                class="turnstile-left !m-0 !flex min-h-[65px] w-auto !items-start !justify-start text-left"
              ></div>
            </div>

            <!-- ERROR -->

            <Motion
              v-if="errorMessage"
              :initial="{
                opacity: 0,
                y: -5,
              }"
              :animate="{
                opacity: 1,
                y: 0,
              }"
              class="flex items-start gap-2 rounded-xl border border-red-500/20 bg-red-500/[0.04] px-4 py-3"
            >
              <AlertCircle :size="14" class="mt-0.5 shrink-0 text-red-400" />

              <p class="text-[10px] leading-relaxed text-red-400">
                {{ errorMessage }}
              </p>
            </Motion>

            <!-- SUBMIT -->

            <button
              type="submit"
              :disabled="isSubmitting || !modalTurnstileToken"
              class="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-[#E4C55A] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Loader2 v-if="isSubmitting" :size="14" class="animate-spin" />

              <template v-else>
                Send Message

                <Send :size="14" />
              </template>
            </button>
          </form>
        </div>
      </Motion>
    </div>
  </Transition>
</template>

<style scoped>
.turnstile-left {
  margin-left: 0 !important;
  margin-right: auto !important;
  text-align: left !important;
}

.turnstile-left > div {
  margin-left: 0 !important;
  margin-right: auto !important;
  text-align: left !important;
}

.turnstile-left iframe {
  display: block !important;
  margin-left: 0 !important;
  margin-right: auto !important;
}

.turnstile-left [style*='margin'] {
  margin-left: 0 !important;
  margin-right: auto !important;
}
</style>
