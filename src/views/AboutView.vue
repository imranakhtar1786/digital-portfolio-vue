<script setup>
import { RouterLink } from 'vue-router'
import { Motion } from 'motion-v'

import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Code2,
  Database,
  Server,
  Cloud,
  Wrench,
  Layers3,
  Globe2,
  Smartphone,
  Zap,
  ShieldCheck,
  Github,
  GitBranch,
  Terminal,
  Boxes,
  Mail,
  Send,
  Cpu,
  Rocket,
  Braces,
  MonitorSmartphone,
  HardDrive,
  Workflow,
} from 'lucide-vue-next'

import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

const techCategories = [
  {
    title: 'Frontend',
    icon: MonitorSmartphone,
    description: 'Modern, responsive and interactive user interfaces.',
    technologies: [
      { name: 'HTML5', icon: Code2 },
      { name: 'CSS3', icon: Code2 },
      { name: 'JavaScript ES6+', icon: Braces },
      { name: 'React.js', icon: Layers3 },
      { name: 'Next.js', icon: Zap },
      { name: 'Vue.js', icon: Layers3 },
      { name: 'Responsive Design', icon: MonitorSmartphone },
      { name: 'Flexbox', icon: Boxes },
      { name: 'CSS Grid', icon: Layers3 },
      { name: 'SCSS', icon: Code2 },
      { name: 'Bootstrap', icon: Boxes },
      { name: 'Tailwind CSS', icon: Zap },
      { name: 'Material UI', icon: Layers3 },
    ],
  },

  {
    title: 'Backend & APIs',
    icon: Server,
    description: 'Scalable backend systems and API development.',
    technologies: [
      { name: 'Python', icon: Code2 },
      { name: 'Django', icon: Server },
      { name: 'Django REST Framework', icon: Workflow },
      { name: 'FastAPI', icon: Zap },
      { name: 'Express.js', icon: Server },
      { name: 'REST APIs', icon: Globe2 },
      { name: 'API Integration', icon: Workflow },
      { name: 'API Optimization', icon: Rocket },
      { name: 'PHP Basics', icon: Code2 },
    ],
  },

  {
    title: 'Database & State',
    icon: Database,
    description: 'Reliable data architecture and application state.',
    technologies: [
      { name: 'PostgreSQL', icon: Database },
      { name: 'MySQL', icon: Database },
      { name: 'SQLite', icon: Database },
      { name: 'SQL', icon: Database },
      { name: 'Redis', icon: Zap },
      { name: 'Zustand', icon: Layers3 },
      { name: 'Redux', icon: Workflow },
      { name: 'Database Optimization', icon: Rocket },
      { name: 'Caching', icon: Cpu },
    ],
  },

  {
    title: 'Mobile Development',
    icon: Smartphone,
    description: 'Cross-platform mobile application development.',
    technologies: [
      { name: 'React Native', icon: Smartphone },
      { name: 'Android Development', icon: Smartphone },
      { name: 'iOS Development', icon: Smartphone },
      { name: 'Cross-platform Apps', icon: Layers3 },
      { name: 'API Integration', icon: Workflow },
    ],
  },

  {
    title: 'Cloud & Deployment',
    icon: Cloud,
    description: 'Deploying, managing and scaling applications.',
    technologies: [
      { name: 'Vercel', icon: Rocket },
      { name: 'Netlify', icon: Globe2 },
      { name: 'DigitalOcean', icon: Cloud },
      { name: 'AWS Basics', icon: Cloud },
      { name: 'Hostinger', icon: Server },
      { name: 'GoDaddy VPS', icon: Server },
      { name: 'Ubuntu Linux', icon: Terminal },
      { name: 'Nginx', icon: Server },
      { name: 'Docker', icon: Boxes },
      { name: 'CI/CD Basics', icon: Workflow },
    ],
  },

  {
    title: 'Tools & Integrations',
    icon: Wrench,
    description: 'Development workflow and business integrations.',
    technologies: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Github },
      { name: 'VS Code', icon: Code2 },
      { name: 'Postman', icon: Send },
      { name: 'Brevo', icon: Mail },
      { name: 'Zoho Mail', icon: Mail },
      { name: 'Clean Code', icon: Code2 },
      { name: 'Debugging', icon: Wrench },
      { name: 'Performance Optimization', icon: Rocket },
    ],
  },
]

