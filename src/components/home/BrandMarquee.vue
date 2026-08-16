<script setup>
const brands = [
  'AETHERIA CAPITAL',
  'SOLARIS HOROLOGY',
  'HYPERION MOTORS',
  'VALENCE LABS',
  'AURA LUXURY',
  'VERTEX GLOBAL',
  'LUMINARY SPATIAL',
  'NOVA VENTURES'
]
</script>

<template>
  <div class="relative w-full border-y border-white/10 bg-[#050507] py-6 overflow-hidden select-none">
    <!-- Gradient Fade Edges -->
    <div class="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#030303] to-transparent"></div>
    <div class="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#030303] to-transparent"></div>

    <div class="flex w-max animate-[marquee_25s_linear_infinite] items-center gap-16">
      <div v-for="(brand, idx) in [...brands, ...brands, ...brands]" :key="idx" class="flex items-center gap-16">
        <span class="text-sm font-extrabold tracking-[0.35em] text-zinc-500 transition-colors duration-300 hover:text-[#D4AF37]">
          {{ brand }}
        </span>
        <span class="h-1.5 w-1.5 rounded-full bg-[#D4AF37]/40"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-33.333%); }
}
</style>
