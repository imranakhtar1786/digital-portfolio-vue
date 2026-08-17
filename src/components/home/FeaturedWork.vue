<script setup>
import { ref, computed } from 'vue'
import { ArrowUpRight, Sparkles, Eye, Layers, ExternalLink, Globe2 } from 'lucide-vue-next'

import ProjectModal from './ProjectModal.vue'

/* =========================================
   PROJECT DATA
========================================= */

const projects = [
  {
    id: 'nstee',
    title: 'NSTEE — Premium E-commerce',
    shortDesc: 'Full-stack premium T-shirt brand e-commerce platform',
    description:
      'Developed a full-stack e-commerce platform for a premium T-shirt brand. Built scalable backend APIs, integrated frontend components, optimized performance with caching, and implemented a responsive shopping experience with modern UI design.',
    tech: ['Next.js', 'Django', 'DRF', 'PostgreSQL', 'Redis', 'Zustand', 'MUI'],
    features: [
      'Full-stack e-commerce store',
      'Scalable REST APIs using Django REST Framework',
      'Zustand-based frontend state management',
      'Performance caching strategies with Redis',
      'Responsive premium shopping experience with MUI',
    ],
    architecture:
      'Decoupled Next.js frontend communicating with a Django API layer. Deployed with PostgreSQL as the relational database and Redis for caching data.',
    challenges:
      'Optimized page loads and inventory updates under high concurrency, using query tuning and strategic Redis caching.',
    links: {
      demo: 'https://nstee.in/',
    },
    status: 'Live',
    year: '2025',
    category: 'E-Commerce',
  },

  {
    id: 'arinteriors',
    title: 'AR Interiors — Design Portfolio',
    shortDesc: 'Professional interior design showcasing website',
    description:
      'Created a professional interior design portfolio website. Developed responsive layouts, interactive sections, and visually engaging pages to showcase company services, projects, and design work with improved user experience.',
    tech: ['React.js', 'JavaScript', 'Bootstrap', 'SCSS', 'HTML5', 'CSS3'],
    features: [
      'Responsive design with Bootstrap & SCSS',
      'Interactive showcase and project grids',
      'Service offering breakdowns',
      'Optimized graphic assets and layouts',
    ],
    architecture:
      'Single Page React.js Application styled using modular SCSS files and responsive grid systems.',
    challenges:
      'Ensuring large, high-quality images of interior designs loaded quickly without impacting mobile usability.',
    links: {
      demo: 'https://arinteriorcurrent.vercel.app/',
    },
    status: 'Live',
    year: '2024',
    category: 'Portfolio',
  },

  {
    id: 'dpthub',
    title: 'DPT Hub — 360° Digital Agency',
    shortDesc: 'Professional portfolio and service site for a digital agency',
    description:
      'Developed a professional 360° digital agency portfolio website. Designed reusable components, responsive interfaces, and engaging UI sections to showcase digital marketing services, creative solutions, and company projects.',
    tech: ['React.js', 'SCSS', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'Reusable components for scalable layout creation',
      'Interactive service sliders',
      'Performance-optimized client portfolio displays',
      'Fully responsive UI sections',
    ],
    architecture:
      'React.js components with unified SCSS sheets, relying on modern CSS layout concepts (Flexbox/Grid).',
    challenges:
      'Maintained extremely clean structures and optimized component rendering to ensure a smooth scrolling experience.',
    links: {
      demo: 'https://dpthub.com/',
    },
    status: 'Live',
    year: '2025',
    category: 'Marketing',
  },

  {
    id: 'abbuildcon',
    title: 'ABBuildCon India — Construction',
    shortDesc: 'Dynamic construction & architectural website',
    description:
      'Built a dynamic construction and architectural portfolio website. Integrated Supabase PostgreSQL and Storage for managing projects, images, and website content through API-based architecture with an admin panel for real-time updates.',
    tech: ['Next.js', 'Supabase', 'PostgreSQL', 'Swiper', 'Slick Slider', 'JavaScript'],
    features: [
      'Dynamic CMS admin panel for content updates',
      'Supabase storage integration for image handling',
      'Dynamic project carousel displays',
      'API-based content rendering',
    ],
    architecture:
      'Next.js application utilizing Supabase as a Backend-as-a-Service for data storage, auth, and image hosting.',
    challenges:
      'Synchronizing real-time file updates in storage with local application cache, resolved using Next.js revalidation.',
    links: {
      demo: 'https://www.abbuildconindia.com/',
    },
    status: 'Live',
    year: '2025',
    category: 'Business',
  },

  {
    id: 'adclan',
    title: 'Adclan — Marketing Agency',
    shortDesc: 'Digital marketing agency website with immersive animations',
    description:
      'Developed a digital marketing agency website. Built responsive UI, smooth animations, PWA features, and optimized performance with Vercel deployment to showcase advertising, branding, SEO, and marketing services.',
    tech: ['Next.js', 'React.js', 'GSAP', 'Lenis', 'Framer Motion', 'Swiper'],
    features: [
      'Smooth kinetic scrolling with Lenis',
      'Advanced timeline animations using GSAP',
      'PWA support for app-like loading and offline access',
      'Responsive layouts and micro-interactions',
    ],
    architecture:
      'Next.js application leveraging performance hooks, static site exports, and progressive asset loading.',
    challenges:
      'Preventing animation lag on low-end mobile devices, achieved by throttling layout calculations and utilizing GPU acceleration.',
    links: {
      demo: 'https://adclan.in/',
    },
    status: 'Live',
    year: '2026',
    category: 'Marketing',
  },

  {
    id: 'elmasgroup',
    title: 'Elmas Group — Real Estate',
    shortDesc: 'Real estate company property showcase portal',
    description:
      'Developed a real estate website. Built responsive layouts, smooth animations, and optimized frontend performance with Nginx deployment on Ubuntu for a seamless property showcase experience.',
    tech: ['Next.js', 'JavaScript', 'GSAP', 'Lenis', 'Swiper', 'Nginx', 'Ubuntu'],
    features: [
      'Interactive property search and filtering layouts',
      'Smooth GSAP UI animations',
      'Production deployment on Linux Ubuntu VPS',
      'Nginx reverse proxy and caching optimization',
    ],
    architecture:
      'Static-site generation with Next.js, deployed on an Ubuntu VPS, served through Nginx for caching and proxying.',
    challenges:
      'Ensuring high-speed asset delivery of real estate properties on self-managed VPS hosting.',
    links: {
      demo: 'https://elmasgroup.in/',
    },
    status: 'Live',
    year: '2025',
    category: 'Real Estate',
  },

  {
    id: 'vikrammills',
    title: 'Vikram Mills Ads Platform',
    shortDesc: 'FMCG advertising interface and product catalog',
    description:
      'Developed an FMCG advertising platform as a freelance project with a responsive interface to showcase products and campaigns. Implemented interactive navigation, optimized performance, and a smooth user experience.',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    features: [
      'Campaign showcase landing layouts',
      'Responsive product navigation interface',
      'Optimized performance for high-traffic campaigns',
    ],
    architecture: 'Client-side React single-page app built for maximum speed and simplicity.',
    challenges:
      'Creating a layout that appeals directly to consumer brand managers while maintaining rapid navigation speed.',
    links: {
      demo: 'https://ads.vikrammills.com/',
    },
    status: 'Live',
    year: '2025',
    category: 'Marketing',
  },

  {
    id: 'adorereal',
    title: 'Adore Real — Lead Gen Page',
    shortDesc: 'Real estate lead generation ads landing page',
    description:
      'Developed a real estate lead generation ads page with responsive layouts, interactive UI, and optimized design to showcase properties and capture customer inquiries.',
    tech: ['Next.js', 'React.js', 'JavaScript', 'CSS3', 'Tailwind CSS'],
    features: [
      'Friction-free lead capture forms',
      'Optimized performance for landing conversion rates',
      'Responsive mobile layouts',
    ],
    architecture:
      'Serverless Next.js landing page built for rapid deployments and integrated analytics tracking.',
    challenges:
      'Securing high page-speed scores to minimize visitor bounce rates during marketing campaigns.',
    links: {
      demo: 'https://adore-real.vercel.app/',
    },
    status: 'Live',
    year: '2025',
    category: 'Real Estate',
  },

  {
    id: 'rudratheme',
    title: 'Rudra Theme — Real Estate Theme',
    shortDesc: 'Modern real estate website theme (In Development)',
    description:
      'Currently developing a modern real estate website theme. Building responsive layouts, reusable components, smooth animations, and optimized performance for showcasing properties and services.',
    tech: ['Next.js', 'React.js', 'GSAP', 'Lenis', 'Swiper', 'Lucide Icons'],
    features: [
      'Highly customizable modular theme components',
      'Smooth scrolling and page transitions',
      'Responsive search grids and property detail views',
    ],
    architecture:
      'Next.js modular architecture using context and custom layout layouts for easy downstream integration.',
    challenges:
      'Developing components that can easily fit different developer APIs without losing animation fidelity.',
    links: {
      demo: 'https://rudra-theme-first.vercel.app/',
    },
    status: 'In Development',
    year: '2026',
    category: 'Real Estate',
  },

  {
    id: 'poweronelectrotech',
    title: 'PowerOne Electrotech — MEP Company',
    shortDesc: 'MEP company website and service portfolio',
    description:
      'Developed an MEP company website using React.js and Tailwind CSS. Implemented responsive layouts, service sections, project showcases, and optimized performance.',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
    features: [
      'MEP service portfolio grids',
      'Project showcase galleries',
      'Responsive design using Tailwind CSS utility classes',
    ],
    architecture:
      'React SPA structured around clean, componentized project highlights, built with Tailwind CSS.',
    challenges:
      'Formulating a complex corporate engineering service list into clean, scan-friendly landing sections.',
    links: {
      demo: 'https://poweronelectrotech.in/',
    },
    status: 'Live',
    year: '2024',
    category: 'Engineering',
  },

  {
    id: 'kiloifoods',
    title: 'Kiloi Foods',
    shortDesc: 'Server migration and domain transfer for a food brand',
    description:
      'Managed DevOps operations including server setup, domain transfer, and website migration for Kiloi Foods. Successfully transferred the domain and migrated the entire WordPress ecosystem without data loss.',
    tech: ['Ubuntu', 'Apache', 'GoDaddy VPS', 'MySQL', 'WordPress', 'DevOps'],
    features: [
      'Data preservation during migration',
      'Domain transfer and DNS configuration',
      'Production deployment on Ubuntu VPS',
      'Apache web server setup',
      'MySQL database migration',
      'WordPress configuration and optimization',
    ],
    architecture:
      'LAMP stack architecture running WordPress, hosted on a GoDaddy Virtual Private Server.',
    challenges:
      'Ensuring minimal disruption during domain transfer and migrating the existing WordPress database successfully.',
    links: {
      demo: 'https://kiloifoods.com/',
    },
    status: 'Live',
    year: '2026',
    category: 'DevOps',
  },
]

