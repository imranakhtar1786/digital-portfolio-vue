<script setup>
import { ref } from 'vue'
import { Sparkles, ArrowRight, CheckCircle2, Search, PenTool, Code2, Rocket } from 'lucide-vue-next'

import CursorGlow from '@/components/common/CursorGlow.vue'
import Header from '@/components/layout/Header.vue'
import Hero3D from '@/components/home/Hero3D.vue'
import BrandMarquee from '@/components/home/BrandMarquee.vue'
import FeaturedWork from '@/components/home/FeaturedWork.vue'
import Services from '@/components/home/Services.vue'
import Philosophy from '@/components/home/Philosophy.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import CostEstimatorModal from '@/components/home/CostEstimatorModal.vue'
import Footer from '@/components/layout/Footer.vue'

const isEstimatorOpen = ref(false)
const isContactOpen = ref(false)

const openEstimator = () => {
  isEstimatorOpen.value = true
}

const closeEstimator = () => {
  isEstimatorOpen.value = false
}

const openContact = () => {
  isContactOpen.value = true
}

const closeContact = () => {
  isContactOpen.value = false
}

const process = [
  {
    id: '01',
    title: 'Discover',
    subtitle: 'Understand the problem',
    description:
      'We start by understanding your business, users, goals, requirements, and the problem your product needs to solve.',
    icon: Search,
    tags: ['Strategy', 'Research', 'Planning'],
  },
  {
    id: '02',
    title: 'Architect',
    subtitle: 'Shape the solution',
    description:
      'We define the user experience, interface direction, technology stack, system architecture, and product roadmap.',
    icon: PenTool,
    tags: ['UI / UX', 'Systems', 'Architecture'],
  },
  {
    id: '03',
    title: 'Engineer',
    subtitle: 'Build the product',
    description:
      'Frontend, backend, APIs, databases, integrations, and performance are engineered into one scalable digital product.',
    icon: Code2,
    tags: ['Frontend', 'Backend', 'Infrastructure'],
  },
  {
    id: '04',
    title: 'Launch',
    subtitle: 'Ship and evolve',
    description:
      'Your product is tested, optimized, deployed, and prepared for real users with a foundation built for future growth.',
    icon: Rocket,
    tags: ['Testing', 'Deployment', 'Growth'],
  },
]
</script>

