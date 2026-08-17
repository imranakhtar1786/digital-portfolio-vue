<script setup>
import { ref, computed, watch, onBeforeUnmount } from 'vue'
import {
  X,
  Check,
  Calculator,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  Zap,
  Globe,
  Smartphone,
  Server,
  ShoppingCart,
  Code2,
  CheckCircle2,
} from 'lucide-vue-next'

import { formatCurrency } from '@/stores/currencyStore.js'

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['close'])

/* -------------------------------------------------------
   STATE
------------------------------------------------------- */

const currentStep = ref(1)
const isSubmitted = ref(false)

const selectedType = ref('landing')
const selectedTimeline = ref('standard')
const selectedAddons = ref(['seo'])

const clientName = ref('')
const clientEmail = ref('')
const clientOrg = ref('')
const clientNotes = ref('')

/* -------------------------------------------------------
   PROJECT TYPES
------------------------------------------------------- */

const projectTypes = [
  {
    id: 'landing',
    label: 'Landing Page',
    short: 'Landing',
    baseUsd: 79,
    baseInr: 5999,
    desc: 'Modern responsive website or portfolio.',
    icon: Globe,
  },
  {
    id: 'web_app',
    label: 'Web App / E-commerce',
    short: 'Web App',
    baseUsd: 149,
    baseInr: 11999,
    desc: 'Full-stack application with backend.',
    icon: ShoppingCart,
  },
  {
    id: 'mobile_app',
    label: 'Mobile Application',
    short: 'Mobile',
    baseUsd: 199,
    baseInr: 14999,
    desc: 'Cross-platform iOS & Android app.',
    icon: Smartphone,
  },
  {
    id: 'devops',
    label: 'Cloud / Server',
    short: 'Cloud',
    baseUsd: 89,
    baseInr: 6999,
    desc: 'VPS, Nginx, deployment & migration.',
    icon: Server,
  },
]

/* -------------------------------------------------------
   TIMELINES
------------------------------------------------------- */

const timelines = [
  {
    id: 'standard',
    label: 'Standard',
    description: '2–3 weeks',
    mult: 1,
  },
  {
    id: 'fast',
    label: 'Priority',
    description: '7 days',
    mult: 1.2,
  },
  {
    id: 'urgent',
    label: 'Express',
    description: '48 hours',
    mult: 1.35,
  },
]

/* -------------------------------------------------------
   ADDONS
------------------------------------------------------- */

const addons = [
  {
    id: 'seo',
    label: 'Technical SEO',
    usd: 49,
    inr: 3499,
  },
  {
    id: 'pwa',
    label: 'PWA & Push Notifications',
    usd: 69,
    inr: 4999,
  },
  {
    id: 'admin',
    label: 'Custom Admin Panel',
    usd: 79,
    inr: 5999,
  },
]

/* -------------------------------------------------------
   COMPUTED
------------------------------------------------------- */

const selectedProject = computed(() => {
  return projectTypes.find((item) => item.id === selectedType.value) || projectTypes[0]
})

const selectedDelivery = computed(() => {
  return timelines.find((item) => item.id === selectedTimeline.value) || timelines[0]
})

const calculatedUsd = computed(() => {
  let total = selectedProject.value.baseUsd * selectedDelivery.value.mult

  selectedAddons.value.forEach((id) => {
    const addon = addons.find((item) => item.id === id)

    if (addon) {
      total += addon.usd
    }
  })

  return Math.round(total)
})

const calculatedInr = computed(() => {
  let total = selectedProject.value.baseInr * selectedDelivery.value.mult

  selectedAddons.value.forEach((id) => {
    const addon = addons.find((item) => item.id === id)

    if (addon) {
      total += addon.inr
    }
  })

  return Math.round(total)
})

/* -------------------------------------------------------
   ACTIONS
------------------------------------------------------- */

const toggleAddon = (id) => {
  if (selectedAddons.value.includes(id)) {
    selectedAddons.value = selectedAddons.value.filter((item) => item !== id)
  } else {
    selectedAddons.value.push(id)
  }
}

const nextStep = () => {
  if (currentStep.value < 3) {
    currentStep.value++
  }
}

const previousStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const handleSubmit = () => {
  if (!clientName.value || !clientEmail.value) return

  isSubmitted.value = true
}

const resetEstimator = () => {
  currentStep.value = 1
  isSubmitted.value = false

  selectedType.value = 'landing'
  selectedTimeline.value = 'standard'
  selectedAddons.value = ['seo']

  clientName.value = ''
  clientEmail.value = ''
  clientOrg.value = ''
  clientNotes.value = ''
}

