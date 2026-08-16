<script setup>
import { ref, watch } from 'vue'
import { X, ExternalLink, Sparkles, CheckCircle2, ArrowRight, Shield, Layers, Code, Cpu } from 'lucide-vue-next'

const props = defineProps({
  isOpen: Boolean,
  project: Object
})

const emit = defineEmits(['close'])

const activeTab = ref('overview')

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
    activeTab.value = 'overview'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen && project" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <!-- Backdrop -->
      <div 
        @click="emit('close')"
        class="absolute inset-0 bg-black/85 backdrop-blur-2xl transition-opacity"
      ></div>

      <!-- Modal Content Window -->
      <div class="relative z-10 flex h-full max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-[#D4AF37]/40 bg-[#08080B] text-white shadow-[0_0_80px_rgba(212,175,55,0.15)]">
        
        <!-- Modal Header -->
        <div class="flex items-center justify-between border-b border-white/10 px-6 py-5 sm:px-8">
          <div class="flex items-center gap-3">
            <span class="rounded-full border border-[#D4AF37]/40 bg-[#14141A] px-3 py-1 text-[10px] uppercase tracking-widest text-[#D4AF37]">
              {{ project.category }}
            </span>
            <span class="text-xs text-zinc-500 font-mono">Case Study // {{ project.year || '2026' }}</span>
          </div>

          <button 
            @click="emit('close')"
            class="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#121216] text-zinc-400 transition hover:border-[#D4AF37] hover:text-white"
          >
            <X :size="18" />
          </button>
        </div>

        <!-- Scrollable Modal Body -->
        <div class="flex-1 overflow-y-auto px-6 py-8 sm:px-10">
          
          <!-- Hero Section inside Modal -->
          <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                {{ project.title }}
              </h2>
              <p class="mt-4 text-base leading-relaxed text-zinc-300 font-light">
                {{ project.fullDescription || project.description }}
              </p>

              <!-- Impact metric banner -->
              <div class="mt-6 inline-flex items-center gap-3 rounded-2xl border border-[#D4AF37]/30 bg-gradient-to-r from-[#18150D] to-[#0A0A0E] px-5 py-3">
                <Sparkles :size="18" class="text-[#D4AF37]" />
                <div>
                  <span class="text-xs text-zinc-400 uppercase tracking-wider block">Key Performance Result</span>
                  <span class="text-lg font-bold text-[#FCF6BA]">{{ project.metric }}</span>
                </div>
              </div>
            </div>

            <!-- Project Specs Box -->
            <div class="rounded-2xl border border-white/10 bg-[#0F0F14] p-6">
              <h3 class="text-xs uppercase tracking-[0.2em] font-semibold text-[#D4AF37]">Project Specifications</h3>
              
              <dl class="mt-4 space-y-4 text-xs">
                <div class="flex justify-between border-b border-white/5 pb-2">
                  <dt class="text-zinc-500">Client Industry</dt>
                  <dd class="font-medium text-zinc-200">{{ project.industry || 'Luxury & Technology' }}</dd>
                </div>
                <div class="flex justify-between border-b border-white/5 pb-2">
                  <dt class="text-zinc-500">Execution Scope</dt>
                  <dd class="font-medium text-zinc-200">{{ project.scope || 'Full Digital Architecture' }}</dd>
                </div>
                <div class="flex justify-between border-b border-white/5 pb-2">
                  <dt class="text-zinc-500">Timeline</dt>
                  <dd class="font-medium text-zinc-200">{{ project.timeline || '8 Weeks' }}</dd>
                </div>
                <div class="flex justify-between">
                  <dt class="text-zinc-500">Tech Ecosystem</dt>
                  <dd class="font-medium text-[#D4AF37]">{{ project.techStack?.join(', ') || 'Vue 3, Three.js, GSAP' }}</dd>
                </div>
              </dl>
            </div>
          </div>

          <!-- Visual Showcase Frame -->
          <div class="mt-10 overflow-hidden rounded-2xl border border-[#D4AF37]/30 bg-[#050507] p-2">
            <div class="relative aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#121218] via-[#08080C] to-[#1A180E] flex items-center justify-center">
              <img v-if="project.image" :src="project.image" :alt="project.title" class="h-full w-full object-cover" />
              
              <div v-else class="text-center p-8">
                <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#12121A] text-[#D4AF37] mb-4">
                  <Layers :size="32" />
                </div>
                <h4 class="text-lg font-bold text-white">{{ project.title }} Flagship Interface</h4>
                <p class="mt-1 text-xs text-zinc-400 max-w-md mx-auto">Interactive 3D WebGL architecture rendering live metrics, custom shader material controls, and spatial layout system.</p>
              </div>
            </div>
          </div>

          <!-- Case Study Tabs -->
          <div class="mt-10">
            <div class="flex border-b border-white/10 gap-6">
              <button 
                @click="activeTab = 'overview'"
                class="pb-3 text-xs uppercase tracking-widest font-semibold transition"
                :class="activeTab === 'overview' ? 'border-b-2 border-[#D4AF37] text-[#D4AF37]' : 'text-zinc-500 hover:text-zinc-300'"
              >
                Strategy & Execution
              </button>
              <button 
                @click="activeTab = 'tech'"
                class="pb-3 text-xs uppercase tracking-widest font-semibold transition"
                :class="activeTab === 'tech' ? 'border-b-2 border-[#D4AF37] text-[#D4AF37]' : 'text-zinc-500 hover:text-zinc-300'"
              >
                Engineering Details
              </button>
              <button 
                @click="activeTab = 'deliverables'"
                class="pb-3 text-xs uppercase tracking-widest font-semibold transition"
                :class="activeTab === 'deliverables' ? 'border-b-2 border-[#D4AF37] text-[#D4AF37]' : 'text-zinc-500 hover:text-zinc-300'"
              >
                Key Deliverables
              </button>
            </div>

            <!-- Tab Content -->
            <div class="mt-6 text-sm text-zinc-300">
              <div v-if="activeTab === 'overview'" class="space-y-4">
                <p class="leading-relaxed">
                  Our team redefined the brand's digital paradigm by architecting a custom WebGL micro-frontend platform. We replaced traditional flat interfaces with real-time 3D interactive viewports, reducing page load latency by 68% while increasing user session duration by 4.2x.
                </p>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div class="rounded-xl border border-white/5 bg-[#0F0F14] p-4">
                    <h5 class="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">The Challenge</h5>
                    <p class="mt-2 text-xs text-zinc-400">Outdated legacy architecture failed to convey high-end brand prestige, suffering high bounce rates on product customization steps.</p>
                  </div>
                  <div class="rounded-xl border border-white/5 bg-[#0F0F14] p-4">
                    <h5 class="text-xs uppercase tracking-wider text-[#FCF6BA] font-semibold">The Solution</h5>
                    <p class="mt-2 text-xs text-zinc-400">Engineered a custom Three.js spatial canvas combined with liquid smooth GSAP micro-animations and zero-layout-shift Vue components.</p>
                  </div>
                </div>
              </div>

              <div v-if="activeTab === 'tech'" class="space-y-3">
                <div class="flex items-start gap-3">
                  <Cpu :size="18" class="text-[#D4AF37] mt-0.5" />
                  <div>
                    <strong class="text-white">Spatial Shader Pipeline:</strong>
                    <p class="text-xs text-zinc-400">Custom GLSL fragment shaders for metallic liquid reflections, depth mapping, and dynamic particle lighting.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <Code :size="18" class="text-[#D4AF37] mt-0.5" />
                  <div>
                    <strong class="text-white">State & Performance Optimization:</strong>
                    <p class="text-xs text-zinc-400">Vue 3 Composition API with sub-millisecond reactive state sync and Web Workers for complex math calculations.</p>
                  </div>
                </div>
              </div>

              <div v-if="activeTab === 'deliverables'" class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div v-for="(item, i) in (project.deliverables || ['3D Configurator Engine', 'Bespoke UI Design System', 'Global CDN & API Mesh', 'Analytics & Telemetry Dashboard'])" :key="i" class="flex items-center gap-3 rounded-xl border border-white/5 bg-[#0D0D12] p-3 text-xs text-zinc-200">
                  <CheckCircle2 :size="16" class="text-[#D4AF37]" />
                  <span>{{ item }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Modal Footer -->
        <div class="flex items-center justify-between border-t border-white/10 px-6 py-4 sm:px-8 bg-[#050507]">
          <span class="text-xs text-zinc-500 font-mono">VALENCE Digital Flagship</span>
          
          <button 
            @click="emit('close')"
            class="flex items-center gap-2 rounded-xl bg-[#1A1A22] border border-[#D4AF37]/30 px-5 py-2.5 text-xs font-semibold text-white hover:border-[#D4AF37] transition"
          >
            <span>Close Case Study</span>
          </button>
        </div>

      </div>
    </div>
  </Transition>
</template>
