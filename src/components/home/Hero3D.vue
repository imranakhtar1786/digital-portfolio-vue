<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import {
  ArrowUpRight,
  Sparkles,
  Shield,
  Cpu,
  Code2,
  UserCheck,
  DollarSign,
  IndianRupee,
} from 'lucide-vue-next'
import { currentCurrency, formatCurrency } from '@/stores/currencyStore.js'

const emit = defineEmits(['open-estimator', 'open-contact'])

const canvasRef = ref(null)
let animationFrameId = null

const metrics = [
  { value: '11+', label: 'Production Apps Live', sub: 'E-Com, Real Estate & SaaS' },
  { value: '₹5,999', label: 'Services Starting Rate', sub: 'Transparent & Affordable' },
  { value: '100%', label: 'Source Code IP Ownership', sub: 'GitHub Repository Handover' },
  { value: '99.4%', label: 'Client Retention Rate', sub: 'Direct Founder Engineering' },
]

// Golden Orbital Rings — a glowing wireframe sphere-like structure made of
// elliptical orbit rings that slowly rotate in 3D-ish perspective, with
// particles traveling along the rings like satellites. Reacts subtly to
// mouse position (parallax tilt). This is a much stronger "premium tech
// brand" visual than flat particles — reads instantly as high production
// value at hero size.

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  let width = (canvas.width = canvas.parentElement.offsetWidth)
  let height = (canvas.height = canvas.parentElement.offsetHeight)

  const handleResize = () => {
    if (!canvas || !canvas.parentElement) return
    width = canvas.width = canvas.parentElement.offsetWidth
    height = canvas.height = canvas.parentElement.offsetHeight
  }
  window.addEventListener('resize', handleResize)

  // Core sits right-of-center, matching your original layout weighting
  let coreX = width * 0.72
  let coreY = height * 0.42
  let targetTiltX = 0
  let targetTiltY = 0
  let tiltX = 0
  let tiltY = 0

  const handleMouseMove = (e) => {
    const rect = canvas.getBoundingClientRect()
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top
    // Normalize to -1..1 relative to core, small range so it stays subtle
    targetTiltX = ((mx - coreX) / width) * 0.6
    targetTiltY = ((my - coreY) / height) * 0.6
  }
  window.addEventListener('mousemove', handleMouseMove)

  // ── Orbit rings ──
  // Each ring: radiusX, radiusY (ellipse = perspective), tilt angle, speed,
  // color, particle count riding along it.
  const baseRadius = Math.min(width, height) * 0.16
  const rings = [
    {
      rx: baseRadius * 1.0,
      ry: baseRadius * 0.32,
      tilt: 0.15,
      speed: 0.006,
      color: '#D4AF37',
      particles: 3,
    },
    {
      rx: baseRadius * 1.5,
      ry: baseRadius * 0.5,
      tilt: -0.25,
      speed: -0.0045,
      color: '#FCF6BA',
      particles: 4,
    },
    {
      rx: baseRadius * 2.05,
      ry: baseRadius * 0.65,
      tilt: 0.35,
      speed: 0.0032,
      color: '#BF953F',
      particles: 5,
    },
    {
      rx: baseRadius * 2.6,
      ry: baseRadius * 0.85,
      tilt: -0.1,
      speed: -0.0022,
      color: '#D4AF37',
      particles: 6,
    },
  ]

  // Precompute particle phase offsets per ring
  rings.forEach((r) => {
    r.particlePhases = Array.from(
      { length: r.particles },
      (_, i) => (i / r.particles) * Math.PI * 2,
    )
  })

  // ── Distant background stars (static-ish, very subtle) ──
  const bgStars = []
  const BG_COUNT = 90
  for (let i = 0; i < BG_COUNT; i++) {
    bgStars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.2 + 0.3,
      alpha: Math.random() * 0.4 + 0.15,
      twinklePhase: Math.random() * Math.PI * 2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
    })
  }

  let rotation = 0
  let animationFrameId = null

  const drawRing = (r, globalTiltX, globalTiltY) => {
    // Draw the ring path itself (faint ellipse, rotated by r.tilt + global sway)
    const effectiveTiltY = r.ry * (1 + globalTiltY * 0.3)
    const angleOffset = r.tilt + globalTiltX * 0.4

    ctx.save()
    ctx.translate(coreX, coreY)
    ctx.rotate(angleOffset)
    ctx.beginPath()
    ctx.ellipse(0, 0, r.rx, effectiveTiltY, 0, 0, Math.PI * 2)
    ctx.strokeStyle = hexToRgba(r.color, 0.22)
    ctx.lineWidth = 1
    ctx.shadowBlur = 6
    ctx.shadowColor = r.color
    ctx.stroke()
    ctx.shadowBlur = 0
    ctx.restore()

    // Particles riding the ring
    for (let i = 0; i < r.particles; i++) {
      const phase = r.particlePhases[i] + rotation * r.speed * 40
      const localX = Math.cos(phase) * r.rx
      const localY = Math.sin(phase) * effectiveTiltY

      // Apply ring rotation transform manually to get world coords
      const cosA = Math.cos(angleOffset)
      const sinA = Math.sin(angleOffset)
      const worldX = coreX + localX * cosA - localY * sinA
      const worldY = coreY + localX * sinA + localY * cosA

      // Depth cue: particles "behind" (sin phase negative-ish) are dimmer/smaller
      const depth = (Math.sin(phase) + 1) / 2 // 0..1
      const size = 1.1 + depth * 1.6
      const alpha = 0.35 + depth * 0.65

      ctx.beginPath()
      ctx.arc(worldX, worldY, size, 0, Math.PI * 2)
      ctx.fillStyle = r.color
      ctx.globalAlpha = alpha
      ctx.shadowBlur = 10
      ctx.shadowColor = r.color
      ctx.fill()
      ctx.globalAlpha = 1
      ctx.shadowBlur = 0
    }
  }

  function hexToRgba(hex, alpha) {
    const bigint = parseInt(hex.replace('#', ''), 16)
    const rr = (bigint >> 16) & 255
    const gg = (bigint >> 8) & 255
    const bb = bigint & 255
    return `rgba(${rr}, ${gg}, ${bb}, ${alpha})`
  }

  const render = () => {
    ctx.clearRect(0, 0, width, height)

    // Background stars, gentle twinkle
    for (const s of bgStars) {
      s.twinklePhase += s.twinkleSpeed
      const tw = 0.5 + Math.sin(s.twinklePhase) * 0.5
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 250, 230, ${s.alpha * tw})`
      ctx.fill()
    }

    // Smooth tilt easing toward mouse-driven target
    tiltX += (targetTiltX - tiltX) * 0.04
    tiltY += (targetTiltY - tiltY) * 0.04

    rotation += 1

    // Core glow
    const coreGlow = ctx.createRadialGradient(coreX, coreY, 2, coreX, coreY, baseRadius * 1.4)
    coreGlow.addColorStop(0, 'rgba(252, 246, 186, 0.9)')
    coreGlow.addColorStop(0.25, 'rgba(212, 175, 55, 0.35)')
    coreGlow.addColorStop(1, 'rgba(212, 175, 55, 0)')
    ctx.fillStyle = coreGlow
    ctx.beginPath()
    ctx.arc(coreX, coreY, baseRadius * 1.4, 0, Math.PI * 2)
    ctx.fill()

    // Solid core
    ctx.beginPath()
    ctx.arc(coreX, coreY, 5, 0, Math.PI * 2)
    ctx.fillStyle = '#FCF6BA'
    ctx.shadowBlur = 20
    ctx.shadowColor = '#D4AF37'
    ctx.fill()
    ctx.shadowBlur = 0

    // Rings back-to-front (largest first so smaller/inner rings render on top)
    for (let i = rings.length - 1; i >= 0; i--) {
      drawRing(rings[i], tiltX, tiltY)
    }

    animationFrameId = requestAnimationFrame(render)
  }

  render()

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    window.removeEventListener('mousemove', handleMouseMove)
    if (animationFrameId) cancelAnimationFrame(animationFrameId)
  })
})
</script>

<template>
  <section
    id="home"
    class="relative flex min-h-screen w-full flex-col justify-between overflow-hidden pt-28 pb-16 bg-[#020204]"
  >
    <!-- Cosmic Nebula Radial Glow Orbs -->
    <div
      class="pointer-events-none absolute right-[15%] top-[15%] h-[600px] w-[600px] rounded-full bg-radial from-[#D4AF37]/20 via-[#BF953F]/5 to-transparent blur-[170px]"
    ></div>
    <div
      class="pointer-events-none absolute left-[5%] bottom-[10%] h-[450px] w-[450px] rounded-full bg-radial from-[#D4AF37]/12 via-transparent to-transparent blur-[150px]"
    ></div>

    <!-- Golden Particle Constellation Canvas -->
    <div class="absolute inset-0 z-0">
      <canvas ref="canvasRef" class="h-full w-full opacity-90"></canvas>
      <div
        class="pointer-events-none absolute inset-0 bg-radial from-transparent via-[#020204]/60 to-[#020204]"
      ></div>
    </div>

    <!-- Main Content Container -->
    <div class="relative z-10 mx-auto my-auto w-[90%] max-w-7xl">
      <div class="flex flex-col items-start gap-8">
        <!-- Status & Founder Pill -->
        <div class="flex flex-wrap items-center gap-3">
          <div
            class="inline-flex items-center gap-2.5 rounded-full border border-[#D4AF37]/50 bg-[#12110D]/85 px-4 py-2 backdrop-blur-2xl shadow-xl"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4AF37] opacity-75"
              ></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-[#D4AF37]"></span>
            </span>
            <span class="text-xs uppercase tracking-[0.2em] text-[#FCF6BA] font-mono font-bold">
              FOUNDED BY IMRAN AKHTAR // IMRANOS
            </span>
          </div>

          <div
            class="inline-flex items-center gap-2 rounded-full border border-green-500/40 bg-[#0A140E]/85 px-4 py-2 text-xs font-mono text-green-400 backdrop-blur-2xl"
          >
            <Sparkles :size="13" class="text-green-400" />
            <span>SERVICES START FROM ₹5,999 ($79 USD)</span>
          </div>
        </div>

        <!-- Headline -->
        <div class="max-w-4xl">
          <h1
            class="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] uppercase"
          >
            <span class="block text-white">Full-Stack Digital</span>
            <span class="block text-gold-gradient">Solutions & Code.</span>
          </h1>

          <p
            class="mt-6 text-sm text-zinc-300 sm:text-base md:text-lg font-light leading-relaxed max-w-2xl"
          >
            Direct full-stack software development, responsive web applications, and DevOps server
            migrations by <strong class="text-white">Imran Akhtar</strong>. Agency-grade quality at
            accessible freelancer pricing.
          </p>
        </div>

        <!-- Action CTA Buttons -->
        <div class="flex flex-wrap items-center gap-4 pt-2">
          <RouterLink
            to="/pricing"
            class="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border border-[#D4AF37] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] px-7 py-4 text-xs font-extrabold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)]"
          >
            <span class="relative z-10 flex items-center gap-2">
              <span>View Packages (From ₹5,999)</span>
              <ArrowUpRight :size="16" />
            </span>
          </RouterLink>

          <button
            @click="emit('open-estimator')"
            class="group flex items-center gap-2 rounded-2xl border border-white/15 bg-[#0C0C12]/90 px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-200 backdrop-blur-2xl transition duration-300 hover:border-[#D4AF37]/50 hover:bg-[#14141E] hover:text-white"
          >
            <Sparkles :size="15" class="text-[#D4AF37]" />
            <span>Cost Calculator</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Live Metrics Grid -->
    <div class="relative z-10 mx-auto w-[90%] max-w-7xl pt-12">
      <div class="grid grid-cols-2 gap-4 border-t border-white/10 pt-8 md:grid-cols-4">
        <div v-for="(metric, idx) in metrics" :key="idx" class="flex flex-col">
          <span
            class="text-2xl font-extrabold text-white sm:text-3xl font-mono"
            :class="{ 'text-gold-gradient': idx === 1 }"
          >
            {{ metric.value }}
          </span>
          <span class="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] mt-1">
            {{ metric.label }}
          </span>
          <span class="text-[10px] text-zinc-500 font-mono mt-0.5">
            {{ metric.sub }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
