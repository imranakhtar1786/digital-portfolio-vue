<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { motion } from 'motion-v'

import { ArrowUpRight, Sparkles, Code2, Database, Activity, Play } from 'lucide-vue-next'

const emit = defineEmits(['open-estimator'])

/* =========================================================
   HERO MOUSE PARALLAX
========================================================= */

const heroRef = ref(null)

const mouse = ref({
  x: 0,
  y: 0,
})

const smooth = ref({
  x: 0,
  y: 0,
})

let frame = null

const handleMouseMove = (event) => {
  if (!heroRef.value) return

  const rect = heroRef.value.getBoundingClientRect()

  mouse.value = {
    x: ((event.clientX - rect.left) / rect.width - 0.5) * 2,
    y: ((event.clientY - rect.top) / rect.height - 0.5) * 2,
  }
}

const resetMouse = () => {
  mouse.value = {
    x: 0,
    y: 0,
  }
}

const animate = () => {
  smooth.value.x += (mouse.value.x - smooth.value.x) * 0.06
  smooth.value.y += (mouse.value.y - smooth.value.y) * 0.06

  frame = requestAnimationFrame(animate)
}

const parallax = (x = 10, y = 10) => ({
  transform: `
    translate3d(
      ${smooth.value.x * x}px,
      ${smooth.value.y * y}px,
      0
    )
  `,
})

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', resetMouse)

  frame = requestAnimationFrame(animate)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseleave', resetMouse)

  if (frame) cancelAnimationFrame(frame)
})
</script>

