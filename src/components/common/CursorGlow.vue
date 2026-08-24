<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const glowRef = ref(null)
const ringRef = ref(null)

const isVisible = ref(false)
const isClicking = ref(false)

let animationFrameId = null
let isFinePointer = false

let targetX = -500
let targetY = -500

let currentX = -500
let currentY = -500

const LERP = 0.22

const animate = () => {
  currentX += (targetX - currentX) * LERP
  currentY += (targetY - currentY) * LERP

  if (glowRef.value) {
    glowRef.value.style.transform = `
      translate3d(${targetX}px, ${targetY}px, 0)
      translate3d(-50%, -50%, 0)
    `
  }

  if (ringRef.value) {
    ringRef.value.style.transform = `
      translate3d(${currentX}px, ${currentY}px, 0)
      translate3d(-50%, -50%, 0)
      ${isClicking.value ? 'scale(1.5)' : 'scale(1)'}
    `
  }

  animationFrameId = requestAnimationFrame(animate)
}

const handlePointerMove = (event) => {
  if (!isFinePointer) return

  targetX = event.clientX
  targetY = event.clientY

  if (!isVisible.value) {
    currentX = targetX
    currentY = targetY
    isVisible.value = true
  }
}

const handlePointerDown = () => {
  if (!isFinePointer) return
  isClicking.value = true
}

const handlePointerUp = () => {
  isClicking.value = false
}

const handlePointerLeave = () => {
  isVisible.value = false
}

onMounted(() => {
  const finePointerQuery = window.matchMedia('(pointer: fine)')

  isFinePointer = finePointerQuery.matches

  if (!isFinePointer) return

  window.addEventListener('pointermove', handlePointerMove, {
    passive: true,
  })

  window.addEventListener('pointerdown', handlePointerDown, {
    passive: true,
  })

  window.addEventListener('pointerup', handlePointerUp, {
    passive: true,
  })

  document.documentElement.addEventListener('mouseleave', handlePointerLeave, { passive: true })

  animationFrameId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  if (!isFinePointer) return

  window.removeEventListener('pointermove', handlePointerMove)
  window.removeEventListener('pointerdown', handlePointerDown)
  window.removeEventListener('pointerup', handlePointerUp)

  document.documentElement.removeEventListener('mouseleave', handlePointerLeave)

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-[9999] overflow-hidden" aria-hidden="true">
    <!-- Soft Gold Glow -->
    <div
      ref="glowRef"
      class="pointer-events-none absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-radial from-[#D4AF37]/15 via-[#C8A45D]/5 to-transparent blur-3xl will-change-transform"
    />

    <!-- Cursor Ring -->
    <div
      ref="ringRef"
      class="pointer-events-none absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 backdrop-blur-[2px] will-change-transform"
    >
      <div class="h-1.5 w-1.5 rounded-full bg-[#FCF6BA] shadow-[0_0_8px_#D4AF37]" />
    </div>
  </div>
</template>
