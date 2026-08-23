<script setup>
import { ref, computed } from 'vue'
import {
  Calculator,
  Check,
  IndianRupee,
  DollarSign,
  Send,
  Building2,
  User,
  Mail,
  Phone,
  FileText,
} from 'lucide-vue-next'
import { Motion } from 'motion-v'

import { currentCurrency, formatCurrency } from '@/stores/currencyStore.js'

import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

const selectedCategory = ref('landing')
const selectedTimeline = ref('standard')
const selectedAddons = ref(['seo'])

const isSubmitted = ref(false)
const submitError = ref('')

const clientName = ref('')
const clientCompany = ref('')
const clientEmail = ref('')
const clientPhone = ref('')
const clientNotes = ref('')

const projectTypes = [
  {
    id: 'landing',
    label: 'Landing Page / Portfolio',
    baseUsd: 79,
    baseInr: 5999,
    desc: 'Responsive landing page or portfolio with modern UI and contact integration.',
  },
  {
    id: 'web_app',
    label: 'Full-Stack Web App',
    baseUsd: 149,
    baseInr: 11999,
    desc: 'Custom web application, dashboard, API, database, or e-commerce solution.',
  },
  {
    id: 'mobile_app',
    label: 'Mobile Application',
    baseUsd: 199,
    baseInr: 14999,
    desc: 'Cross-platform Android and iOS application with backend integration.',
  },
  {
    id: 'devops',
    label: 'Cloud & Server Setup',
    baseUsd: 89,
    baseInr: 6999,
    desc: 'VPS setup, deployment, SSL, Nginx configuration, and migration support.',
  },
]

const timelines = [
  {
    id: 'standard',
    label: 'Standard',
    subLabel: '2–3 Weeks',
    mult: 1,
  },
  {
    id: 'fast',
    label: 'Accelerated',
    subLabel: 'Around 7 Days',
    mult: 1.2,
  },
  {
    id: 'urgent',
    label: 'Express',
    subLabel: 'Priority Delivery',
    mult: 1.35,
  },
]

const addons = [
  {
    id: 'seo',
    label: 'Technical SEO & Performance Optimization',
    usd: 49,
    inr: 3499,
  },
  {
    id: 'pwa',
    label: 'PWA, Offline Support & Push Notifications',
    usd: 69,
    inr: 4999,
  },
  {
    id: 'cms',
    label: 'Custom Admin Panel / CMS',
    usd: 79,
    inr: 5999,
  },
]

const selectedProject = computed(() => {
  return projectTypes.find((project) => project.id === selectedCategory.value) || projectTypes[0]
})

const selectedTimelineData = computed(() => {
  return timelines.find((timeline) => timeline.id === selectedTimeline.value) || timelines[0]
})

const toggleAddon = (id) => {
  if (selectedAddons.value.includes(id)) {
    selectedAddons.value = selectedAddons.value.filter((addonId) => addonId !== id)
  } else {
    selectedAddons.value.push(id)
  }
}

const calculatedUsd = computed(() => {
  let total = selectedProject.value.baseUsd * selectedTimelineData.value.mult

  selectedAddons.value.forEach((addonId) => {
    const addon = addons.find((item) => item.id === addonId)

    if (addon) {
      total += addon.usd
    }
  })

  return Math.round(total)
})

const calculatedInr = computed(() => {
  let total = selectedProject.value.baseInr * selectedTimelineData.value.mult

  selectedAddons.value.forEach((addonId) => {
    const addon = addons.find((item) => item.id === addonId)

    if (addon) {
      total += addon.inr
    }
  })

  return Math.round(total)
})

const setCurrency = (currency) => {
  currentCurrency.value = currency
}

const resetCalculator = () => {
  isSubmitted.value = false
  submitError.value = ''

  clientName.value = ''
  clientCompany.value = ''
  clientEmail.value = ''
  clientPhone.value = ''
  clientNotes.value = ''

  selectedCategory.value = 'landing'
  selectedTimeline.value = 'standard'
  selectedAddons.value = ['seo']
}

