<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const glowRef = ref(null)
const ringRef = ref(null)
const isVisible = ref(false)
const isClicking = ref(false)

let isFinePointer = false
let posX = -100
let posY = -100
let targetX = -100
let targetY = -100
let animationFrameId = null

const updatePosition = () => {
  if (!isVisible.value) return

  // Smooth lerp for ring
  posX += (targetX - posX) * 0.35
  posY += (targetY - posY) * 0.35

  if (glowRef.value) {
    glowRef.value.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`
  }
  if (ringRef.value) {
    ringRef.value.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`
  }

  animationFrameId = requestAnimationFrame(updatePosition)
}

const handleMouseMove = (e) => {
  targetX = e.clientX
  targetY = e.clientY

  if (!isVisible.value) {
    isVisible.value = true
    posX = targetX
    posY = targetY
    animationFrameId = requestAnimationFrame(updatePosition)
  }
}

const handleMouseDown = () => {
  isClicking.value = true
}

const handleMouseUp = () => {
  isClicking.value = false
}

const handleMouseLeave = () => {
  isVisible.value = false
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
}

const handleMouseEnter = () => {
  if (isFinePointer) {
    isVisible.value = true
  }
}

onMounted(() => {
  // Only activate cursor glow on desktop pointers to maximize mobile performance & TBT
  isFinePointer = window.matchMedia && window.matchMedia('(pointer: fine)').matches
  if (!isFinePointer) return

  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  window.addEventListener('mousedown', handleMouseDown, { passive: true })
  window.addEventListener('mouseup', handleMouseUp, { passive: true })
  document.body.addEventListener('mouseleave', handleMouseLeave)
  document.body.addEventListener('mouseenter', handleMouseEnter)
})

onUnmounted(() => {
  if (!isFinePointer) return

  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mousedown', handleMouseDown)
  window.removeEventListener('mouseup', handleMouseUp)
  document.body.removeEventListener('mouseleave', handleMouseLeave)
  document.body.removeEventListener('mouseenter', handleMouseEnter)

  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<template>
  <div v-if="isVisible" class="pointer-events-none fixed inset-0 z-50 overflow-hidden">
    <!-- Main Soft Gold Glow Trail (Direct DOM transformed) -->
    <div
      ref="glowRef"
      class="pointer-events-none absolute h-[450px] w-[450px] rounded-full bg-radial from-[#D4AF37]/15 via-[#C8A45D]/5 to-transparent blur-3xl will-change-transform"
      style="left: 0; top: 0;"
    ></div>

    <!-- Inner Sharp Metallic Ring Cursor -->
    <div
      ref="ringRef"
      class="pointer-events-none absolute flex h-8 w-8 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 backdrop-blur-[2px] transition-all duration-100 ease-out will-change-transform"
      :class="{ 'scale-150 border-[#D4AF37] bg-[#D4AF37]/30': isClicking }"
      style="left: 0; top: 0;"
    >
      <div class="h-1.5 w-1.5 rounded-full bg-[#FCF6BA] shadow-[0_0_8px_#D4AF37]"></div>
    </div>
  </div>
</template>
