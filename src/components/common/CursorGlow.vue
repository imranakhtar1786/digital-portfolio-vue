<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const posX = ref(-100)
const posY = ref(-100)
const isVisible = ref(false)
const isClicking = ref(false)

const handleMouseMove = (e) => {
  posX.value = e.clientX
  posY.value = e.clientY
  if (!isVisible.value) isVisible.value = true
}

const handleMouseDown = () => { isClicking.value = true }
const handleMouseUp = () => { isClicking.value = false }

const handleMouseLeave = () => { isVisible.value = false }
const handleMouseEnter = () => { isVisible.value = true }

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mousedown', handleMouseDown)
  window.addEventListener('mouseup', handleMouseUp)
  document.body.addEventListener('mouseleave', handleMouseLeave)
  document.body.addEventListener('mouseenter', handleMouseEnter)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mousedown', handleMouseDown)
  window.removeEventListener('mouseup', handleMouseUp)
  document.body.removeEventListener('mouseleave', handleMouseLeave)
  document.body.removeEventListener('mouseenter', handleMouseEnter)
})
</script>

<template>
  <div v-if="isVisible" class="pointer-events-none fixed inset-0 z-50 overflow-hidden">
    <!-- Main Soft Gold Glow Trail -->
    <div
      class="pointer-events-none absolute h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-[#D4AF37]/15 via-[#C8A45D]/5 to-transparent transition-transform duration-300 ease-out blur-3xl"
      :style="{ left: `${posX}px`, top: `${posY}px` }"
    ></div>

    <!-- Inner Sharp Metallic Ring Cursor -->
    <div
      class="pointer-events-none absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#D4AF37]/10 transition-transform duration-100 ease-out backdrop-blur-[2px]"
      :class="{ 'scale-150 border-[#D4AF37] bg-[#D4AF37]/30': isClicking }"
      :style="{ left: `${posX}px`, top: `${posY}px` }"
    >
      <div class="h-1.5 w-1.5 rounded-full bg-[#FCF6BA] shadow-[0_0_8px_#D4AF37]"></div>
    </div>
  </div>
</template>
