<script setup>
const services = [
  'WEB DEVELOPMENT',
  'MOBILE APPLICATIONS',
  'CUSTOM SOFTWARE',
  'AI & AUTOMATION',
  'ECOMMERCE',
  'UI/UX DESIGN',
  'CLOUD SOLUTIONS',
  'DIGITAL PRODUCTS',
]

// Duplicate once for a seamless infinite loop
const marqueeServices = [...services, ...services]
</script>

<template>
  <section
    class="relative w-full overflow-hidden border-y border-white/10 bg-[#050507] py-5 select-none"
  >
    <!-- Left gradient fade -->
    <div
      class="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#050507] to-transparent sm:w-28"
    />

    <!-- Right gradient fade -->
    <div
      class="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#050507] to-transparent sm:w-28"
    />

    <!-- Infinite scrolling content -->
    <div class="marquee flex w-max items-center">
      <div
        v-for="(service, index) in marqueeServices"
        :key="`${service}-${index}`"
        class="flex shrink-0 items-center"
      >
        <span
          class="whitespace-nowrap px-6 text-[10px] font-bold tracking-[0.22em] text-zinc-500 transition-colors duration-300 hover:text-[#D4AF37] sm:px-10 sm:text-xs sm:tracking-[0.3em]"
        >
          {{ service }}
        </span>

        <!-- Separator -->
        <span
          class="h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]/60 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.marquee {
  animation: marquee 35s linear infinite;
  will-change: transform;
}

.marquee:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(-50%, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    animation: none;
  }
}
</style>
