<script setup>
import { ref, computed } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'

import {
  BrainCircuit,
  Compass,
  Layers3,
  Code2,
  Database,
  Rocket,
  ArrowUpRight,
  Sparkles,
} from 'lucide-vue-next'

const activeLayer = ref(0)

const layers = [
  {
    id: '01',
    key: 'strategy',
    title: 'Strategy',
    label: 'Understand',
    description:
      'Every strong product starts with clarity. We understand your business, audience, goals, and opportunities before writing a single line of code.',
    icon: Compass,
    stats: ['Research', 'Planning', 'Positioning'],
  },
  {
    id: '02',
    key: 'experience',
    title: 'Experience',
    label: 'Design',
    description:
      'We turn strategy into interfaces that are intuitive, distinctive, and designed around how real people interact with your product.',
    icon: Layers3,
    stats: ['UI / UX', 'Interaction', 'Motion'],
  },
  {
    id: '03',
    key: 'engineering',
    title: 'Engineering',
    label: 'Build',
    description:
      'Scalable frontend, backend, APIs, databases, and infrastructure come together as one reliable digital system.',
    icon: Code2,
    stats: ['Frontend', 'Backend', 'Architecture'],
  },
  {
    id: '04',
    key: 'intelligence',
    title: 'Intelligence',
    label: 'Connect',
    description:
      'Data, automation, integrations, and intelligent workflows turn your product from a simple application into a connected business engine.',
    icon: BrainCircuit,
    stats: ['Automation', 'Data', 'Integrations'],
  },
  {
    id: '05',
    key: 'scale',
    title: 'Scale',
    label: 'Evolve',
    description:
      'Launch is only the beginning. We optimize performance, infrastructure, and product capabilities as your business grows.',
    icon: Rocket,
    stats: ['Performance', 'Infrastructure', 'Growth'],
  },
]

const currentLayer = computed(() => layers[activeLayer.value])

const setActiveLayer = (index) => {
  activeLayer.value = index
}
</script>

