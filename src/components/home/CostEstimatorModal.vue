<script setup>
import { ref, computed, watch } from 'vue'
import { X, Check, Sparkles, Calculator, ArrowRight, ShieldCheck, Send } from 'lucide-vue-next'
import { currentCurrency, formatCurrency } from '@/stores/currencyStore.js'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const currentStep = ref(1)
const isSubmitted = ref(false)

const selectedType = ref('landing')
const selectedTimeline = ref('standard')
const selectedAddons = ref(['seo'])

const clientName = ref('')
const clientEmail = ref('')
const clientOrg = ref('')
const clientNotes = ref('')

const projectTypes = [
  { id: 'landing', label: 'Single Landing Page / Portfolio', baseUsd: 79, baseInr: 5999, desc: 'Fast, responsive landing page with contact form.' },
  { id: 'web_app', label: 'Full-Stack Web App / E-commerce', baseUsd: 149, baseInr: 11999, desc: 'Next.js & Django API web application.' },
  { id: 'mobile_app', label: 'Mobile App (iOS/Android)', baseUsd: 199, baseInr: 14999, desc: 'React Native cross-platform app.' },
  { id: 'devops', label: 'Cloud VPS & Server Migration', baseUsd: 89, baseInr: 6999, desc: 'Nginx, VPS, MySQL setup & zero-downtime transfer.' }
]

const timelines = [
  { id: 'standard', label: 'Standard Delivery (2-3 Weeks)', mult: 1 },
  { id: 'fast', label: 'Accelerated Sprint (7 Days)', mult: 1.2 },
  { id: 'urgent', label: 'Urgent Express (48 Hours)', mult: 1.35 }
]

const addons = [
  { id: 'seo', label: 'Technical SEO & Speed Optimization', usd: 49, inr: 3499 },
  { id: 'pwa', label: 'PWA Offline Support & Push Notifications', usd: 69, inr: 4999 },
  { id: 'admin', label: 'Custom Dynamic Admin CMS Panel', usd: 79, inr: 5999 }
]

const toggleAddon = (id) => {
  if (selectedAddons.value.includes(id)) {
    selectedAddons.value = selectedAddons.value.filter(a => a !== id)
  } else {
    selectedAddons.value.push(id)
  }
}

const calculatedUsd = computed(() => {
  const type = projectTypes.find(t => t.id === selectedType.value) || projectTypes[0]
  const timeline = timelines.find(t => t.id === selectedTimeline.value) || timelines[0]
  let total = type.baseUsd * timeline.mult
  selectedAddons.value.forEach(aId => {
    const a = addons.find(x => x.id === aId)
    if (a) total += a.usd
  })
  return Math.round(total)
})

const calculatedInr = computed(() => {
  const type = projectTypes.find(t => t.id === selectedType.value) || projectTypes[0]
  const timeline = timelines.find(t => t.id === selectedTimeline.value) || timelines[0]
  let total = type.baseInr * timeline.mult
  selectedAddons.value.forEach(aId => {
    const a = addons.find(x => x.id === aId)
    if (a) total += a.inr
  })
  return Math.round(total)
})

const handleSubmit = () => {
  if (!clientEmail.value) return
  isSubmitted.value = true
}

