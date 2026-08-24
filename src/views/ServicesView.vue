<script setup>
import { RouterLink } from 'vue-router'
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
import { Motion } from 'motion-v'

import { services } from '@/data/services.js'
import { formatCurrency } from '@/stores/currencyStore.js'

import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

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
  <div class="relative min-h-screen overflow-hidden bg-[#030303] text-white">
    <Header />

    <main class="relative pt-28 pb-24 sm:pt-32">
      <!-- Background Glow -->
      <div
        class="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.035] blur-[140px]"
      ></div>

      <div class="relative mx-auto w-[90%] max-w-7xl">
        <!-- ================= HERO ================= -->

        <Motion
          :initial="{ opacity: 0, y: 35 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{
            duration: 0.7,
            ease: 'easeOut',
          }"
          class="max-w-3xl"
        >
          <div
            class="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] px-4 py-2"
          >
            <Sparkles :size="13" class="text-[#D4AF37]" />

            <span
              class="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]"
            >
              Full-Spectrum Capabilities
            </span>
          </div>

          <h1
            class="mt-6 text-4xl font-black uppercase leading-[0.92] tracking-[-0.05em] sm:text-5xl lg:text-7xl"
          >
            BUILD
            <br />

            <span class="text-zinc-500">DIGITAL </span>
            <br />

            <span class="text-[#D4AF37]">MOMENTUM.</span>
          </h1>

          <p class="mt-6 max-w-2xl text-sm leading-[1.8] text-zinc-500 sm:text-base">
            From modern websites and full-stack applications to mobile development, digital
            marketing, SEO, cloud infrastructure and server deployment.
          </p>
        </Motion>

        <!-- ================= SERVICES GRID ================= -->

        <div class="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Motion
            v-for="(service, index) in services"
            :key="service.id"
            :initial="{ opacity: 0, y: 45 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true, amount: 0.1 }"
            :transition="{
              duration: 0.55,
              delay: Math.min(index * 0.08, 0.4),
              ease: 'easeOut',
            }"
            class="group relative"
          >
            <div
              class="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#08080C] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_25px_70px_rgba(0,0,0,0.45)] sm:p-7"
            >
              <!-- Hover Glow -->
              <div
                class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/[0.07] blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></div>

              <!-- Top -->
              <div class="relative">
                <div class="flex items-start justify-between gap-4">
                  <!-- Icon -->

                  <div
                    class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/25 bg-[#D4AF37]/[0.04] text-[#D4AF37] transition-all duration-500 group-hover:scale-110 group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/[0.09]"
                  >
                    <component :is="iconMap[service.iconName] || Code" :size="22" />
                  </div>

                  <!-- Price -->

                  <div class="text-right">
                    <span
                      class="block font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-600"
                    >
                      Starting From
                    </span>

                    <span class="mt-1 block text-xs font-bold text-[#D4AF37]">
                      {{ formatCurrency(service.startingUsd, service.startingInr) }}
                    </span>
                  </div>
                </div>

                <!-- Title -->

                <h2
                  class="mt-7 text-xl font-black tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-[#D4AF37]"
                >
                  {{ service.title }}
                </h2>

                <!-- Description -->

                <p class="mt-3 text-xs leading-[1.8] text-zinc-500">
                  {{ service.shortDesc }}
                </p>

                <!-- Technologies -->

                <div class="mt-6 flex flex-wrap gap-1.5">
                  <span
                    v-for="tech in service.techStack.slice(0, 4)"
                    :key="tech"
                    class="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[9px] font-mono text-zinc-500 transition duration-300 group-hover:border-white/[0.1] group-hover:text-zinc-400"
                  >
                    {{ tech }}
                  </span>

                  <span
                    v-if="service.techStack.length > 4"
                    class="rounded-lg border border-[#D4AF37]/10 bg-[#D4AF37]/[0.03] px-2.5 py-1 text-[9px] font-mono text-[#D4AF37]/70"
                  >
                    +{{ service.techStack.length - 4 }}
                  </span>
                </div>
              </div>

              <!-- Bottom -->

              <div
                class="relative mt-8 flex items-center justify-between border-t border-white/[0.06] pt-5"
              >
                <RouterLink
                  :to="`/services/${service.id}`"
                  class="group/link inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#D4AF37]"
                >
                  <span>View Full Scope</span>

                  <ArrowRight
                    :size="14"
                    class="transition-transform duration-300 group-hover/link:translate-x-1.5"
                  />
                </RouterLink>

                <span class="font-mono text-[9px] uppercase tracking-[0.12em] text-zinc-700">
                  {{ service.id }}
                </span>
              </div>

              <!-- Bottom Gold Line -->

              <div
                class="absolute bottom-0 left-0 h-px w-0 bg-[#D4AF37] transition-all duration-700 group-hover:w-full"
              ></div>
            </div>
          </Motion>
        </div>

        <!-- ================= CTA ================= -->

        <Motion
          :initial="{ opacity: 0, y: 40 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.7 }"
          class="relative mt-20 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#070709]"
        >
          <!-- Glow -->

          <div
            class="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#D4AF37]/[0.06] blur-[100px]"
          ></div>

          <div
            class="relative flex flex-col gap-8 p-8 sm:p-12 lg:flex-row lg:items-center lg:justify-between"
          >
            <div class="max-w-2xl">
              <span class="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]">
                Have a project in mind?
              </span>

              <h2
                class="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-5xl"
              >
                LET'S BUILD
                <span class="text-zinc-500"> SOMETHING</span>

                <span class="text-[#D4AF37]"> GREAT.</span>
              </h2>

              <p class="mt-5 max-w-xl text-sm leading-[1.8] text-zinc-500">
                Tell us about your idea, website, application or infrastructure requirements and get
                a project estimate based on your actual pages, features and complexity.
              </p>
            </div>

            <RouterLink
              to="/contact"
              class="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#D4AF37] px-7 py-4 text-[10px] font-black uppercase tracking-[0.14em] text-black transition duration-300 hover:scale-[1.03] hover:bg-[#E4C55A]"
            >
              <span>Start a Project</span>

              <ArrowRight
                :size="15"
                class="transition-transform duration-300 group-hover:translate-x-1"
              />
            </RouterLink>
          </div>
        </Motion>
      </div>
    </main>

    <Footer />
  </div>
</template>