const closeModal = () => {
  resetEstimator()
  emit('close')
}

/* -------------------------------------------------------
   ESC KEY + BODY LOCK
------------------------------------------------------- */

const handleEscape = (event) => {
  if (event.key === 'Escape' && props.isOpen) {
    closeModal()
  }
}

watch(
  () => props.isOpen,
  (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
  },
  { immediate: true },
)

watch(
  () => currentStep.value,
  () => {
    requestAnimationFrame(() => {
      const element = document.querySelector('[data-estimator-scroll]')

      if (element) {
        element.scrollTop = 0
      }
    })
  },
)

window.addEventListener('keydown', handleEscape)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleEscape)
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-xl sm:p-5"
    >
      <!-- BACKDROP -->
      <button
        type="button"
        aria-label="Close estimator"
        class="absolute inset-0 cursor-default"
        @click="closeModal"
      ></button>

      <!-- MODAL -->
      <div
        class="relative z-10 flex h-[min(760px,calc(100vh-24px))] w-full max-w-5xl flex-col overflow-hidden rounded-[24px] border border-white/[0.09] bg-[#07070A] text-white shadow-[0_30px_120px_rgba(0,0,0,0.7)] sm:h-[min(720px,calc(100vh-40px))]"
      >
        <!-- GOLD GLOW -->
        <div
          class="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D4AF37]/[0.07] blur-[100px]"
        ></div>

        <div
          class="pointer-events-none absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#D4AF37]/[0.025] blur-[100px]"
        ></div>

        <!-- =================================================
             HEADER
        ================================================== -->

        <header
          class="relative flex shrink-0 items-center justify-between border-b border-white/[0.07] bg-[#0A0A0E] px-4 py-3.5 sm:px-6 sm:py-4"
        >
          <div class="flex min-w-0 items-center gap-3">
            <div
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#111117]"
            >
              <Calculator :size="17" class="text-[#D4AF37]" />
            </div>

            <div class="min-w-0">
              <div class="flex items-center gap-2">
                <h2
                  class="truncate text-sm font-bold uppercase tracking-wider text-white sm:text-base"
                >
                  Project Estimator
                </h2>

                <span
                  class="hidden rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.06] px-2 py-0.5 font-mono text-[7px] uppercase tracking-widest text-[#D4AF37] sm:block"
                >
                  Instant
                </span>
              </div>

              <p class="mt-0.5 hidden text-[10px] text-zinc-600 sm:block">
                Build your estimate in less than a minute.
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label="Close estimator"
            class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.02] text-zinc-500 transition-all duration-200 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.05] hover:text-white"
            @click="closeModal"
          >
            <X :size="16" />
          </button>
        </header>

        <!-- =================================================
             SUCCESS
        ================================================== -->

        <div
          v-if="isSubmitted"
          class="relative flex min-h-0 flex-1 items-center justify-center overflow-y-auto p-6"
        >
          <div class="w-full max-w-md text-center">
            <div
              class="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/[0.07] shadow-[0_0_60px_rgba(212,175,55,0.12)]"
            >
              <CheckCircle2 :size="38" class="text-[#D4AF37]" />
            </div>

            <p class="mt-6 font-mono text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]">
              Estimate Submitted
            </p>

            <h3 class="mt-3 text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl">
              You're all set<span class="text-[#D4AF37]">.</span>
            </h3>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              Thanks
              <span class="font-medium text-zinc-200"> {{ clientName || 'there' }} </span>. We'll
              review your requirements and contact you at
              <span class="text-zinc-300">
                {{ clientEmail }}
              </span>
              shortly.
            </p>

            <div
              class="mx-auto mt-7 flex max-w-sm items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 text-left"
            >
              <ShieldCheck :size="18" class="shrink-0 text-[#D4AF37]" />

              <p class="text-[11px] leading-relaxed text-zinc-500">
                Your project details remain private and are only used to prepare your estimate.
              </p>
            </div>

            <button
              type="button"
              class="mt-7 rounded-xl bg-[#D4AF37] px-7 py-3 text-[10px] font-black uppercase tracking-widest text-black transition-all hover:bg-[#E4C55A] hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)]"
              @click="closeModal"
            >
              Close Estimator
            </button>
          </div>
        </div>

        <!-- =================================================
             MAIN ESTIMATOR
        ================================================== -->

        <div v-else class="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,1fr)_280px]">
          <!-- =================================================
               LEFT CONTENT
          ================================================== -->

          <div
            data-estimator-scroll
            class="min-h-0 overflow-y-auto overscroll-contain scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10"
          >
            <div class="p-4 sm:p-6 lg:p-7">
              <!-- STEP HEADER -->

              <div class="mb-5 flex items-center justify-between border-b border-white/[0.06] pb-4">
                <div>
                  <span class="font-mono text-[8px] uppercase tracking-[0.25em] text-[#D4AF37]">
                    Configuration
                  </span>

                  <p class="mt-1 text-xs text-zinc-600">Step {{ currentStep }} of 3</p>
                </div>

                <div class="flex items-center gap-1.5">
                  <span
                    v-for="step in 3"
                    :key="step"
                    class="h-1.5 rounded-full transition-all duration-300"
                    :class="step <= currentStep ? 'w-8 bg-[#D4AF37]' : 'w-4 bg-white/10'"
                  ></span>
                </div>
              </div>

              <!-- =================================================
                   STEP 1
              ================================================== -->

              <Transition
                mode="out-in"
                enter-active-class="transition-all duration-250"
                enter-from-class="opacity-0 translate-x-3"
                enter-to-class="opacity-100 translate-x-0"
                leave-active-class="transition-all duration-200"
                leave-from-class="opacity-100 translate-x-0"
                leave-to-class="opacity-0 -translate-x-3"
              >
                <div v-if="currentStep === 1" key="step-one" class="space-y-4">
                  <div>
                    <h3 class="text-lg font-black uppercase tracking-[-0.03em]">
                      What are you building<span class="text-[#D4AF37]">?</span>
                    </h3>

                    <p class="mt-1 text-xs text-zinc-600">Choose the closest starting point.</p>
                  </div>

                  <div class="grid gap-2.5 sm:grid-cols-2">
                    <button
                      v-for="project in projectTypes"
                      :key="project.id"
                      type="button"
                      class="group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-200"
                      :class="
                        selectedType === project.id
                          ? 'border-[#D4AF37]/50 bg-[#D4AF37]/[0.05] shadow-[0_0_25px_rgba(212,175,55,0.05)]'
                          : 'border-white/[0.07] bg-[#0A0A0E] hover:border-white/15 hover:bg-[#0D0D12]'
                      "
                      @click="selectedType = project.id"
                    >
                      <div class="flex items-start justify-between gap-3">
                        <div
                          class="flex h-9 w-9 items-center justify-center rounded-xl border transition"
                          :class="
                            selectedType === project.id
                              ? 'border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]'
                              : 'border-white/[0.07] bg-white/[0.02] text-zinc-600 group-hover:text-zinc-300'
                          "
                        >
                          <component :is="project.icon" :size="16" />
                        </div>

                        <span class="font-mono text-[10px] font-bold text-[#D4AF37]">
                          {{ formatCurrency(project.baseUsd, project.baseInr) }}
                        </span>
                      </div>

                      <div class="mt-4">
                        <p
                          class="text-sm font-bold"
                          :class="selectedType === project.id ? 'text-[#FCF6BA]' : 'text-zinc-300'"
                        >
                          {{ project.label }}
                        </p>

                        <p class="mt-1 text-[11px] leading-relaxed text-zinc-600">
                          {{ project.desc }}
                        </p>
                      </div>

                      <span
                        v-if="selectedType === project.id"
                        class="absolute right-3 bottom-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#D4AF37] text-black"
                      >
                        <Check :size="12" />
                      </span>
                    </button>
                  </div>
                </div>

                <!-- =================================================
                     STEP 2
                ================================================== -->

                <div v-else-if="currentStep === 2" key="step-two" class="space-y-6">
                  <div>
                    <h3 class="text-lg font-black uppercase tracking-[-0.03em]">
                      Shape the scope<span class="text-[#D4AF37]">.</span>
                    </h3>

                    <p class="mt-1 text-xs text-zinc-600">
                      Select delivery speed and optional features.
                    </p>
                  </div>

                  <!-- Delivery -->

                  <div>
                    <div class="mb-3 flex items-center justify-between">
                      <span class="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                        Delivery
                      </span>

                      <Zap :size="13" class="text-[#D4AF37]" />
                    </div>

                    <div class="grid gap-2 sm:grid-cols-3">
                      <button
                        v-for="timeline in timelines"
                        :key="timeline.id"
                        type="button"
                        class="rounded-xl border p-3 text-left transition-all"
                        :class="
                          selectedTimeline === timeline.id
                            ? 'border-[#D4AF37]/50 bg-[#D4AF37]/[0.05]'
                            : 'border-white/[0.07] bg-[#0A0A0E] hover:border-white/15'
                        "
                        @click="selectedTimeline = timeline.id"
                      >
                        <div class="flex items-center justify-between">
                          <span
                            class="text-xs font-bold"
                            :class="
                              selectedTimeline === timeline.id ? 'text-[#FCF6BA]' : 'text-zinc-400'
                            "
                          >
                            {{ timeline.label }}
                          </span>

                          <Check
                            v-if="selectedTimeline === timeline.id"
                            :size="13"
                            class="text-[#D4AF37]"
                          />
                        </div>

                        <p class="mt-1 text-[10px] text-zinc-600">
                          {{ timeline.description }}
                        </p>

                        <p
                          v-if="timeline.mult > 1"
                          class="mt-2 font-mono text-[8px] uppercase text-[#D4AF37]"
                        >
                          +{{ ((timeline.mult - 1) * 100).toFixed(0) }}% priority
                        </p>
                      </button>
                    </div>
                  </div>

                  <!-- Addons -->

                  <div>
                    <div class="mb-3 flex items-center justify-between">
                      <span class="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                        Optional Add-ons
                      </span>

                      <span class="font-mono text-[8px] text-zinc-700">
                        {{ selectedAddons.length }} selected
                      </span>
                    </div>

                    <div class="space-y-2">
                      <button
                        v-for="addon in addons"
                        :key="addon.id"
                        type="button"
                        class="flex w-full items-center justify-between rounded-xl border p-3 text-left transition-all"
                        :class="
                          selectedAddons.includes(addon.id)
                            ? 'border-[#D4AF37]/40 bg-[#D4AF37]/[0.045]'
                            : 'border-white/[0.07] bg-[#0A0A0E] hover:border-white/15'
                        "
                        @click="toggleAddon(addon.id)"
                      >
                        <div class="flex items-center gap-3">
                          <span
                            class="flex h-6 w-6 items-center justify-center rounded-lg border"
                            :class="
                              selectedAddons.includes(addon.id)
                                ? 'border-[#D4AF37] bg-[#D4AF37] text-black'
                                : 'border-white/10 text-transparent'
                            "
                          >
                            <Check :size="12" />
                          </span>

                          <span
                            class="text-xs"
                            :class="
                              selectedAddons.includes(addon.id) ? 'text-zinc-200' : 'text-zinc-500'
                            "
                          >
                            {{ addon.label }}
                          </span>
                        </div>

                        <span class="font-mono text-[9px] text-[#D4AF37]">
                          +{{ formatCurrency(addon.usd, addon.inr) }}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- =================================================
                     STEP 3
                ================================================== -->

                <div v-else key="step-three" class="space-y-5">
                  <div>
                    <h3 class="text-lg font-black uppercase tracking-[-0.03em]">
                      Almost there<span class="text-[#D4AF37]">.</span>
                    </h3>

                    <p class="mt-1 text-xs text-zinc-600">
                      Leave your details so we can discuss the estimate.
                    </p>
                  </div>

                  <div class="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        class="mb-2 block font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
                      >
                        Full Name *
                      </label>

                      <input
                        v-model="clientName"
                        required
                        type="text"
                        placeholder="Your name"
                        class="w-full rounded-xl border border-white/[0.08] bg-[#0A0A0E] px-4 py-3 text-xs text-white outline-none transition focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/10"
                      />
                    </div>

                    <div>
                      <label
                        class="mb-2 block font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
                      >
                        Work Email *
                      </label>

                      <input
                        v-model="clientEmail"
                        required
                        type="email"
                        placeholder="you@company.com"
                        class="w-full rounded-xl border border-white/[0.08] bg-[#0A0A0E] px-4 py-3 text-xs text-white outline-none transition focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      class="mb-2 block font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
                    >
                      Company / Organization
                    </label>

                    <input
                      v-model="clientOrg"
                      type="text"
                      placeholder="Company name"
                      class="w-full rounded-xl border border-white/[0.08] bg-[#0A0A0E] px-4 py-3 text-xs text-white outline-none transition focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/10"
                    />
                  </div>

                  <div>
                    <label
                      class="mb-2 block font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
                    >
                      Project Notes
                    </label>

                    <textarea
                      v-model="clientNotes"
                      rows="4"
                      placeholder="Tell us briefly about your project..."
                      class="w-full resize-none rounded-xl border border-white/[0.08] bg-[#0A0A0E] px-4 py-3 text-xs leading-relaxed text-white outline-none transition focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/10"
                    ></textarea>
                  </div>
                </div>
              </Transition>

              <!-- =================================================
                   NAVIGATION
              ================================================== -->

              <div class="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
                <button
                  v-if="currentStep > 1"
                  type="button"
                  class="group flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-zinc-600 transition hover:text-white"
                  @click="previousStep"
                >
                  <ArrowLeft :size="13" class="transition group-hover:-translate-x-1" />

                  Back
                </button>

                <div v-else></div>

                <button
                  v-if="currentStep < 3"
                  type="button"
                  class="group flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 text-[9px] font-black uppercase tracking-widest text-black transition-all hover:bg-[#E4C55A] hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]"
                  @click="nextStep"
                >
                  Continue

                  <ArrowRight :size="13" class="transition group-hover:translate-x-1" />
                </button>

                <button
                  v-else
                  type="button"
                  :disabled="!clientName || !clientEmail"
                  class="group flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 text-[9px] font-black uppercase tracking-widest text-black transition-all hover:bg-[#E4C55A] disabled:cursor-not-allowed disabled:opacity-40"
                  @click="handleSubmit"
                >
                  Generate Estimate

                  <Check :size="13" class="transition group-hover:scale-110" />
                </button>
              </div>
            </div>
          </div>

          <!-- =================================================
               RIGHT SUMMARY
          ================================================== -->

          <aside
            class="relative hidden min-h-0 border-l border-white/[0.07] bg-[#050507] lg:flex lg:flex-col"
          >
            <div class="flex flex-1 flex-col justify-between p-6">
              <div>
                <div class="flex items-center justify-between">
                  <span class="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                    Estimate
                  </span>

                  <Sparkles :size="14" class="text-[#D4AF37]" />
                </div>

                <!-- Total -->

                <div class="mt-8">
                  <p class="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                    Estimated Investment
                  </p>

                  <p class="mt-3 text-4xl font-black tracking-[-0.06em] text-[#D4AF37]">
                    {{ formatCurrency(calculatedUsd, calculatedInr) }}
                  </p>

                  <p class="mt-2 text-[9px] leading-relaxed text-zinc-700">
                    Final pricing depends on project scope and requirements.
                  </p>
                </div>

                <!-- Summary -->

                <div class="mt-8 space-y-3 border-t border-white/[0.06] pt-5">
                  <div class="flex items-center justify-between text-[10px]">
                    <span class="text-zinc-600">Service</span>

                    <span class="max-w-[140px] truncate text-right text-zinc-300">
                      {{ selectedProject.short }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between text-[10px]">
                    <span class="text-zinc-600">Delivery</span>

                    <span class="text-zinc-300">
                      {{ selectedDelivery.label }}
                    </span>
                  </div>

                  <div class="flex items-center justify-between text-[10px]">
                    <span class="text-zinc-600">Add-ons</span>

                    <span class="text-zinc-300">
                      {{ selectedAddons.length }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Bottom -->

              <div>
                <div class="rounded-2xl border border-[#D4AF37]/10 bg-[#D4AF37]/[0.025] p-4">
                  <div class="flex gap-3">
                    <ShieldCheck :size="18" class="shrink-0 text-[#D4AF37]" />

                    <div>
                      <p class="font-mono text-[8px] uppercase tracking-[0.18em] text-[#D4AF37]">
                        Included
                      </p>

                      <p class="mt-2 text-[10px] leading-relaxed text-zinc-600">
                        Source code ownership, responsive implementation and founder-level support.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="mt-5 flex items-center justify-between">
                  <span class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-700">
                    VALENCE DIGITAL
                  </span>

                  <span class="font-mono text-[7px] text-zinc-700">
                    {{ String(currentStep).padStart(2, '0') }} / 03
                  </span>
                </div>
              </div>
            </div>
          </aside>
        </div>

        <!-- MOBILE PRICE BAR -->

        <div
          v-if="!isSubmitted"
          class="flex shrink-0 items-center justify-between border-t border-white/[0.07] bg-[#050507] px-4 py-3 lg:hidden"
        >
          <div>
            <p class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-700">
              Current Estimate
            </p>

            <p class="mt-0.5 text-lg font-black tracking-tight text-[#D4AF37]">
              {{ formatCurrency(calculatedUsd, calculatedInr) }}
            </p>
          </div>

          <div class="flex items-center gap-2">
            <span class="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>

            <span class="font-mono text-[7px] uppercase tracking-widest text-zinc-600">
              Live Estimate
            </span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
