<script setup>
import { Sparkles, Linkedin, Twitter, Globe, ArrowUpRight } from 'lucide-vue-next'

const team = [
  {
    name: 'Alexander Vance',
    role: 'Founder & Executive Creative Director',
    bio: 'Former Design Director at Apple & Spatial UI Lead. 14+ years architecting global luxury digital experiences.',
    initials: 'AV'
  },
  {
    name: 'Dr. Soraya Chen',
    role: 'Head of 3D Graphics & WebGL',
    bio: 'Ph.D. in Computer Graphics (ETH Zürich). Specialized in GLSL real-time raymarching shaders and Spatial GPU computation.',
    initials: 'SC'
  },
  {
    name: 'Marcus Thorne',
    role: 'Principal Systems Architect',
    bio: 'Ex-Stripe Senior Staff Engineer. Specialist in sub-millisecond Vue 3 reactivity and high-security fintech infrastructure.',
    initials: 'MT'
  }
]
</script>

<template>
  <section class="relative bg-[#030303] py-28 text-white overflow-hidden border-t border-white/5">
    <div class="mx-auto w-[90%] max-w-7xl">
      
      <!-- Section Header -->
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
          <Sparkles :size="14" />
          <span>Leadership & Engineering</span>
        </div>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl uppercase text-silver-gradient">
          THE MINDS BEHIND VALENCE<span class="text-[#D4AF37]">.</span>
        </h2>
        <p class="mt-4 text-base text-zinc-400 font-light">
          A elite collective of senior design engineers, GPU shader specialists, and systems architects.
        </p>
      </div>

      <!-- Team Grid -->
      <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(member, idx) in team"
          :key="idx"
          class="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#08080C] p-8 transition-all duration-500 hover:border-[#D4AF37]/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.12)] flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between">
              <div class="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#D4AF37]/40 bg-[#12121A] text-xl font-bold text-[#FCF6BA] shadow-lg group-hover:scale-105 transition">
                {{ member.initials }}
              </div>
              <span class="text-[10px] font-mono tracking-widest text-[#D4AF37]">EXECUTIVE</span>
            </div>

            <h3 class="mt-6 text-xl font-bold text-white group-hover:text-[#FCF6BA] transition-colors">
              {{ member.name }}
            </h3>
            <p class="mt-1 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
              {{ member.role }}
            </p>

            <p class="mt-4 text-xs text-zinc-400 font-light leading-relaxed">
              {{ member.bio }}
            </p>
          </div>

          <div class="mt-8 flex items-center gap-4 border-t border-white/5 pt-4 text-zinc-500">
            <span class="text-[10px] font-mono uppercase tracking-widest text-zinc-400">VALENCE PARTNER</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
