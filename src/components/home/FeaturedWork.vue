<script setup>
import { ref, computed } from 'vue'
import { ArrowUpRight, Sparkles, Layers, Eye } from 'lucide-vue-next'
import ProjectModal from './ProjectModal.vue'

const selectedCategory = ref('All')
const selectedProject = ref(null)
const isModalOpen = ref(false)

const categories = ['All', 'Spatial AI', 'Luxury E-Commerce', 'Spatial Computing', 'Web3 Fintech']

const projects = [
  {
    id: 1,
    title: 'ASTRA OS v7.1 — Spatial AI Command',
    category: 'Spatial AI',
    metric: '+340% Processing Speed',
    description: 'Orbital trajectory visualizer and predictive neural modeling platform built for deep space operations & autonomous logistics.',
    fullDescription: 'ASTRA OS v7.1 is a spatial computing interface designed to monitor deep space satellite clusters and execute real-time neural predictive modeling. Built with custom WebGL shader passes and liquid gold data visualizers.',
    image: '/projects/project_aether_ai.png',
    industry: 'Aerospace & AI',
    scope: 'Spatial Interface & WebGL System',
    timeline: '10 Weeks',
    techStack: ['Vue 3', 'Three.js', 'GLSL Shaders', 'WebSockets', 'Tailwind CSS'],
    deliverables: ['Spatial 3D Viewport', 'Real-time Telemetry Engine', 'Custom Dark UI Kit', 'Sub-millisecond State Sync']
  },
  {
    id: 2,
    title: 'SOLARIS — Bespoke 3D Horology Engine',
    category: 'Luxury E-Commerce',
    metric: '$42M Direct Digital Revenue',
    description: 'Interactive 3D mechanical timepiece configurator featuring GLSL liquid gold metallic shaders and instant custom chronograph ordering.',
    fullDescription: 'SOLARIS brings traditional Swiss horology into the digital era with a 60 FPS WebGL rendering engine. Clients customize bezel alloys, tourbillon movements, and leather straps in high-definition 3D preview.',
    image: null,
    industry: 'High Horology & Luxury',
    scope: '3D Configurator & Commerce Engine',
    timeline: '8 Weeks',
    techStack: ['Vue 3', 'Three.js', 'GSAP', 'WebGL', 'Stripe Premier'],
    deliverables: ['60FPS 3D Configurator', 'Custom Metal Shaders', 'Bespoke Checkout Flow', 'AR Watch Preview']
  },
  {
    id: 3,
    title: 'HYPERION — Electric Hypercar Telemetry',
    category: 'Spatial Computing',
    metric: '0.02ms Telemetry Latency',
    description: 'Next-generation spatial cockpit software for high-speed autonomous electric vehicles with real-time aerodynamics simulation.',
    fullDescription: 'Engineered for a European luxury automotive manufacturer, HYPERION fuses vehicle telemetry, predictive battery thermal mapping, and spatial heads-up display controls into one fluid dashboard.',
    image: null,
    industry: 'Automotive & EV',
    scope: 'Cockpit OS & Telemetry Suite',
    timeline: '12 Weeks',
    techStack: ['Vue 3', 'WebGL Canvas', 'Rust WebAssembly', 'Tailwind CSS'],
    deliverables: ['Real-time 3D Telemetry', 'Thermal Mapping Mesh', 'Cockpit HMI Architecture']
  },
  {
    id: 4,
    title: 'AETHERIA CAPITAL — Institutional Wealth OS',
    category: 'Web3 Fintech',
    metric: '$1.2B Assets Managed',
    description: 'Ultra-secure institutional wealth portal combining glassmorphism dashboards with multi-sig cryptographic transaction visualizers.',
    fullDescription: 'AETHERIA CAPITAL provides family offices and sovereign wealth funds with real-time portfolio stress testing, multi-chain liquidity visualizers, and institutional grade zero-knowledge proof verification.',
    image: null,
    industry: 'Institutional Finance',
    scope: 'Wealth Management Portal',
    timeline: '6 Weeks',
    techStack: ['Vue 3', 'Chart.js', 'Zero-Knowledge SDK', 'Tailwind CSS'],
    deliverables: ['Glassmorphic Dashboard', 'Multi-sig Transaction Engine', 'Automated Audit Suite']
  }
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return projects
  return projects.filter(p => p.category === selectedCategory.value)
})

