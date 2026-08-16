<script setup>
import { ref, computed } from 'vue'
import { Sparkles, Calculator, Check, ShieldCheck, DollarSign, IndianRupee, Send } from 'lucide-vue-next'
import { currentCurrency, toggleCurrency, formatCurrency } from '@/stores/currencyStore.js'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CursorGlow from '@/components/common/CursorGlow.vue'

const selectedCategory = ref('landing')
const selectedTimeline = ref('standard')
const selectedAddons = ref(['seo'])
const isSubmitted = ref(false)

const clientName = ref('')
const clientEmail = ref('')
const clientNotes = ref('')

const projectTypes = [
  { id: 'landing', label: 'Single Landing Page / Portfolio', baseUsd: 79, baseInr: 5999, desc: 'Fast, responsive landing page with contact form.' },
  { id: 'web_app', label: 'Full-Stack Web App / E-commerce', baseUsd: 149, baseInr: 11999, desc: 'Next.js & Django API web application.' },
  { id: 'mobile_app', label: 'Cross-Platform Mobile App', baseUsd: 199, baseInr: 14999, desc: 'React Native iOS & Android application.' },
  { id: 'devops', label: 'VPS Server Migration & DevOps', baseUsd: 89, baseInr: 6999, desc: 'GoDaddy, Nginx, SSL & zero downtime database transfer.' }
]

const timelines = [
  { id: 'standard', label: 'Standard Sprint (2-3 Weeks)', mult: 1 },
  { id: 'fast', label: 'Accelerated Launch (7 Days)', mult: 1.2 },
  { id: 'urgent', label: 'Urgent Express (48 Hours)', mult: 1.35 }
]

const addons = [
  { id: 'seo', label: 'Technical SEO & PageSpeed 90+ Fixes', usd: 49, inr: 3499 },
  { id: 'pwa', label: 'PWA Offline Capabilities & Push Notifications', usd: 69, inr: 4999 },
  { id: 'cms', label: 'Custom Dynamic Admin Panel / CMS', usd: 79, inr: 5999 }
]

const toggleAddon = (id) => {
  if (selectedAddons.value.includes(id)) {
    selectedAddons.value = selectedAddons.value.filter(a => a !== id)
  } else {
    selectedAddons.value.push(id)
  }
}

const calculatedUsd = computed(() => {
  const type = projectTypes.find(t => t.id === selectedCategory.value) || projectTypes[0]
  const timeline = timelines.find(t => t.id === selectedTimeline.value) || timelines[0]
  let total = type.baseUsd * timeline.mult
  selectedAddons.value.forEach(aId => {
    const a = addons.find(x => x.id === aId)
    if (a) total += a.usd
  })
  return Math.round(total)
})