<template>
  <section ref="heroRef" class="relative isolate overflow-hidden bg-[#050505] text-white">
    <!-- =====================================================
         BACKGROUND
    ====================================================== -->

    <div class="pointer-events-none absolute inset-0">
      <!-- Gold Ambient Glow -->

      <motion.div
        class="absolute left-1/2 top-[42%] h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.045] blur-[130px]"
        :animate="{
          scale: [1, 1.12, 1],
          opacity: [0.5, 0.9, 0.5],
        }"
        :transition="{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }"
      />

      <!-- Secondary Gold Glow -->

      <motion.div
        class="absolute left-1/2 top-1/2 h-[30vw] w-[30vw] max-h-[400px] max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.025] blur-[100px]"
        :animate="{
          scale: [1.1, 0.9, 1.1],
          x: [-20, 20, -20],
          y: [10, -10, 10],
        }"
        :transition="{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }"
      />

      <!-- Grid -->

      <div
        class="absolute inset-0 opacity-[0.12]"
        style="
          background-image:
            linear-gradient(rgba(212, 175, 55, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.08) 1px, transparent 1px);
          background-size: 64px 64px;
        "
      />

      <!-- Grid Moving Highlight -->

      <motion.div
        class="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#D4AF37]/10 to-transparent"
        :animate="{
          opacity: [0.2, 0.6, 0.2],
        }"
        :transition="{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }"
      />

      <!-- Vignette -->

      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#050505_82%)]"
      />
    </div>

    <!-- =====================================================
         HEADER
    ====================================================== -->

    <motion.header
      class="relative z-30 mx-auto flex h-16 w-[92%] max-w-[1400px] items-center justify-between border-b border-white/10 lg:h-[72px]"
      :initial="{
        opacity: 0,
        y: -20,
      }"
      :animate="{
        opacity: 1,
        y: 0,
      }"
      :transition="{
        duration: 0.8,
        ease: 'easeOut',
      }"
    >
      <motion.div
        class="flex items-center gap-2"
        :whileHover="{
          scale: 1.03,
        }"
      >
        <span class="h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,.8)]" />

        <span class="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-500">
          Digital Systems
        </span>
      </motion.div>

      <motion.div
        class="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
        :animate="{
          opacity: [0.4, 1, 0.4],
        }"
        :transition="{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }"
      >
        Available For Projects
      </motion.div>
    </motion.header>

    <!-- =====================================================
         HERO
    ====================================================== -->

    <div class="relative z-10 mx-auto flex w-[92%] max-w-[1400px] items-center">
      <div
        class="relative flex w-full items-center justify-center py-20 lg:h-[calc(100svh-128px)] lg:min-h-[600px] lg:max-h-[900px] lg:py-0"
      >
        <!-- =================================================
             CENTER CONTENT
        ================================================== -->

        <motion.div
          class="relative z-20 flex w-full max-w-[780px] flex-col items-center text-center"
          :initial="{
            opacity: 0,
            y: 50,
          }"
          :animate="{
            opacity: 1,
            y: 0,
          }"
          :transition="{
            duration: 1,
            ease: 'easeOut',
          }"
        >
          <!-- LABEL -->

          <motion.div
            class="mb-6 inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-3 py-2 backdrop-blur-md"
            :initial="{
              opacity: 0,
              y: 20,
              scale: 0.95,
            }"
            :animate="{
              opacity: 1,
              y: 0,
              scale: 1,
            }"
            :transition="{
              duration: 0.7,
              delay: 0.15,
              ease: 'easeOut',
            }"
          >
            <motion.div
              :animate="{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.15, 1],
              }"
              :transition="{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }"
            >
              <Sparkles :size="12" class="text-[#D4AF37]" />
            </motion.div>

            <span
              class="font-mono text-[8px] uppercase tracking-[0.2em] text-[#D4AF37] sm:text-[9px]"
            >
              Independent Digital Studio
            </span>
          </motion.div>

          <!-- HEADING -->

          <motion.h1
            class="text-[clamp(3rem,6vw,6.7rem)] font-black uppercase leading-[0.88] tracking-[-0.065em]"
            :initial="{
              opacity: 0,
            }"
            :animate="{
              opacity: 1,
            }"
            :transition="{
              duration: 0.3,
              delay: 0.3,
            }"
          >
            <motion.span
              class="block"
              :initial="{
                opacity: 0,
                y: 70,
              }"
              :animate="{
                opacity: 1,
                y: 0,
              }"
              :transition="{
                duration: 0.8,
                delay: 0.35,
                ease: 'easeOut',
              }"
            >
              Your Idea
            </motion.span>

            <motion.span
              class="block"
              :initial="{
                opacity: 0,
                y: 70,
              }"
              :animate="{
                opacity: 1,
                y: 0,
              }"
              :transition="{
                duration: 0.8,
                delay: 0.48,
                ease: 'easeOut',
              }"
            >
              Deserves More
            </motion.span>

            <motion.span
              class="block"
              :initial="{
                opacity: 0,
                y: 70,
              }"
              :animate="{
                opacity: 1,
                y: 0,
              }"
              :transition="{
                duration: 0.8,
                delay: 0.61,
                ease: 'easeOut',
              }"
            >
              Than A Template.
            </motion.span>
          </motion.h1>

          <!-- DESCRIPTION -->

          <motion.p
            class="mt-6 max-w-[570px] px-3 text-sm leading-relaxed text-zinc-400 sm:px-0 lg:text-[15px]"
            :initial="{
              opacity: 0,
              y: 25,
            }"
            :animate="{
              opacity: 1,
              y: 0,
            }"
            :transition="{
              duration: 0.7,
              delay: 0.8,
            }"
          >
            We transform ambitious ideas into refined digital products — websites, applications and
            systems built specifically around your business.
          </motion.p>

          <!-- ACTIONS -->

          <motion.div
            class="mt-8 flex flex-wrap items-center justify-center gap-3"
            :initial="{
              opacity: 0,
              y: 25,
            }"
            :animate="{
              opacity: 1,
              y: 0,
            }"
            :transition="{
              duration: 0.7,
              delay: 0.95,
            }"
          >
            <!-- START PROJECT -->

            <motion.div
              :whileHover="{
                y: -5,
                scale: 1.02,
              }"
              :whileTap="{
                scale: 0.97,
              }"
              :transition="{
                type: 'spring',
                stiffness: 400,
                damping: 20,
              }"
            >
              <RouterLink
                to="/pricing"
                class="group inline-flex items-center gap-3 bg-[#D4AF37] px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-black shadow-[0_10px_30px_rgba(212,175,55,.08)]"
              >
                Start A Project

                <ArrowUpRight
                  :size="15"
                  class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </RouterLink>
            </motion.div>

            <!-- ESTIMATE -->

            <motion.div
              :whileHover="{
                y: -5,
                scale: 1.02,
              }"
              :whileTap="{
                scale: 0.97,
              }"
              :transition="{
                type: 'spring',
                stiffness: 400,
                damping: 20,
              }"
            >
              <button
                type="button"
                @click="emit('open-estimator')"
                class="group inline-flex items-center gap-3 border border-white/15 bg-white/[0.03] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-300 backdrop-blur-md transition-colors duration-300 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5"
              >
                <motion.span
                  class="flex h-5 w-5 items-center justify-center border border-[#D4AF37]/40"
                  :animate="{
                    scale: [1, 1.08, 1],
                  }"
                  :transition="{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }"
                >
                  <Play :size="9" class="ml-[1px] text-[#D4AF37]" />
                </motion.span>

                Estimate Project
              </button>
            </motion.div>
          </motion.div>

          <!-- SERVICES -->

          <motion.div
            class="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-[7px] uppercase tracking-[0.16em] text-zinc-600 sm:text-[8px]"
            :initial="{
              opacity: 0,
            }"
            :animate="{
              opacity: 1,
            }"
            :transition="{
              duration: 1,
              delay: 1.2,
            }"
          >
            <span>Strategy</span>

            <motion.span
              class="text-[#D4AF37]/60"
              :animate="{
                opacity: [0.3, 1, 0.3],
              }"
              :transition="{
                duration: 2,
                repeat: Infinity,
              }"
            >
              /
            </motion.span>

            <span>Design</span>

            <motion.span
              class="text-[#D4AF37]/60"
              :animate="{
                opacity: [0.3, 1, 0.3],
              }"
              :transition="{
                duration: 2,
                delay: 0.5,
                repeat: Infinity,
              }"
            >
              /
            </motion.span>

            <span>Engineering</span>
          </motion.div>
        </motion.div>

        <!-- =================================================
             WEBSITE
        ================================================== -->

        <motion.div
          class="absolute left-[2%] top-[10%] z-10 hidden lg:block xl:left-[4%] xl:top-[9%]"
          :initial="{
            opacity: 0,
            x: -80,
            rotate: -12,
            scale: 0.8,
          }"
          :animate="{
            opacity: 1,
            x: 0,
            rotate: -5,
            scale: 1,
          }"
          :transition="{
            duration: 1,
            delay: 0.5,
            ease: 'easeOut',
          }"
        >
          <motion.div
            :style="parallax(-7, -4)"
            :animate="{
              y: [-6, 6, -6],
            }"
            :transition="{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }"
            class="w-[190px] transition-transform duration-100 xl:w-[250px]"
          >
            <div
              class="overflow-hidden border border-[#D4AF37]/30 bg-[#0A0A0A]/90 shadow-[0_30px_80px_rgba(0,0,0,.6)] backdrop-blur-xl"
            >
              <!-- Browser Header -->

              <div class="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                <span class="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

                <span class="h-1.5 w-1.5 rounded-full bg-white/20" />

                <span class="h-1.5 w-1.5 rounded-full bg-white/10" />

                <span
                  class="ml-auto font-mono text-[6px] uppercase tracking-[0.18em] text-[#D4AF37]"
                >
                  Website
                </span>
              </div>

              <!-- Browser Body -->

              <div class="space-y-3 p-3 xl:p-4">
                <motion.div
                  class="h-3 w-[65%] bg-[#D4AF37]/25"
                  :initial="{ width: '0%' }"
                  :animate="{ width: '65%' }"
                  :transition="{
                    duration: 0.8,
                    delay: 1.3,
                  }"
                />

                <motion.div
                  class="h-2 w-full bg-white/10"
                  :initial="{ opacity: 0, scaleX: 0 }"
                  :animate="{ opacity: 1, scaleX: 1 }"
                  :transition="{ duration: 0.6, delay: 1.45 }"
                />

                <motion.div
                  class="h-2 w-[72%] bg-white/5"
                  :initial="{ opacity: 0, scaleX: 0 }"
                  :animate="{ opacity: 1, scaleX: 1 }"
                  :transition="{ duration: 0.6, delay: 1.55 }"
                />

                <div class="grid grid-cols-2 gap-2">
                  <motion.div
                    class="h-12 border border-[#D4AF37]/20 bg-[#D4AF37]/5 xl:h-16"
                    :initial="{ opacity: 0, scale: 0.7 }"
                    :animate="{ opacity: 1, scale: 1 }"
                    :transition="{ duration: 0.5, delay: 1.6 }"
                  />

                  <motion.div
                    class="h-12 border border-[#D4AF37]/20 bg-[#D4AF37]/5 xl:h-16"
                    :initial="{ opacity: 0, scale: 0.7 }"
                    :animate="{ opacity: 1, scale: 1 }"
                    :transition="{ duration: 0.5, delay: 1.7 }"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <!-- =================================================
             MOBILE APP
        ================================================== -->

        <motion.div
          class="absolute right-[3%] top-[10%] z-10 hidden lg:block xl:right-[5%] xl:top-[8%]"
          :initial="{
            opacity: 0,
            x: 80,
            rotate: 15,
            scale: 0.8,
          }"
          :animate="{
            opacity: 1,
            x: 0,
            rotate: 6,
            scale: 1,
          }"
          :transition="{
            duration: 1,
            delay: 0.7,
            ease: 'easeOut',
          }"
        >
          <motion.div
            :style="parallax(8, -5)"
            :animate="{
              y: [6, -6, 6],
            }"
            :transition="{
              duration: 4.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }"
            class="transition-transform duration-100"
          >
            <div
              class="w-[82px] border border-[#D4AF37]/40 bg-[#090909]/95 p-2 shadow-[0_30px_80px_rgba(0,0,0,.6)] backdrop-blur-xl xl:w-[115px]"
            >
              <div class="mx-auto mb-3 h-1 w-7 rounded-full bg-[#D4AF37]/40" />

              <div class="space-y-2">
                <motion.div
                  class="h-14 bg-gradient-to-br from-[#D4AF37]/20 to-transparent xl:h-20"
                  :animate="{
                    opacity: [0.5, 1, 0.5],
                  }"
                  :transition="{
                    duration: 3,
                    repeat: Infinity,
                  }"
                />

                <div class="h-2 w-[80%] bg-white/10" />

                <div class="h-1.5 w-[55%] bg-white/5" />

                <div class="grid grid-cols-2 gap-1.5">
                  <div class="h-6 bg-[#D4AF37]/15 xl:h-8" />

                  <div class="h-6 bg-white/5 xl:h-8" />
                </div>
              </div>

              <p
                class="mt-3 text-center font-mono text-[5px] uppercase tracking-[0.16em] text-[#D4AF37] xl:text-[7px]"
              >
                Mobile App
              </p>
            </div>
          </motion.div>
        </motion.div>

        <!-- =================================================
             DATABASE
        ================================================== -->

        <motion.div
          class="absolute bottom-[14%] left-[7%] z-10 hidden lg:block xl:left-[12%]"
          :initial="{
            opacity: 0,
            y: 60,
            scale: 0.5,
          }"
          :animate="{
            opacity: 1,
            y: 0,
            scale: 1,
          }"
          :transition="{
            duration: 0.8,
            delay: 0.9,
            type: 'spring',
            stiffness: 120,
          }"
        >
          <motion.div
            :style="parallax(-8, 6)"
            :animate="{
              y: [-4, 4, -4],
            }"
            :transition="{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }"
            class="transition-transform duration-100"
          >
            <div
              class="flex h-14 w-14 flex-col items-center justify-center border border-[#D4AF37]/30 bg-[#090909]/90 shadow-xl backdrop-blur-xl xl:h-16 xl:w-16"
            >
              <motion.div
                :animate="{
                  rotateY: [0, 180, 360],
                }"
                :transition="{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'linear',
                }"
              >
                <Database :size="14" class="text-[#D4AF37]" />
              </motion.div>

              <span
                class="mt-1 font-mono text-[5px] uppercase tracking-wider text-zinc-500 xl:text-[6px]"
              >
                Data
              </span>
            </div>
          </motion.div>
        </motion.div>

        <!-- =================================================
             ANALYTICS
        ================================================== -->

        <motion.div
          class="absolute bottom-[12%] right-[3%] z-10 hidden w-[190px] lg:block xl:right-[6%] xl:w-[250px]"
          :initial="{
            opacity: 0,
            x: 80,
            y: 50,
            rotate: 8,
          }"
          :animate="{
            opacity: 1,
            x: 0,
            y: 0,
            rotate: -4,
          }"
          :transition="{
            duration: 1,
            delay: 1,
            ease: 'easeOut',
          }"
        >
          <motion.div
            :style="parallax(6, 7)"
            :animate="{
              y: [5, -5, 5],
            }"
            :transition="{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut',
            }"
            class="transition-transform duration-100"
          >
            <div
              class="border border-[#D4AF37]/25 bg-[#090909]/90 p-3 shadow-[0_30px_80px_rgba(0,0,0,.6)] backdrop-blur-xl"
            >
              <div class="mb-3 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <Activity :size="12" class="text-[#D4AF37]" />

                  <span class="font-mono text-[7px] uppercase tracking-[0.15em] text-zinc-400">
                    Growth
                  </span>
                </div>

                <motion.span
                  class="font-mono text-[7px] text-[#D4AF37]"
                  :animate="{
                    opacity: [0.5, 1, 0.5],
                  }"
                  :transition="{
                    duration: 2,
                    repeat: Infinity,
                  }"
                >
                  +24.8%
                </motion.span>
              </div>

              <div class="flex h-16 items-end gap-1.5 xl:h-20">
                <motion.div
                  v-for="(height, index) in ['25%', '45%', '38%', '68%', '55%', '92%']"
                  :key="index"
                  class="flex-1 bg-[#D4AF37]"
                  :initial="{ height: '0%' }"
                  :animate="{ height }"
                  :transition="{
                    duration: 0.8,
                    delay: 1.3 + index * 0.08,
                    ease: 'easeOut',
                  }"
                  :style="{
                    opacity: 0.2 + index * 0.13,
                  }"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <!-- =================================================
             API NODE
        ================================================== -->

        <motion.div
          class="absolute left-[3%] top-1/2 z-10 hidden -translate-y-1/2 xl:block"
          :initial="{
            opacity: 0,
            x: -40,
          }"
          :animate="{
            opacity: 1,
            x: 0,
          }"
          :transition="{
            duration: 0.8,
            delay: 1.1,
          }"
        >
          <motion.div :style="parallax(5, 4)" class="transition-transform duration-100">
            <motion.div
              class="flex items-center gap-2 border border-[#D4AF37]/25 bg-[#090909]/90 px-3 py-2 backdrop-blur-xl"
              :whileHover="{
                scale: 1.05,
                borderColor: 'rgba(212,175,55,.55)',
              }"
            >
              <Code2 :size="13" class="text-[#D4AF37]" />

              <div>
                <p class="font-mono text-[7px] uppercase tracking-[0.15em] text-[#D4AF37]">API</p>

                <motion.p
                  class="text-[7px] text-zinc-600"
                  :animate="{
                    opacity: [0.3, 1, 0.3],
                  }"
                  :transition="{
                    duration: 2,
                    repeat: Infinity,
                  }"
                >
                  Connected
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <!-- =================================================
             DECORATIVE SQUARE
        ================================================== -->

        <motion.div
          :style="parallax(4, -4)"
          class="absolute left-[29%] top-[15%] hidden h-2 w-2 border border-[#D4AF37]/50 lg:block"
          :animate="{
            rotate: [45, 135, 225, 315, 405],
            scale: [1, 1.3, 1],
          }"
          :transition="{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }"
        />

        <!-- =================================================
             DECORATIVE GLOW NODE
        ================================================== -->

        <motion.div
          :style="parallax(-4, 5)"
          class="absolute bottom-[26%] right-[29%] hidden h-2 w-2 rounded-full bg-[#D4AF37] lg:block"
          :animate="{
            scale: [1, 1.8, 1],
            opacity: [0.5, 1, 0.5],
          }"
          :transition="{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }"
          style="box-shadow: 0 0 20px rgba(212, 175, 55, 0.7)"
        />

        <!-- =================================================
             SMALL GOLD ORBIT
        ================================================== -->

        <motion.div
          class="pointer-events-none absolute left-1/2 top-1/2 hidden h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D4AF37]/[0.04] lg:block"
          :animate="{
            rotate: 360,
          }"
          :transition="{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }"
        >
          <motion.div
            class="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#D4AF37]"
            :animate="{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.4, 0.8],
            }"
            :transition="{
              duration: 2,
              repeat: Infinity,
            }"
          />
        </motion.div>
      </div>
    </div>
  </section>

  <BrandMarquee />
</template>
