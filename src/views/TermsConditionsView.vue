<script setup>
import { FileText, Scale, ShieldCheck, CreditCard, AlertTriangle, Mail } from 'lucide-vue-next'

import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="relative min-h-screen bg-[#030303] text-white">
    <Header />

    <main class="relative overflow-hidden pt-32 pb-24">
      <!-- Background -->

      <div
        class="pointer-events-none absolute left-1/2 top-40 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.04] blur-[150px]"
      ></div>

      <div class="relative mx-auto w-[90%] max-w-4xl">
        <!-- Header -->

        <div class="border-b border-white/[0.07] pb-10">
          <div
            class="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-[#D4AF37]"
          >
            <FileText :size="15" />
            <span>Legal Information</span>
          </div>

          <h1 class="mt-5 text-4xl font-black uppercase tracking-[-0.05em] sm:text-6xl">
            Terms &
            <span class="text-[#D4AF37]">Conditions.</span>
          </h1>

          <p class="mt-5 max-w-2xl text-sm leading-relaxed text-zinc-500">
            These Terms and Conditions govern your use of our website and the services provided
            through it.
          </p>

          <p class="mt-5 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-700">
            Last Updated: August 17, 2026
          </p>
        </div>

        <!-- Terms -->

        <div class="mt-12 space-y-8">
          <!-- Acceptance -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <div class="flex items-start gap-4">
              <div
                class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05]"
              >
                <ShieldCheck :size="18" class="text-[#D4AF37]" />
              </div>

              <div>
                <h2 class="text-lg font-black uppercase">1. Acceptance of Terms</h2>

                <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                  By accessing or using this website, you agree to these Terms and Conditions. If
                  you do not agree with any part of these terms, you should not use the website or
                  submit project inquiries.
                </p>
              </div>
            </div>
          </section>

          <!-- Services -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <h2 class="text-lg font-black uppercase">2. Services</h2>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              We provide digital services which may include website development, web applications,
              e-commerce platforms, mobile applications, custom software, technical consulting,
              deployment, maintenance, and related services.
            </p>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              The exact scope, timeline, deliverables, and pricing for a project will be agreed upon
              separately before development begins.
            </p>
          </section>

          <!-- Pricing -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <div class="flex items-start gap-4">
              <CreditCard :size="20" class="mt-1 text-[#D4AF37]" />

              <div>
                <h2 class="text-lg font-black uppercase">3. Pricing & Estimates</h2>

                <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                  Prices displayed on this website, including package prices and calculator
                  estimates, are indicative starting prices unless otherwise stated.
                </p>

                <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                  Final pricing may vary depending on project complexity, features, integrations,
                  third-party services, infrastructure requirements, timelines, and other technical
                  requirements.
                </p>

                <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                  A submitted estimate does not constitute a legally binding quotation or guarantee
                  of final project cost.
                </p>
              </div>
            </div>
          </section>

          <!-- Payments -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <h2 class="text-lg font-black uppercase">4. Payments</h2>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              Payment terms, project milestones, deposits, and delivery schedules will be
              communicated and agreed upon before the project begins.
            </p>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              Work may be paused if agreed payments are delayed or not received according to the
              approved payment schedule.
            </p>
          </section>

          <!-- Project Scope -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <h2 class="text-lg font-black uppercase">5. Project Scope & Revisions</h2>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              The project scope will be based on the agreed requirements. Requests outside the
              agreed scope may require additional time and cost.
            </p>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              Revision limits and change request procedures may be defined separately in the project
              proposal or agreement.
            </p>
          </section>

          <!-- Client Responsibility -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <h2 class="text-lg font-black uppercase">6. Client Responsibilities</h2>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              Clients are responsible for providing accurate project requirements, content, branding
              assets, credentials, approvals, and other information required for successful project
              completion.
            </p>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              Delays in providing required materials or approvals may affect the project timeline.
            </p>
          </section>

          <!-- Third Party -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <h2 class="text-lg font-black uppercase">7. Third-Party Services</h2>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              Projects may rely on third-party services such as hosting providers, payment gateways,
              APIs, cloud platforms, domain registrars, analytics tools, or other external services.
            </p>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              We are not responsible for outages, pricing changes, policy changes, service
              interruptions, or failures caused by third-party providers.
            </p>
          </section>

          <!-- IP -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <h2 class="text-lg font-black uppercase">8. Intellectual Property</h2>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              Ownership and intellectual property rights for project deliverables, source code,
              design assets, and other materials will be determined according to the specific
              project agreement.
            </p>

            <p class="mt-4 text-sm leading-relaxed text-zinc-500">
              Third-party libraries, frameworks, fonts, plugins, and services remain subject to
              their respective licenses and terms.
            </p>
          </section>

          <!-- Liability -->

          <section class="rounded-[1.75rem] border border-[#D4AF37]/15 bg-[#070709] p-7 sm:p-9">
            <div class="flex items-start gap-4">
              <AlertTriangle :size="20" class="mt-1 text-[#D4AF37]" />

              <div>
                <h2 class="text-lg font-black uppercase">9. Limitation of Liability</h2>

                <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                  To the maximum extent permitted by applicable law, we shall not be liable for
                  indirect, incidental, consequential, or special damages arising from the use of
                  this website or services.
                </p>

                <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                  Clients are responsible for maintaining appropriate backups, security procedures,
                  and access controls for their own systems and data.
                </p>
              </div>
            </div>
          </section>

          <!-- Changes -->

          <section class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 sm:p-9">
            <div class="flex items-start gap-4">
              <Scale :size="20" class="mt-1 text-[#D4AF37]" />

              <div>
                <h2 class="text-lg font-black uppercase">10. Changes to These Terms</h2>

                <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                  These Terms and Conditions may be updated from time to time. Continued use of the
                  website after changes are published may constitute acceptance of the updated
                  terms.
                </p>
              </div>
            </div>
          </section>

          <!-- Contact -->

          <section
            class="rounded-[1.75rem] border border-[#D4AF37]/20 bg-[#D4AF37]/[0.025] p-7 sm:p-9"
          >
            <div class="flex items-start gap-4">
              <Mail :size="20" class="mt-1 text-[#D4AF37]" />

              <div>
                <h2 class="text-lg font-black uppercase">11. Contact</h2>

                <p class="mt-4 text-sm leading-relaxed text-zinc-500">
                  If you have questions regarding these Terms and Conditions, please contact us.
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