const calculatedInr = computed(() => {
  const type = projectTypes.find(t => t.id === selectedCategory.value) || projectTypes[0]
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
</script>

<template>
  <div class="relative min-h-screen bg-[#030303] text-white">
    <CursorGlow />
    <Header />

    <main class="pt-32 pb-24">
      <div class="mx-auto w-[90%] max-w-6xl">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            <Calculator :size="15" />
            <span>AFFORDABLE CALCULATOR // STARTS FROM ₹5,999 ($79)</span>
          </div>

          <h1 class="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl uppercase text-silver-gradient">
            PROJECT ESTIMATOR<span class="text-[#D4AF37]">.</span>
          </h1>

          <p class="mt-4 text-base text-zinc-400 font-light">
            Tailor your exact project requirements and calculate real-time pricing in USD ($) or INR (₹).
          </p>

          <!-- Currency Switcher Bar -->
          <div class="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#0A0A0F] p-2">
            <button
              @click="toggleCurrency"
              class="flex items-center gap-2 rounded-full px-6 py-2.5 text-xs uppercase tracking-widest font-bold transition-all"
              :class="currentCurrency === 'INR' ? 'bg-[#D4AF37] text-black shadow-md' : 'text-zinc-400 hover:text-white'"
            >
              <IndianRupee :size="14" />
              <span>INR (₹)</span>
            </button>

            <button
              @click="toggleCurrency"
              class="flex items-center gap-2 rounded-full px-6 py-2.5 text-xs uppercase tracking-widest font-bold transition-all"
              :class="currentCurrency === 'USD' ? 'bg-[#D4AF37] text-black shadow-md' : 'text-zinc-400 hover:text-white'"
            >
              <DollarSign :size="14" />
              <span>USD ($)</span>
            </button>
          </div>
        </div>

        <!-- Submitted View -->
        <div v-if="isSubmitted" class="mt-16 rounded-3xl border border-[#D4AF37]/50 bg-[#08080C] p-12 text-center max-w-2xl mx-auto shadow-2xl">
          <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-[#1E190E] text-[#FCF6BA]">
            <Check :size="40" />
          </div>
          <h3 class="mt-6 text-2xl font-extrabold text-white uppercase tracking-wide">Estimate Submitted to Imran</h3>
          <p class="mt-3 text-sm text-zinc-300">
            Thank you, <span class="text-[#D4AF37] font-semibold">{{ clientName || 'Partner' }}</span>! Your estimated scope of <span class="font-mono text-[#FCF6BA] font-bold">{{ formatCurrency(calculatedUsd, calculatedInr) }}</span> has been logged. Imran will reach out to <span class="font-mono text-white">{{ clientEmail }}</span> within 4 hours.
          </p>
          <button @click="isSubmitted = false" class="mt-8 rounded-xl bg-[#D4AF37] px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-black">
            Calculate Another Scope
          </button>
        </div>

        <!-- Calculator Form Grid -->
        <div v-else class="mt-16 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          
          <div class="space-y-8">
            <!-- 1. Category -->
            <div class="rounded-3xl border border-white/10 bg-[#08080C] p-8">
              <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-4">1. Select Project Type</h3>
              <div class="grid gap-3 sm:grid-cols-2">
                <div
                  v-for="t in projectTypes"
                  :key="t.id"
                  @click="selectedCategory = t.id"
                  class="cursor-pointer rounded-2xl border p-4 transition-all"
                  :class="selectedCategory === t.id ? 'border-[#D4AF37] bg-[#14141E]' : 'border-white/10 bg-[#0C0C10] hover:border-white/20'"
                >
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-white" :class="{ 'text-[#FCF6BA]': selectedCategory === t.id }">{{ t.label }}</span>
                    <span class="text-xs font-mono font-bold text-[#D4AF37]">{{ formatCurrency(t.baseUsd, t.baseInr) }}</span>
                  </div>
                  <p class="mt-2 text-[11px] text-zinc-400 font-light">{{ t.desc }}</p>
                </div>
              </div>
            </div>

            <!-- 2. Speed & Addons -->
            <div class="rounded-3xl border border-white/10 bg-[#08080C] p-8 space-y-6">
              <div>
                <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-3">2. Target Timeline</h3>
                <div class="grid gap-2 sm:grid-cols-3">
                  <div
                    v-for="tl in timelines"
                    :key="tl.id"
                    @click="selectedTimeline = tl.id"
                    class="cursor-pointer rounded-xl border p-3 text-center text-xs font-bold transition"
                    :class="selectedTimeline === tl.id ? 'border-[#D4AF37] bg-[#14141E] text-[#FCF6BA]' : 'border-white/10 bg-[#0C0C10] text-zinc-400'"
                  >
                    {{ tl.label }}
                  </div>
                </div>
              </div>

              <div>
                <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-3">3. Add-on Services</h3>
                <div class="space-y-2">
                  <div
                    v-for="a in addons"
                    :key="a.id"
                    @click="toggleAddon(a.id)"
                    class="cursor-pointer flex items-center justify-between rounded-xl border p-3 text-xs transition"
                    :class="selectedAddons.includes(a.id) ? 'border-[#D4AF37] bg-[#16140E] text-[#FCF6BA]' : 'border-white/10 bg-[#0C0C10] text-zinc-400'"
                  >
                    <span>{{ a.label }}</span>
                    <span class="font-mono text-zinc-400">+{{ formatCurrency(a.usd, a.inr) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 3. Inquiry Details -->
            <div class="rounded-3xl border border-white/10 bg-[#08080C] p-8 space-y-4">
              <h3 class="text-sm font-bold text-white uppercase tracking-wider">4. Contact Information</h3>
              <div class="grid gap-3 sm:grid-cols-2 text-xs">
                <div>
                  <label class="block text-zinc-400 mb-1">Your Name *</label>
                  <input v-model="clientName" type="text" placeholder="John Doe" class="w-full rounded-xl border border-white/10 bg-[#0E0E14] px-4 py-3 text-white focus:border-[#D4AF37]" />
                </div>
                <div>
                  <label class="block text-zinc-400 mb-1">Work Email *</label>
                  <input v-model="clientEmail" type="email" placeholder="john@company.com" class="w-full rounded-xl border border-white/10 bg-[#0E0E14] px-4 py-3 text-white focus:border-[#D4AF37]" />
                </div>
              </div>
              <div class="text-xs">
                <label class="block text-zinc-400 mb-1">Project Notes (Optional)</label>
                <textarea v-model="clientNotes" rows="2" placeholder="Briefly describe your goals..." class="w-full rounded-xl border border-white/10 bg-[#0E0E14] px-4 py-2.5 text-white focus:border-[#D4AF37]"></textarea>
              </div>
            </div>

          </div>

          <!-- Total Calculation Card -->
          <div>
            <div class="sticky top-28 rounded-3xl border border-[#D4AF37]/50 bg-[#08080C] p-8 shadow-2xl space-y-6">
              <div>
                <span class="text-[10px] uppercase tracking-[0.25em] font-bold text-[#D4AF37]">Total Estimated Cost</span>
                <div class="mt-3">
                  <p class="text-4xl sm:text-5xl font-extrabold text-gold-gradient font-mono">
                    {{ formatCurrency(calculatedUsd, calculatedInr) }}
                  </p>
                  <span class="text-xs text-zinc-400 block mt-2">Transparent starting price: ₹5,999 ($79 USD).</span>
                </div>
              </div>

              <div class="border-y border-white/5 py-4 space-y-2 text-xs text-zinc-300">
                <div class="flex items-center gap-2">
                  <Check :size="14" class="text-[#D4AF37]" />
                  <span>Direct contact with Founder Imran Akhtar</span>
                </div>
                <div class="flex items-center gap-2">
                  <Check :size="14" class="text-[#D4AF37]" />
                  <span>100% IP Repository Transfer</span>
                </div>
                <div class="flex items-center gap-2">
                  <Check :size="14" class="text-[#D4AF37]" />
                  <span>Sub-second Next.js / Django speed</span>
                </div>
              </div>

              <button
                @click="handleSubmit"
                class="w-full rounded-xl bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] py-4 text-xs font-extrabold uppercase tracking-widest text-black shadow-lg shadow-[#D4AF37]/30 hover:scale-105 transition"
              >
                Send Estimate To Imran
              </button>
            </div>
          </div>

        </div>

      </div>
    </main>

    <Footer />
  </div>
</template>
