<script setup>
import { RouterLink } from 'vue-router'
import { Sparkles, ArrowRight, Code, Smartphone, Megaphone, TrendingUp, Server, Palette } from 'lucide-vue-next'
import { services } from '@/data/services.js'
import { formatCurrency } from '@/stores/currencyStore.js'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CursorGlow from '@/components/common/CursorGlow.vue'

const iconMap = {
  Code, Smartphone, Megaphone, TrendingUp, Server, Palette
}
</script>

<template>
  <div class="relative min-h-screen bg-[#030303] text-white">
    <CursorGlow />
    <Header />

    <main class="pt-32 pb-24">
      <div class="mx-auto w-[90%] max-w-7xl">
        
        <!-- Header -->
        <div class="max-w-3xl">
          <div class="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            <Sparkles :size="14" />
            <span>Full-Spectrum Capabilities</span>
          </div>
          <h1 class="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl uppercase text-silver-gradient">
            IT SOLUTIONS & SERVICES<span class="text-[#D4AF37]">.</span>
          </h1>
          <p class="mt-4 text-base text-zinc-400 font-light leading-relaxed">
            From high-concurrency full-stack web applications to mobile apps, performance digital marketing, technical SEO, and cloud server migrations.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="s in services"
            :key="s.id"
            class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#08080C] p-8 transition-all duration-500 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
          >
            <div>
              <div class="flex items-center justify-between">
                <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#12121A] text-[#D4AF37] transition-transform group-hover:scale-110">
                  <component :is="iconMap[s.iconName] || Code" :size="24" />
                </div>
                <span class="text-xs font-mono font-bold text-[#D4AF37]">
                  FROM {{ formatCurrency(s.startingUsd, s.startingInr) }}
                </span>
              </div>

              <h3 class="mt-6 text-xl font-bold text-white group-hover:text-[#FCF6BA] transition-colors">
                {{ s.title }}
              </h3>

              <p class="mt-3 text-xs text-zinc-400 font-light leading-relaxed">
                {{ s.shortDesc }}
              </p>

              <div class="mt-6 flex flex-wrap gap-1.5">
                <span v-for="t in s.techStack.slice(0, 4)" :key="t" class="rounded-md border border-white/5 bg-[#121218] px-2.5 py-1 text-[10px] text-zinc-400 font-mono">
                  {{ t }}
                </span>
              </div>
            </div>

            <div class="mt-8 border-t border-white/5 pt-4">
              <RouterLink
                :to="`/services/${s.id}`"
                class="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-[#FCF6BA] transition"
              >
                <span>View Full Scope</span>
                <ArrowRight :size="15" />
              </RouterLink>
            </div>
          </div>
        </div>

      </div>
    </main>

    <Footer />
  </div>
</template>
