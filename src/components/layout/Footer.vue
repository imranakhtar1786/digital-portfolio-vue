<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ArrowUpRight, Sparkles, Check, Send, Globe, Shield } from 'lucide-vue-next'

const newsletterEmail = ref('')
const isSubscribed = ref(false)

const handleSubscribe = () => {
  if (!newsletterEmail.value) return
  isSubscribed.value = true
  setTimeout(() => {
    isSubscribed.value = false
    newsletterEmail.value = ''
  }, 4000)
}
</script>

<template>
  <footer class="relative bg-[#020203] pt-20 pb-12 text-white border-t border-white/10 overflow-hidden">
    <!-- Ambient Gold Glow -->
    <div class="pointer-events-none absolute left-1/2 bottom-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-radial from-[#D4AF37]/10 via-transparent to-transparent blur-[140px]"></div>

    <div class="mx-auto w-[90%] max-w-7xl relative z-10">
      
      <!-- Top Grid -->
      <div class="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
        
        <!-- Brand Info -->
        <div>
          <RouterLink to="/" class="flex items-center gap-3">
            <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#12121A]">
              <span class="font-bold text-[#FCF6BA] text-lg">V</span>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-extrabold tracking-[0.18em] text-white">
                VALENCE<span class="text-[#D4AF37]">.IN</span>
              </span>
              <span class="text-[9px] uppercase tracking-[0.2em] text-[#C8A45D]">FOUNDED BY IMRAN AKHTAR</span>
            </div>
          </RouterLink>

          <p class="mt-4 text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
            Crafting full-stack web applications, mobile apps, performance digital marketing, and server migrations at freelancer-friendly rates.
          </p>

          <!-- System Status Pill -->
          <div class="mt-6 inline-flex items-center gap-2.5 rounded-full border border-green-500/30 bg-[#0E1510] px-3.5 py-1.5 text-[10px] font-mono text-green-400">
            <span class="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
            <span>SYSTEMS OPERATIONAL // READY FOR HIRE</span>
          </div>
        </div>

        <!-- Links Column -->
        <div class="grid grid-cols-2 gap-8 text-xs">
          <div>
            <h4 class="font-semibold text-white uppercase tracking-widest text-[#D4AF37]">Explore</h4>
            <ul class="mt-4 space-y-2.5 text-zinc-400">
              <li><RouterLink to="/about" class="hover:text-white transition">About Imran</RouterLink></li>
              <li><RouterLink to="/services" class="hover:text-white transition">All Services</RouterLink></li>
              <li><RouterLink to="/projects" class="hover:text-white transition">11 Projects</RouterLink></li>
              <li><RouterLink to="/estimator" class="hover:text-white transition">Cost Estimator</RouterLink></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-white uppercase tracking-widest text-[#D4AF37]">Quick Links</h4>
            <ul class="mt-4 space-y-2.5 text-zinc-400">
              <li><RouterLink to="/pricing" class="hover:text-white transition">Pricing Tiers</RouterLink></li>
              <li><RouterLink to="/contact" class="hover:text-white transition">Hire Us</RouterLink></li>
              <li><a href="https://imran-akhtar.vercel.app/" target="_blank" rel="noopener" class="hover:text-white transition flex items-center gap-1"><span>ImranOS</span><ArrowUpRight :size="10" /></a></li>
            </ul>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-xs font-semibold text-white uppercase tracking-widest text-[#D4AF37]">VALENCE Dispatch</h4>
          <p class="mt-2 text-xs text-zinc-400 font-light">Direct insights from Imran Akhtar on full-stack web dev, Django APIs & Next.js.</p>

          <form @submit.prevent="handleSubscribe" class="mt-4">
            <div class="flex items-center rounded-xl border border-white/10 bg-[#0A0A0E] p-1.5 focus-within:border-[#D4AF37]">
              <input
                v-model="newsletterEmail"
                type="email"
                required
                placeholder="your@email.com"
                class="w-full bg-transparent px-3 py-1.5 text-xs text-white placeholder-zinc-600 focus:outline-none"
              />
              <button
                type="submit"
                class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D4AF37] text-black font-bold shrink-0 hover:scale-105 transition"
              >
                <Check v-if="isSubscribed" :size="15" />
                <Send v-else :size="13" />
              </button>
            </div>
            <span v-if="isSubscribed" class="text-[10px] text-[#FCF6BA] mt-1 block">Subscribed successfully.</span>
          </form>
        </div>

      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-8 text-[11px] text-zinc-500 font-mono">
        <p>© 2026 VALENCE DIGITAL BY IMRAN AKHTAR. ALL RIGHTS RESERVED.</p>
        
        <div class="flex items-center gap-6 mt-4 sm:mt-0">
          <RouterLink to="/about" class="hover:text-zinc-300">ABOUT FOUNDER</RouterLink>
          <RouterLink to="/pricing" class="hover:text-zinc-300">PRICING</RouterLink>
          <RouterLink to="/contact" class="hover:text-zinc-300">CONTACT</RouterLink>
        </div>
      </div>

    </div>
  </footer>
</template>
