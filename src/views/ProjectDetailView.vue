<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Sparkles, ExternalLink, ArrowLeft, CheckCircle2, ShieldAlert, Cpu } from 'lucide-vue-next'
import { Motion } from 'motion-v'

import { projects } from '@/data/projects.js'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

const route = useRoute()

const project = computed(() => {
  return projects.find((p) => p.id === route.params.id) || projects[0]
})
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#030303] text-white">
    <Header />

    <main v-if="project" class="relative pb-24 pt-28 sm:pt-32">
      <!-- Background Glow -->
      <div
        class="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.035] blur-[140px]"
      ></div>

      <div class="relative mx-auto w-[90%] max-w-5xl">
        <!-- Back Button -->

        <Motion
          :initial="{ opacity: 0, x: -20 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.5 }"
        >
          <RouterLink
            to="/projects"
            class="group mb-8 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37] transition hover:text-[#FCF6BA]"
          >
            <ArrowLeft
              :size="14"
              class="transition-transform duration-300 group-hover:-translate-x-1"
            />

            <span>Back to All Projects</span>
          </RouterLink>
        </Motion>

        <!-- ================= HERO ================= -->

        <Motion
          :initial="{ opacity: 0, y: 40, scale: 0.98 }"
          :animate="{ opacity: 1, y: 0, scale: 1 }"
          :transition="{ duration: 0.7, ease: 'easeOut' }"
          class="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 bg-[#08080C] p-6 shadow-2xl sm:p-10 lg:p-12"
        >
          <!-- Hero Glow -->

          <div
            class="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#D4AF37]/[0.07] blur-[100px]"
          ></div>

          <!-- Top Animated Light -->

          <div
            class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent"
          ></div>

          <div class="relative">
            <!-- Header -->

            <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div class="flex flex-wrap items-center gap-3">
                <span
                  class="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.05] px-4 py-1.5 text-[9px] font-mono uppercase tracking-[0.14em] text-[#D4AF37]"
                >
                  {{ project.category }}
                </span>

                <span class="font-mono text-[10px] text-zinc-600">
                  {{ project.status }} · {{ project.year }}
                </span>
              </div>

              <a
                v-if="project.links?.demo"
                :href="project.links.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex w-fit items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-3 text-[10px] font-black uppercase tracking-[0.12em] text-black shadow-lg shadow-[#D4AF37]/20 transition-all duration-300 hover:scale-[1.04] hover:bg-[#E4C55A]"
              >
                <span>Visit Live Website</span>

                <ExternalLink
                  :size="14"
                  class="transition-transform duration-300 group-hover:rotate-12"
                />
              </a>
            </div>

            <!-- Title -->

            <Motion
              :initial="{ opacity: 0, y: 25 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.6, delay: 0.15 }"
            >
              <h1
                class="mt-8 text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl"
              >
                {{ project.title }}
                <span class="text-[#D4AF37]">.</span>
              </h1>
            </Motion>

            <!-- Description -->

            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.6, delay: 0.25 }"
            >
              <p class="mt-6 max-w-3xl text-sm leading-[1.8] text-zinc-400 sm:text-base">
                {{ project.description }}
              </p>
            </Motion>

            <!-- Tech Stack -->

            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.6, delay: 0.35 }"
              class="mt-8 border-t border-white/[0.06] pt-6"
            >
              <div class="flex flex-wrap gap-2">
                <Motion
                  v-for="(tech, index) in project.tech"
                  :key="tech"
                  :initial="{ opacity: 0, scale: 0.8 }"
                  :animate="{ opacity: 1, scale: 1 }"
                  :transition="{
                    duration: 0.35,
                    delay: 0.4 + Math.min(index * 0.05, 0.4),
                  }"
                  class="rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.035] px-3.5 py-2 text-[10px] font-mono text-[#FCF6BA] transition hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/[0.08]"
                >
                  {{ tech }}
                </Motion>
              </div>
            </Motion>
          </div>
        </Motion>

        <!-- ================= DETAIL CARDS ================= -->

        <div class="mt-10 grid gap-5 lg:grid-cols-2">
          <!-- Architecture -->

          <Motion
            :initial="{ opacity: 0, x: -35, y: 20 }"
            :while-in-view="{ opacity: 1, x: 0, y: 0 }"
            :viewport="{ once: true, amount: 0.2 }"
            :transition="{ duration: 0.6 }"
            class="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#08080C]"
          >
            <div
              class="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-[#D4AF37]/[0.04] blur-[70px] transition-opacity duration-500 group-hover:opacity-100"
            ></div>

            <div class="relative p-7 sm:p-8">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] text-[#D4AF37] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                >
                  <Cpu :size="19" />
                </div>

                <div>
                  <p class="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                    Engineering
                  </p>

                  <h2 class="mt-1 text-sm font-black uppercase tracking-[0.08em] text-white">
                    System Architecture
                  </h2>
                </div>
              </div>

              <p class="mt-6 text-xs leading-[1.9] text-zinc-500">
                {{ project.architecture }}
              </p>
            </div>
          </Motion>

          <!-- Challenges -->

          <Motion
            :initial="{ opacity: 0, x: 35, y: 20 }"
            :while-in-view="{ opacity: 1, x: 0, y: 0 }"
            :viewport="{ once: true, amount: 0.2 }"
            :transition="{ duration: 0.6, delay: 0.1 }"
            class="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#08080C]"
          >
            <div
              class="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#D4AF37]/[0.04] blur-[70px]"
            ></div>

            <div class="relative p-7 sm:p-8">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] text-[#D4AF37] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
                >
                  <ShieldAlert :size="19" />
                </div>

                <div>
                  <p class="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                    Problem Solving
                  </p>

                  <h2 class="mt-1 text-sm font-black uppercase tracking-[0.08em] text-white">
                    Technical Challenges
                  </h2>
                </div>
              </div>

              <p class="mt-6 text-xs leading-[1.9] text-zinc-500">
                {{ project.challenges }}
              </p>
            </div>
          </Motion>
        </div>

        <!-- ================= FEATURES ================= -->

        <Motion
          :initial="{ opacity: 0, y: 40 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.15 }"
          :transition="{ duration: 0.7 }"
          class="relative mt-10 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#08080C] p-7 sm:p-10"
        >
          <!-- Glow -->

          <div
            class="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#D4AF37]/[0.035] blur-[100px]"
          ></div>

          <div class="relative">
            <!-- Heading -->

            <div class="flex items-center gap-3">
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] text-[#D4AF37]"
              >
                <Sparkles :size="19" />
              </div>

              <div>
                <p class="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                  Product Scope
                </p>

                <h2 class="mt-1 text-base font-black uppercase tracking-[0.08em] text-white">
                  Key Features
                </h2>
              </div>
            </div>

            <!-- Feature Grid -->

            <div class="mt-8 grid gap-3 sm:grid-cols-2">
              <Motion
                v-for="(feature, index) in project.features"
                :key="index"
                :initial="{ opacity: 0, y: 20 }"
                :while-in-view="{ opacity: 1, y: 0 }"
                :viewport="{ once: true }"
                :transition="{
                  duration: 0.45,
                  delay: Math.min(index * 0.06, 0.4),
                }"
                class="group/feature flex items-start gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.025]"
              >
                <div
                  class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] text-[#D4AF37] transition-transform duration-300 group-hover/feature:scale-110"
                >
                  <CheckCircle2 :size="13" />
                </div>

                <span
                  class="text-xs leading-[1.7] text-zinc-400 transition-colors duration-300 group-hover/feature:text-zinc-200"
                >
                  {{ feature }}
                </span>
              </Motion>
            </div>
          </div>
        </Motion>

        <!-- ================= BOTTOM CTA ================= -->

        <Motion
          :initial="{ opacity: 0, y: 35 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.65 }"
          class="mt-10"
        >
          <div
            class="flex flex-col gap-6 rounded-[1.75rem] border border-white/[0.08] bg-[#070709] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <div>
              <p class="font-mono text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]">
                Have a similar project?
              </p>

              <h2
                class="mt-3 text-xl font-black uppercase tracking-[-0.03em] text-white sm:text-2xl"
              >
                Let's build your next
                <span class="text-[#D4AF37]"> digital product. </span>
              </h2>
            </div>

            <RouterLink
              to="/contact"
              class="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#D4AF37] px-6 py-4 text-[10px] font-black uppercase tracking-[0.14em] text-black transition-all duration-300 hover:scale-[1.04] hover:bg-[#E4C55A]"
            >
              <span>Start a Project</span>

              <ExternalLink
                :size="14"
                class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </RouterLink>
          </div>
        </Motion>
      </div>
    </main>

    <Footer />
  </div>
</template>