/* =========================================
   STATE
========================================= */

const selectedCategory = ref('All')
const selectedProject = ref(null)
const isModalOpen = ref(false)

/* =========================================
   CATEGORIES
========================================= */

const categories = [
  'All',
  'E-Commerce',
  'Portfolio',
  'Business',
  'Marketing',
  'Real Estate',
  'Engineering',
  'DevOps',
]

/* =========================================
   FILTER PROJECTS
========================================= */

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') {
    return projects
  }

  return projects.filter((project) => project.category === selectedCategory.value)
})

/* =========================================
   MODAL
========================================= */

const openCaseStudy = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<template>
  <section id="work" class="relative overflow-hidden bg-[#030303] py-20 text-white sm:py-20">
    <!-- Background glow -->

    <div
      class="pointer-events-none absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.10),transparent_65%)] blur-[100px]"
    />

    <div class="relative mx-auto w-[90%] max-w-7xl">
      <!-- =========================================
           HEADER
      ========================================== -->

      <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div class="max-w-2xl">
          <div class="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
            <Sparkles :size="14" />
            <span>Selected Work</span>
          </div>

          <h2 class="mt-4 text-4xl font-black uppercase tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            FLAGSHIP
            <span class="text-[#D4AF37]">PROJECTS.</span>
          </h2>

          <p class="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500">
            A selection of websites, digital platforms, e-commerce systems, marketing experiences,
            engineering portfolios, and infrastructure projects.
          </p>
        </div>

        <!-- FILTERS -->

        <div class="flex flex-wrap gap-2">
          <button
            v-for="category in categories"
            :key="category"
            type="button"
            @click="selectedCategory = category"
            class="rounded-full border px-3 py-2 text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 sm:px-4 sm:text-xs"
            :class="
              selectedCategory === category
                ? 'border-[#D4AF37] bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.25)]'
                : 'border-white/10 bg-[#08080B] text-zinc-500 hover:border-[#D4AF37]/40 hover:text-white'
            "
          >
            {{ category }}
          </button>
        </div>
      </div>

      <!-- =========================================
           PROJECT GRID
      ========================================== -->

      <div class="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-8">
        <article
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          @click="openCaseStudy(project)"
          class="group relative flex min-w-0 cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#08080B] transition-all duration-500 hover:-translate-y-1 hover:border-[#D4AF37]/50 hover:shadow-[0_20px_60px_rgba(212,175,55,0.12)]"
        >
          <!-- =========================================
               PROJECT VISUAL
          ========================================== -->

          <div class="relative aspect-[16/10] w-full overflow-hidden bg-[#050506]">
            <!-- CATEGORY BACKGROUND -->

            <div
              class="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              :class="{
                'bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.20),transparent_40%),linear-gradient(135deg,#16120a,#030303)]':
                  project.category === 'E-Commerce',

                'bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.22),transparent_40%),linear-gradient(135deg,#100719,#030303)]':
                  project.category === 'Portfolio',

                'bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.20),transparent_40%),linear-gradient(135deg,#06101d,#030303)]':
                  project.category === 'Business',

                'bg-[radial-gradient(circle_at_80%_80%,rgba(236,72,153,0.18),transparent_40%),linear-gradient(135deg,#170611,#030303)]':
                  project.category === 'Marketing',

                'bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.18),transparent_40%),linear-gradient(135deg,#04150e,#030303)]':
                  project.category === 'Real Estate',

                'bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.20),transparent_40%),linear-gradient(135deg,#170a03,#030303)]':
                  project.category === 'Engineering',

                'bg-[radial-gradient(circle_at_70%_40%,rgba(6,182,212,0.20),transparent_40%),linear-gradient(135deg,#031417,#030303)]':
                  project.category === 'DevOps',
              }"
            />

            <!-- GRID -->

            <div
              class="absolute inset-0 opacity-[0.07]"
              style="
                background-image:
                  linear-gradient(rgba(255, 255, 255, 0.6) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.6) 1px, transparent 1px);
                background-size: 40px 40px;
              "
            />

            <!-- DECORATIVE ORBITS -->

            <div
              class="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12"
            />

            <div
              class="absolute -bottom-24 -left-16 h-56 w-56 rounded-full border border-[#D4AF37]/20 transition-transform duration-700 group-hover:scale-110"
            />

            <div
              class="absolute left-[20%] top-[25%] h-32 w-32 rounded-full border border-white/5"
            />

            <!-- PROJECT NUMBER -->

            <div
              class="absolute left-5 top-5 z-20 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30"
            >
              PROJECT / {{ String(index + 1).padStart(2, '0') }}
            </div>

            <!-- STATUS -->

            <div class="absolute right-5 top-5 z-20">
              <span
                class="rounded-full border border-[#D4AF37]/30 bg-black/30 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#FCF6BA] backdrop-blur-md"
              >
                {{ project.status }}
              </span>
            </div>

            <!-- CENTER CONTENT -->

            <div
              class="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
            >
              <div
                class="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-xl transition-all duration-500 group-hover:scale-110 group-hover:border-[#D4AF37]/50 group-hover:rotate-3 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]"
              >
                <Globe2 :size="30" class="text-[#D4AF37]" />
              </div>

              <span class="mt-5 text-[10px] font-mono uppercase tracking-[0.35em] text-[#D4AF37]">
                {{ project.category }}
              </span>

              <h3
                class="mt-3 max-w-md text-xl font-black uppercase leading-tight tracking-[-0.04em] text-white sm:text-2xl"
              >
                {{ project.title }}
              </h3>

              <!-- TECH STACK -->

              <div class="mt-5 flex max-w-md flex-wrap justify-center gap-2">
                <span
                  v-for="tech in project.tech.slice(0, 4)"
                  :key="tech"
                  class="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[9px] font-medium text-zinc-400 backdrop-blur-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- BOTTOM GRADIENT -->

            <div
              class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent"
            />

            <!-- YEAR -->

            <div
              class="absolute bottom-5 left-5 z-20 font-mono text-[10px] tracking-widest text-white/40"
            >
              {{ project.year }}
            </div>

            <!-- LIVE BUTTON -->

            <a
              :href="project.links.demo"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Open ${project.title} in a new tab`"
              @click.stop
              class="absolute bottom-5 right-5 z-20 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-4 py-2.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black"
            >
              View Live
              <ExternalLink :size="13" />
            </a>
          </div>

          <!-- =========================================
               PROJECT CONTENT
          ========================================== -->

          <div class="flex flex-1 flex-col justify-between p-5 sm:p-7">
            <div>
              <!-- CATEGORY -->

              <div class="flex items-center justify-between gap-4">
                <span
                  class="truncate text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]/70"
                >
                  {{ project.category }}
                </span>

                <span class="shrink-0 text-[10px] font-mono text-zinc-600">
                  {{ project.year }}
                </span>
              </div>

              <!-- TITLE -->

              <h3
                class="mt-3 text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#FCF6BA] sm:text-xl"
              >
                {{ project.title }}
              </h3>

              <!-- SHORT DESCRIPTION -->

              <p class="mt-2 text-xs font-medium text-[#D4AF37]/70">
                {{ project.shortDesc }}
              </p>

              <!-- DESCRIPTION -->

              <p class="mt-3 line-clamp-3 text-xs leading-relaxed text-zinc-400 sm:text-sm">
                {{ project.description }}
              </p>
            </div>

            <!-- FOOTER -->

            <div class="mt-6 flex items-center justify-between gap-3 border-t border-white/5 pt-4">
              <!-- TECHNOLOGIES -->

              <span class="min-w-0 flex-1 truncate text-[10px] font-mono text-zinc-500 sm:text-xs">
                {{ project.tech.slice(0, 3).join(' • ') }}
              </span>

              <!-- ACTIONS -->

              <div class="flex shrink-0 items-center gap-3">
                <button
                  type="button"
                  @click.stop="openCaseStudy(project)"
                  class="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-[#D4AF37] transition-colors hover:text-[#FCF6BA] sm:text-[11px]"
                >
                  Details
                  <Eye :size="13" />
                </button>

                <a
                  :href="project.links.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click.stop
                  class="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-400 transition-colors hover:text-white sm:text-[11px]"
                >
                  Visit
                  <ArrowUpRight :size="13" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- EMPTY STATE -->

      <div v-if="filteredProjects.length === 0" class="py-24 text-center">
        <Layers :size="40" class="mx-auto text-[#D4AF37]/50" />

        <p class="mt-4 text-sm text-zinc-500">No projects found in this category.</p>
      </div>
    </div>

    <!-- PROJECT MODAL -->

    <ProjectModal :is-open="isModalOpen" :project="selectedProject" @close="closeModal" />
  </section>
</template>
