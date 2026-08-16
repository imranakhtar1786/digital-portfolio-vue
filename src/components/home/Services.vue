<script setup>
import { RouterLink } from 'vue-router'
import { Sparkles, ArrowRight, Code, Smartphone, Megaphone, TrendingUp, Server, Palette } from 'lucide-vue-next'
import { services } from '@/data/services.js'
import { formatCurrency } from '@/stores/currencyStore.js'

const emit = defineEmits(['open-estimator'])

const iconMap = {
  Code, Smartphone, Megaphone, TrendingUp, Server, Palette
}
</script>

<template>
  <section id="services" class="relative py-28 bg-[#040406] text-white overflow-hidden">
    <div class="mx-auto w-[90%] max-w-7xl relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div class="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
            <Sparkles :size="14" />
            <span>AFFORDABLE IT SOLUTIONS // START FROM ₹5,999 ($79)</span>
          </div>

          <h2 class="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl uppercase text-white">
            CAPABILITIES & SERVICES<span class="text-[#D4AF37]">.</span>
          </h2>
        </div>

        <button
          @click="emit('open-estimator')"
          class="inline-flex items-center gap-2 rounded-xl border border-[#D4AF37]/40 bg-[#12121A] px-5 py-3 text-xs uppercase font-bold tracking-widest text-[#FCF6BA] hover:border-[#D4AF37]"
        >
          <Sparkles :size="14" />
          <span>Launch Cost Calculator</span>
        </button>
      </div>

      <!-- Services Grid -->
      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="s in services"
          :key="s.id"
          class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#08080C] p-7 transition-all duration-500 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
        >
          <div>
            <div class="flex items-center justify-between">
              <div class="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#12121A] text-[#D4AF37] transition-transform group-hover:scale-110">
                <component :is="iconMap[s.iconName] || Code" :size="22" />
              </div>
              <span class="text-xs font-mono font-bold text-[#D4AF37]">
                FROM {{ formatCurrency(s.startingUsd, s.startingInr) }}
              </span>
            </div>

            <h3 class="mt-5 text-lg font-bold text-white group-hover:text-[#FCF6BA] transition-colors">
              {{ s.title }}
            </h3>

            <p class="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
              {{ s.shortDesc }}
            </p>

            <div class="mt-5 flex flex-wrap gap-1.5">
              <span v-for="t in s.techStack.slice(0, 3)" :key="t" class="rounded-md border border-white/5 bg-[#121218] px-2 py-0.5 text-[10px] text-zinc-400 font-mono">
                {{ t }}
              </span>
            </div>
          </div>

          <div class="mt-6 border-t border-white/5 pt-4">
            <RouterLink
              :to="`/services/${s.id}`"
              class="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-[#FCF6BA] transition"
            >
              <span>View Details</span>
              <ArrowRight :size="14" />
            </RouterLink>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
