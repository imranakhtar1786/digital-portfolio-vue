<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import {
  Sparkles,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Check,
} from 'lucide-vue-next'
import { Motion } from 'motion-v'

import { services } from '@/data/services.js'
import { formatCurrency } from '@/stores/currencyStore.js'

import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CursorGlow from '@/components/common/CursorGlow.vue'

const route = useRoute()

const service = computed(() => {
  return services.find((s) => s.id === route.params.id) || services[0]
})
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#030303] text-white">
    <CursorGlow />

    <Header />

    <main v-if="service" class="relative overflow-hidden pt-28 pb-24 sm:pt-32">
      <!-- ================= BACKGROUND GLOWS ================= -->

      <Motion
        :animate="{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }"
        :transition="{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }"
        class="pointer-events-none absolute left-[5%] top-20 h-80 w-80 rounded-full bg-[#D4AF37]/[0.035] blur-[120px]"
      />

      <Motion
        :animate="{
          x: [0, -60, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }"
        :transition="{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }"
        class="pointer-events-none absolute right-[5%] top-[25%] h-96 w-96 rounded-full bg-[#D4AF37]/[0.025] blur-[140px]"
      />

      <div class="relative mx-auto w-[90%] max-w-5xl">
        <!-- ================= BACK BUTTON ================= -->

        <Motion
          :initial="{ opacity: 0, x: -20 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.5 }"
        >
          <RouterLink
            to="/services"
            class="group mb-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37] transition hover:text-[#FCF6BA]"
          >
            <ArrowLeft
              :size="14"
              class="transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span>Back to All Services</span>
          </RouterLink>
        </Motion>

        <!-- ================= SERVICE HERO ================= -->

        <Motion
          :initial="{
            opacity: 0,
            y: 50,
            scale: 0.98,
          }"
          :animate="{
            opacity: 1,
            y: 0,
            scale: 1,
          }"
          :transition="{
            duration: 0.75,
            ease: 'easeOut',
          }"
          class="group relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 bg-[#08080C]"
        >
          <!-- Animated Hero Glow -->

          <Motion
            :animate="{
              x: [0, 40, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }"
            :transition="{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }"
            class="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D4AF37]/[0.07] blur-[100px]"
          />

          <div
            class="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#D4AF37]/[0.025] via-transparent to-transparent"
          ></div>

          <div class="relative p-7 sm:p-10 lg:p-12">
            <!-- Top Row -->

            <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <Motion
                :initial="{ opacity: 0, scale: 0.8 }"
                :animate="{ opacity: 1, scale: 1 }"
                :transition="{ delay: 0.25, duration: 0.45 }"
                class="w-fit rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/[0.05] px-4 py-2"
              >
                <span class="font-mono text-[10px] uppercase tracking-[0.12em] text-[#D4AF37]">
                  Starting From
                  {{ formatCurrency(service.startingUsd, service.startingInr) }}
                </span>
              </Motion>

              <Motion
                :initial="{ opacity: 0, x: 15 }"
                :animate="{ opacity: 1, x: 0 }"
                :transition="{ delay: 0.3, duration: 0.45 }"
                class="flex items-center gap-2 text-[9px] font-mono uppercase tracking-[0.16em] text-zinc-600"
              >
                <Cpu :size="13" class="text-[#D4AF37]" />

                <span>VALENCE Service Specification</span>
              </Motion>
            </div>

            <!-- Title -->

            <Motion
              :initial="{ opacity: 0, y: 25 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ delay: 0.35, duration: 0.6 }"
            >
              <h1
                class="mt-8 max-w-4xl text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] text-white sm:text-6xl"
              >
                {{ service.title }}
                <span class="text-[#D4AF37]">.</span>
              </h1>
            </Motion>

            <!-- Description -->

            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ delay: 0.5, duration: 0.6 }"
            >
              <p class="mt-6 max-w-3xl text-sm leading-[1.8] text-zinc-400 sm:text-base">
                {{ service.heroTagline }}
              </p>
            </Motion>

            <!-- Bottom decorative line -->

            <Motion
              :initial="{ width: '0%' }"
              :animate="{ width: '100%' }"
              :transition="{ delay: 0.6, duration: 1.2 }"
              class="mt-10 h-px max-w-sm bg-gradient-to-r from-[#D4AF37] via-[#D4AF37]/30 to-transparent"
            />
          </div>
        </Motion>

        <!-- ================= CONTENT ================= -->

        <div class="mt-12 grid gap-8 lg:grid-cols-[1.5fr_0.85fr]">
          <!-- LEFT CONTENT -->

          <div class="space-y-12">
            <!-- OVERVIEW -->

            <Motion
              :initial="{ opacity: 0, y: 35 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :viewport="{ once: true, amount: 0.2 }"
              :transition="{ duration: 0.65 }"
            >
              <div class="flex items-center gap-3">
                <div
                  class="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]"
                >
                  <Sparkles :size="16" class="text-[#D4AF37]" />
                </div>

                <div>
                  <p class="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                    Service Overview
                  </p>

                  <h2 class="mt-1 text-xl font-black uppercase tracking-[-0.02em] text-white">
                    What We Build
                  </h2>
                </div>
              </div>

              <p class="mt-6 text-sm leading-[1.9] text-zinc-400">
                {{ service.overview }}
              </p>
            </Motion>

            <!-- BENEFITS -->

            <Motion
              :initial="{ opacity: 0, y: 40 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :viewport="{ once: true, amount: 0.15 }"
              :transition="{ duration: 0.65 }"
            >
              <div class="flex items-center gap-3">
                <div
                  class="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]"
                >
                  <ShieldCheck :size="17" class="text-[#D4AF37]" />
                </div>

                <div>
                  <p class="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                    Why This Service
                  </p>

                  <h2 class="mt-1 text-xl font-black uppercase tracking-[-0.02em] text-white">
                    Key Benefits
                  </h2>
                </div>
              </div>

              <div class="mt-6 grid gap-3 sm:grid-cols-2">
                <Motion
                  v-for="(benefit, index) in service.benefits"
                  :key="index"
                  :initial="{
                    opacity: 0,
                    y: 25,
                  }"
                  :while-in-view="{
                    opacity: 1,
                    y: 0,
                  }"
                  :viewport="{ once: true }"
                  :transition="{
                    duration: 0.45,
                    delay: Math.min(index * 0.08, 0.4),
                  }"
                  class="group flex items-start gap-3 rounded-2xl border border-white/[0.07] bg-[#08080C] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:bg-[#0A0A0D]"
                >
                  <div
                    class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]"
                  >
                    <CheckCircle2 :size="15" class="text-[#D4AF37]" />
                  </div>

                  <span
                    class="pt-1 text-xs leading-relaxed text-zinc-400 transition group-hover:text-zinc-200"
                  >
                    {{ benefit }}
                  </span>
                </Motion>
              </div>
            </Motion>

            <!-- TECHNOLOGIES -->

            <Motion
              :initial="{ opacity: 0, y: 40 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :viewport="{ once: true, amount: 0.2 }"
              :transition="{ duration: 0.65 }"
            >
              <div class="flex items-center gap-3">
                <div
                  class="flex h-9 w-9 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]"
                >
                  <Layers :size="17" class="text-[#D4AF37]" />
                </div>

                <div>
                  <p class="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                    Technology Stack
                  </p>

                  <h2 class="mt-1 text-xl font-black uppercase tracking-[-0.02em] text-white">
                    Tools & Frameworks
                  </h2>
                </div>
              </div>

              <div class="mt-6 flex flex-wrap gap-2">
                <Motion
                  v-for="(tech, index) in service.techStack"
                  :key="tech"
                  :initial="{
                    opacity: 0,
                    scale: 0.8,
                    y: 10,
                  }"
                  :while-in-view="{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }"
                  :viewport="{ once: true }"
                  :transition="{
                    delay: Math.min(index * 0.05, 0.4),
                    duration: 0.35,
                  }"
                  class="rounded-xl border border-white/[0.08] bg-[#08080C] px-4 py-2.5 font-mono text-[10px] text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/[0.04] hover:text-[#D4AF37]"
                >
                  {{ tech }}
                </Motion>
              </div>
            </Motion>
          </div>

          <!-- ================= SIDEBAR ================= -->

          <Motion
            :initial="{
              opacity: 0,
              x: 35,
            }"
            :while-in-view="{
              opacity: 1,
              x: 0,
            }"
            :viewport="{ once: true, amount: 0.15 }"
            :transition="{
              duration: 0.7,
              delay: 0.15,
            }"
            class="lg:sticky lg:top-28 lg:self-start"
          >
            <div
              class="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#08080C] p-6 sm:p-7"
            >
              <!-- Sidebar glow -->

              <Motion
                :animate="{
                  x: [0, 25, 0],
                  y: [0, 20, 0],
                  scale: [1, 1.2, 1],
                }"
                :transition="{
                  duration: 7,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }"
                class="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#D4AF37]/[0.06] blur-[70px]"
              />

              <div class="relative">
                <!-- Sidebar header -->

                <div class="flex items-center gap-3">
                  <div
                    class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]"
                  >
                    <Check :size="18" class="text-[#D4AF37]" />
                  </div>

                  <div>
                    <p class="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-600">
                      Project Scope
                    </p>

                    <h3 class="mt-1 text-xs font-black uppercase tracking-[0.12em] text-white">
                      Included Deliverables
                    </h3>
                  </div>
                </div>

                <!-- Deliverables -->

                <ul class="mt-7 space-y-4">
                  <Motion
                    v-for="(deliverable, index) in service.deliverables"
                    :key="index"
                    :initial="{
                      opacity: 0,
                      x: 15,
                    }"
                    :while-in-view="{
                      opacity: 1,
                      x: 0,
                    }"
                    :viewport="{ once: true }"
                    :transition="{
                      duration: 0.4,
                      delay: Math.min(index * 0.07, 0.4),
                    }"
                    class="flex items-start gap-3"
                  >
                    <span
                      class="mt-1.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.05]"
                    >
                      <Check :size="9" class="text-[#D4AF37]" />
                    </span>

                    <span class="text-xs leading-relaxed text-zinc-400">
                      {{ deliverable }}
                    </span>
                  </Motion>
                </ul>

                <!-- CTA -->

                <div class="mt-8 border-t border-white/[0.07] pt-6">
                  <RouterLink
                    to="/contact"
                    class="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-[#D4AF37] px-5 py-4 text-[10px] font-black uppercase tracking-[0.12em] text-black transition-all duration-300 hover:scale-[1.02] hover:bg-[#E4C55A] hover:shadow-[0_0_35px_rgba(212,175,55,0.2)]"
                  >
                    <span> Request Proposal </span>

                    <ArrowRight
                      :size="14"
                      class="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </RouterLink>

                  <p
                    class="mt-4 text-center font-mono text-[8px] uppercase tracking-[0.1em] text-zinc-600"
                  >
                    Final cost depends on scope and requirements
                  </p>
                </div>
              </div>
            </div>
          </Motion>
        </div>

        <!-- ================= BOTTOM CTA ================= -->

        <Motion
          :initial="{
            opacity: 0,
            y: 40,
          }"
          :while-in-view="{
            opacity: 1,
            y: 0,
          }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{
            duration: 0.7,
          }"
          class="relative mt-20 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#070709]"
        >
          <Motion
            :animate="{
              x: [0, 40, 0],
              scale: [1, 1.2, 1],
            }"
            :transition="{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }"
            class="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#D4AF37]/[0.06] blur-[100px]"
          />

          <div
            class="relative flex flex-col items-start justify-between gap-8 p-8 sm:p-10 md:flex-row md:items-center"
          >
            <div>
              <span class="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]">
                Ready to start?
              </span>

              <h2
                class="mt-3 text-2xl font-black uppercase tracking-[-0.04em] text-white sm:text-3xl"
              >
                Let's build your next project.
              </h2>

              <p class="mt-3 max-w-xl text-xs leading-relaxed text-zinc-500">
                Tell us about your requirements and receive a tailored proposal based on your
                project scope, features, and complexity.
              </p>
            </div>

            <RouterLink
              to="/contact"
              class="group inline-flex shrink-0 items-center gap-3 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/[0.06] px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.12em] text-[#D4AF37] transition-all duration-300 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
            >
              <span>Start a Project</span>

              <ArrowRight
                :size="14"
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