const highlights = [
  {
    title: 'Direct Collaboration',
    description:
      'Work directly with the developer building your product, without unnecessary communication layers.',
    icon: Code2,
  },
  {
    title: 'Modern Technology',
    description:
      'A practical stack built around React, Next.js, Vue, Django, APIs and cloud infrastructure.',
    icon: Cpu,
  },
  {
    title: 'Performance Focused',
    description:
      'Optimized applications with clean architecture, caching, database improvements and efficient assets.',
    icon: Zap,
  },
  {
    title: 'Complete Ownership',
    description:
      'Your project, source code and deployment infrastructure remain under your control.',
    icon: ShieldCheck,
  },
]

const stats = [
  {
    value: '2+',
    label: 'Years Building',
  },
  {
    value: '11+',
    label: 'Projects',
  },
  {
    value: '30+',
    label: 'Technologies',
  },
  {
    value: '100%',
    label: 'Source Ownership',
  },
]
</script>

<template>
  <div class="relative min-h-screen overflow-hidden bg-[#030303] text-white">
    <Header />

    <!-- Background elements -->
    <div
      class="pointer-events-none absolute left-1/2 top-[20rem] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.035] blur-[140px]"
    ></div>

    <div
      class="pointer-events-none absolute -left-40 top-[45rem] h-[400px] w-[400px] rounded-full bg-[#D4AF37]/[0.025] blur-[130px]"
    ></div>

    <div
      class="pointer-events-none absolute right-[-200px] top-[80rem] h-[500px] w-[500px] rounded-full bg-white/[0.015] blur-[150px]"
    ></div>

    <main class="relative z-10 pb-24 pt-32">
      <div class="mx-auto w-[90%] max-w-7xl">
        <!-- ================================================= -->
        <!-- HERO -->
        <!-- ================================================= -->

        <Motion
          :initial="{ opacity: 0, y: 35 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, ease: 'easeOut' }"
          class="max-w-4xl"
        >
          <div class="flex items-center gap-3">
            <span
              class="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D4AF37]/25 bg-[#D4AF37]/[0.05]"
            >
              <Sparkles :size="14" class="text-[#D4AF37]" />
            </span>

            <span class="font-mono text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
              About The Lab
            </span>
          </div>

          <h1
            class="mt-7 max-w-5xl text-4xl font-bold leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-7xl"
          >
            <span class="block text-zinc-400"> We are </span>

            <span class="mt-1 block text-white">
              Momentum <span class="text-[#D4AF37]">Lab.</span>
            </span>

            <span class="mt-3 block text-zinc-500">
              Building
              <span class="text-white">digital experiences</span>
              <br class="hidden sm:block" />
              <span class="text-[#D4AF37]">that move forward.</span>
            </span>
          </h1>

          <p class="mt-8 max-w-2xl text-sm leading-[1.8] text-zinc-500 sm:text-base">
            <RouterLink to="/" class="font-semibold text-zinc-300 hover:text-white"
              >Momentum Lab</RouterLink
            >
            is an independent digital lab focused on building modern websites, scalable
            applications, and high-performance digital solutions for businesses, startups, and
            ambitious individuals.
          </p>
        </Motion>

        <!-- ================================================= -->
        <!-- FOUNDER -->
        <!-- ================================================= -->

        <Motion
          :initial="{ opacity: 0, y: 50 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.7 }"
          class="relative mt-20 overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#070709]"
        >
          <!-- Background Glow -->
          <div
            class="pointer-events-none absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#D4AF37]/[0.05] blur-[100px]"
          ></div>

          <div
            class="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-[#D4AF37]/[0.04] blur-[100px]"
          ></div>

          <!-- Header -->
          <div class="relative border-b border-white/[0.07] px-8 py-8 text-center sm:px-12">
            <Motion
              :initial="{ opacity: 0, y: 20 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :viewport="{ once: true }"
              :transition="{ duration: 0.5 }"
            >
              <span class="font-mono text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                The Team Behind MOMENTUM LAB
              </span>

              <h2 class="mt-4 text-3xl font-black uppercase tracking-[-0.04em] sm:text-5xl">
                Two Developers.
                <span class="text-[#D4AF37]">One Vision.</span>
              </h2>

              <p class="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-500">
                MOMENTUM LAB is managed by two full-stack developers working together across design,
                frontend development, backend systems, deployment and project delivery.
              </p>
            </Motion>
          </div>

          <!-- Team Cards -->
          <div class="relative grid md:grid-cols-2">
            <!-- IMRAN -->
            <Motion
              :initial="{ opacity: 0, x: -40 }"
              :while-in-view="{ opacity: 1, x: 0 }"
              :viewport="{ once: true, amount: 0.2 }"
              :transition="{ duration: 0.6, delay: 0.1 }"
              class="border-b border-white/[0.07] p-8 sm:p-12 md:border-b-0 md:border-r"
            >
              <div
                class="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0B0B0E] p-8 transition duration-500 hover:border-[#D4AF37]/40"
              >
                <!-- Number -->
                <span
                  class="absolute right-6 top-5 font-mono text-5xl font-black text-white/[0.03]"
                >
                  01
                </span>

                <!-- Avatar -->
                <div
                  class="flex h-24 w-24 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/[0.05] text-3xl font-black text-[#D4AF37] transition duration-500 group-hover:scale-105 group-hover:rotate-3"
                >
                  IA
                </div>

                <div class="mt-7">
                  <h3 class="text-2xl font-black uppercase tracking-[-0.04em] text-white">
                    Imran Akhtar
                  </h3>

                  <p class="mt-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#D4AF37]">
                    Full-Stack Developer
                  </p>
                </div>

                <p class="mt-6 text-sm leading-[1.8] text-zinc-500">
                  Working across modern frontend development, backend APIs, databases, deployment
                  and server infrastructure to build complete digital products.
                </p>

                <!-- Skills -->
                <div class="mt-7 flex flex-wrap gap-2">
                  <span
                    class="rounded-lg border border-white/[0.08] px-3 py-1.5 text-[9px] text-zinc-400"
                  >
                    React
                  </span>

                  <span
                    class="rounded-lg border border-white/[0.08] px-3 py-1.5 text-[9px] text-zinc-400"
                  >
                    Next.js
                  </span>

                  <span
                    class="rounded-lg border border-white/[0.08] px-3 py-1.5 text-[9px] text-zinc-400"
                  >
                    Django
                  </span>

                  <span
                    class="rounded-lg border border-white/[0.08] px-3 py-1.5 text-[9px] text-zinc-400"
                  >
                    PostgreSQL
                  </span>

                  <span
                    class="rounded-lg border border-white/[0.08] px-3 py-1.5 text-[9px] text-zinc-400"
                  >
                    DevOps
                  </span>
                </div>

                <!-- Status -->
                <div class="mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-6">
                  <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D4AF37]"></span>

                  <span class="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-500">
                    Building & Managing Projects
                  </span>
                </div>
              </div>
            </Motion>

            <!-- ARMAN -->
            <Motion
              :initial="{ opacity: 0, x: 40 }"
              :while-in-view="{ opacity: 1, x: 0 }"
              :viewport="{ once: true, amount: 0.2 }"
              :transition="{ duration: 0.6, delay: 0.2 }"
              class="p-8 sm:p-12"
            >
              <div
                class="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/[0.08] bg-[#0B0B0E] p-8 transition duration-500 hover:border-[#D4AF37]/40"
              >
                <!-- Number -->
                <span
                  class="absolute right-6 top-5 font-mono text-5xl font-black text-white/[0.03]"
                >
                  02
                </span>

                <!-- Avatar -->
                <div
                  class="flex h-24 w-24 items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#D4AF37]/[0.05] text-3xl font-black text-[#D4AF37] transition duration-500 group-hover:scale-105 group-hover:-rotate-3"
                >
                  AA
                </div>

                <div class="mt-7">
                  <h3 class="text-2xl font-black uppercase tracking-[-0.04em] text-white">
                    Arman Akhtar
                  </h3>

                  <p class="mt-2 font-mono text-[9px] uppercase tracking-[0.22em] text-[#D4AF37]">
                    Full-Stack Developer
                  </p>
                </div>

                <p class="mt-6 text-sm leading-[1.8] text-zinc-500">
                  Contributing across frontend interfaces, application development, backend systems,
                  infrastructure and end-to-end project execution.
                </p>

                <!-- Skills -->
                <div class="mt-7 flex flex-wrap gap-2">
                  <span
                    class="rounded-lg border border-white/[0.08] px-3 py-1.5 text-[9px] text-zinc-400"
                  >
                    Frontend
                  </span>

                  <span
                    class="rounded-lg border border-white/[0.08] px-3 py-1.5 text-[9px] text-zinc-400"
                  >
                    Backend
                  </span>

                  <span
                    class="rounded-lg border border-white/[0.08] px-3 py-1.5 text-[9px] text-zinc-400"
                  >
                    APIs
                  </span>

                  <span
                    class="rounded-lg border border-white/[0.08] px-3 py-1.5 text-[9px] text-zinc-400"
                  >
                    Database
                  </span>

                  <span
                    class="rounded-lg border border-white/[0.08] px-3 py-1.5 text-[9px] text-zinc-400"
                  >
                    Deployment
                  </span>
                </div>

                <!-- Status -->
                <div class="mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-6">
                  <span class="h-1.5 w-1.5 animate-pulse rounded-full bg-[#D4AF37]"></span>

                  <span class="font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-500">
                    Building & Managing Projects
                  </span>
                </div>
              </div>
            </Motion>
          </div>

          <!-- Shared Team Statement -->
          <Motion
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.6, delay: 0.3 }"
            class="relative border-t border-white/[0.07] bg-white/[0.01] px-8 py-10 text-center sm:px-12"
          >
            <div class="mx-auto flex max-w-3xl flex-col items-center">
              <div
                class="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]"
              >
                <Sparkles :size="17" class="text-[#D4AF37]" />
              </div>

              <h3 class="text-xl font-black uppercase tracking-[-0.03em] text-white sm:text-2xl">
                One Team. End-to-End Delivery.
              </h3>

              <p class="mt-4 max-w-2xl text-sm leading-[1.8] text-zinc-500">
                From the first idea to design, development, APIs, databases, deployment and ongoing
                improvements — both developers work together to manage and deliver complete digital
                projects.
              </p>

              <div class="mt-8 flex flex-wrap justify-center gap-3">
                <span
                  class="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-400"
                >
                  Design & Development
                </span>

                <span
                  class="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-400"
                >
                  Frontend & Backend
                </span>

                <span
                  class="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-400"
                >
                  Cloud & Deployment
                </span>

                <span
                  class="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 font-mono text-[8px] uppercase tracking-[0.16em] text-zinc-400"
                >
                  Project Management
                </span>
              </div>
            </div>
          </Motion>
        </Motion>

        <!-- ================================================= -->
        <!-- STATS -->
        <!-- ================================================= -->

        <div class="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <Motion
            v-for="(stat, index) in stats"
            :key="stat.label"
            :initial="{ opacity: 0, y: 25 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true }"
            :transition="{
              duration: 0.5,
              delay: index * 0.08,
            }"
            :while-hover="{ y: -5 }"
            class="rounded-2xl border border-white/[0.07] bg-[#070709] p-6 transition-colors hover:border-[#D4AF37]/30"
          >
            <p class="text-3xl font-black tracking-[-0.05em] text-white sm:text-4xl">
              {{ stat.value }}
            </p>

            <p class="mt-2 font-mono text-[8px] uppercase tracking-[0.18em] text-zinc-600">
              {{ stat.label }}
            </p>
          </Motion>
        </div>

        <!-- ================================================= -->
        <!-- TECHNOLOGY -->
        <!-- ================================================= -->

        <section class="mt-28">
          <Motion
            :initial="{ opacity: 0, y: 30 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.6 }"
            class="max-w-3xl"
          >
            <div class="flex items-center gap-3">
              <span
                class="flex h-8 w-8 items-center justify-center rounded-lg border border-[#D4AF37]/25 bg-[#D4AF37]/[0.05]"
              >
                <Cpu :size="14" class="text-[#D4AF37]" />
              </span>

              <span class="font-mono text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                Technology Stack
              </span>
            </div>

            <h2
              class="mt-6 text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-6xl"
            >
              Tools behind
              <span class="text-zinc-500"> the build </span>
              <span class="text-[#D4AF37]">.</span>
            </h2>

            <p class="mt-6 max-w-xl text-sm leading-[1.8] text-zinc-500">
              A flexible technology stack selected according to the needs of each project — from
              interfaces and APIs to databases, cloud infrastructure and deployment.
            </p>
          </Motion>

          <!-- Categories -->
          <div class="mt-14 grid gap-5 lg:grid-cols-2">
            <Motion
              v-for="(category, categoryIndex) in techCategories"
              :key="category.title"
              :initial="{ opacity: 0, y: 35 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :viewport="{ once: true, amount: 0.1 }"
              :transition="{
                duration: 0.55,
                delay: categoryIndex * 0.06,
              }"
              class="group rounded-[1.75rem] border border-white/[0.07] bg-[#070709] p-7 transition-colors hover:border-[#D4AF37]/25 sm:p-8"
            >
              <div class="flex items-start gap-4">
                <div
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04]"
                >
                  <component :is="category.icon" :size="19" class="text-[#D4AF37]" />
                </div>

                <div>
                  <h3 class="text-lg font-black uppercase tracking-[-0.03em] text-white">
                    {{ category.title }}
                  </h3>

                  <p class="mt-2 text-xs leading-relaxed text-zinc-600">
                    {{ category.description }}
                  </p>
                </div>
              </div>

              <!-- Technologies -->
              <div class="mt-7 flex flex-wrap gap-2">
                <Motion
                  v-for="(tech, techIndex) in category.technologies"
                  :key="tech.name"
                  :initial="{ opacity: 0, scale: 0.9 }"
                  :while-in-view="{ opacity: 1, scale: 1 }"
                  :viewport="{ once: true }"
                  :transition="{
                    duration: 0.3,
                    delay: techIndex * 0.025,
                  }"
                  :while-hover="{
                    y: -3,
                    scale: 1.03,
                  }"
                  class="flex cursor-default items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2 transition hover:border-[#D4AF37]/30 hover:bg-[#D4AF37]/[0.04]"
                >
                  <component
                    :is="tech.icon"
                    :size="12"
                    class="text-zinc-500 transition group-hover:text-[#D4AF37]"
                  />

                  <span class="text-[10px] font-medium text-zinc-400 transition">
                    {{ tech.name }}
                  </span>
                </Motion>
              </div>
            </Motion>
          </div>
        </section>

        <!-- ================================================= -->
        <!-- WHY MOMENTUM LAB -->
        <!-- ================================================= -->

        <section class="mt-28">
          <Motion
            :initial="{ opacity: 0, y: 30 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :viewport="{ once: true }"
            :transition="{ duration: 0.6 }"
            class="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
          >
            <div class="max-w-2xl">
              <span class="font-mono text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                The Approach
              </span>

              <h2
                class="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.055em] sm:text-6xl"
              >
                Built with
                <span class="text-zinc-500"> clarity, </span>

                <br />

                <span class="text-[#D4AF37]"> not complexity. </span>
              </h2>
            </div>

            <p class="max-w-sm text-sm leading-[1.8] text-zinc-500">
              Every project follows a practical approach focused on clear communication,
              maintainable code and technology that actually fits the problem.
            </p>
          </Motion>

          <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Motion
              v-for="(item, index) in highlights"
              :key="item.title"
              :initial="{ opacity: 0, y: 40 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :viewport="{ once: true, amount: 0.2 }"
              :transition="{
                duration: 0.55,
                delay: index * 0.1,
              }"
              :while-hover="{
                y: -7,
              }"
              class="group rounded-[1.5rem] border border-white/[0.07] bg-[#070709] p-6 transition-colors hover:border-[#D4AF37]/35"
            >
              <div
                class="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4AF37]/20 bg-[#D4AF37]/[0.04] transition group-hover:bg-[#D4AF37]/[0.08]"
              >
                <component :is="item.icon" :size="18" class="text-[#D4AF37]" />
              </div>

              <h3 class="mt-6 text-sm font-black uppercase tracking-[0.02em]">
                {{ item.title }}
              </h3>

              <p class="mt-3 text-xs leading-[1.7] text-zinc-600">
                {{ item.description }}
              </p>

              <div class="mt-6 h-px w-full bg-white/[0.06]">
                <Motion
                  :initial="{ width: '0%' }"
                  :while-in-view="{ width: '35%' }"
                  :viewport="{ once: true }"
                  :transition="{
                    duration: 0.8,
                    delay: index * 0.1 + 0.2,
                  }"
                  class="h-px bg-[#D4AF37]"
                />
              </div>
            </Motion>
          </div>
        </section>

        <!-- ================================================= -->
        <!-- FINAL CTA -->
        <!-- ================================================= -->

        <Motion
          :initial="{ opacity: 0, y: 50 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 0.7 }"
          class="relative mt-28 overflow-hidden rounded-[2rem] border border-[#D4AF37]/20 bg-[#070709] p-8 sm:p-14"
        >
          <Motion
            :animate="{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }"
            :transition="{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }"
            class="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D4AF37]/[0.06] blur-[100px]"
          />

          <div class="relative max-w-3xl">
            <div class="flex items-center gap-3">
              <Rocket :size="15" class="text-[#D4AF37]" />

              <span class="font-mono text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]">
                Start Something New
              </span>
            </div>

            <h2
              class="mt-7 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl"
            >
              Have an idea?
              <br />

              <span class="text-zinc-500"> Let's build it </span>

              <span class="text-[#D4AF37]"> together. </span>
            </h2>

            <p class="mt-7 max-w-xl text-sm leading-[1.8] text-zinc-500">
              Whether you need a website, web application, mobile app or help with deployment and
              infrastructure, we can discuss the right approach for your project.
            </p>

            <div class="mt-9 flex flex-wrap gap-4">
              <RouterLink
                to="/contact"
                class="group inline-flex items-center gap-3 rounded-xl bg-[#D4AF37] px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-black transition hover:bg-[#E4C55A]"
              >
                <span>Start a Project</span>

                <ArrowRight
                  :size="15"
                  class="transition-transform duration-300 group-hover:translate-x-1"
                />
              </RouterLink>

              <RouterLink
                to="/projects"
                class="inline-flex items-center gap-3 rounded-xl border border-white/[0.1] px-7 py-4 text-xs font-bold uppercase tracking-[0.15em] text-zinc-400 transition hover:border-[#D4AF37]/30 hover:text-white"
              >
                Explore Work
              </RouterLink>
            </div>
          </div>
        </Motion>
      </div>
    </main>

    <Footer />
  </div>
</template>
