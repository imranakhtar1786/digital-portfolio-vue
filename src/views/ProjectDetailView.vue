<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { Sparkles, ExternalLink, ArrowLeft, CheckCircle2, ShieldAlert, Cpu, Layers, Code } from 'lucide-vue-next'
import { projects } from '@/data/projects.js'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CursorGlow from '@/components/common/CursorGlow.vue'

const route = useRoute()

const project = computed(() => {
  return projects.find(p => p.id === route.params.id) || projects[0]
})
</script>

<template>
  <div class="relative min-h-screen bg-[#030303] text-white">
    <CursorGlow />
    <Header />

    <main class="pt-32 pb-24" v-if="project">
      <div class="mx-auto w-[90%] max-w-5xl">
        
        <RouterLink to="/projects" class="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D4AF37] hover:underline mb-8">
          <ArrowLeft :size="14" />
          <span>Back to All 11 Projects</span>
        </RouterLink>

        <!-- Project Hero Card -->
        <div class="rounded-3xl border border-[#D4AF37]/40 bg-[#08080C] p-8 sm:p-12 shadow-2xl">
          <div class="flex items-center justify-between flex-wrap gap-4">
            <div class="flex items-center gap-3">
              <span class="rounded-full border border-[#D4AF37]/50 bg-[#14141E] px-4 py-1.5 text-xs font-mono text-[#D4AF37] uppercase">
                {{ project.category }}
              </span>
              <span class="text-xs font-mono text-zinc-500">Status: {{ project.status }} ({{ project.year }})</span>
            </div>

            <a
              :href="project.links.demo"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-black shadow-lg shadow-[#D4AF37]/30 hover:scale-105 transition"
            >
              <span>Visit Live Website</span>
              <ExternalLink :size="14" />
            </a>
          </div>

          <h1 class="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl uppercase text-white">
            {{ project.title }}
          </h1>

          <p class="mt-4 text-base text-zinc-300 font-light leading-relaxed">
            {{ project.description }}
          </p>

          <!-- Tech Stack Pills -->
          <div class="mt-8 flex flex-wrap gap-2 border-t border-white/5 pt-6">
            <span v-for="t in project.tech" :key="t" class="rounded-xl border border-white/10 bg-[#12121A] px-3.5 py-1.5 text-xs font-mono text-[#FCF6BA]">
              {{ t }}
            </span>
          </div>
        </div>

        <!-- Detail Breakdown Grid -->
        <div class="mt-12 grid gap-8 lg:grid-cols-2">
          
          <!-- Architecture Box -->
          <div class="rounded-3xl border border-white/10 bg-[#08080C] p-8">
            <div class="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-[#D4AF37]">
              <Cpu :size="18" />
              <span>System Architecture</span>
            </div>
            <p class="mt-4 text-xs leading-relaxed text-zinc-300 font-light">
              {{ project.architecture }}
            </p>
          </div>

          <!-- Challenges & Solutions Box -->
          <div class="rounded-3xl border border-white/10 bg-[#08080C] p-8">
            <div class="flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-[#FCF6BA]">
              <ShieldAlert :size="18" />
              <span>Technical Challenges Overcome</span>
            </div>
            <p class="mt-4 text-xs leading-relaxed text-zinc-300 font-light">
              {{ project.challenges }}
            </p>
          </div>

        </div>

        <!-- Key Features Checklist -->
        <div class="mt-10 rounded-3xl border border-white/10 bg-[#08080C] p-8 sm:p-10">
          <h3 class="text-base font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
            <Sparkles :size="18" class="text-[#D4AF37]" />
            <span>Key Feature Deliverables</span>
          </h3>

          <div class="grid gap-4 sm:grid-cols-2">
            <div v-for="(feat, i) in project.features" :key="i" class="flex items-start gap-3 rounded-2xl border border-white/5 bg-[#0F0F14] p-4 text-xs text-zinc-200">
              <CheckCircle2 :size="18" class="text-[#D4AF37] shrink-0 mt-0.5" />
              <span>{{ feat }}</span>
            </div>
          </div>
        </div>

      </div>
    </main>

    <Footer />
  </div>
</template>
