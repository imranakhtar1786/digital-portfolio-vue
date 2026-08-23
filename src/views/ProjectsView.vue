<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import {
  Sparkles,
  ExternalLink,
  ArrowRight,
  Search,
  Eye,
  X,
  BriefcaseBusiness,
  Globe2,
} from 'lucide-vue-next'
import { Motion } from 'motion-v'

import { projects } from '@/data/projects.js'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

const searchQuery = ref('')
const selectedCategory = ref('All')

const categories = [
  'All',
  'Full-Stack E-Commerce',
  'Digital Marketing & SEO',
  'Real Estate Portal',
  'Cloud & DevOps',
  'Corporate & Engineering',
]

const filteredProjects = computed(() => {
  const query = searchQuery.value.toLowerCase().trim()

  return projects.filter((project) => {
    const matchesCategory =
      selectedCategory.value === 'All' || project.category === selectedCategory.value

    const matchesSearch =
      !query ||
      project.title?.toLowerCase().includes(query) ||
      project.shortDesc?.toLowerCase().includes(query) ||
      project.tech?.some((tech) => tech.toLowerCase().includes(query))

    return matchesCategory && matchesSearch
  })
})

const clearSearch = () => {
  searchQuery.value = ''
}

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'All'
}
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#030303] text-white">
    <Header />

    <main class="relative pb-24 pt-28 sm:pt-32">
      <!-- Background Glow -->
      <div
        class="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.035] blur-[140px]"
      ></div>

      <div class="relative mx-auto w-[90%] max-w-7xl">
        <!-- ================= HERO ================= -->

        <Motion
          :initial="{ opacity: 0, y: 40 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, ease: 'easeOut' }"
          class="max-w-4xl"
        >
          <div
            class="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] px-4 py-2"
          >
            <BriefcaseBusiness :size="13" class="text-[#D4AF37]" />

            <span
              class="font-mono text-[9px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]"
            >
              Selected Work
            </span>
          </div>

          <h1
            class="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
          >
            PROJECTS THAT
            <br />

            <span class="text-zinc-500"> TURN IDEAS INTO </span>

            <span class="text-[#D4AF37]"> PRODUCTS. </span>
          </h1>

          <p class="mt-6 max-w-2xl text-sm leading-[1.8] text-zinc-500 sm:text-base">
            A collection of websites, web applications, e-commerce platforms, business systems,
            cloud deployments, and digital solutions built across different industries.
          </p>
        </Motion>

        <!-- ================= SEARCH AREA ================= -->

        <Motion
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.6, delay: 0.1 }"
          class="mt-12 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
        >
          <!-- Project Count -->

          <div>
            <p class="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
              Portfolio Directory
            </p>

            <div class="mt-2 flex items-center gap-2">
              <span class="text-2xl font-black text-white">
                {{ filteredProjects.length }}
              </span>

              <span class="text-xs text-zinc-500">
                {{ filteredProjects.length === 1 ? 'project found' : 'projects found' }}
              </span>
            </div>
          </div>

          <!-- Search -->

          <div class="relative w-full lg:max-w-md">
            <Search :size="16" class="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />

            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search projects or technologies..."
              class="h-12 w-full rounded-xl border border-white/[0.08] bg-[#08080C] pl-11 pr-11 text-xs text-white outline-none transition placeholder:text-zinc-600 focus:border-[#D4AF37]/60 focus:bg-[#0A0A0D]"
            />

            <button
              v-if="searchQuery"
              type="button"
              @click="clearSearch"
              class="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-lg text-zinc-500 transition hover:bg-white/[0.05] hover:text-white"
              aria-label="Clear search"
            >
              <X :size="14" />
            </button>
          </div>
        </Motion>

        <!-- ================= FILTERS ================= -->

        <Motion
          :initial="{ opacity: 0, y: 25 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true }"
          :transition="{ duration: 0.6, delay: 0.15 }"
          class="mt-8 flex flex-wrap gap-2"
        >
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            @click="selectedCategory = category"
            class="rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-300"
            :class="
              selectedCategory === category
                ? 'border-[#D4AF37] bg-[#D4AF37] text-black shadow-[0_0_25px_rgba(212,175,55,0.2)]'
                : 'border-white/[0.08] bg-white/[0.02] text-zinc-500 hover:border-[#D4AF37]/40 hover:text-zinc-200'
            "
          >
            {{ category }}
          </button>
        </Motion>

        <!-- ================= PROJECT GRID ================= -->

        <div v-if="filteredProjects.length" class="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          <Motion
            v-for="(project, index) in filteredProjects"
            :key="project.id"
            :initial="{ opacity: 0, y: 45, scale: 0.98 }"
            :while-in-view="{ opacity: 1, y: 0, scale: 1 }"
            :viewport="{ once: true, amount: 0.1 }"
            :transition="{
              duration: 0.55,
              delay: Math.min(index * 0.06, 0.3),
              ease: 'easeOut',
            }"
            class="group relative"
          >
            <div
              class="relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-[#08080C] transition-all duration-500 hover:-translate-y-2 hover:border-[#D4AF37]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              <!-- Hover Glow -->

              <div
                class="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#D4AF37]/[0.07] blur-[60px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              ></div>

              <!-- Animated Border Light -->

              <div
                class="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent opacity-0 transition-all duration-500 group-hover:via-[#D4AF37]/70 group-hover:opacity-100"
              ></div>

              <div class="relative flex h-full flex-col p-6">
                <!-- TOP -->

                <div class="flex items-start justify-between gap-4">
                  <div
                    class="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] px-3 py-1.5"
                  >
                    <span class="font-mono text-[9px] uppercase tracking-[0.12em] text-[#D4AF37]">
                      {{ project.status }} · {{ project.year }}
                    </span>
                  </div>

                  <a
                    v-if="project.links?.demo"
                    :href="project.links.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.02] text-zinc-500 transition-all duration-300 hover:rotate-6 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black"
                    title="Visit live project"
                  >
                    <ExternalLink :size="15" />
                  </a>
                </div>

                <!-- TITLE -->

                <h2
                  class="mt-7 text-xl font-black tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-[#D4AF37]"
                >
                  {{ project.title }}
                </h2>

                <!-- DESCRIPTION -->

                <p class="mt-3 text-xs leading-[1.8] text-zinc-500">
                  {{ project.shortDesc }}
                </p>

                <!-- TECH STACK -->

                <div class="mt-6 flex flex-wrap gap-1.5">
                  <span
                    v-for="tech in project.tech"
                    :key="tech"
                    class="rounded-lg border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-[9px] font-mono text-zinc-500 transition duration-300 group-hover:border-white/[0.1] group-hover:text-zinc-300"
                  >
                    {{ tech }}
                  </span>
                </div>

                <!-- BOTTOM -->

                <div
                  class="mt-auto flex items-center justify-between border-t border-white/[0.06] pt-5"
                >
                  <RouterLink
                    :to="`/projects/${project.id}`"
                    class="group/link inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.12em] text-[#D4AF37]"
                  >
                    <span>View Project</span>

                    <ArrowRight
                      :size="13"
                      class="transition-transform duration-300 group-hover/link:translate-x-1"
                    />
                  </RouterLink>

                  <a
                    v-if="project.links?.demo"
                    :href="project.links.demo"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex items-center gap-1.5 text-[10px] text-zinc-600 transition hover:text-white"
                  >
                    <Globe2 :size="12" />

                    <span>Live</span>
                  </a>
                </div>
              </div>
            </div>
          </Motion>
        </div>

        <!-- ================= EMPTY STATE ================= -->

        <Motion
          v-else
          :initial="{ opacity: 0, scale: 0.96 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.4 }"
          class="mt-16 rounded-[2rem] border border-white/[0.08] bg-[#08080C] px-6 py-20 text-center"
        >
          <div
            class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] text-[#D4AF37]"
          >
            <Search :size="22" />
          </div>

          <h3 class="mt-6 text-lg font-bold text-white">No projects found</h3>

          <p class="mt-2 text-xs text-zinc-500">
            Try another keyword or select a different category.
          </p>

          <button
            type="button"
            @click="resetFilters"
            class="mt-6 rounded-xl border border-white/[0.1] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-zinc-300 transition hover:border-[#D4AF37]/40 hover:text-white"
          >
            Reset Filters
          </button>
        </Motion>

        <!-- ================= BOTTOM CTA ================= -->

        <Motion
          :initial="{ opacity: 0, y: 40 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.7 }"
          class="relative mt-20 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#070709]"
        >
          <!-- Glow -->

          <div
            class="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#D4AF37]/[0.06] blur-[100px]"
          ></div>

          <div
            class="relative flex flex-col items-start justify-between gap-8 p-8 sm:p-10 lg:flex-row lg:items-center"
          >
            <div>
              <div
                class="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]"
              >
                <Sparkles :size="13" />
                <span>Have a project in mind?</span>
              </div>

              <h2
                class="mt-4 max-w-xl text-2xl font-black uppercase leading-[1] tracking-[-0.04em] sm:text-4xl"
              >
                Let's build something
                <span class="text-[#D4AF37]"> meaningful. </span>
              </h2>

              <p class="mt-4 max-w-xl text-sm leading-[1.7] text-zinc-500">
                From a modern business website to a full-stack application, we can discuss your
                requirements and define the right scope for your project.
              </p>
            </div>

            <RouterLink
              to="/contact"
              class="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#D4AF37] px-6 py-4 text-[10px] font-black uppercase tracking-[0.14em] text-black transition-all duration-300 hover:scale-[1.03] hover:bg-[#E4C55A]"
            >
              <span>Start a Project</span>

              <ArrowRight
                :size="15"
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
