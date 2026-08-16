<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { Sparkles, ExternalLink, ArrowRight, Search, Layers, Eye } from 'lucide-vue-next'
import { projects } from '@/data/projects.js'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CursorGlow from '@/components/common/CursorGlow.vue'

const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = ['All', 'Full-Stack E-Commerce', 'Digital Marketing & SEO', 'Real Estate Portal', 'Cloud & DevOps', 'Corporate & Engineering']

const filteredProjects = computed(() => {
  return projects.filter(p => {
    const matchesCat = selectedCategory.value === 'All' || p.category === selectedCategory.value
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          p.shortDesc.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          p.tech.some(t => t.toLowerCase().includes(searchQuery.value.toLowerCase()))
    return matchesCat && matchesSearch
  })
})
</script>

<template>
  <div class="relative min-h-screen bg-[#030303] text-white">
    <CursorGlow />
    <Header />

    <main class="pt-32 pb-24">
      <div class="mx-auto w-[90%] max-w-7xl">
        
        <!-- Header -->
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div class="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
              <Sparkles :size="14" />
              <span>Real Client Portfolio</span>
            </div>
            <h1 class="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl uppercase text-silver-gradient">
              DELIVERED PROJECTS (11)<span class="text-[#D4AF37]">.</span>
            </h1>
            <p class="mt-4 text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
              Explore our real-world software engineering, e-commerce, cloud DevOps migrations, real estate platforms, and digital marketing agency deliverables.
            </p>
          </div>

          <!-- Search Input -->
          <div class="relative w-full md:w-80">
            <Search :size="16" class="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search projects or tech stack..."
              class="w-full rounded-2xl border border-white/10 bg-[#08080C] py-3.5 pl-11 pr-4 text-xs text-white placeholder-zinc-500 focus:border-[#D4AF37] focus:outline-none"
            />
          </div>
        </div>

        <!-- Filter Category Pills -->
        <div class="mt-10 flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="selectedCategory = cat"
            class="rounded-full border px-4 py-2 text-xs uppercase tracking-wider font-semibold transition"
            :class="
              selectedCategory === cat
                ? 'border-[#D4AF37] bg-[#D4AF37] text-black shadow-md'
                : 'border-white/10 bg-[#08080C] text-zinc-400 hover:border-[#D4AF37]/40 hover:text-white'
            "
          >
            {{ cat }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="p in filteredProjects"
            :key="p.id"
            class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#08080C] p-7 transition-all duration-500 hover:border-[#D4AF37]/60 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
          >
            <div>
              <div class="flex items-center justify-between">
                <span class="rounded-full border border-[#D4AF37]/40 bg-[#12121A] px-3 py-1 text-[10px] uppercase font-mono text-[#D4AF37]">
                  {{ p.status }} // {{ p.year }}
                </span>

                <a
                  :href="p.links.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#12121A] text-zinc-400 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition"
                  title="Visit Live Website"
                >
                  <ExternalLink :size="15" />
                </a>
              </div>

              <h3 class="mt-5 text-xl font-bold text-white group-hover:text-[#FCF6BA] transition-colors">
                {{ p.title }}
              </h3>

              <p class="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
                {{ p.shortDesc }}
              </p>

              <!-- Tech Badges -->
              <div class="mt-5 flex flex-wrap gap-1.5">
                <span v-for="t in p.tech" :key="t" class="rounded-md border border-white/5 bg-[#121218] px-2 py-0.5 text-[10px] text-zinc-400 font-mono">
                  {{ t }}
                </span>
              </div>
            </div>

            <!-- Card Actions -->
            <div class="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
              <RouterLink
                :to="`/projects/${p.id}`"
                class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#D4AF37] hover:text-[#FCF6BA] transition"
              >
                <span>Read Architecture</span>
                <Eye :size="14" />
              </RouterLink>

              <a
                :href="p.links.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[11px] font-mono text-zinc-500 hover:text-white flex items-center gap-1"
              >
                <span>Live Demo</span>
                <ExternalLink :size="11" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </main>

    <Footer />
  </div>
</template>
