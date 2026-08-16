<script setup>
import { ref, watch } from 'vue'
import { Sparkles, Send, CheckCircle2, ShieldCheck, Mail, MapPin, Phone, ArrowUpRight, X } from 'lucide-vue-next'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const formSubmitted = ref(false)
const selectedBudget = ref('$50k - $100k')

const form = ref({
  name: '',
  email: '',
  org: '',
  message: ''
})

const budgetOptions = ['$25k - $50k', '$50k - $100k', '$100k - $250k', '$250k+']

const submitForm = () => {
  if (!form.value.email || !form.value.name) return
  formSubmitted.value = true
}

const resetAndClose = () => {
  formSubmitted.value = false
  form.value = { name: '', email: '', org: '', message: '' }
  emit('close')
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <section id="contact" class="relative bg-[#030303] py-28 text-white overflow-hidden border-t border-white/5">
    
    <!-- Ambient Glow Spotlights -->
    <div class="pointer-events-none absolute left-1/2 bottom-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-radial from-[#D4AF37]/15 via-transparent to-transparent blur-[140px]"></div>

    <div class="mx-auto w-[90%] max-w-7xl relative z-10">
      
      <div class="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        
        <!-- Left: Contact Info & Hubs -->
        <div>
          <div class="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
            <Sparkles :size="14" />
            <span>Direct Consultation</span>
          </div>

          <h2 class="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl uppercase text-silver-gradient">
            START YOUR BESPOKE BUILD<span class="text-[#D4AF37]">.</span>
          </h2>

          <p class="mt-4 text-base text-zinc-400 font-light leading-relaxed">
            Ready to establish an unmatched digital presence? Connect directly with our executive engineering director.
          </p>

          <!-- Contact Details -->
          <div class="mt-10 space-y-6 text-sm">
            <div class="flex items-center gap-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#0E0E14] text-[#D4AF37]">
                <Mail :size="18" />
              </div>
              <div>
                <span class="text-[11px] text-zinc-500 uppercase tracking-widest block">Direct Executive Desk</span>
                <a href="mailto:partners@valence.luxe" class="text-white font-mono font-semibold hover:text-[#D4AF37]">partners@valence.luxe</a>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <div class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/30 bg-[#0E0E14] text-[#D4AF37]">
                <MapPin :size="18" />
              </div>
              <div>
                <span class="text-[11px] text-zinc-500 uppercase tracking-widest block">Global Hubs</span>
                <span class="text-white font-mono font-semibold">New York • London • Dubai • Tokyo</span>
              </div>
            </div>
          </div>

          <!-- Live SLA card -->
          <div class="mt-10 rounded-2xl border border-white/10 bg-[#08080C] p-6 max-w-md">
            <div class="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
              <ShieldCheck :size="16" />
              <span>Guaranteed Response Guarantee</span>
            </div>
            <p class="mt-2 text-xs text-zinc-400 leading-relaxed font-light">
              All inquiries are reviewed directly under non-disclosure protection. You will receive an initial response within 12 business hours.
            </p>
          </div>
        </div>

        <!-- Right: Interactive Form -->
        <div class="rounded-3xl border border-[#D4AF37]/40 bg-[#08080C] p-8 sm:p-10 shadow-2xl relative">
          
          <div v-if="formSubmitted" class="py-12 text-center">
            <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37] bg-gradient-to-br from-[#1E190E] to-[#0A0A0E] text-[#FCF6BA] shadow-[0_0_40px_rgba(212,175,55,0.4)]">
              <CheckCircle2 :size="40" />
            </div>
            <h3 class="mt-6 text-2xl font-extrabold text-white uppercase tracking-wide">Consultation Scheduled</h3>
            <p class="mt-2 text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
              Thank you, <span class="text-[#D4AF37] font-semibold">{{ form.name }}</span>. We have logged your request and sent a confirmation to <span class="text-white font-mono">{{ form.email }}</span>.
            </p>
          </div>

          <form v-else @submit.prevent="submitForm" class="space-y-5">
            <h3 class="text-lg font-bold text-white uppercase tracking-wider">Inquiry Specification</h3>
            
            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <label class="block text-xs text-zinc-400 mb-1.5 uppercase tracking-wider">Full Name *</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="e.g. Sterling Archer"
                  class="w-full rounded-xl border border-white/10 bg-[#0F0F14] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>

              <div>
                <label class="block text-xs text-zinc-400 mb-1.5 uppercase tracking-wider">Work Email *</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="sterling@company.com"
                  class="w-full rounded-xl border border-white/10 bg-[#0F0F14] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#D4AF37] focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs text-zinc-400 mb-1.5 uppercase tracking-wider">Company / Venture Name</label>
              <input
                v-model="form.org"
                type="text"
                placeholder="Aetheria Holdings"
                class="w-full rounded-xl border border-white/10 bg-[#0F0F14] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#D4AF37] focus:outline-none"
              />
            </div>

            <div>
              <label class="block text-xs text-zinc-400 mb-1.5 uppercase tracking-wider">Target Budget Range</label>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <button
                  v-for="b in budgetOptions"
                  :key="b"
                  type="button"
                  @click="selectedBudget = b"
                  class="rounded-xl border py-2.5 text-center text-xs font-semibold transition"
                  :class="
                    selectedBudget === b
                      ? 'border-[#D4AF37] bg-[#14141E] text-[#FCF6BA]'
                      : 'border-white/10 bg-[#0E0E14] text-zinc-400 hover:border-white/20'
                  "
                >
                  {{ b }}
                </button>
              </div>
            </div>

            <div>
              <label class="block text-xs text-zinc-400 mb-1.5 uppercase tracking-wider">Project Summary</label>
              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Describe your vision, target timeline, and key requirements..."
                class="w-full rounded-xl border border-white/10 bg-[#0F0F14] px-4 py-3 text-sm text-white placeholder-zinc-600 focus:border-[#D4AF37] focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full rounded-xl bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] py-4 text-xs font-extrabold uppercase tracking-widest text-black shadow-lg shadow-[#D4AF37]/30 hover:scale-[1.01] transition flex items-center justify-center gap-2"
            >
              <span>Transmit Project Inquiry</span>
              <Send :size="15" />
            </button>
          </form>

        </div>

      </div>

    </div>
  </section>

  <!-- Popup Contact Modal Triggered from Header -->
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div @click="resetAndClose" class="absolute inset-0 bg-black/85 backdrop-blur-2xl"></div>
      <div class="relative z-10 w-full max-w-xl rounded-3xl border border-[#D4AF37]/40 bg-[#08080C] p-8 text-white shadow-2xl">
        <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <h3 class="text-base font-bold text-white uppercase tracking-wider">Direct Project Desk</h3>
          <button @click="resetAndClose" class="text-zinc-400 hover:text-white"><X :size="18" /></button>
        </div>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div>
            <label class="block text-xs text-zinc-400 mb-1">Full Name</label>
            <input v-model="form.name" type="text" required class="w-full rounded-xl border border-white/10 bg-[#0E0E14] px-4 py-3 text-xs text-white" />
          </div>
          <div>
            <label class="block text-xs text-zinc-400 mb-1">Email</label>
            <input v-model="form.email" type="email" required class="w-full rounded-xl border border-white/10 bg-[#0E0E14] px-4 py-3 text-xs text-white" />
          </div>
          <div>
            <label class="block text-xs text-zinc-400 mb-1">Brief Description</label>
            <textarea v-model="form.message" rows="3" class="w-full rounded-xl border border-white/10 bg-[#0E0E14] px-4 py-2.5 text-xs text-white"></textarea>
          </div>
          <button type="submit" class="w-full rounded-xl bg-[#D4AF37] py-3 text-xs font-bold uppercase tracking-widest text-black">
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  </Transition>
</template>