const openCaseStudy = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <section id="work" class="relative bg-[#030303] py-28 text-white overflow-hidden">
    <!-- Ambient Gold Background Glow -->
    <div class="pointer-events-none absolute right-0 top-1/3 h-[600px] w-[600px] rounded-full bg-radial from-[#D4AF37]/10 via-transparent to-transparent blur-[160px]"></div>

    <div class="mx-auto w-[90%] max-w-7xl">
      
      <!-- Section Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div class="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            <Sparkles :size="14" />
            <span>Curated Portfolio</span>
          </div>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl uppercase text-silver-gradient">
            FLAGSHIP WORKS<span class="text-[#D4AF37]">.</span>
          </h2>
        </div>

        <!-- Filter Pills -->
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            class="rounded-full border px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-all duration-300"
            :class="
              selectedCategory === cat
                ? 'border-[#D4AF37] bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'border-white/10 bg-[#0A0A0E] text-zinc-400 hover:border-[#D4AF37]/40 hover:text-white'
            "
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="mt-14 grid gap-8 sm:grid-cols-2">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          @click="openCaseStudy(project)"
          class="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#08080B] transition-all duration-500 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] cursor-pointer"
        >
          <!-- Project Visual Banner -->
          <div class="relative aspect-[16/10] w-full overflow-hidden bg-[#050508]">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.title"
              class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            <!-- Fallback Luxury Canvas Artwork for projects without image -->
            <div
              v-else
              class="flex h-full w-full flex-col items-center justify-center p-8 bg-gradient-to-br from-[#121218] via-[#0A0A0E] to-[#1A180F] transition-transform duration-700 group-hover:scale-105"
            >
              <div class="relative flex h-24 w-24 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#0D0D12]/80 backdrop-blur-md shadow-2xl">
                <Layers :size="40" class="text-[#D4AF37] transition-transform duration-500 group-hover:rotate-12" />
                <div class="absolute inset-0 rounded-2xl border border-[#FCF6BA]/20 animate-pulse-glow"></div>
              </div>
              <span class="mt-4 text-xs font-mono tracking-widest text-[#D4AF37] uppercase">{{ project.category }}</span>
            </div>

            <!-- Hover Dark Overlay & Button -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#08080B] via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60"></div>

            <div class="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black">
              <ArrowUpRight :size="18" />
            </div>

            <div class="absolute bottom-4 left-4 z-10">
              <span class="rounded-full border border-[#D4AF37]/50 bg-black/70 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#FCF6BA] backdrop-blur-md">
                {{ project.metric }}
              </span>
            </div>
          </div>

          <!-- Card Content -->
          <div class="flex flex-1 flex-col justify-between p-7">
            <div>
              <span class="text-[11px] font-mono uppercase tracking-widest text-zinc-500">{{ project.category }}</span>
              <h3 class="mt-2 text-xl font-bold tracking-tight text-white group-hover:text-[#FCF6BA] transition-colors">
                {{ project.title }}
              </h3>
              <p class="mt-3 text-xs leading-relaxed text-zinc-400 font-light line-clamp-2">
                {{ project.description }}
              </p>
            </div>

            <div class="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs">
              <span class="text-zinc-500 font-mono">{{ project.techStack ? project.techStack.slice(0, 3).join(' • ') : 'Vue 3 • Three.js' }}</span>
              <span class="flex items-center gap-1 text-[#D4AF37] font-semibold tracking-wider uppercase text-[11px] group-hover:underline">
                <span>Explore Case</span>
                <Eye :size="13" />
              </span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Case Study Modal -->
    <ProjectModal
      :is-open="isModalOpen"
      :project="selectedProject"
      @close="closeModal"
    />
  </section>
</template>
