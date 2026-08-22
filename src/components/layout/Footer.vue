<script setup>
import { RouterLink } from 'vue-router'
import { ArrowUpRight, Linkedin, Github, Mail, Instagram } from 'lucide-vue-next'
import { Phone, MessageCircle } from 'lucide-vue-next'
</script>

<template>
  <footer
    class="relative overflow-hidden border-t border-white/10 bg-[#020203] pt-20 pb-10 text-white"
  >
    <!-- Subtle Ambient Glow -->
    <div
      class="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[650px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.06] blur-[150px]"
    ></div>

    <div class="relative z-10 mx-auto w-[90%] max-w-7xl">
      <!-- ========================= -->
      <!-- MAIN FOOTER -->
      <!-- ========================= -->

      <div class="grid gap-14 lg:grid-cols-[1.4fr_0.8fr_1fr]">
        <!-- BRAND -->
        <div class="max-w-md">
          <RouterLink to="/" class="group inline-flex items-center gap-2.5">
            <!-- Logo -->
            <div
              class="flex h-12 w-auto shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/40 bg-[#0B0B0F] transition-colors duration-300 group-hover:border-[#D4AF37]/80"
            >
              <img
                src="/icon.webp"
                alt="Momentum Lab"
                width="40"
                height="40"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                class="h-11 w-auto rounded-lg object-contain"
              />
            </div>

            <!-- Brand -->
            <div class="min-w-0 leading-none">
              <div class="text-[17px] font-extrabold tracking-[0.1em] text-white sm:text-[18px]">
                MOMENTUM<span class="text-[#D4AF37]"> LAB</span>
              </div>

              <div
                class="mt-1 text-[7px] font-medium uppercase tracking-[0.18em] text-zinc-500 sm:text-[8px]"
              >
                Building Digital Experiences
              </div>
            </div>
          </RouterLink>

          <p class="mt-7 max-w-sm text-sm font-light leading-7 text-zinc-500">
            We turn ideas into thoughtful digital experiences — from high-performance websites to
            custom software and scalable web applications.
          </p>

          <!-- Social Links -->
          <!-- <div class="mt-7 flex items-center gap-3">
            <a
              href="#"
              aria-label="LinkedIn"
              class="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] transition hover:border-[#D4AF37]/40"
            >
              <Linkedin :size="15" class="text-zinc-500 transition group-hover:text-[#D4AF37]" />
            </a>

            <a
              href="#"
              aria-label="GitHub"
              class="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] transition hover:border-[#D4AF37]/40"
            >
              <Github :size="15" class="text-zinc-500 transition group-hover:text-[#D4AF37]" />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              class="group flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] transition hover:border-[#D4AF37]/40"
            >
              <Instagram :size="15" class="text-zinc-500 transition group-hover:text-[#D4AF37]" />
            </a>
          </div> -->
        </div>

        <!-- NAVIGATION -->
        <div>
          <h4 class="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Navigation
          </h4>

          <nav class="mt-6 flex flex-col gap-4 text-sm">
            <RouterLink
              to="/about"
              class="w-fit text-zinc-500 transition hover:translate-x-1 hover:text-white"
            >
              About
            </RouterLink>

            <RouterLink
              to="/services"
              class="w-fit text-zinc-500 transition hover:translate-x-1 hover:text-white"
            >
              Services
            </RouterLink>

            <RouterLink
              to="/projects"
              class="w-fit text-zinc-500 transition hover:translate-x-1 hover:text-white"
            >
              Selected Work
            </RouterLink>

            <RouterLink
              to="/contact"
              class="w-fit text-zinc-500 transition hover:translate-x-1 hover:text-white"
            >
              Contact
            </RouterLink>
          </nav>
        </div>

        <!-- CONNECT -->
        <div>
          <h4 class="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Let's Connect
          </h4>

          <p class="mt-6 max-w-xs text-sm leading-6 text-zinc-500">
            Have a project, idea, or challenge worth discussing? We'd love to hear about it.
          </p>

          <!-- Email -->
          <div class="mt-6 flex flex-wrap gap-3">
            <!-- Email -->
            <a
              href="mailto:info@momentumlab.in"
              class="group flex items-center gap-3 text-sm text-zinc-300 transition hover:text-white"
            >
              <span
                class="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02]"
              >
                <Mail :size="14" class="text-zinc-500 transition group-hover:text-[#D4AF37]" />
              </span>

              <span>info@momentumlab.in</span>
            </a>

            <!-- Phone -->
            <a
              href="tel:+919155161786"
              class="group flex items-center gap-3 text-sm text-zinc-300 transition hover:text-white"
            >
              <span
                class="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02]"
              >
                <Phone :size="14" class="text-zinc-500 transition group-hover:text-[#D4AF37]" />
              </span>

              <span>+91 91551 61786</span>
            </a>

            <!-- Floating Contact Buttons -->
            <div class="fixed bottom-6 right-5 z-50 flex flex-col gap-3 sm:bottom-8 sm:right-8">
              <!-- WhatsApp -->
              <a
                href="https://wa.me/919155161786"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                class="group relative flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#0B0B0E] text-[#D4AF37] shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110 hover:bg-[#D4AF37] hover:text-black"
              >
                <MessageCircle :size="21" />

                <span
                  class="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg border border-white/10 bg-[#111114] px-3 py-2 text-[10px] font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100"
                >
                  Chat on WhatsApp
                </span>
              </a>

              <!-- Call -->
              <a
                href="tel:+919155161786"
                aria-label="Call us"
                class="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-[#0B0B0E] text-white shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-110 hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
              >
                <Phone :size="20" />

                <span
                  class="pointer-events-none absolute right-16 whitespace-nowrap rounded-lg border border-white/10 bg-[#111114] px-3 py-2 text-[10px] font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100"
                >
                  Call +91 91551 61786
                </span>
              </a>
            </div>
          </div>

          <!-- CTA -->
          <RouterLink
            to="/contact"
            class="group mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D4AF37]"
          >
            Start a conversation

            <ArrowUpRight
              :size="14"
              class="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </RouterLink>
        </div>
      </div>

      <!-- ========================= -->
      <!-- DIVIDER -->
      <!-- ========================= -->

      <div class="mt-16 border-t border-white/[0.08]"></div>

      <!-- ========================= -->
      <!-- BOTTOM BAR -->
      <!-- ========================= -->

      <div
        class="flex flex-col gap-5 py-7 text-[10px] uppercase tracking-[0.12em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between"
      >
        <!-- Copyright -->
        <p>© 2026 Momentum Lab. All rights reserved.</p>

        <!-- Center -->
        <p class="hidden md:block">Built with purpose.</p>

        <!-- Legal -->
        <div class="flex items-center gap-6">
          <RouterLink to="/privacy-policy" class="transition hover:text-zinc-300">
            Privacy
          </RouterLink>

          <RouterLink to="/terms-and-conditions" class="transition hover:text-zinc-300">
            Terms
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
