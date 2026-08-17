<script setup>
import { RouterLink } from 'vue-router'
import { ArrowUpRight, Linkedin, Github, Mail, Instagram } from 'lucide-vue-next'
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
          <RouterLink to="/" class="group inline-flex items-center gap-3">
            <!-- Logo -->
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/40 bg-[#0B0B0F] transition duration-300 group-hover:border-[#D4AF37]/80"
            >
              <span class="text-lg font-black text-[#D4AF37]"> V </span>
            </div>

            <!-- Name -->
            <div>
              <div class="text-xl font-extrabold tracking-[0.16em] text-white">
                VALENCE<span class="text-[#D4AF37]">.IN</span>
              </div>

              <div class="mt-0.5 text-[8px] uppercase tracking-[0.22em] text-zinc-600">
                Digital Studio
              </div>
            </div>
          </RouterLink>

          <p class="mt-7 max-w-sm text-sm font-light leading-7 text-zinc-500">
            We turn ideas into thoughtful digital experiences — from high-performance websites to
            custom software and scalable web applications.
          </p>

          <!-- Social Links -->
          <div class="mt-7 flex items-center gap-3">
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
          </div>
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
          <a
            href="mailto:hello@yourcompany.com"
            class="group mt-6 flex w-fit items-center gap-3 text-sm text-zinc-300 transition hover:text-white"
          >
            <span
              class="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02]"
            >
              <Mail :size="14" class="text-zinc-500 transition group-hover:text-[#D4AF37]" />
            </span>

            <span> hello@yourcompany.com </span>
          </a>

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
        <p>© 2026 Valence. All rights reserved.</p>

        <!-- Center -->
        <p class="hidden md:block">Built with purpose.</p>

        <!-- Legal -->
        <div class="flex items-center gap-6">
          <RouterLink to="/privacy" class="transition hover:text-zinc-300"> Privacy </RouterLink>

          <RouterLink to="/terms" class="transition hover:text-zinc-300"> Terms </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