const handleSubmit = () => {
  submitError.value = ''

  if (!clientName.value.trim()) {
    submitError.value = 'Please enter your name.'
    return
  }

  if (!clientEmail.value.trim()) {
    submitError.value = 'Please enter your email address.'
    return
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailPattern.test(clientEmail.value)) {
    submitError.value = 'Please enter a valid email address.'
    return
  }

  const estimateData = {
    name: clientName.value,
    company: clientCompany.value,
    email: clientEmail.value,
    phone: clientPhone.value,
    requirements: clientNotes.value,
    projectType: selectedProject.value.label,
    timeline: selectedTimelineData.value.label,
    addons: selectedAddons.value,
    estimatedUsd: calculatedUsd.value,
    estimatedInr: calculatedInr.value,
  }

  console.log('Project Estimate:', estimateData)

  isSubmitted.value = true
}
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#030303] text-white">
    <Header />

    <main class="relative pt-28 pb-24 sm:pt-32">
      <!-- Background Glow -->
      <div
        class="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.035] blur-[150px]"
      ></div>

      <div class="relative mx-auto w-[90%] max-w-6xl">
        <!-- ================= HEADER ================= -->

        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7 }"
          class="mx-auto max-w-3xl text-center"
        >
          <div
            class="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] px-4 py-2"
          >
            <Calculator :size="14" class="text-[#D4AF37]" />

            <span class="text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
              Instant Project Estimator
            </span>
          </div>

          <h1
            class="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
          >
            BUILD YOUR
            <br />

            <span class="text-zinc-500"> PROJECT </span>

            <span class="text-[#D4AF37]"> ESTIMATE. </span>
          </h1>

          <p class="mx-auto mt-6 max-w-2xl text-sm leading-[1.8] text-zinc-500 sm:text-base">
            Configure your project requirements, timeline, and additional services to get an
            estimated starting cost.
          </p>

          <!-- Currency Selector -->

          <div class="mt-8 inline-flex rounded-2xl border border-white/[0.08] bg-[#08080C] p-1.5">
            <button
              @click="setCurrency('INR')"
              class="flex items-center gap-2 rounded-xl px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all"
              :class="
                currentCurrency === 'INR'
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                  : 'text-zinc-500 hover:text-white'
              "
            >
              <IndianRupee :size="13" />

              INR
            </button>

            <button
              @click="setCurrency('USD')"
              class="flex items-center gap-2 rounded-xl px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all"
              :class="
                currentCurrency === 'USD'
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                  : 'text-zinc-500 hover:text-white'
              "
            >
              <DollarSign :size="13" />

              USD
            </button>
          </div>
        </Motion>

        <!-- ================= SUCCESS ================= -->

        <Motion
          v-if="isSubmitted"
          :initial="{ opacity: 0, y: 30, scale: 0.97 }"
          :animate="{ opacity: 1, y: 0, scale: 1 }"
          :transition="{ duration: 0.6 }"
          class="mx-auto mt-16 max-w-2xl overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 bg-[#08080C] p-8 text-center sm:p-12"
        >
          <div
            class="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-[#D4AF37]/30 bg-[#D4AF37]/[0.06] text-[#D4AF37]"
          >
            <Check :size="38" />
          </div>

          <h2 class="mt-7 text-2xl font-black uppercase tracking-[-0.03em] text-white">
            Estimate Ready
          </h2>

          <p class="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-zinc-500">
            Thanks,
            <span class="font-semibold text-[#D4AF37]">
              {{ clientName }} </span
            >. Your estimated project scope has been prepared for review.
          </p>

          <div class="mt-7 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5">
            <span class="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-600">
              Estimated Starting Cost
            </span>

            <p class="mt-3 text-3xl font-black text-[#D4AF37] sm:text-4xl">
              {{ formatCurrency(calculatedUsd, calculatedInr) }}
            </p>
          </div>

          <button
            @click="resetCalculator"
            class="mt-8 rounded-xl bg-[#D4AF37] px-7 py-3.5 text-[10px] font-black uppercase tracking-[0.12em] text-black transition hover:scale-[1.03]"
          >
            Create Another Estimate
          </button>
        </Motion>

        <!-- ================= CALCULATOR ================= -->

        <div v-else class="mt-16 grid gap-8 lg:grid-cols-[1.55fr_0.85fr]">
          <!-- LEFT SIDE -->

          <div class="space-y-6">
            <!-- 01 PROJECT TYPE -->

            <Motion
              :initial="{ opacity: 0, y: 35 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :viewport="{ once: true, amount: 0.15 }"
              :transition="{ duration: 0.6 }"
              class="rounded-[1.75rem] border border-white/[0.08] bg-[#08080C] p-6 sm:p-8"
            >
              <div class="flex items-center gap-3">
                <div
                  class="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] text-[#D4AF37]"
                >
                  <span class="text-xs font-black"> 01 </span>
                </div>

                <div>
                  <h3 class="text-sm font-black uppercase tracking-[0.08em]">
                    Select Project Type
                  </h3>

                  <p class="mt-1 text-[11px] text-zinc-600">
                    Choose the closest match for your project.
                  </p>
                </div>
              </div>

              <div class="mt-7 grid gap-3 sm:grid-cols-2">
                <button
                  v-for="type in projectTypes"
                  :key="type.id"
                  @click="selectedCategory = type.id"
                  class="group rounded-2xl border p-4 text-left transition-all duration-300"
                  :class="
                    selectedCategory === type.id
                      ? 'border-[#D4AF37]/60 bg-[#D4AF37]/[0.05]'
                      : 'border-white/[0.08] bg-white/[0.015] hover:border-white/[0.18]'
                  "
                >
                  <div class="flex items-start justify-between gap-4">
                    <span
                      class="text-xs font-bold"
                      :class="selectedCategory === type.id ? 'text-[#FCF6BA]' : 'text-zinc-200'"
                    >
                      {{ type.label }}
                    </span>

                    <span class="shrink-0 font-mono text-[10px] font-bold text-[#D4AF37]">
                      {{ formatCurrency(type.baseUsd, type.baseInr) }}
                    </span>
                  </div>

                  <p class="mt-2 text-[10px] leading-relaxed text-zinc-600">
                    {{ type.desc }}
                  </p>
                </button>
              </div>
            </Motion>

            <!-- 02 TIMELINE -->

            <Motion
              :initial="{ opacity: 0, y: 35 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :viewport="{ once: true, amount: 0.15 }"
              :transition="{ duration: 0.6, delay: 0.05 }"
              class="rounded-[1.75rem] border border-white/[0.08] bg-[#08080C] p-6 sm:p-8"
            >
              <div class="flex items-center gap-3">
                <div
                  class="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] text-[#D4AF37]"
                >
                  <span class="text-xs font-black"> 02 </span>
                </div>

                <div>
                  <h3 class="text-sm font-black uppercase tracking-[0.08em]">Target Timeline</h3>

                  <p class="mt-1 text-[11px] text-zinc-600">
                    Faster delivery may affect the estimate.
                  </p>
                </div>
              </div>

              <div class="mt-7 grid gap-3 sm:grid-cols-3">
                <button
                  v-for="timeline in timelines"
                  :key="timeline.id"
                  @click="selectedTimeline = timeline.id"
                  class="rounded-2xl border p-4 text-left transition-all duration-300"
                  :class="
                    selectedTimeline === timeline.id
                      ? 'border-[#D4AF37]/60 bg-[#D4AF37]/[0.05]'
                      : 'border-white/[0.08] bg-white/[0.015] hover:border-white/[0.18]'
                  "
                >
                  <p
                    class="text-xs font-bold"
                    :class="selectedTimeline === timeline.id ? 'text-[#FCF6BA]' : 'text-zinc-300'"
                  >
                    {{ timeline.label }}
                  </p>

                  <p class="mt-1 text-[10px] text-zinc-600">
                    {{ timeline.subLabel }}
                  </p>
                </button>
              </div>
            </Motion>

            <!-- 03 ADDONS -->

            <Motion
              :initial="{ opacity: 0, y: 35 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :viewport="{ once: true, amount: 0.15 }"
              :transition="{ duration: 0.6, delay: 0.08 }"
              class="rounded-[1.75rem] border border-white/[0.08] bg-[#08080C] p-6 sm:p-8"
            >
              <div class="flex items-center gap-3">
                <div
                  class="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] text-[#D4AF37]"
                >
                  <span class="text-xs font-black"> 03 </span>
                </div>

                <div>
                  <h3 class="text-sm font-black uppercase tracking-[0.08em]">
                    Additional Services
                  </h3>

                  <p class="mt-1 text-[11px] text-zinc-600">
                    Select any additional capabilities you need.
                  </p>
                </div>
              </div>

              <div class="mt-7 space-y-2">
                <button
                  v-for="addon in addons"
                  :key="addon.id"
                  @click="toggleAddon(addon.id)"
                  class="flex w-full items-center justify-between gap-5 rounded-xl border p-4 text-left transition-all duration-300"
                  :class="
                    selectedAddons.includes(addon.id)
                      ? 'border-[#D4AF37]/50 bg-[#D4AF37]/[0.04]'
                      : 'border-white/[0.08] bg-white/[0.015] hover:border-white/[0.18]'
                  "
                >
                  <div class="flex items-center gap-3">
                    <div
                      class="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition"
                      :class="
                        selectedAddons.includes(addon.id)
                          ? 'border-[#D4AF37] bg-[#D4AF37] text-black'
                          : 'border-white/20'
                      "
                    >
                      <Check v-if="selectedAddons.includes(addon.id)" :size="12" />
                    </div>

                    <span
                      class="text-[11px]"
                      :class="selectedAddons.includes(addon.id) ? 'text-zinc-200' : 'text-zinc-500'"
                    >
                      {{ addon.label }}
                    </span>
                  </div>

                  <span class="shrink-0 font-mono text-[10px] text-[#D4AF37]">
                    +
                    {{ formatCurrency(addon.usd, addon.inr) }}
                  </span>
                </button>
              </div>
            </Motion>

            <!-- 04 CONTACT INFORMATION -->

            <Motion
              :initial="{ opacity: 0, y: 35 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :viewport="{ once: true, amount: 0.15 }"
              :transition="{ duration: 0.6, delay: 0.1 }"
              class="rounded-[1.75rem] border border-white/[0.08] bg-[#08080C] p-6 sm:p-8"
            >
              <div class="flex items-center gap-3">
                <div
                  class="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] text-[#D4AF37]"
                >
                  <span class="text-xs font-black"> 04 </span>
                </div>

                <div>
                  <h3 class="text-sm font-black uppercase tracking-[0.08em]">
                    Contact Information
                  </h3>

                  <p class="mt-1 text-[11px] text-zinc-600">
                    Tell us where to send the final quotation.
                  </p>
                </div>
              </div>

              <!-- Name / Company / Email / Phone -->

              <div class="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <!-- Name -->

                <div>
                  <label
                    class="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500"
                  >
                    <User :size="12" />

                    Your Name *
                  </label>

                  <input
                    v-model="clientName"
                    type="text"
                    placeholder="Your name"
                    class="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 text-xs text-white outline-none transition placeholder:text-zinc-700 focus:border-[#D4AF37]/60"
                  />
                </div>

                <!-- Email -->

                <div>
                  <label
                    class="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500"
                  >
                    <Mail :size="12" />

                    Email Address *
                  </label>

                  <input
                    v-model="clientEmail"
                    type="email"
                    placeholder="you@company.com"
                    class="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 text-xs text-white outline-none transition placeholder:text-zinc-700 focus:border-[#D4AF37]/60"
                  />
                </div>

                <!-- Phone -->

                <div>
                  <label
                    class="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500"
                  >
                    <Phone :size="12" />

                    Phone Number
                  </label>

                  <input
                    v-model="clientPhone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    class="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 text-xs text-white outline-none transition placeholder:text-zinc-700 focus:border-[#D4AF37]/60"
                  />
                </div>

                <!-- Company -->

                <div>
                  <label
                    class="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500"
                  >
                    <Building2 :size="12" />

                    Company / Business
                  </label>

                  <input
                    v-model="clientCompany"
                    type="text"
                    placeholder="Company name"
                    class="h-12 w-full rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 text-xs text-white outline-none transition placeholder:text-zinc-700 focus:border-[#D4AF37]/60"
                  />
                </div>
              </div>

              <!-- Requirements -->

              <div class="mt-4">
                <label
                  class="mb-2 flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500"
                >
                  <FileText :size="12" />

                  Project Requirements
                </label>

                <textarea
                  v-model="clientNotes"
                  rows="4"
                  placeholder="Tell us about pages, features, integrations, reference websites or other requirements..."
                  class="w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-xs leading-relaxed text-white outline-none transition placeholder:text-zinc-700 focus:border-[#D4AF37]/60"
                ></textarea>
              </div>

              <!-- Validation Error -->

              <Motion
                v-if="submitError"
                :initial="{ opacity: 0, y: -5 }"
                :animate="{ opacity: 1, y: 0 }"
                class="mt-4 rounded-xl border border-red-500/20 bg-red-500/[0.05] px-4 py-3 text-xs text-red-400"
              >
                {{ submitError }}
              </Motion>
            </Motion>
          </div>

          <!-- ================= ESTIMATE SIDEBAR ================= -->

          <Motion
            :initial="{ opacity: 0, x: 25 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :viewport="{ once: true, amount: 0.15 }"
            :transition="{ duration: 0.65 }"
            class="h-fit lg:sticky lg:top-28"
          >
            <div class="overflow-hidden rounded-[1.75rem] border border-[#D4AF37]/25 bg-[#08080C]">
              <div class="p-6 sm:p-8">
                <span class="text-[9px] font-bold uppercase tracking-[0.22em] text-[#D4AF37]">
                  Estimated Starting Cost
                </span>

                <p class="mt-4 text-4xl font-black tracking-[-0.05em] text-white sm:text-5xl">
                  {{ formatCurrency(calculatedUsd, calculatedInr) }}
                </p>

                <p class="mt-3 text-[11px] leading-relaxed text-zinc-600">
                  This is an initial estimate. Final pricing may change depending on scope,
                  integrations, complexity, and timeline.
                </p>

                <!-- Summary -->

                <div class="mt-7 space-y-4 border-y border-white/[0.07] py-6">
                  <div class="flex items-start justify-between gap-4">
                    <span class="text-[10px] uppercase tracking-wider text-zinc-600">
                      Project
                    </span>

                    <span class="max-w-[60%] text-right text-[11px] font-medium text-zinc-300">
                      {{ selectedProject.label }}
                    </span>
                  </div>

                  <div class="flex items-start justify-between gap-4">
                    <span class="text-[10px] uppercase tracking-wider text-zinc-600">
                      Timeline
                    </span>

                    <span class="text-right text-[11px] font-medium text-zinc-300">
                      {{ selectedTimelineData.label }}
                    </span>
                  </div>

                  <div class="flex items-start justify-between gap-4">
                    <span class="text-[10px] uppercase tracking-wider text-zinc-600">
                      Add-ons
                    </span>

                    <span class="text-right text-[11px] font-medium text-zinc-300">
                      {{ selectedAddons.length }}
                      selected
                    </span>
                  </div>
                </div>

                <!-- Benefits -->

                <div class="mt-6 space-y-3">
                  <div class="flex items-center gap-2 text-[11px] text-zinc-500">
                    <Check :size="14" class="text-[#D4AF37]" />

                    Direct project communication
                  </div>

                  <div class="flex items-center gap-2 text-[11px] text-zinc-500">
                    <Check :size="14" class="text-[#D4AF37]" />

                    Source code delivery where applicable
                  </div>

                  <div class="flex items-center gap-2 text-[11px] text-zinc-500">
                    <Check :size="14" class="text-[#D4AF37]" />

                    Deployment and technical support options
                  </div>
                </div>

                <!-- Submit -->

                <button
                  @click="handleSubmit"
                  class="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] py-4 text-[10px] font-black uppercase tracking-[0.14em] text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                >
                  <Send :size="14" />

                  Request Project Estimate
                </button>
              </div>

              <div class="border-t border-white/[0.05] bg-white/[0.015] px-6 py-4 text-center">
                <p class="text-[9px] leading-relaxed text-zinc-700">
                  No payment is required. Submit your project details to request a quotation.
                </p>
              </div>
            </div>
          </Motion>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
