<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X, ArrowUpRight, Sparkles, DollarSign, IndianRupee, Calculator } from 'lucide-vue-next'
import { currentCurrency, toggleCurrency } from '@/stores/currencyStore.js'

const emit = defineEmits(['open-estimator', 'open-contact'])

const route = useRoute()
const isScrolled = ref(false)
const isMenuOpen = ref(false)
const currentTime = ref('')
const activeLocation = ref('DEL') // New Delhi / India default

const locations = [
  { code: 'DEL', tz: 'Asia/Kolkata' },
  { code: 'NYC', tz: 'America/New_York' },
  { code: 'LON', tz: 'Europe/London' },
  { code: 'DXB', tz: 'Asia/Dubai' }
]

const updateTime = () => {
  const loc = locations.find(l => l.code === activeLocation.value) || locations[0]
  try {
    const now = new Date()
    currentTime.value = new Intl.DateTimeFormat('en-US', {
      timeZone: loc.tz,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(now)
  } catch (e) {
    currentTime.value = '12:00:00'
  }
}

let timer = null

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const cycleLocation = () => {
  const idx = locations.findIndex(l => l.code === activeLocation.value)
  activeLocation.value = locations[(idx + 1) % locations.length].code
  updateTime()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (timer) clearInterval(timer)
})
</script>

<template>
  <header class="fixed left-0 top-0 z-40 w-full px-4 py-4 md:px-8 transition-all duration-300">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-6 py-3.5 transition-all duration-500"
      :class="
        isScrolled
          ? 'border-[#D4AF37]/30 bg-[#08080A]/90 shadow-[0_10px_40px_rgba(0,0,0,0.85)] backdrop-blur-xl'
          : 'border-white/10 bg-[#0A0A0C]/60 backdrop-blur-md'
      "
    >
      <!-- Logo -->
      <RouterLink to="/" class="group flex items-center gap-3" @click="closeMenu">
        <div
          class="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#1E190E] to-[#0A0A0C] transition-all duration-500 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        >
          <span class="text-[#FCF6BA] font-extrabold text-lg tracking-tighter transition-transform duration-300 group-hover:scale-110">
            V
          </span>
          <div class="absolute inset-0 bg-gradient-to-tr from-transparent via-[#D4AF37]/20 to-transparent"></div>
        </div>

        <div class="flex flex-col">
          <span class="text-base font-extrabold tracking-[0.18em] text-white">
            VALENCE<span class="text-[#D4AF37]">.IN</span>
          </span>
          <span class="text-[9px] uppercase tracking-[0.25em] text-[#C8A45D]/90 font-medium">
            BY IMRAN AKHTAR
          </span>
        </div>
      </RouterLink>

      <!-- Global Currency Toggle Button -->
      <div class="hidden lg:flex items-center gap-3">
        <button
          @click="toggleCurrency"
          class="group flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#12121A] px-3.5 py-1.5 text-xs font-bold text-[#FCF6BA] shadow-md transition-all hover:border-[#D4AF37] hover:bg-[#1A1A26]"
          title="Click to toggle currency between USD ($) and INR (₹)"
        >
          <span class="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">CURRENCY:</span>
          <span class="flex items-center gap-1 text-[#D4AF37]">
            <IndianRupee v-if="currentCurrency === 'INR'" :size="12" />
            <DollarSign v-else :size="12" />
            <span>{{ currentCurrency }}</span>
          </span>
        </button>

        <!-- Global Live Clock Pill -->
        <div 
          @click="cycleLocation"
          class="cursor-pointer flex items-center gap-2.5 rounded-full border border-white/10 bg-[#121216]/80 px-4 py-1.5 text-xs text-zinc-300 transition-all hover:border-[#D4AF37]/40 hover:bg-[#1A1A22]"
          title="Click to cycle timezone"
        >
          <span class="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span class="text-[10px] font-mono tracking-widest text-[#D4AF37]">{{ activeLocation }}</span>
          <span class="font-mono text-zinc-400">{{ currentTime }}</span>
        </div>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center gap-6 text-xs uppercase tracking-[0.2em] font-semibold text-zinc-400">
        <RouterLink to="/" class="transition duration-300 hover:text-[#D4AF37]" :class="{ 'text-[#D4AF37] font-bold': route.path === '/' }">Home</RouterLink>
        <RouterLink to="/about" class="transition duration-300 hover:text-[#D4AF37]" :class="{ 'text-[#D4AF37] font-bold': route.path === '/about' }">About Us</RouterLink>
        <RouterLink to="/services" class="transition duration-300 hover:text-[#D4AF37]" :class="{ 'text-[#D4AF37] font-bold': route.path.startsWith('/services') }">Services</RouterLink>
        <RouterLink to="/projects" class="transition duration-300 hover:text-[#D4AF37]" :class="{ 'text-[#D4AF37] font-bold': route.path.startsWith('/projects') }">Projects</RouterLink>
        <RouterLink to="/estimator" class="transition duration-300 hover:text-[#D4AF37]" :class="{ 'text-[#D4AF37] font-bold': route.path === '/estimator' }">Estimator</RouterLink>
        <RouterLink to="/pricing" class="transition duration-300 hover:text-[#D4AF37]" :class="{ 'text-[#D4AF37] font-bold': route.path === '/pricing' }">Pricing</RouterLink>
      </div>

      <!-- Action Buttons -->
      <div class="hidden md:flex items-center gap-3">
        <RouterLink
          to="/contact"
          class="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-[#D4AF37]/60 bg-gradient-to-r from-[#1E190E] via-[#0F0F12] to-[#1E190E] px-4 py-2 text-xs uppercase tracking-[0.2em] font-semibold text-white transition-all duration-300 hover:border-[#D4AF37] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
        >
          <span class="relative z-10 flex items-center gap-1.5">
            <span>Contact</span>
            <ArrowUpRight :size="14" class="text-[#D4AF37]" />
          </span>
        </RouterLink>
      </div>

      <!-- Mobile Controls (Currency + Hamburger) -->
      <div class="flex items-center gap-2 md:hidden">
        <button
          @click="toggleCurrency"
          class="flex items-center gap-1 rounded-xl border border-[#D4AF37]/40 bg-[#12121A] px-3 py-2 text-xs font-bold text-[#FCF6BA]"
        >
          <span>{{ currentCurrency }}</span>
        </button>

        <button
          class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#121216] text-[#D4AF37]"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle Navigation Menu"
        >
          <X v-if="isMenuOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
    </nav>

    <!-- Mobile Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-4 scale-95"
    >
      <div
        v-if="isMenuOpen"
        class="mx-auto mt-3 max-w-7xl rounded-2xl border border-[#D4AF37]/40 bg-[#08080A]/95 p-6 backdrop-blur-2xl shadow-2xl md:hidden"
      >
        <div class="flex flex-col gap-3 text-sm uppercase tracking-[0.2em]">
          <RouterLink to="/" class="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-[#121216] hover:text-[#D4AF37]" @click="closeMenu">Home</RouterLink>
          <RouterLink to="/about" class="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-[#121216] hover:text-[#D4AF37]" @click="closeMenu">About Imran</RouterLink>
          <RouterLink to="/services" class="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-[#121216] hover:text-[#D4AF37]" @click="closeMenu">Services</RouterLink>
          <RouterLink to="/projects" class="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-[#121216] hover:text-[#D4AF37]" @click="closeMenu">Projects (11)</RouterLink>
          <RouterLink to="/estimator" class="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-[#121216] hover:text-[#D4AF37]" @click="closeMenu">Cost Estimator</RouterLink>
          <RouterLink to="/pricing" class="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-[#121216] hover:text-[#D4AF37]" @click="closeMenu">Pricing</RouterLink>
          <RouterLink to="/contact" class="rounded-xl px-4 py-3 text-zinc-300 transition hover:bg-[#121216] hover:text-[#D4AF37]" @click="closeMenu">Contact Us</RouterLink>
        </div>
      </div>
    </Transition>
  </header>
</template>