<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowUpRight, Sparkles, Layers3, Code2, Database, Activity, Play } from 'lucide-vue-next'

const emit = defineEmits(['open-estimator'])

const heroRef = ref(null)

const mouse = ref({
  x: 0,
  y: 0,
})

const smooth = ref({
  x: 0,
  y: 0,
})

let frame

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
  transform: `translate3d(
    ${smooth.value.x * x}px,
    ${smooth.value.y * y}px,
    0
  )`,
})

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', resetMouse)

  frame = requestAnimationFrame(animate)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mouseleave', resetMouse)

  cancelAnimationFrame(frame)
})
</script>

<template>
  <section ref="heroRef" class="relative isolate overflow-hidden bg-[#050505] text-white">
    <!-- ================= BACKGROUND ================= -->

    <div class="pointer-events-none absolute inset-0">
      <!-- Gold glow -->

      <div
        class="absolute left-1/2 top-[42%] h-[55vw] w-[55vw] max-h-[700px] max-w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.045] blur-[130px]"
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

      <!-- Vignette -->

      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#050505_82%)]"
      />
    </div>

    <!-- ================= HEADER ================= -->

    <header
      class="relative z-30 mx-auto flex h-16 w-[92%] max-w-[1400px] items-center justify-between border-b border-white/10 lg:h-[72px]"
    ></header>

    <!-- ================= HERO ================= -->

    <div class="relative z-10 mx-auto flex w-[92%] max-w-[1400px] items-center">
      <!--
        SAFE CANVAS

        Mobile:
        Natural height

        Desktop:
        Fits remaining viewport
      -->

      <div
        class="relative flex w-full items-center justify-center py-20 lg:h-[calc(100svh-128px)] lg:min-h-[600px] lg:max-h-[900px] lg:py-0"
      >
        <!-- ================= CENTER CONTENT ================= -->

        <div class="relative z-20 flex w-full max-w-[780px] flex-col items-center text-center">
          <!-- LABEL -->

          <div
            class="mb-6 inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-3 py-2 backdrop-blur-md"
          >
            <Sparkles :size="12" class="text-[#D4AF37]" />

            <span
              class="font-mono text-[8px] uppercase tracking-[0.2em] text-[#D4AF37] sm:text-[9px]"
            >
              Independent Digital Studio
            </span>
          </div>

          <!-- HEADING -->

          <h1
            class="text-[clamp(3rem,6vw,6.7rem)] font-black uppercase leading-[0.88] tracking-[-0.065em]"
          >
            <span class="block"> Your Idea </span>

            <span class="block"> Deserves More </span>

            <span class="block"> Than A Template. </span>
          </h1>

          <!-- DESCRIPTION -->

          <p
            class="mt-6 max-w-[570px] px-3 text-sm leading-relaxed text-zinc-400 sm:px-0 lg:text-[15px]"
          >
            We transform ambitious ideas into refined digital products — websites, applications and
            systems built specifically around your business.
          </p>

          <!-- ACTIONS -->

          <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
            <RouterLink
              to="/pricing"
              class="group inline-flex items-center gap-3 bg-[#D4AF37] px-6 py-3.5 text-[10px] font-black uppercase tracking-[0.16em] text-black transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(212,175,55,.28)]"
            >
              Start A Project

              <ArrowUpRight
                :size="15"
                class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </RouterLink>

            <button
              type="button"
              @click="emit('open-estimator')"
              class="group inline-flex items-center gap-3 border border-white/15 bg-white/[0.03] px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-300 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5"
            >
              <span class="flex h-5 w-5 items-center justify-center border border-[#D4AF37]/40">
                <Play :size="9" class="ml-[1px] text-[#D4AF37]" />
              </span>

              Estimate Project
            </button>
          </div>

          <!-- SERVICES -->

          <div
            class="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-[7px] uppercase tracking-[0.16em] text-zinc-600 sm:text-[8px]"
          >
            <span>Strategy</span>

            <span class="text-[#D4AF37]/60"> / </span>

            <span>Design</span>

            <span class="text-[#D4AF37]/60"> / </span>

            <span>Engineering</span>
          </div>
        </div>

        <!-- ================================================= -->
        <!-- FLOATING PRODUCT OBJECTS - DESKTOP ONLY -->
        <!-- ================================================= -->

        <!-- WEBSITE -->

        <div
          :style="parallax(-7, -4)"
          class="absolute left-[2%] top-[10%] z-10 hidden w-[190px] rotate-[-5deg] transition-transform duration-100 lg:block xl:left-[4%] xl:top-[9%] xl:w-[250px]"
        >
          <div
            class="overflow-hidden border border-[#D4AF37]/30 bg-[#0A0A0A]/90 shadow-[0_30px_80px_rgba(0,0,0,.6)] backdrop-blur-xl"
          >
            <!-- Browser header -->

            <div class="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
              <span class="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

              <span class="h-1.5 w-1.5 rounded-full bg-white/20" />

              <span class="h-1.5 w-1.5 rounded-full bg-white/10" />

              <span class="ml-auto font-mono text-[6px] uppercase tracking-[0.18em] text-[#D4AF37]">
                Website
              </span>
            </div>

            <!-- Browser body -->

            <div class="space-y-3 p-3 xl:p-4">
              <div class="h-3 w-[65%] bg-[#D4AF37]/25" />

              <div class="h-2 w-full bg-white/10" />

              <div class="h-2 w-[72%] bg-white/5" />

              <div class="grid grid-cols-2 gap-2">
                <div class="h-12 border border-[#D4AF37]/20 bg-[#D4AF37]/5 xl:h-16" />

                <div class="h-12 border border-[#D4AF37]/20 bg-[#D4AF37]/5 xl:h-16" />
              </div>
            </div>
          </div>
        </div>

        <!-- MOBILE APP -->

        <div
          :style="parallax(8, -5)"
          class="absolute right-[3%] top-[10%] z-10 hidden rotate-[6deg] transition-transform duration-100 lg:block xl:right-[5%] xl:top-[8%]"
        >
          <div
            class="w-[82px] border border-[#D4AF37]/40 bg-[#090909]/95 p-2 shadow-[0_30px_80px_rgba(0,0,0,.6)] backdrop-blur-xl xl:w-[115px]"
          >
            <div class="mx-auto mb-3 h-1 w-7 rounded-full bg-[#D4AF37]/40" />

            <div class="space-y-2">
              <div class="h-14 bg-gradient-to-br from-[#D4AF37]/20 to-transparent xl:h-20" />

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
        </div>

        <!-- DATABASE -->

        <div
          :style="parallax(-8, 6)"
          class="absolute bottom-[14%] left-[7%] z-10 hidden lg:block xl:left-[12%]"
        >
          <div
            class="flex h-14 w-14 flex-col items-center justify-center border border-[#D4AF37]/30 bg-[#090909]/90 shadow-xl backdrop-blur-xl xl:h-16 xl:w-16"
          >
            <Database :size="14" class="text-[#D4AF37]" />

            <span
              class="mt-1 font-mono text-[5px] uppercase tracking-wider text-zinc-500 xl:text-[6px]"
            >
              Data
            </span>
          </div>
        </div>

        <!-- ANALYTICS -->

        <div
          :style="parallax(6, 7)"
          class="absolute bottom-[12%] right-[3%] z-10 hidden w-[190px] rotate-[-4deg] lg:block xl:right-[6%] xl:w-[250px]"
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

              <span class="font-mono text-[7px] text-[#D4AF37]"> +24.8% </span>
            </div>

            <div class="flex h-16 items-end gap-1.5 xl:h-20">
              <div class="h-[25%] flex-1 bg-[#D4AF37]/20" />
              <div class="h-[45%] flex-1 bg-[#D4AF37]/30" />
              <div class="h-[38%] flex-1 bg-[#D4AF37]/40" />
              <div class="h-[68%] flex-1 bg-[#D4AF37]/60" />
              <div class="h-[55%] flex-1 bg-[#D4AF37]/50" />
              <div class="h-[92%] flex-1 bg-[#D4AF37]" />
            </div>
          </div>
        </div>

        <!-- API NODE -->

        <div
          :style="parallax(5, 4)"
          class="absolute left-[3%] top-1/2 z-10 hidden -translate-y-1/2 xl:block"
        >
          <div
            class="flex items-center gap-2 border border-[#D4AF37]/25 bg-[#090909]/90 px-3 py-2 backdrop-blur-xl"
          >
            <Code2 :size="13" class="text-[#D4AF37]" />

            <div>
              <p class="font-mono text-[7px] uppercase tracking-[0.15em] text-[#D4AF37]">API</p>

              <p class="text-[7px] text-zinc-600">Connected</p>
            </div>
          </div>
        </div>

        <!-- DECORATIVE NODES -->

        <div
          :style="parallax(4, -4)"
          class="absolute left-[29%] top-[15%] hidden h-2 w-2 rotate-45 border border-[#D4AF37]/50 lg:block"
        />

        <div
          :style="parallax(-4, 5)"
          class="absolute bottom-[26%] right-[29%] hidden h-2 w-2 rounded-full bg-[#D4AF37] shadow-[0_0_20px_rgba(212,175,55,.7)] lg:block"
        />
      </div>
    </div>

    <!-- ================= FOOTER STATUS ================= -->
  </section>
  <BrandMarquee />
</template>
