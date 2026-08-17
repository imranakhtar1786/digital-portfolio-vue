<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import {
  Sparkles,
  Send,
  CheckCircle2,
  ShieldCheck,
  Mail,
  ArrowUpRight,
  X,
  MessageSquare,
  Layers3,
  Clock3,
  Globe2,
} from 'lucide-vue-next'

const props = defineProps({
  isOpen: Boolean,
})

const emit = defineEmits(['close'])

const formSubmitted = ref(false)

const form = ref({
  name: '',
  email: '',
  company: '',
  projectType: '',
  message: '',
})

const projectTypes = [
  'Website',
  'Web Application',
  'E-commerce',
  'SaaS',
  'Mobile App',
  'Custom Software',
  'Other',
]

const submitForm = () => {
  if (!form.value.name.trim() || !form.value.email.trim()) return

  formSubmitted.value = true
}

const resetForm = () => {
  formSubmitted.value = false

  form.value = {
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  }
}

const closeModal = () => {
  resetForm()
  emit('close')
}

watch(
  () => props.isOpen,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
  },
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <section
    id="contact"
    class="relative min-h-screen overflow-hidden border-t border-white/[0.06] bg-[#030303] text-white"
  >
    <!-- ===================================================== -->
    <!-- BACKGROUND -->
    <!-- ===================================================== -->

    <div
      class="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.035] blur-[150px]"
    ></div>

    <div
      class="pointer-events-none absolute inset-0 opacity-[0.018]"
      style="
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.5) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.5) 1px, transparent 1px);
        background-size: 80px 80px;
      "
    ></div>

    <!-- ===================================================== -->
    <!-- MAIN CONTAINER -->
    <!-- ===================================================== -->

    <div
      class="relative z-10 mx-auto flex min-h-screen w-[90%] max-w-7xl flex-col justify-center py-14 sm:py-16 lg:py-12"
    >
      <!-- ===================================================== -->
      <!-- COMPACT HEADER -->
      <!-- ===================================================== -->

      <div
        class="mb-8 flex flex-col gap-5 border-b border-white/[0.06] pb-7 lg:mb-10 lg:flex-row lg:items-end lg:justify-between"
      >
        <!-- Left -->

        <div>
          <div
            class="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]"
          >
            <Sparkles :size="12" />

            <span>Start a Conversation</span>
          </div>

          <h2
            class="mt-4 max-w-3xl text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-5xl lg:text-6xl"
          >
            Let's build
            <span class="text-[#D4AF37]"> something.</span>
          </h2>
        </div>

        <!-- Right -->

        <div class="max-w-md lg:pb-1">
          <p class="text-xs leading-[1.8] text-zinc-500 sm:text-sm">
            Have a project, product, or idea in mind? Tell us what you're working on and we'll help
            you figure out the right direction.
          </p>
        </div>
      </div>

      <!-- ===================================================== -->
      <!-- CONTACT WORKSPACE -->
      <!-- ===================================================== -->

      <div class="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <!-- ================================================= -->
        <!-- LEFT INFORMATION -->
        <!-- ================================================= -->

        <div class="flex flex-col gap-4">
          <!-- Contact overview -->

          <div
            class="relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-6 sm:p-7"
          >
            <!-- Glow -->

            <div
              class="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#D4AF37]/[0.05] blur-[70px]"
            ></div>

            <div class="relative">
              <!-- Header -->

              <div class="flex items-center justify-between">
                <div>
                  <p class="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                    Project Desk
                  </p>

                  <h3 class="mt-2 text-xl font-black uppercase tracking-[-0.04em]">
                    Start here<span class="text-[#D4AF37]">.</span>
                  </h3>
                </div>

                <div
                  class="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.05]"
                >
                  <MessageSquare :size="16" class="text-[#D4AF37]" />
                </div>
              </div>

              <!-- Contact items -->

              <div class="mt-7 space-y-4">
                <!-- Email -->

                <a href="mailto:hello@yourcompany.com" class="group flex items-center gap-3.5">
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02] transition duration-300 group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/[0.04]"
                  >
                    <Mail :size="15" class="text-zinc-500 transition group-hover:text-[#D4AF37]" />
                  </div>

                  <div class="min-w-0">
                    <p class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-600">
                      Email
                    </p>

                    <p
                      class="mt-1 truncate text-xs font-medium text-zinc-300 transition group-hover:text-white"
                    >
                      hello@yourcompany.com
                    </p>
                  </div>
                </a>

                <!-- Response -->

                <div class="flex items-center gap-3.5">
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02]"
                  >
                    <Clock3 :size="15" class="text-zinc-500" />
                  </div>

                  <div>
                    <p class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-600">
                      Response
                    </p>

                    <p class="mt-1 text-xs font-medium text-zinc-300">
                      Usually within 1 business day
                    </p>
                  </div>
                </div>

                <!-- Scope -->

                <div class="flex items-center gap-3.5">
                  <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.02]"
                  >
                    <Layers3 :size="15" class="text-zinc-500" />
                  </div>

                  <div>
                    <p class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-600">
                      Services
                    </p>

                    <p class="mt-1 text-xs font-medium text-zinc-300">
                      Web · Apps · Digital Products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Process -->

          <div class="rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-6 sm:p-7">
            <div class="flex items-center justify-between">
              <div>
                <p class="font-mono text-[8px] uppercase tracking-[0.25em] text-zinc-600">
                  Simple Process
                </p>

                <h3 class="mt-2 text-lg font-black uppercase tracking-[-0.03em]">
                  From idea to build
                </h3>
              </div>

              <Globe2 :size="17" class="text-zinc-700" />
            </div>

            <div class="mt-6 space-y-4">
              <!-- Step -->

              <div class="flex items-center gap-3">
                <span
                  class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/[0.05] font-mono text-[8px] text-[#D4AF37]"
                >
                  01
                </span>

                <div>
                  <p class="text-xs font-semibold text-zinc-300">Share your idea</p>

                  <p class="mt-0.5 text-[9px] text-zinc-600">
                    Tell us what you're trying to build.
                  </p>
                </div>
              </div>

              <!-- Line -->

              <div class="ml-3.5 h-3 w-px bg-white/[0.08]"></div>

              <!-- Step -->

              <div class="flex items-center gap-3">
                <span
                  class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] font-mono text-[8px] text-zinc-500"
                >
                  02
                </span>

                <div>
                  <p class="text-xs font-semibold text-zinc-300">Discuss the direction</p>

                  <p class="mt-0.5 text-[9px] text-zinc-600">We clarify goals and requirements.</p>
                </div>
              </div>

              <!-- Line -->

              <div class="ml-3.5 h-3 w-px bg-white/[0.08]"></div>

              <!-- Step -->

              <div class="flex items-center gap-3">
                <span
                  class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.02] font-mono text-[8px] text-zinc-500"
                >
                  03
                </span>

                <div>
                  <p class="text-xs font-semibold text-zinc-300">Build the solution</p>

                  <p class="mt-0.5 text-[9px] text-zinc-600">Design, engineering, launch.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Privacy -->

          <div
            class="flex items-start gap-3 rounded-[1.5rem] border border-[#D4AF37]/10 bg-[#070709] p-5"
          >
            <ShieldCheck :size="16" class="mt-0.5 shrink-0 text-[#D4AF37]" />

            <div>
              <p class="font-mono text-[8px] uppercase tracking-[0.2em] text-[#D4AF37]">
                Private by default
              </p>

              <p class="mt-1.5 text-[10px] leading-relaxed text-zinc-600">
                Your project information is treated as private. Share only what you're comfortable
                discussing.
              </p>
            </div>
          </div>
        </div>

        <!-- ================================================= -->
        <!-- RIGHT FORM -->
        <!-- ================================================= -->

        <div
          class="relative overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#070709]"
        >
          <!-- Form glow -->

          <div
            class="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#D4AF37]/[0.055] blur-[90px]"
          ></div>

          <div class="relative p-6 sm:p-8 lg:p-9">
            <!-- ================================================= -->
            <!-- SUCCESS -->
            <!-- ================================================= -->

            <div
              v-if="formSubmitted"
              class="flex min-h-[500px] flex-col items-center justify-center px-4 text-center"
            >
              <div
                class="flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/[0.06] shadow-[0_0_50px_rgba(212,175,55,0.12)]"
              >
                <CheckCircle2 :size="38" class="text-[#D4AF37]" />
              </div>

              <p class="mt-6 font-mono text-[8px] uppercase tracking-[0.3em] text-[#D4AF37]">
                Message Received
              </p>

              <h3 class="mt-3 text-3xl font-black uppercase tracking-[-0.05em] sm:text-4xl">
                We'll be in touch<span class="text-[#D4AF37]">.</span>
              </h3>

              <p class="mt-4 max-w-md text-xs leading-relaxed text-zinc-500 sm:text-sm">
                Thanks,
                <span class="text-zinc-300">{{ form.name }}</span
                >. Your project details have been received.
              </p>

              <button
                type="button"
                class="mt-7 rounded-xl border border-white/10 px-6 py-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-400 transition hover:border-[#D4AF37]/40 hover:text-white"
                @click="resetForm"
              >
                Send Another Message
              </button>
            </div>

            <!-- ================================================= -->
            <!-- FORM -->
            <!-- ================================================= -->

            <form v-else class="relative space-y-5" @submit.prevent="submitForm">
              <!-- Form heading -->

              <div class="flex items-start justify-between border-b border-white/[0.06] pb-5">
                <div>
                  <p class="font-mono text-[8px] uppercase tracking-[0.25em] text-[#D4AF37]">
                    Project Brief
                  </p>

                  <h3 class="mt-2 text-xl font-black uppercase tracking-[-0.04em] sm:text-2xl">
                    Tell us about it<span class="text-[#D4AF37]">.</span>
                  </h3>
                </div>

                <ArrowUpRight :size="18" class="text-zinc-700" />
              </div>

              <!-- Name / Email -->

              <div class="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    class="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
                  >
                    Your Name *
                  </label>

                  <input
                    v-model="form.name"
                    type="text"
                    required
                    autocomplete="name"
                    placeholder="Your name"
                    class="w-full rounded-xl border border-white/[0.08] bg-[#0B0B0E] px-4 py-3 text-xs text-white outline-none transition placeholder:text-zinc-700 focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/10"
                  />
                </div>

                <div>
                  <label
                    class="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
                  >
                    Email *
                  </label>

                  <input
                    v-model="form.email"
                    type="email"
                    required
                    autocomplete="email"
                    placeholder="you@company.com"
                    class="w-full rounded-xl border border-white/[0.08] bg-[#0B0B0E] px-4 py-3 text-xs text-white outline-none transition placeholder:text-zinc-700 focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/10"
                  />
                </div>
              </div>

              <!-- Company -->

              <div>
                <label
                  class="mb-1.5 block font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
                >
                  Company / Brand
                </label>

                <input
                  v-model="form.company"
                  type="text"
                  autocomplete="organization"
                  placeholder="Your company or brand"
                  class="w-full rounded-xl border border-white/[0.08] bg-[#0B0B0E] px-4 py-3 text-xs text-white outline-none transition placeholder:text-zinc-700 focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/10"
                />
              </div>

              <!-- Project Type -->

              <div>
                <label
                  class="mb-2.5 block font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600"
                >
                  What are you building?
                </label>

                <div class="flex flex-wrap gap-2">
                  <button
                    v-for="type in projectTypes"
                    :key="type"
                    type="button"
                    class="rounded-lg border px-3 py-2 text-[9px] font-medium transition duration-200"
                    :class="
                      form.projectType === type
                        ? 'border-[#D4AF37]/50 bg-[#D4AF37]/[0.07] text-[#FCF6BA]'
                        : 'border-white/[0.07] bg-white/[0.015] text-zinc-500 hover:border-white/20 hover:text-zinc-300'
                    "
                    @click="form.projectType = type"
                  >
                    {{ type }}
                  </button>
                </div>
              </div>

              <!-- Message -->

              <div>
                <div class="mb-1.5 flex items-center justify-between">
                  <label class="font-mono text-[8px] uppercase tracking-[0.2em] text-zinc-600">
                    Project Overview
                  </label>

                  <span class="font-mono text-[7px] uppercase tracking-widest text-zinc-700">
                    Optional
                  </span>
                </div>

                <textarea
                  v-model="form.message"
                  rows="4"
                  placeholder="Tell us what you're trying to build, the problem you're solving, or what you need help with..."
                  class="w-full resize-none rounded-xl border border-white/[0.08] bg-[#0B0B0E] px-4 py-3 text-xs leading-relaxed text-white outline-none transition placeholder:text-zinc-700 focus:border-[#D4AF37]/50 focus:ring-1 focus:ring-[#D4AF37]/10"
                ></textarea>
              </div>

              <!-- Submit -->

              <button
                type="submit"
                class="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#D4AF37] py-3.5 text-[10px] font-black uppercase tracking-[0.2em] text-black transition duration-300 hover:bg-[#E4C55A] hover:shadow-[0_12px_40px_rgba(212,175,55,0.18)]"
              >
                <span>Send Project Brief</span>

                <Send
                  :size="14"
                  class="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <!-- Footer -->

              <div
                class="flex items-center justify-center gap-2 pt-1 font-mono text-[7px] uppercase tracking-[0.15em] text-zinc-700"
              >
                <span class="h-1 w-1 rounded-full bg-[#D4AF37]/60"></span>

                <span>No commitment</span>

                <span class="text-zinc-800">·</span>

                <span>Just a conversation</span>
              </div>
            </form>
          </div>
        </div>
      </div>

      <!-- ===================================================== -->
      <!-- BOTTOM BAR -->
      <!-- ===================================================== -->

      <div
        class="mt-5 flex flex-col gap-3 border-t border-white/[0.05] pt-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-700">
          Your vision → Our conversation → Your product
        </p>

        <div class="flex items-center gap-2">
          <span
            class="h-1.5 w-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.7)]"
          ></span>

          <span class="font-mono text-[7px] uppercase tracking-[0.2em] text-zinc-600">
            Open for new projects
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================= -->
  <!-- CONTACT MODAL -->
  <!-- ========================================================= -->

  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <!-- Backdrop -->

      <button
        type="button"
        aria-label="Close contact"
        class="absolute inset-0 cursor-default bg-black/80 backdrop-blur-xl"
        @click="closeModal"
      ></button>

      <!-- Modal -->

      <div
        class="relative z-10 max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-white/[0.1] bg-[#070709] shadow-[0_30px_100px_rgba(0,0,0,0.7)]"
      >
        <!-- Glow -->

        <div
          class="pointer-events-none absolute right-0 top-0 h-52 w-52 rounded-full bg-[#D4AF37]/[0.05] blur-[80px]"
        ></div>

        <div class="relative p-6 sm:p-8">
          <!-- Modal header -->

          <div class="flex items-center justify-between border-b border-white/[0.06] pb-5">
            <div>
              <p class="font-mono text-[8px] uppercase tracking-[0.25em] text-[#D4AF37]">
                Direct Contact
              </p>

              <h3 class="mt-2 text-lg font-black uppercase tracking-tight">Start a Project</h3>
            </div>

            <button
              type="button"
              aria-label="Close contact"
              class="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] text-zinc-500 transition hover:border-white/20 hover:text-white"
              @click="closeModal"
            >
              <X :size="17" />
            </button>
          </div>

          <!-- Modal success -->

          <div v-if="formSubmitted" class="py-14 text-center">
            <CheckCircle2 :size="48" class="mx-auto text-[#D4AF37]" />

            <h3 class="mt-5 text-2xl font-black uppercase tracking-tight">
              Message Received<span class="text-[#D4AF37]">.</span>
            </h3>

            <p class="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-zinc-500">
              Thanks,
              <span class="text-zinc-300">{{ form.name }}</span
              >. We'll get back to you soon.
            </p>

            <button
              type="button"
              class="mt-7 rounded-xl border border-white/10 px-6 py-3 text-xs font-bold uppercase tracking-widest text-zinc-300 transition hover:border-[#D4AF37]/40 hover:text-white"
              @click="closeModal"
            >
              Close
            </button>
          </div>

          <!-- Modal form -->

          <form v-else class="mt-6 space-y-5" @submit.prevent="submitForm">
            <!-- Name -->

            <div>
              <label
                class="mb-2 block font-mono text-[9px] uppercase tracking-widest text-zinc-600"
              >
                Name *
              </label>

              <input
                v-model="form.name"
                required
                type="text"
                placeholder="Your name"
                class="w-full rounded-xl border border-white/[0.08] bg-[#0B0B0E] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-[#D4AF37]/50"
              />
            </div>

            <!-- Email -->

            <div>
              <label
                class="mb-2 block font-mono text-[9px] uppercase tracking-widest text-zinc-600"
              >
                Email *
              </label>

              <input
                v-model="form.email"
                required
                type="email"
                placeholder="you@company.com"
                class="w-full rounded-xl border border-white/[0.08] bg-[#0B0B0E] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-[#D4AF37]/50"
              />
            </div>

            <!-- Company -->

            <div>
              <label
                class="mb-2 block font-mono text-[9px] uppercase tracking-widest text-zinc-600"
              >
                Company / Brand
              </label>

              <input
                v-model="form.company"
                type="text"
                placeholder="Your company or brand"
                class="w-full rounded-xl border border-white/[0.08] bg-[#0B0B0E] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-[#D4AF37]/50"
              />
            </div>

            <!-- Project -->

            <div>
              <label
                class="mb-2 block font-mono text-[9px] uppercase tracking-widest text-zinc-600"
              >
                Project Type
              </label>

              <div class="flex flex-wrap gap-2">
                <button
                  v-for="type in projectTypes"
                  :key="type"
                  type="button"
                  class="rounded-lg border px-3 py-2 text-[9px] transition"
                  :class="
                    form.projectType === type
                      ? 'border-[#D4AF37]/50 bg-[#D4AF37]/[0.07] text-[#FCF6BA]'
                      : 'border-white/[0.07] text-zinc-500 hover:border-white/20 hover:text-zinc-300'
                  "
                  @click="form.projectType = type"
                >
                  {{ type }}
                </button>
              </div>
            </div>

            <!-- Message -->

            <div>
              <label
                class="mb-2 block font-mono text-[9px] uppercase tracking-widest text-zinc-600"
              >
                Project Brief
              </label>

              <textarea
                v-model="form.message"
                rows="4"
                placeholder="Tell us briefly about your project..."
                class="w-full resize-none rounded-xl border border-white/[0.08] bg-[#0B0B0E] px-4 py-3.5 text-sm text-white outline-none placeholder:text-zinc-700 focus:border-[#D4AF37]/50"
              ></textarea>
            </div>

            <!-- Submit -->

            <button
              type="submit"
              class="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] py-4 text-xs font-black uppercase tracking-widest text-black transition hover:bg-[#E4C55A]"
            >
              Send Message

              <Send :size="14" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>
