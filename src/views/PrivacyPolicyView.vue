<script setup>
import { ShieldCheck, Lock, Database, Eye, Mail } from 'lucide-vue-next'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="relative min-h-screen bg-[#030303] text-white">
    <Header />

    <main class="relative overflow-hidden pt-32 pb-24">
      <!-- Background Glow -->
      <div
        class="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.04] blur-[150px]"
      ></div>

      <div class="relative mx-auto w-[90%] max-w-4xl">
        <!-- Header -->

        <div class="border-b border-white/[0.07] pb-10">
          <div
            class="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]"
          >
            <ShieldCheck :size="15" />
            <span>Legal Information</span>
          </div>

          <h1 class="mt-5 text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
            Privacy
            <span class="text-[#D4AF37]">Policy.</span>
          </h1>

          <p class="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-500">
            This Privacy Policy explains how we collect, use, and protect information submitted
            through our website.
          </p>

          <p class="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-700">
            Last Updated: August 17, 2026
          </p>
        </div>

        <!-- Content -->

        <div class="mt-12 space-y-8">
          <!-- Information We Collect -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05]"
              >
                <Database :size="18" class="text-[#D4AF37]" />
              </div>

              <div>
                <h2 class="text-lg font-black uppercase">1. Information We Collect</h2>

                <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                  When you contact us or submit a project inquiry, we may collect information such
                  as:
                </p>

                <ul class="mt-5 space-y-3 text-sm text-zinc-400">
                  <li>• Your name</li>
                  <li>• Email address</li>
                  <li>• Company or brand name</li>
                  <li>• Project requirements</li>
                  <li>• Selected project type or service</li>
                  <li>• Any additional information you voluntarily provide</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- How We Use -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05]"
              >
                <Eye :size="18" class="text-[#D4AF37]" />
              </div>

              <div>
                <h2 class="text-lg font-black uppercase">2. How Your Information Is Used</h2>

                <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                  Information submitted through this website may be used to:
                </p>

                <ul class="mt-5 space-y-3 text-sm text-zinc-400">
                  <li>• Respond to project inquiries</li>
                  <li>• Prepare quotations or project estimates</li>
                  <li>• Discuss project requirements</li>
                  <li>• Provide requested services</li>
                  <li>• Improve our website and services</li>
                  <li>• Communicate regarding ongoing projects</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Data Protection -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05]"
              >
                <Lock :size="18" class="text-[#D4AF37]" />
              </div>

              <div>
                <h2 class="text-lg font-black uppercase">3. Data Protection</h2>

                <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                  We take reasonable measures to protect information submitted through our website.
                  However, no method of internet transmission or electronic storage can be
                  guaranteed to be completely secure.
                </p>

                <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                  You should avoid submitting highly sensitive personal, financial, authentication,
                  or confidential information through public website forms unless specifically
                  requested through a secure communication channel.
                </p>
              </div>
            </div>
          </section>

          <!-- Sharing -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <h2 class="text-lg font-black uppercase">4. Information Sharing</h2>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              We do not sell your personal information. Information may only be shared when
              necessary to provide requested services, operate required business tools, comply with
              legal obligations, or protect our rights and security.
            </p>
          </section>

          <!-- Third Party -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <h2 class="text-lg font-black uppercase">5. Third-Party Services</h2>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              Our website may use third-party services for hosting, analytics, communication,
              deployment, forms, payments, or other technical infrastructure.
            </p>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              These services may collect or process information according to their own privacy
              policies.
            </p>
          </section>

          <!-- Cookies -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <h2 class="text-lg font-black uppercase">6. Cookies & Analytics</h2>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              Our website may use cookies, analytics tools, or similar technologies to understand
              website usage and improve the visitor experience.
            </p>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              You may be able to control or disable cookies through your browser settings.
            </p>
          </section>

          <!-- Contact -->

          <section
            class="rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.025] p-7 sm:p-9"
          >
            <div class="flex items-start gap-4">
              <Mail :size="20" class="mt-1 text-[#D4AF37]" />

              <div>
                <h2 class="text-lg font-black uppercase">7. Contact Us</h2>

                <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                  If you have questions regarding this Privacy Policy or how your information is
                  handled, please contact us.
                </p>

                <a
                  href="mailto:info@momentumlab.in"
                  class="mt-5 inline-block text-sm font-semibold text-[#D4AF37] transition hover:text-[#FCF6BA]"
                >
                  info@momentumlab.in
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>

    <Footer />
  </div>
</template>