<template>
  <div
    class="relative min-h-screen bg-[#030303] text-white selection:bg-[#D4AF37] selection:text-black"
  >
    <CursorGlow />
    <Header @open-estimator="openEstimator" @open-contact="openContact" />

    <main>
      <Hero3D @open-estimator="openEstimator" @open-contact="openContact" />
      <BrandMarquee />
      <!-- <FeaturedWork /> -->
      <Services @open-estimator="openEstimator" />

      <!-- Founder Spotlight Section directly on Home Page -->

      <section
        id="process"
        class="relative overflow-hidden border-y border-white/10 bg-[#06060A] py-20 text-white sm:py-28"
      >
        <!-- Ambient Background -->
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.035] blur-[150px]"
        ></div>

        <!-- Grid Background -->
        <div
          class="pointer-events-none absolute inset-0 opacity-[0.035]"
          style="
            background-image:
              linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px);
            background-size: 50px 50px;
          "
        ></div>

        <div class="relative z-10 mx-auto w-[90%] max-w-7xl">
          <!-- HEADER -->

          <div class="mx-auto max-w-3xl text-center">
            <div
              class="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37]"
            >
              <Sparkles :size="14" />

              <span>Our Operating System</span>
            </div>

            <h2
              class="mt-5 text-4xl font-black uppercase leading-[0.9] tracking-[-0.055em] text-white sm:text-5xl lg:text-7xl"
            >
              From Idea
              <span class="text-[#D4AF37]">To Impact.</span>
            </h2>

            <p class="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              A structured process that transforms an idea into a scalable, high-performance digital
              product.
            </p>
          </div>

          <!-- PIPELINE -->

          <div class="relative mt-16 lg:mt-24">
            <!-- DESKTOP CONNECTION LINE -->

            <div
              class="absolute left-[12%] right-[12%] top-[52px] hidden h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent lg:block"
            ></div>

            <!-- GOLD GLOW LINE -->

            <div
              class="absolute left-[12%] right-[12%] top-[51px] hidden h-[3px] bg-[#D4AF37]/10 blur-md lg:block"
            ></div>

            <!-- PROCESS GRID -->

            <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
              <article v-for="(item, index) in process" :key="item.id" class="group relative">
                <!-- Connection Arrow Desktop -->

                <div
                  v-if="index < process.length - 1"
                  class="absolute -right-4 top-[43px] z-20 hidden h-5 w-5 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#09090E] text-[#D4AF37] lg:flex"
                >
                  <ArrowRight :size="11" />
                </div>

                <!-- Card -->

                <div
                  class="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#09090E] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]"
                >
                  <!-- Background Number -->

                  <span
                    class="pointer-events-none absolute -right-2 -top-8 select-none text-[8rem] font-black leading-none text-white/[0.025] transition-colors duration-500 group-hover:text-[#D4AF37]/[0.04]"
                  >
                    {{ item.id }}
                  </span>

                  <!-- TOP -->

                  <div class="relative flex items-start justify-between">
                    <!-- Icon -->

                    <div
                      class="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/[0.06] text-[#D4AF37] transition-all duration-500 group-hover:scale-110 group-hover:border-[#D4AF37]/70 group-hover:bg-[#D4AF37]/10"
                    >
                      <component :is="item.icon" :size="24" />
                    </div>

                    <!-- Number -->

                    <span class="font-mono text-[10px] tracking-widest text-[#D4AF37]/60">
                      STEP / {{ item.id }}
                    </span>
                  </div>

                  <!-- CONTENT -->

                  <div class="relative mt-8">
                    <p class="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37]/70">
                      {{ item.subtitle }}
                    </p>

                    <h3
                      class="mt-3 text-2xl font-black uppercase tracking-[-0.03em] text-white transition-colors duration-300 group-hover:text-[#FCF6BA]"
                    >
                      {{ item.title }}
                    </h3>

                    <p
                      class="mt-4 text-xs leading-relaxed text-zinc-500 transition-colors duration-300 group-hover:text-zinc-400"
                    >
                      {{ item.description }}
                    </p>
                  </div>

                  <!-- TAGS -->

                  <div class="relative mt-8 flex flex-wrap gap-2 border-t border-white/5 pt-5">
                    <span
                      v-for="tag in item.tags"
                      :key="tag"
                      class="rounded-md border border-white/5 bg-white/[0.02] px-2 py-1 text-[9px] font-mono uppercase tracking-wide text-zinc-500 transition-colors duration-300 group-hover:border-[#D4AF37]/20 group-hover:text-zinc-400"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <!-- FINAL RESULT -->

          <div
            class="relative mt-12 overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-[#09090E] p-6 sm:mt-16 sm:p-8 lg:p-10"
          >
            <!-- Background -->

            <div
              class="pointer-events-none absolute right-0 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[90px]"
            ></div>

            <div
              class="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between"
            >
              <!-- Left -->

              <div>
                <div
                  class="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]"
                >
                  <CheckCircle2 :size="14" />

                  <span>Final Output</span>
                </div>

                <h3
                  class="mt-4 text-3xl font-black uppercase tracking-[-0.04em] text-white sm:text-4xl"
                >
                  Your Idea.
                  <span class="text-[#D4AF37]"> Fully Realized. </span>
                </h3>

                <p class="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
                  A complete digital product designed to perform, scale, and evolve with your
                  business.
                </p>
              </div>

              <!-- Right Pipeline Result -->

              <div class="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <!-- Input -->

                <div class="rounded-xl border border-white/10 bg-black/20 px-5 py-4">
                  <p class="text-[9px] font-mono uppercase tracking-widest text-zinc-600">Input</p>

                  <p class="mt-1 text-sm font-bold text-white">Your Vision</p>
                </div>

                <!-- Arrow -->

                <ArrowRight :size="20" class="hidden text-[#D4AF37] sm:block" />

                <!-- Output -->

                <div
                  class="rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/[0.06] px-5 py-4 shadow-[0_0_30px_rgba(212,175,55,0.08)]"
                >
                  <p class="text-[9px] font-mono uppercase tracking-widest text-[#D4AF37]/70">
                    Output
                  </p>

                  <p class="mt-1 text-sm font-bold text-[#FCF6BA]">Digital Product</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Philosophy />
      <ContactSection :is-open="isContactOpen" @close="closeContact" />
    </main>

    <Footer />
    <CostEstimatorModal :is-open="isEstimatorOpen" @close="closeEstimator" />
  </div>
</template>
