<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Sparkles, ArrowRight, UserCheck, CheckCircle2, Code } from 'lucide-vue-next'
import CursorGlow from '@/components/common/CursorGlow.vue'
import Header from '@/components/layout/Header.vue'
import Hero3D from '@/components/home/Hero3D.vue'
import BrandMarquee from '@/components/home/BrandMarquee.vue'
import FeaturedWork from '@/components/home/FeaturedWork.vue'
import Services from '@/components/home/Services.vue'
import Philosophy from '@/components/home/Philosophy.vue'
import Testimonials from '@/components/home/Testimonials.vue'
import Team from '@/components/home/Team.vue'
import Pricing from '@/components/home/Pricing.vue'
import ContactSection from '@/components/home/ContactSection.vue'
import CostEstimatorModal from '@/components/home/CostEstimatorModal.vue'
import Footer from '@/components/layout/Footer.vue'

const isEstimatorOpen = ref(false)
const isContactOpen = ref(false)

const openEstimator = () => { isEstimatorOpen.value = true }
const closeEstimator = () => { isEstimatorOpen.value = false }

const openContact = () => { isContactOpen.value = true }
const closeContact = () => { isContactOpen.value = false }
</script>

<template>
  <div class="relative min-h-screen bg-[#030303] text-white selection:bg-[#D4AF37] selection:text-black">
    <CursorGlow />
    <Header @open-estimator="openEstimator" @open-contact="openContact" />

    <main>
      <Hero3D @open-estimator="openEstimator" @open-contact="openContact" />
      <BrandMarquee />
      <FeaturedWork />
      <Services @open-estimator="openEstimator" />

      <!-- Founder Spotlight Section directly on Home Page -->
      <section class="py-24 bg-[#06060A] border-y border-white/10 relative overflow-hidden">
        <div class="mx-auto w-[90%] max-w-7xl relative z-10">
          <div class="rounded-3xl border border-[#D4AF37]/40 bg-[#08080E] p-8 sm:p-12 shadow-2xl">
            <div class="grid gap-8 lg:grid-cols-[1fr_1.8fr] items-center">
              
              <!-- Left Profile Card -->
              <div class="rounded-2xl border border-white/10 bg-[#0D0D14] p-6 text-center">
                <div class="flex h-20 w-20 items-center justify-center mx-auto rounded-full border-2 border-[#D4AF37] bg-[#1E190E] text-[#FCF6BA] text-2xl font-extrabold shadow-lg">
                  IA
                </div>
                <h3 class="mt-4 text-xl font-extrabold text-white uppercase tracking-wider">Imran Akhtar</h3>
                <p class="text-xs text-[#D4AF37] font-mono mt-1">Founder & Lead Full-Stack Architect</p>
                <p class="text-[11px] text-zinc-400 mt-2">Creator of ImranOS // 11+ Live Client Platforms</p>
                
                <div class="mt-5 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-[#0E1510] px-3.5 py-1.5 text-[10px] font-mono text-green-400">
                  <span class="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span>SERVICES START FROM ₹5,999 ($79)</span>
                </div>
              </div>

              <!-- Right Bio -->
              <div class="space-y-4 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                <div class="flex items-center gap-2 text-xs font-mono uppercase text-[#D4AF37]">
                  <Sparkles :size="14" />
                  <span>Direct Developer Partnership</span>
                </div>
                <h2 class="text-2xl font-extrabold text-white uppercase tracking-wide">
                  Agency Quality at Freelancer Rates.
                </h2>
                <p>
                  As an independent full-stack developer (specializing in Next.js, React, Django, Python, PostgreSQL, and DevOps), I founded VALENCE to give startups and local businesses access to top-tier digital engineering starting from just <strong class="text-[#FCF6BA]">₹5,999 ($79 USD)</strong>.
                </p>
                <p>
                  When you work with us, you work directly with me—the lead developer. Zero sales reps, zero corporate overhead, and 100% source code repository handover.
                </p>

                <div class="pt-4 flex flex-wrap gap-3">
                  <RouterLink
                    to="/about"
                    class="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black shadow-md hover:scale-105 transition"
                  >
                    <span>Read Imran's Full Bio</span>
                    <ArrowRight :size="14" />
                  </RouterLink>

                  <RouterLink
                    to="/estimator"
                    class="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-[#12121A] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:border-[#D4AF37] transition"
                  >
                    <span>Calculate Cost</span>
                  </RouterLink>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Philosophy />
      <Testimonials />
      <Team />
      <Pricing @open-estimator="openEstimator" @open-contact="openContact" />
      <ContactSection :is-open="isContactOpen" @close="closeContact" />
    </main>

    <Footer />
    <CostEstimatorModal :is-open="isEstimatorOpen" @close="closeEstimator" />
  </div>
</template>
