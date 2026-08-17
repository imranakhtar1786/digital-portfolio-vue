<script setup>
import { RouterLink } from 'vue-router'
import { Motion } from 'motion-v'
import {
  Sparkles,
  ArrowRight,
  Code,
  Smartphone,
  Megaphone,
  TrendingUp,
  Server,
  Palette,
} from 'lucide-vue-next'

import { services } from '@/data/services.js'

const emit = defineEmits(['open-estimator'])

const iconMap = {
  Code,
  Smartphone,
  Megaphone,
  TrendingUp,
  Server,
  Palette,
}
</script>

<template>
  <section id="services" class="relative overflow-hidden bg-[#040406] py-20 text-white sm:py-20">
    <!-- Background Glow -->
    <div
      class="pointer-events-none absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[140px]"
    ></div>

    <div class="relative z-10 mx-auto w-[90%] max-w-7xl">
      <!-- ================= HEADER ================= -->

      <div class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <!-- Left Content -->
        <Motion
          :initial="{ opacity: 0, y: 35 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.7, ease: 'easeOut' }"
          class="max-w-3xl"
        >
          <!-- Eyebrow -->
          <div
            class="flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37]"
          >
            <Sparkles :size="14" />

            <span>What We Build</span>
          </div>

          <!-- Title -->
          <h2
            class="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl"
          >
            Capabilities &
            <span class="text-[#D4AF37]">Services.</span>
          </h2>

          <!-- Description -->
          <p class="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
            We design and build high-performance digital experiences, from modern websites and
            applications to scalable platforms, branding, marketing, and infrastructure.
          </p>
        </Motion>

        <!-- CTA -->
        <Motion
          :initial="{ opacity: 0, x: 30 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.6, delay: 0.15, ease: 'easeOut' }"
        >
          <button
            type="button"
            @click="emit('open-estimator')"
            class="group inline-flex w-fit items-center gap-2 rounded-xl border border-[#D4AF37]/30 bg-[#12121A] px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#FCF6BA] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
          >
            <Sparkles :size="14" class="transition-transform duration-300 group-hover:rotate-12" />

            <span>Start Your Project</span>

            <ArrowRight
              :size="14"
              class="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </Motion>
      </div>

      <!-- ================= SERVICES GRID ================= -->

      <div class="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        <Motion
          v-for="(s, index) in services"
          :key="s.id"
          :initial="{
            opacity: 0,
            y: 45,
            scale: 0.97,
          }"
          :while-in-view="{
            opacity: 1,
            y: 0,
            scale: 1,
          }"
          :viewport="{
            once: true,
            amount: 0.12,
          }"
          :transition="{
            duration: 0.55,
            delay: Math.min(index * 0.08, 0.4),
            ease: 'easeOut',
          }"
        >
          <article
            class="group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#08080C] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_60px_rgba(212,175,55,0.10)] sm:p-7"
          >
            <!-- Card Number -->
            <span
              class="absolute right-6 top-5 text-xs font-mono text-white/10 transition-colors duration-500 group-hover:text-[#D4AF37]/40"
            >
              0{{ index + 1 }}
            </span>

            <div>
              <!-- Icon -->
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#12121A] text-[#D4AF37] transition-all duration-500 group-hover:scale-110 group-hover:border-[#D4AF37]/60 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.15)]"
              >
                <component :is="iconMap[s.iconName] || Code" :size="23" />
              </div>

              <!-- Title -->
              <h3
                class="mt-6 pr-8 text-xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#FCF6BA]"
              >
                {{ s.title }}
              </h3>

              <!-- Description -->
              <p
                class="mt-3 text-sm leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400"
              >
                {{ s.shortDesc }}
              </p>

              <!-- Tech Stack -->
              <div v-if="s.techStack?.length" class="mt-6 flex flex-wrap gap-2">
                <span
                  v-for="t in s.techStack.slice(0, 3)"
                  :key="t"
                  class="rounded-md border border-white/5 bg-[#121218] px-2.5 py-1 text-[10px] font-mono text-zinc-500 transition-colors duration-300 group-hover:border-[#D4AF37]/15 group-hover:text-zinc-400"
                >
                  {{ t }}
                </span>

                <span
                  v-if="s.techStack.length > 3"
                  class="rounded-md border border-white/5 bg-[#121218] px-2.5 py-1 text-[10px] font-mono text-[#D4AF37]/60"
                >
                  +{{ s.techStack.length - 3 }}
                </span>
              </div>
            </div>

            <!-- Footer -->
            <div class="mt-8 border-t border-white/5 pt-5">
              <RouterLink
                :to="`/services/${s.id}`"
                class="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#D4AF37] transition-all duration-300 hover:text-[#FCF6BA]"
              >
                <span>Explore Service</span>

                <span
                  class="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black"
                >
                  <ArrowRight
                    :size="14"
                    class="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </RouterLink>
            </div>
          </article>
        </Motion>
      </div>
    </div>
  </section>
</template>
