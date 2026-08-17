<script setup>
import { RouterLink } from 'vue-router'
import { Motion } from 'motion-v'
import {
  Sparkles,
  Check,
  ArrowUpRight,
  DollarSign,
  IndianRupee,
  MessageSquare,
  ShieldCheck,
  Code2,
} from 'lucide-vue-next'

import { currentCurrency, formatCurrency } from '@/stores/currencyStore.js'

import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CursorGlow from '@/components/common/CursorGlow.vue'

const setCurrency = (currency) => {
  currentCurrency.value = currency
}

const packages = [
  {
    name: 'Starter Website',
    tagline:
      'A modern responsive website or landing page for individuals, startups, and small businesses.',
    usd: 69,
    inr: 4999,
    features: [
      'Responsive Mobile-First Design',
      'Modern UI with Basic Animations',
      'Contact or Lead Capture Form',
      'Basic SEO-Friendly Structure',
      'Domain & Hosting Deployment Support',
      'Full Source Code Handover',
    ],
  },

  {
    name: 'Full-Stack Web Application',
    tagline:
      'A custom web application with frontend, backend, database, authentication, and deployment.',
    usd: 199,
    inr: 14999,
    featured: true,
    badge: 'POPULAR',
    features: [
      'React, Next.js or Vue Frontend',
      'Python Django / REST API Backend',
      'Database Integration',
      'Authentication & User Management',
      'Admin Dashboard or CMS',
      'Deployment & Source Code Handover',
    ],
  },

  {
    name: 'Custom Platform',
    tagline:
      'For e-commerce platforms, business portals, advanced applications, and custom requirements.',
    usd: 399,
    inr: 29999,
    features: [
      'Custom Feature Development',
      'E-Commerce or Business Platform',
      'Advanced Dashboard & Management Tools',
      'Payment or Third-Party Integrations',
      'Server Deployment & Configuration',
      'Project-Based Maintenance Support',
    ],
  },
]
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#030303] text-white">
    <CursorGlow />

    <Header />

    <!-- Background glow -->
    <div
      class="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.035] blur-[140px]"
    ></div>

    <main class="relative pt-28 pb-24 sm:pt-32">
      <div class="relative mx-auto w-[90%] max-w-7xl">
        <!-- ================= HEADER ================= -->

        <Motion
          :initial="{ opacity: 0, y: 35 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7 }"
          class="mx-auto max-w-3xl text-center"
        >
          <div
            class="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] px-4 py-2"
          >
            <Sparkles :size="13" class="text-[#D4AF37]" />

            <span
              class="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]"
            >
              Transparent Project Pricing
            </span>
          </div>

          <h1
            class="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
          >
            SIMPLE PRICING
            <br />

            <span class="text-zinc-500"> FOR SERIOUS </span>

            <span class="text-[#D4AF37]"> DIGITAL WORK. </span>
          </h1>

          <p class="mx-auto mt-6 max-w-2xl text-sm leading-[1.8] text-zinc-500 sm:text-base">
            Clear starting prices for websites, full-stack applications, business platforms, and
            custom digital solutions. Final pricing depends on features, integrations, and project
            scope.
          </p>

          <!-- Currency Toggle -->

          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.2 }"
            class="mt-8 inline-flex items-center gap-1 rounded-full border border-white/[0.08] bg-[#08080C] p-1.5"
          >
            <button
              @click="setCurrency('INR')"
              class="flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-300"
              :class="
                currentCurrency === 'INR'
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                  : 'text-zinc-500 hover:text-white'
              "
            >
              <IndianRupee :size="13" />

              <span>INR</span>
            </button>

            <button
              @click="setCurrency('USD')"
              class="flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-300"
              :class="
                currentCurrency === 'USD'
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                  : 'text-zinc-500 hover:text-white'
              "
            >
              <DollarSign :size="13" />

              <span>USD</span>
            </button>
          </Motion>
        </Motion>

        <!-- ================= PRICING CARDS ================= -->

        <div class="mt-16 grid items-stretch gap-6 lg:grid-cols-3 lg:gap-8">
          <Motion
            v-for="(pkg, index) in packages"
            :key="pkg.name"
            :initial="{ opacity: 0, y: 45 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true, amount: 0.15 }"
            :transition="{
              duration: 0.6,
              delay: index * 0.12,
            }"
            :while-hover="{
              y: pkg.featured ? -14 : -8,
              transition: { duration: 0.25 },
            }"
            class="relative"
          >
            <div
              class="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-7 transition-all duration-500 sm:p-8"
              :class="
                pkg.featured
                  ? 'border-[#D4AF37]/70 bg-gradient-to-b from-[#17140B] via-[#09090D] to-[#08080C] shadow-[0_20px_80px_rgba(212,175,55,0.12)] lg:-translate-y-3'
                  : 'border-white/[0.08] bg-[#08080C] hover:border-[#D4AF37]/30'
              "
            >
              <!-- Featured Glow -->

              <div
                v-if="pkg.featured"
                class="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#D4AF37]/[0.08] blur-[70px]"
              ></div>

              <!-- Hover Glow -->

              <div
                class="pointer-events-none absolute -bottom-24 -left-24 h-52 w-52 rounded-full bg-[#D4AF37]/[0.04] blur-[70px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></div>

              <!-- Badge -->

              <div
                v-if="pkg.featured"
                class="absolute right-0 top-0 rounded-bl-2xl border-b border-l border-[#D4AF37]/30 bg-[#D4AF37] px-4 py-2"
              >
                <span class="text-[9px] font-black uppercase tracking-[0.14em] text-black">
                  {{ pkg.badge }}
                </span>
              </div>

              <div class="relative">
                <!-- Package Number -->

                <div
                  class="flex h-11 w-11 items-center justify-center rounded-xl border"
                  :class="
                    pkg.featured
                      ? 'border-[#D4AF37]/30 bg-[#D4AF37]/[0.08] text-[#D4AF37]'
                      : 'border-white/[0.08] bg-white/[0.02] text-zinc-500'
                  "
                >
                  <Code2 :size="18" />
                </div>

                <!-- Title -->

                <h2 class="mt-7 text-xl font-black uppercase tracking-[-0.02em] text-white">
                  {{ pkg.name }}
                </h2>

                <!-- Description -->

                <p class="mt-3 min-h-[64px] text-xs leading-[1.8] text-zinc-500">
                  {{ pkg.tagline }}
                </p>

                <!-- Price -->

                <div class="mt-7 border-y border-white/[0.06] py-5">
                  <span class="text-[9px] font-bold uppercase tracking-[0.18em] text-zinc-600">
                    Starting from
                  </span>

                  <div class="mt-2 flex items-end gap-2">
                    <span class="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                      {{ formatCurrency(pkg.usd, pkg.inr) }}
                    </span>
                  </div>

                  <p class="mt-2 text-[10px] leading-relaxed text-zinc-600">
                    Final cost depends on project requirements and complexity.
                  </p>
                </div>

                <!-- Features -->

                <ul class="mt-7 space-y-4">
                  <li v-for="feature in pkg.features" :key="feature" class="flex items-start gap-3">
                    <div
                      class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]"
                    >
                      <Check :size="11" class="text-[#D4AF37]" />
                    </div>

                    <span class="text-xs leading-relaxed text-zinc-400">
                      {{ feature }}
                    </span>
                  </li>
                </ul>
              </div>

              <!-- CTA -->

              <div class="relative mt-auto pt-10">
                <RouterLink
                  to="/contact"
                  class="group/button flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-[10px] font-black uppercase tracking-[0.14em] transition-all duration-300"
                  :class="
                    pkg.featured
                      ? 'bg-[#D4AF37] text-black shadow-[0_10px_30px_rgba(212,175,55,0.18)] hover:bg-[#E4C55A]'
                      : 'border border-white/[0.1] bg-white/[0.02] text-zinc-300 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]'
                  "
                >
                  <span>Discuss Project</span>

                  <ArrowUpRight
                    :size="14"
                    class="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                  />
                </RouterLink>
              </div>
            </div>
          </Motion>
        </div>

        <!-- ================= TRUST POINTS ================= -->

        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.6 }"
          class="mt-16 grid gap-4 border-y border-white/[0.06] py-8 sm:grid-cols-3"
        >
          <div class="flex items-center justify-center gap-3 text-center">
            <ShieldCheck :size="17" class="text-[#D4AF37]" />

            <span class="text-[10px] uppercase tracking-[0.1em] text-zinc-500">
              Clear Project Scope
            </span>
          </div>

          <div class="flex items-center justify-center gap-3 text-center">
            <Code2 :size="17" class="text-[#D4AF37]" />

            <span class="text-[10px] uppercase tracking-[0.1em] text-zinc-500">
              Source Code Handover
            </span>
          </div>

          <div class="flex items-center justify-center gap-3 text-center">
            <MessageSquare :size="17" class="text-[#D4AF37]" />

            <span class="text-[10px] uppercase tracking-[0.1em] text-zinc-500">
              Direct Project Communication
            </span>
          </div>
        </Motion>

        <!-- ================= CUSTOM PROJECT CTA ================= -->

        <Motion
          :initial="{ opacity: 0, y: 35 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.6 }"
          class="relative mt-20 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#08080C]"
        >
          <div
            class="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full bg-[#D4AF37]/[0.06] blur-[90px]"
          ></div>

          <div
            class="relative flex flex-col items-start justify-between gap-8 p-8 sm:p-10 lg:flex-row lg:items-center"
          >
            <div>
              <span
                class="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]"
              >
                Have something different?
              </span>

              <h2
                class="mt-3 text-2xl font-black uppercase tracking-[-0.03em] text-white sm:text-3xl"
              >
                Need a custom solution?
              </h2>

              <p class="mt-3 max-w-xl text-xs leading-[1.8] text-zinc-500">
                Tell me about your idea, business requirements, features, integrations, or existing
                system. I can prepare a custom scope and quotation based on the actual work
                required.
              </p>
            </div>

            <RouterLink
              to="/contact"
              class="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.12em] text-black transition hover:scale-[1.03] hover:bg-[#E4C55A]"
            >
              <span>Request Custom Quote</span>

              <ArrowUpRight :size="14" />
            </RouterLink>
          </div>
        </Motion>
      </div>
    </main>

    <Footer />
  </div>
</template>
