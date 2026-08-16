<script setup>
import { ref } from 'vue'
import { Sparkles, Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-vue-next'

const currentIndex = ref(0)

const testimonials = [
  {
    quote: "VALENCE transformed our digital flagship into an artwork. The 3D WebGL configurator increased our global online watch reservations by 340% within the first 60 days.",
    author: "Marc-Antoine Laurent",
    role: "Chief Executive Officer",
    company: "SOLARIS Horology Geneva",
    rating: 5,
    metrics: "+340% Conversion Growth"
  },
  {
    quote: "The speed and spatial refinement of their work is unmatched. They delivered our spatial telemetry suite ahead of schedule with zero post-launch bugs.",
    author: "Dr. Elena Rostova",
    role: "VP of Autonomous Systems",
    company: "Hyperion Dynamics",
    rating: 5,
    metrics: "0.02ms Response Latency"
  },
  {
    quote: "Partnering with VALENCE felt like working directly with Apple's internal design engineering lab. Their attention to liquid animations and security is world class.",
    author: "Julian Sterling",
    role: "Managing Director",
    company: "Aetheria Global Capital",
    rating: 5,
    metrics: "$1.2B Institutional Platform"
  }
]

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.length
}

const prevTestimonial = () => {
  currentIndex.value = (currentIndex.value - 1 + testimonials.length) % testimonials.length
}
</script>

<template>
  <section class="relative bg-[#050508] py-28 text-white overflow-hidden border-t border-white/5">
    <div class="mx-auto w-[90%] max-w-7xl">
      
      <!-- Section Title -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <div class="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            <Sparkles :size="14" />
            <span>Executive Endorsements</span>
          </div>
          <h2 class="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl uppercase text-silver-gradient">
            CLIENT RECOGNITION<span class="text-[#D4AF37]">.</span>
          </h2>
        </div>

        <!-- Slider Navigation Controls -->
        <div class="flex items-center gap-3">
          <button
            @click="prevTestimonial"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0E0E14] text-zinc-400 hover:border-[#D4AF37] hover:text-white transition"
          >
            <ChevronLeft :size="20" />
          </button>
          <button
            @click="nextTestimonial"
            class="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0E0E14] text-zinc-400 hover:border-[#D4AF37] hover:text-white transition"
          >
            <ChevronRight :size="20" />
          </button>
        </div>
      </div>

      <!-- Testimonial Display Card -->
      <div class="mt-14 overflow-hidden rounded-3xl border border-[#D4AF37]/30 bg-[#08080C] p-8 sm:p-12 shadow-2xl relative">
        <Quote :size="72" class="absolute right-8 top-8 text-white/5 pointer-events-none" />

        <div class="max-w-4xl relative z-10">
          
          <!-- Stars -->
          <div class="flex items-center gap-1.5 text-[#D4AF37]">
            <Star v-for="s in testimonials[currentIndex].rating" :key="s" :size="18" fill="#D4AF37" />
            <span class="ml-3 text-xs font-mono font-bold text-[#FCF6BA]">{{ testimonials[currentIndex].metrics }}</span>
          </div>

          <!-- Quote -->
          <p class="mt-6 text-xl sm:text-2xl md:text-3xl font-light text-zinc-100 leading-relaxed font-serif italic">
            "{{ testimonials[currentIndex].quote }}"
          </p>

          <!-- Author Info -->
          <div class="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
            <div class="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#14141E] font-bold text-[#D4AF37] text-lg">
              {{ testimonials[currentIndex].author.charAt(0) }}
            </div>
            <div>
              <h4 class="text-base font-bold text-white flex items-center gap-2">
                <span>{{ testimonials[currentIndex].author }}</span>
                <ShieldCheck :size="16" class="text-[#D4AF37]" title="Verified Client Partner" />
              </h4>
              <p class="text-xs text-zinc-400">{{ testimonials[currentIndex].role }} — <span class="text-[#D4AF37] font-semibold">{{ testimonials[currentIndex].company }}</span></p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