<template>
  <section
    id="philosophy"
    class="relative overflow-hidden border-t border-white/[0.06] bg-[#030303] py-24 text-white sm:py-32"
  >
    <!-- BACKGROUND -->

    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[140px]"
    />

    <div
      class="pointer-events-none absolute inset-0 opacity-[0.025]"
      style="
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
        background-size: 80px 80px;
      "
    />

    <div class="relative z-10 mx-auto w-[90%] max-w-7xl">
      <!-- ================================================= -->
      <!-- HEADER -->
      <!-- ================================================= -->

      <div class="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
        <Motion
          :initial="{ opacity: 0, x: -30 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.6 }"
        >
          <div>
            <div
              class="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]"
            >
              <Sparkles :size="13" />

              <span>Our Philosophy</span>
            </div>

            <div class="mt-6 flex items-center gap-3">
              <span class="h-px w-12 bg-[#D4AF37]/50" />

              <span class="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                Digital Architecture
              </span>
            </div>
          </div>
        </Motion>

        <Motion
          :initial="{ opacity: 0, y: 35 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.7, delay: 0.1 }"
        >
          <div>
            <h2
              class="max-w-5xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl"
            >
              We Don't Just Build
              <span class="text-[#D4AF37]"> Websites.</span>

              <br />

              We Build
              <span class="text-zinc-500"> Systems.</span>
            </h2>

            <p class="mt-7 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              From the first idea to a product capable of supporting millions of interactions, every
              layer is engineered to work together.
            </p>
          </div>
        </Motion>
      </div>

      <!-- ================================================= -->
      <!-- DIGITAL ENGINE -->
      <!-- ================================================= -->

      <div class="mt-16 grid gap-8 lg:mt-24 lg:grid-cols-[1fr_0.9fr]">
        <!-- LEFT SYSTEM -->

        <Motion
          :initial="{ opacity: 0, scale: 0.96, y: 30 }"
          :while-in-view="{ opacity: 1, scale: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.15 }"
          :transition="{ duration: 0.8 }"
          class="relative min-h-[600px] overflow-hidden rounded-[2rem] border border-white/[0.07] bg-[#060608] sm:min-h-[640px]"
        >
          <!-- GRID -->

          <div
            class="pointer-events-none absolute inset-0 opacity-[0.025]"
            style="
              background-image:
                linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px);
              background-size: 40px 40px;
            "
          />

          <!-- TOP LABEL -->

          <Motion
            :initial="{ opacity: 0, y: -15 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.5, delay: 0.2 }"
            class="absolute left-5 top-5 z-30 flex items-center gap-3 sm:left-6 sm:top-6"
          >
            <div
              class="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]"
            >
              <Database :size="14" class="text-[#D4AF37]" />
            </div>

            <div>
              <p class="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                System Architecture
              </p>

              <p class="mt-1 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                Digital Engine / v1.0
              </p>
            </div>
          </Motion>

          <!-- CONNECTIONS -->

          <div
            class="pointer-events-none absolute bottom-24 left-1/2 top-28 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#D4AF37]/20 to-transparent sm:block"
          />

          <div
            class="pointer-events-none absolute left-[18%] right-1/2 top-[31%] hidden h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent sm:block"
          />

          <div
            class="pointer-events-none absolute left-1/2 right-[18%] top-[31%] hidden h-px bg-gradient-to-l from-transparent via-[#D4AF37]/20 to-transparent sm:block"
          />

          <div
            class="pointer-events-none absolute bottom-[28%] left-[18%] right-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent sm:block"
          />

          <div
            class="pointer-events-none absolute bottom-[28%] left-1/2 right-[18%] hidden h-px bg-gradient-to-l from-transparent via-[#D4AF37]/20 to-transparent sm:block"
          />

          <!-- CENTRAL CORE -->

          <Motion
            :initial="{ opacity: 0, scale: 0.7 }"
            :while-in-view="{ opacity: 1, scale: 1 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.8, delay: 0.25 }"
            class="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <div
              class="absolute -inset-28 animate-[spin_24s_linear_infinite] rounded-full border border-[#D4AF37]/[0.06]"
            />

            <div class="absolute -inset-20 rounded-full border border-[#D4AF37]/10" />

            <div class="absolute -inset-12 rounded-full border border-[#D4AF37]/10" />

            <div class="absolute -inset-6 rounded-full border border-[#D4AF37]/20" />

            <div class="absolute -inset-24 rounded-full bg-[#D4AF37]/10 blur-[70px]" />

            <div
              class="relative flex h-32 w-32 flex-col items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#09090B] shadow-[0_0_60px_rgba(212,175,55,0.12)]"
            >
              <div class="absolute inset-3 rounded-full border border-[#D4AF37]/10" />

              <div
                class="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/[0.06]"
              >
                <span
                  class="h-2 w-2 animate-pulse rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.9)]"
                />
              </div>

              <span
                class="relative mt-3 font-mono text-[8px] uppercase tracking-[0.25em] text-[#D4AF37]"
              >
                Core
              </span>
            </div>
          </Motion>

          <!-- LAYER 01 -->

          <Motion
            :initial="{ opacity: 0, x: -30 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.5, delay: 0.25 }"
            class="absolute left-5 top-[27%] z-30 sm:left-8 md:left-12"
          >
            <button
              type="button"
              class="group flex items-center gap-3 text-left"
              @click="setActiveLayer(0)"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 sm:h-14 sm:w-14"
                :class="
                  activeLayer === 0
                    ? 'border-[#D4AF37]/60 bg-[#D4AF37]/[0.08] text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.12)]'
                    : 'border-white/[0.08] bg-[#09090B] text-zinc-600 group-hover:border-white/20 group-hover:text-zinc-300'
                "
              >
                <Compass :size="20" />
              </div>

              <div>
                <span
                  class="font-mono text-[8px] tracking-widest"
                  :class="activeLayer === 0 ? 'text-[#D4AF37]' : 'text-zinc-700'"
                >
                  01
                </span>

                <p
                  class="mt-1 text-xs font-bold uppercase"
                  :class="activeLayer === 0 ? 'text-white' : 'text-zinc-500'"
                >
                  Strategy
                </p>
              </div>
            </button>
          </Motion>

          <!-- LAYER 02 -->

          <Motion
            :initial="{ opacity: 0, x: 30 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.5, delay: 0.35 }"
            class="absolute right-5 top-[27%] z-30 sm:right-8 md:right-12"
          >
            <button
              type="button"
              class="group flex items-center gap-3 text-right"
              @click="setActiveLayer(1)"
            >
              <div>
                <span
                  class="font-mono text-[8px] tracking-widest"
                  :class="activeLayer === 1 ? 'text-[#D4AF37]' : 'text-zinc-700'"
                >
                  02
                </span>

                <p
                  class="mt-1 text-xs font-bold uppercase"
                  :class="activeLayer === 1 ? 'text-white' : 'text-zinc-500'"
                >
                  Experience
                </p>
              </div>

              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 sm:h-14 sm:w-14"
                :class="
                  activeLayer === 1
                    ? 'border-[#D4AF37]/60 bg-[#D4AF37]/[0.08] text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.12)]'
                    : 'border-white/[0.08] bg-[#09090B] text-zinc-600 group-hover:border-white/20 group-hover:text-zinc-300'
                "
              >
                <Layers3 :size="20" />
              </div>
            </button>
          </Motion>

          <!-- LAYER 03 -->

          <Motion
            :initial="{ opacity: 0, x: -30 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.5, delay: 0.45 }"
            class="absolute bottom-[23%] left-5 z-30 sm:left-8 md:left-12"
          >
            <button
              type="button"
              class="group flex items-center gap-3 text-left"
              @click="setActiveLayer(2)"
            >
              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 sm:h-14 sm:w-14"
                :class="
                  activeLayer === 2
                    ? 'border-[#D4AF37]/60 bg-[#D4AF37]/[0.08] text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.12)]'
                    : 'border-white/[0.08] bg-[#09090B] text-zinc-600 group-hover:border-white/20 group-hover:text-zinc-300'
                "
              >
                <Code2 :size="20" />
              </div>

              <div>
                <span
                  class="font-mono text-[8px] tracking-widest"
                  :class="activeLayer === 2 ? 'text-[#D4AF37]' : 'text-zinc-700'"
                >
                  03
                </span>

                <p
                  class="mt-1 text-xs font-bold uppercase"
                  :class="activeLayer === 2 ? 'text-white' : 'text-zinc-500'"
                >
                  Engineering
                </p>
              </div>
            </button>
          </Motion>

          <!-- LAYER 04 -->

          <Motion
            :initial="{ opacity: 0, x: 30 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.5, delay: 0.55 }"
            class="absolute bottom-[23%] right-5 z-30 sm:right-8 md:right-12"
          >
            <button
              type="button"
              class="group flex items-center gap-3 text-right"
              @click="setActiveLayer(3)"
            >
              <div>
                <span
                  class="font-mono text-[8px] tracking-widest"
                  :class="activeLayer === 3 ? 'text-[#D4AF37]' : 'text-zinc-700'"
                >
                  04
                </span>

                <p
                  class="mt-1 text-xs font-bold uppercase"
                  :class="activeLayer === 3 ? 'text-white' : 'text-zinc-500'"
                >
                  Intelligence
                </p>
              </div>

              <div
                class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-500 sm:h-14 sm:w-14"
                :class="
                  activeLayer === 3
                    ? 'border-[#D4AF37]/60 bg-[#D4AF37]/[0.08] text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.12)]'
                    : 'border-white/[0.08] bg-[#09090B] text-zinc-600 group-hover:border-white/20 group-hover:text-zinc-300'
                "
              >
                <BrainCircuit :size="20" />
              </div>
            </button>
          </Motion>

          <!-- LAYER 05 -->

          <Motion
            :initial="{ opacity: 0, y: 30 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.5, delay: 0.65 }"
            class="absolute bottom-7 left-1/2 z-30 -translate-x-1/2"
          >
            <button
              type="button"
              class="group flex flex-col items-center"
              @click="setActiveLayer(4)"
            >
              <div
                class="flex h-12 w-12 items-center justify-center rounded-2xl border transition-all duration-500 sm:h-14 sm:w-14"
                :class="
                  activeLayer === 4
                    ? 'border-[#D4AF37]/60 bg-[#D4AF37]/[0.08] text-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.12)]'
                    : 'border-white/[0.08] bg-[#09090B] text-zinc-600 group-hover:border-white/20 group-hover:text-zinc-300'
                "
              >
                <Rocket :size="20" />
              </div>

              <span
                class="mt-2 font-mono text-[8px] tracking-widest"
                :class="activeLayer === 4 ? 'text-[#D4AF37]' : 'text-zinc-700'"
              >
                05 / SCALE
              </span>
            </button>
          </Motion>

          <!-- STATUS -->

          <div
            class="absolute bottom-4 left-5 right-5 flex items-center justify-between border-t border-white/[0.05] pt-4 sm:left-6 sm:right-6"
          >
            <span class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-700">
              Input → Process → Output
            </span>

            <span
              class="flex items-center gap-2 font-mono text-[7px] uppercase tracking-widest text-[#D4AF37]/60"
            >
              <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D4AF37]" />
              System Online
            </span>
          </div>
        </Motion>

        <!-- ================================================= -->
        <!-- RIGHT CONTENT -->
        <!-- ================================================= -->

        <Motion
          :initial="{ opacity: 0, x: 35 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :viewport="{ once: true, amount: 0.15 }"
          :transition="{ duration: 0.7, delay: 0.15 }"
          class="flex flex-col"
        >
          <div class="flex items-center justify-between">
            <span class="font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]/70">
              Layer / {{ currentLayer.id }}
            </span>

            <ArrowUpRight :size="18" class="text-zinc-700" />
          </div>

          <!-- ANIMATED ACTIVE CONTENT -->

          <AnimatePresence mode="wait">
            <Motion
              :key="currentLayer.key"
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :exit="{ opacity: 0, y: -15 }"
              :transition="{ duration: 0.35 }"
              class="mt-8"
            >
              <p class="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                {{ currentLayer.label }}
              </p>

              <h3
                class="mt-3 text-4xl font-black uppercase tracking-[-0.05em] text-white sm:text-5xl"
              >
                {{ currentLayer.title }}
                <span class="text-[#D4AF37]">.</span>
              </h3>

              <p class="mt-6 max-w-xl text-sm leading-[1.9] text-zinc-500">
                {{ currentLayer.description }}
              </p>

              <div
                class="my-8 h-px w-full bg-gradient-to-r from-[#D4AF37]/30 via-white/5 to-transparent"
              />

              <div>
                <p class="font-mono text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                  Layer Capabilities
                </p>

                <div class="mt-4 grid gap-2 sm:grid-cols-3">
                  <Motion
                    v-for="(stat, index) in currentLayer.stats"
                    :key="stat"
                    :initial="{ opacity: 0, y: 15 }"
                    :animate="{ opacity: 1, y: 0 }"
                    :transition="{ duration: 0.3, delay: index * 0.08 }"
                    class="rounded-xl border border-white/[0.06] bg-white/[0.015] px-4 py-4 transition-all duration-300 hover:border-[#D4AF37]/20"
                  >
                    <span class="block text-xs font-medium text-zinc-300">
                      {{ stat }}
                    </span>

                    <span
                      class="mt-2 block font-mono text-[8px] uppercase tracking-widest text-zinc-700"
                    >
                      Integrated
                    </span>
                  </Motion>
                </div>
              </div>
            </Motion>
          </AnimatePresence>

          <!-- NAVIGATION -->

          <div class="mt-auto pt-10">
            <div
              class="flex items-center justify-between rounded-2xl border border-white/[0.06] bg-[#070709] p-4"
            >
              <div class="flex items-center gap-3">
                <span class="font-mono text-[9px] text-zinc-700">
                  {{ currentLayer.id }}
                </span>

                <div class="h-px w-8 bg-white/10" />

                <span class="font-mono text-[9px] uppercase tracking-widest text-zinc-600">
                  Explore System
                </span>
              </div>

              <div class="flex gap-1.5">
                <button
                  v-for="(layer, index) in layers"
                  :key="layer.id"
                  type="button"
                  class="h-1.5 rounded-full transition-all duration-300"
                  :class="
                    activeLayer === index ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-zinc-800 hover:bg-zinc-600'
                  "
                  :aria-label="`View ${layer.title}`"
                  :aria-current="activeLayer === index ? 'true' : undefined"
                  @click="setActiveLayer(index)"
                />
              </div>
            </div>
          </div>
        </Motion>
      </div>

      <!-- ================================================= -->
      <!-- RESULT -->
      <!-- ================================================= -->

      <Motion
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 0.6 }"
        class="mt-8 overflow-hidden rounded-2xl border border-[#D4AF37]/10 bg-[#070709]"
      >
        <div class="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <p class="font-mono text-[9px] uppercase tracking-[0.25em] text-[#D4AF37]/60">
              The Result
            </p>

            <p class="mt-3 text-lg font-bold tracking-tight text-white sm:text-xl">
              One connected system.

              <span class="text-zinc-600"> Built to move your business forward. </span>
            </p>
          </div>

          <div class="flex shrink-0 items-center gap-3">
            <div
              class="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02]"
            >
              <Database :size="16" class="text-[#D4AF37]" />
            </div>

            <div>
              <p class="font-mono text-[8px] uppercase tracking-widest text-zinc-700">
                Architecture
              </p>

              <p class="mt-1 font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                Connected / Scalable
              </p>
            </div>
          </div>
        </div>
      </Motion>
    </div>
  </section>
</template>
