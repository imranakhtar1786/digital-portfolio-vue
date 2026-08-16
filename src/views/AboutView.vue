<script setup>
import { RouterLink } from 'vue-router'
import { Sparkles, Code, Terminal, CheckCircle2, ShieldCheck, HeartHandshake, Zap, ArrowRight, UserCheck } from 'lucide-vue-next'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CursorGlow from '@/components/common/CursorGlow.vue'

const techStack = [
  'Next.js 14/15', 'React.js', 'Django & DRF', 'Python', 'PostgreSQL',
  'Redis Caching', 'Tailwind CSS', 'GSAP & Lenis', 'Linux Ubuntu VPS', 'Nginx & DevOps'
]

const highlights = [
  { title: '11+ Production Apps', desc: 'Successfully architected and deployed web platforms, e-commerce stores, and real estate portals.' },
  { title: 'Freelancer Pricing Model', desc: 'No bloated agency overhead. You work directly with the founder and pay fair, transparent rates.' },
  { title: 'Sub-Second Performance', desc: 'Core Web Vitals optimized with Redis caching, query tuning, and lightweight asset delivery.' },
  { title: '100% Source Code IP', desc: 'You own 100% of your GitHub repositories, database schemas, and intellectual property.' }
]
</script>

<template>
  <div class="relative min-h-screen bg-[#030303] text-white">
    <CursorGlow />
    <Header />

    <main class="pt-32 pb-24">
      <div class="mx-auto w-[90%] max-w-7xl">
        
        <!-- Header Banner -->
        <div class="max-w-3xl">
          <div class="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            <Sparkles :size="14" />
            <span>Meet The Founder & Craft</span>
          </div>
          <h1 class="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl uppercase text-silver-gradient">
            ABOUT VALENCE & IMRAN<span class="text-[#D4AF37]">.</span>
          </h1>
          <p class="mt-4 text-base text-zinc-400 font-light leading-relaxed">
            Bridging the gap between high-end digital agency architecture and affordable freelancer-friendly pricing.
          </p>
        </div>

        <!-- Founder Profile Card -->
        <div class="mt-16 overflow-hidden rounded-3xl border border-[#D4AF37]/40 bg-gradient-to-br from-[#0D0D14] via-[#08080C] to-[#0A0A0F] p-8 sm:p-12 shadow-2xl">
          <div class="grid gap-10 lg:grid-cols-[1fr_1.5fr] items-center">
            
            <!-- Founder Avatar & Tag -->
            <div>
              <div class="relative mx-auto max-w-xs overflow-hidden rounded-2xl border border-[#D4AF37]/50 bg-[#12121A] p-6 text-center shadow-xl">
                <div class="flex h-24 w-24 items-center justify-center mx-auto rounded-full border-2 border-[#D4AF37] bg-[#1E190E] text-[#FCF6BA] text-3xl font-extrabold shadow-inner">
                  IA
                </div>

                <h3 class="mt-6 text-xl font-extrabold text-white uppercase tracking-wider">Imran Akhtar</h3>
                <p class="text-xs text-[#D4AF37] font-mono mt-1">Founder & Lead Full-Stack Architect</p>
                <p class="text-[11px] text-zinc-400 mt-2 font-light">Creator of ImranOS & Lead Engineer at VALENCE</p>

                <div class="mt-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-[#0E1510] px-3.5 py-1.5 text-[10px] font-mono text-green-400">
                  <span class="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span>AVAILABLE FOR NEW PROJECTS</span>
                </div>
              </div>
            </div>

            <!-- Founder Bio Story -->
            <div class="space-y-4 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
              <h2 class="text-2xl font-extrabold text-white uppercase tracking-wide">
                Direct Engineering. Zero Corporate Bloat.
              </h2>

              <p>
                Hi, I'm <strong class="text-white">Imran Akhtar</strong>. I started my journey as an independent full-stack developer building interactive web operating systems (like <span class="text-[#D4AF37] font-mono">ImranOS</span>) and scalable backend APIs. Over the years, I've developed over 11 live production platforms ranging from full-stack e-commerce platforms like <span class="text-[#FCF6BA]">NSTEE</span> to real estate portals (<span class="text-[#FCF6BA]">Elmas Group</span>, <span class="text-[#FCF6BA]">Rudra Theme</span>), digital agency sites (<span class="text-[#FCF6BA]">Adclan</span>, <span class="text-[#FCF6BA]">DPT Hub</span>), and server migration DevOps setups (<span class="text-[#FCF6BA]">Kiloi Foods</span>).
              </p>

              <p>
                I founded <strong class="text-white">VALENCE</strong> because I saw small businesses, startups, and entrepreneurs paying exorbitant agency fees for simple websites, or settling for slow, fragile code from unvetted providers.
              </p>

              <p>
                Because we operate in our initial startup phase with lean freelance economics, you work directly with me—the architect writing your code. You get <strong>Apple-grade design, sub-second Next.js/Django performance, and complete source code ownership</strong> at pricing tailored for real-world budgets.
              </p>

              <div class="pt-4 flex flex-wrap gap-4">
                <RouterLink
                  to="/projects"
                  class="inline-flex items-center gap-2 rounded-xl bg-[#D4AF37] px-6 py-3 text-xs font-bold uppercase tracking-widest text-black shadow-lg hover:scale-105 transition"
                >
                  <span>Explore My 11 Projects</span>
                  <ArrowRight :size="14" />
                </RouterLink>

                <RouterLink
                  to="/contact"
                  class="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-[#12121A] px-6 py-3 text-xs font-bold uppercase tracking-widest text-white hover:border-[#D4AF37] transition"
                >
                  <span>Talk With Imran</span>
                </RouterLink>
              </div>
            </div>

          </div>
        </div>

        <!-- Tech Stack Grid -->
        <div class="mt-16">
          <h2 class="text-xs uppercase tracking-[0.3em] font-bold text-[#D4AF37] mb-6">Mastered Technology Stack</h2>
          <div class="flex flex-wrap gap-2.5">
            <span v-for="t in techStack" :key="t" class="rounded-xl border border-white/10 bg-[#08080C] px-5 py-3 text-xs font-mono text-zinc-300">
              ⚡ {{ t }}
            </span>
          </div>
        </div>

        <!-- Why Choose Us Grid -->
        <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(h, i) in highlights" :key="i" class="rounded-3xl border border-white/10 bg-[#08080C] p-6 hover:border-[#D4AF37]/50 transition">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#14141E] text-[#D4AF37] mb-4">
              <CheckCircle2 :size="20" />
            </div>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider">{{ h.title }}</h4>
            <p class="mt-2 text-xs text-zinc-400 font-light leading-relaxed">{{ h.desc }}</p>
          </div>
        </div>

      </div>
    </main>

    <Footer />
  </div>
</template>
