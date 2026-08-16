<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Sparkles, CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, Cpu } from 'lucide-vue-next'
import { services } from '@/data/services.js'
import { formatCurrency } from '@/stores/currencyStore.js'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CursorGlow from '@/components/common/CursorGlow.vue'

const route = useRoute()

const service = computed(() => {
  return services.find(s => s.id === route.params.id) || services[0]
})
</script>

<template>
  <div class="relative min-h-screen bg-[#030303] text-white">
    <CursorGlow />
    <Header />

    <main class="pt-32 pb-24" v-if="service">
      <div class="mx-auto w-[90%] max-w-5xl">
        
        <RouterLink to="/services" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37] hover:underline mb-8">
          <ArrowLeft :size="14" />
          <span>Back to All Services</span>
        </RouterLink>

        <!-- Service Banner -->
        <div class="rounded-3xl border border-[#D4AF37]/40 bg-[#08080C] p-8 sm:p-12 shadow-2xl">
          <div class="flex items-center justify-between gap-4">
            <span class="rounded-full border border-[#D4AF37]/50 bg-[#14141E] px-4 py-1.5 text-xs font-mono text-[#D4AF37] uppercase">
              Starting From {{ formatCurrency(service.startingUsd, service.startingInr) }}
            </span>
            <span class="text-xs text-zinc-500 font-mono">VALENCE Service Specification</span>
          </div>

          <h1 class="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl uppercase text-white">
            {{ service.title }}
          </h1>

          <p class="mt-4 text-base text-zinc-300 font-light leading-relaxed">
            {{ service.heroTagline }}
          </p>
        </div>

        <!-- Details Grid -->
        <div class="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
          
          <div class="space-y-10">
            <!-- Overview -->
            <div>
              <h2 class="text-xl font-bold uppercase tracking-wider text-white">Overview</h2>
              <p class="mt-3 text-sm text-zinc-400 leading-relaxed font-light">
                {{ service.overview }}
              </p>
            </div>

            <!-- Key Benefits -->
            <div>
              <h2 class="text-xl font-bold uppercase tracking-wider text-white mb-4">Key Value Benefits</h2>
              <div class="space-y-3">
                <div v-for="(b, i) in service.benefits" :key="i" class="flex items-start gap-3 rounded-2xl border border-white/5 bg-[#08080C] p-4 text-xs text-zinc-200">
                  <CheckCircle2 :size="18" class="text-[#D4AF37] shrink-0 mt-0.5" />
                  <span>{{ b }}</span>
                </div>
              </div>
            </div>

            <!-- Tech Stack -->
            <div>
              <h2 class="text-xl font-bold uppercase tracking-wider text-white mb-4">Technologies & Frameworks</h2>
              <div class="flex flex-wrap gap-2">
                <span v-for="t in service.techStack" :key="t" class="rounded-xl border border-[#D4AF37]/30 bg-[#12121A] px-4 py-2 text-xs font-mono text-[#FCF6BA]">
                  {{ t }}
                </span>
              </div>
            </div>
          </div>

          <!-- Sidebar: Deliverables & CTA -->
          <div class="space-y-6">
            <div class="rounded-3xl border border-white/10 bg-[#08080C] p-6">
              <h3 class="text-xs uppercase tracking-widest font-bold text-[#D4AF37]">Included Deliverables</h3>
              <ul class="mt-4 space-y-3">
                <li v-for="(d, i) in service.deliverables" :key="i" class="flex items-start gap-2.5 text-xs text-zinc-300">
                  <span class="h-1.5 w-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0"></span>
                  <span>{{ d }}</span>
                </li>
              </ul>

              <div class="mt-8 border-t border-white/5 pt-6">
                <RouterLink
                  to="/contact"
                  class="block w-full rounded-xl bg-gradient-to-r from-[#BF953F] to-[#AA771C] py-3.5 text-center text-xs font-bold uppercase tracking-widest text-black shadow-lg shadow-[#D4AF37]/20 hover:scale-105 transition"
                >
                  Request {{ service.title }} Proposal
                </RouterLink>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>

    <Footer />
  </div>
</template>