const resetAndClose = () => {
  isSubmitted.value = false
  currentStep.value = 1
  emit('close')
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div @click="resetAndClose" class="absolute inset-0 bg-black/90 backdrop-blur-2xl"></div>

      <div class="relative z-10 flex w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-[#D4AF37]/40 bg-[#08080C] text-white shadow-[0_0_90px_rgba(212,175,55,0.2)]">
        
        <!-- Header -->
        <div class="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8 bg-[#0B0B10]">
          <div class="flex items-center gap-3">
            <div class="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#14141E] text-[#D4AF37]">
              <Calculator :size="18" />
            </div>
            <div>
              <h3 class="text-base font-bold text-white uppercase tracking-wider">Project Cost Calculator</h3>
              <p class="text-[11px] text-zinc-400">Tailor your software solution budget (Starts from ₹5,999 / $79)</p>
            </div>
          </div>

          <button 
            @click="resetAndClose"
            class="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#121216] text-zinc-400 transition hover:border-[#D4AF37] hover:text-white"
          >
            <X :size="16" />
          </button>
        </div>

        <div v-if="isSubmitted" class="p-12 text-center">
          <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37] bg-[#1E190E] text-[#FCF6BA]">
            <Check :size="40" />
          </div>
          <h3 class="mt-6 text-2xl font-extrabold text-white uppercase tracking-wide">Estimate Saved</h3>
          <p class="mt-2 text-sm text-zinc-300 max-w-md mx-auto">
            Thank you, <span class="text-[#D4AF37] font-semibold">{{ clientName || 'Partner' }}</span>. Imran will reach out to <span class="text-white font-mono">{{ clientEmail }}</span> within 4 hours.
          </p>
          <div class="mt-8">
            <button @click="resetAndClose" class="rounded-xl bg-[#D4AF37] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-black">Close Window</button>
          </div>
        </div>

        <div v-else class="grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr]">
          <div class="p-6 sm:p-8 overflow-y-auto max-h-[75vh]">
            
            <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span class="text-xs uppercase tracking-widest font-semibold text-[#D4AF37]">
                Step {{ currentStep }} of 3
              </span>
              <div class="flex gap-2">
                <span v-for="s in 3" :key="s" class="h-1.5 w-8 rounded-full" :class="s <= currentStep ? 'bg-[#D4AF37]' : 'bg-white/10'"></span>
              </div>
            </div>

            <!-- STEP 1 -->
            <div v-if="currentStep === 1" class="space-y-4">
              <h4 class="text-sm font-bold uppercase tracking-wider text-white">Select Service Package</h4>
              <div class="grid gap-3">
                <div
                  v-for="t in projectTypes"
                  :key="t.id"
                  @click="selectedType = t.id"
                  class="flex cursor-pointer items-start justify-between rounded-2xl border p-4 transition-all"
                  :class="selectedType === t.id ? 'border-[#D4AF37] bg-[#14141E]' : 'border-white/10 bg-[#0C0C10]'"
                >
                  <div>
                    <h5 class="text-sm font-bold text-white" :class="{ 'text-[#FCF6BA]': selectedType === t.id }">{{ t.label }}</h5>
                    <p class="mt-1 text-xs text-zinc-400 font-light">{{ t.desc }}</p>
                  </div>
                  <span class="text-xs font-mono font-bold text-[#D4AF37]">{{ formatCurrency(t.baseUsd, t.baseInr) }}</span>
                </div>
              </div>
            </div>

            <!-- STEP 2 -->
            <div v-if="currentStep === 2" class="space-y-6">
              <div>
                <h4 class="text-sm font-bold uppercase tracking-wider text-white mb-3">Delivery Speed</h4>
                <div class="grid gap-2">
                  <div
                    v-for="tl in timelines"
                    :key="tl.id"
                    @click="selectedTimeline = tl.id"
                    class="flex cursor-pointer items-center justify-between rounded-xl border p-3.5 text-xs"
                    :class="selectedTimeline === tl.id ? 'border-[#D4AF37] bg-[#14141E] text-white font-bold' : 'border-white/10 bg-[#0C0C10] text-zinc-400'"
                  >
                    <span>{{ tl.label }}</span>
                    <span v-if="tl.mult > 1" class="text-[10px] text-[#D4AF37] font-mono">+{{ ((tl.mult - 1) * 100).toFixed(0) }}% Priority</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 class="text-sm font-bold uppercase tracking-wider text-white mb-3">Add-ons</h4>
                <div class="grid gap-2">
                  <div
                    v-for="a in addons"
                    :key="a.id"
                    @click="toggleAddon(a.id)"
                    class="flex cursor-pointer items-center justify-between rounded-xl border p-3 text-xs"
                    :class="selectedAddons.includes(a.id) ? 'border-[#D4AF37]/80 bg-[#16140E] text-[#FCF6BA]' : 'border-white/10 bg-[#0C0C10] text-zinc-400'"
                  >
                    <span>{{ a.label }}</span>
                    <span class="font-mono text-zinc-400">+{{ formatCurrency(a.usd, a.inr) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- STEP 3 -->
            <div v-if="currentStep === 3" class="space-y-4">
              <h4 class="text-sm font-bold uppercase tracking-wider text-white">Contact Details</h4>
              <div class="space-y-3 text-xs">
                <div>
                  <label class="block text-zinc-400 mb-1">Your Full Name *</label>
                  <input v-model="clientName" type="text" placeholder="John Doe" class="w-full rounded-xl border border-white/10 bg-[#0E0E14] px-4 py-3 text-white" />
                </div>
                <div>
                  <label class="block text-zinc-400 mb-1">Work Email *</label>
                  <input v-model="clientEmail" type="email" placeholder="john@company.com" class="w-full rounded-xl border border-white/10 bg-[#0E0E14] px-4 py-3 text-white" />
                </div>
                <div>
                  <label class="block text-zinc-400 mb-1">Notes</label>
                  <textarea v-model="clientNotes" rows="2" placeholder="Brief project summary..." class="w-full rounded-xl border border-white/10 bg-[#0E0E14] px-4 py-2.5 text-white"></textarea>
                </div>
              </div>
            </div>

            <!-- Controls -->
            <div class="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
              <button v-if="currentStep > 1" @click="currentStep--" class="text-xs uppercase text-zinc-400">Back</button>
              <div v-else></div>

              <button v-if="currentStep < 3" @click="currentStep++" class="rounded-xl bg-[#D4AF37] px-6 py-2.5 text-xs font-bold uppercase text-black">Next</button>
              <button v-else @click="handleSubmit" class="rounded-xl bg-[#D4AF37] px-7 py-3 text-xs font-bold uppercase text-black">Submit</button>
            </div>

          </div>

          <!-- Total Calculation -->
          <div class="border-t lg:border-t-0 lg:border-l border-white/10 bg-[#050508] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span class="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-semibold block">Total Estimated Investment</span>
              <div class="mt-4">
                <p class="text-4xl font-extrabold text-white font-mono mt-1 text-gold-gradient">
                  {{ formatCurrency(calculatedUsd, calculatedInr) }}
                </p>
                <span class="text-[10px] text-zinc-400 mt-2 block">Prices automatically toggle between USD ($) and INR (₹).</span>
              </div>
            </div>

            <div class="mt-8 rounded-2xl border border-white/5 bg-[#0C0C12] p-4 text-[11px] text-zinc-400 flex items-center gap-3">
              <ShieldCheck :size="24" class="text-[#D4AF37] shrink-0" />
              <span>Full source code IP & founder warranty included.</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  </Transition>
</template>
