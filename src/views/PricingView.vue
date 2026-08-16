<script setup>
import { RouterLink } from 'vue-router'
import { Sparkles, Check, ArrowUpRight, DollarSign, IndianRupee } from 'lucide-vue-next'
import { currentCurrency, toggleCurrency, formatCurrency } from '@/stores/currencyStore.js'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CursorGlow from '@/components/common/CursorGlow.vue'

const packages = [
  {
    name: 'Starter Landing Page',
    tagline: 'High-converting single page website for startups & personal brands.',
    usd: 69,
    inr: 4999,
    features: [
      'Responsive Mobile-First UI',
      'Contact & Lead Capture Form',
      'Speed Optimization (PageSpeed 90+)',
      'Free SSL & Domain Connection',
      'Full Source Code Handover'
    ]
  },
  {
    name: 'Full-Stack Web App',
    tagline: 'Custom Next.js, React & Django platform with database & Redis caching.',
    usd: 199,
    inr: 14999,
    featured: true,
    badge: 'MOST POPULAR',
    features: [
      'Next.js & Django REST Architecture',
      'Decoupled API & Database Schema',
      'Redis Caching for Sub-Second Loads',
      'Dynamic Admin CMS Panel',
      '100% IP Source Code Ownership'
    ]
  },
  {
    name: 'Full App & Portal Suite',
    tagline: 'Complex e-commerce platform, real estate portal, or mobile app.',
    usd: 399,
    inr: 29999,
    features: [
      'React Native Mobile or Real Estate Portal',
      'Advanced Custom Feature Engineering',
      'Linux Ubuntu VPS & Nginx Setup',
      'Payment Gateway Integration',
      '6 Months Free Maintenance'
    ]
  }
]
</script>

<template>
  <div class="relative min-h-screen bg-[#030303] text-white">
    <CursorGlow />
    <Header />

    <main class="pt-32 pb-24">
      <div class="mx-auto w-[90%] max-w-7xl">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto">
          <div class="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            <Sparkles :size="14" />
            <span>Fair Startup Pricing</span>
          </div>

          <h1 class="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl uppercase text-silver-gradient">
            FREELANCER PACKAGES<span class="text-[#D4AF37]">.</span>
          </h1>

          <p class="mt-4 text-base text-zinc-400 font-light leading-relaxed">
            No agency overheads or hidden markups. Agency-grade quality directly from founder & full-stack architect Imran Akhtar.
          </p>

          <!-- Currency Toggle Bar -->
          <div class="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[#0A0A0F] p-2 backdrop-blur-md">
            <button
              @click="toggleCurrency"
              class="flex items-center gap-2 rounded-full px-6 py-2.5 text-xs uppercase tracking-widest font-bold transition-all"
              :class="currentCurrency === 'INR' ? 'bg-[#D4AF37] text-black shadow-md' : 'text-zinc-400 hover:text-white'"
            >
              <IndianRupee :size="14" />
              <span>INR (₹) Rates</span>
            </button>

            <button
              @click="toggleCurrency"
              class="flex items-center gap-2 rounded-full px-6 py-2.5 text-xs uppercase tracking-widest font-bold transition-all"
              :class="currentCurrency === 'USD' ? 'bg-[#D4AF37] text-black shadow-md' : 'text-zinc-400 hover:text-white'"
            >
              <DollarSign :size="14" />
              <span>USD ($) Rates</span>
            </button>
          </div>
        </div>

        <!-- Packages Grid -->
        <div class="mt-16 grid gap-8 lg:grid-cols-3 items-stretch">
          <div
            v-for="(pkg, idx) in packages"
            :key="idx"
            class="relative flex flex-col justify-between overflow-hidden rounded-3xl border p-8 transition-all duration-500"
            :class="
              pkg.featured
                ? 'border-[#D4AF37] bg-gradient-to-b from-[#12110D] via-[#09090D] to-[#0A0A0F] shadow-[0_0_60px_rgba(212,175,55,0.2)] lg:-translate-y-3'
                : 'border-white/10 bg-[#08080C] hover:border-white/20'
            "
          >
            <div v-if="pkg.featured" class="absolute top-0 right-0 rounded-bl-2xl bg-[#D4AF37] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-black">
              {{ pkg.badge }}
            </div>

            <div>
              <h3 class="text-xl font-bold text-white uppercase tracking-wider">{{ pkg.name }}</h3>
              <p class="mt-2 text-xs text-zinc-400 font-light leading-relaxed min-h-[40px]">{{ pkg.tagline }}</p>

              <div class="mt-6 border-y border-white/5 py-4">
                <span class="text-3xl font-extrabold text-white font-mono" :class="{ 'text-gold-gradient': pkg.featured }">
                  {{ formatCurrency(pkg.usd, pkg.inr) }}
                </span>
                <span class="text-xs text-zinc-500 block mt-1">One-time payment. Complete code handover.</span>
              </div>

              <ul class="mt-6 space-y-3">
                <li v-for="(f, fIdx) in pkg.features" :key="fIdx" class="flex items-start gap-3 text-xs text-zinc-300">
                  <Check :size="15" class="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{{ f }}</span>
                </li>
              </ul>
            </div>

            <div class="mt-8 pt-4">
              <RouterLink
                to="/contact"
                class="block w-full rounded-xl py-3.5 text-center text-xs uppercase tracking-widest font-extrabold transition duration-300"
                :class="
                  pkg.featured
                    ? 'bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] text-black shadow-lg shadow-[#D4AF37]/30 hover:scale-105'
                    : 'border border-[#D4AF37]/40 bg-[#12121A] text-[#FCF6BA] hover:border-[#D4AF37] hover:bg-[#1A1A24]'
                "
              >
                Book Package
              </RouterLink>
            </div>
          </div>
        </div>

      </div>
    </main>

    <Footer />
  </div>
</template>
