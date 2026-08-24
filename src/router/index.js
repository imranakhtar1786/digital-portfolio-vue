import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import TermsConditionsView from '@/views/TermsConditionsView.vue'
import { services } from '@/data/services.js'
import { projects } from '@/data/projects.js'

const BASE_URL = 'https://www.momentumlab.in'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Momentum Lab | Web Development, Mobile Apps & Software Agency',
        description:
          'Momentum Lab by Imran Akhtar is a premier digital agency building high-performance websites, web applications, mobile apps, UI/UX designs, and cloud infrastructure.',
        keywords:
          'Momentum Lab, Momentum Lab agency, momentumlab.in, web development agency, full stack development, Vue.js, React, Next.js, Django, mobile app development, UI UX design, technical SEO, cloud devops, software company India',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'About Us | Momentum Lab — Digital Engineering & Software Solutions',
        description:
          'Learn about Momentum Lab, founded by Imran Akhtar. Discover our mission, core engineering philosophy, client success stories, and custom web & app development expertise.',
        keywords:
          'About Momentum Lab, Imran Akhtar developer, software engineering agency, digital agency India, agency founder, custom web development team',
      },
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/ServicesView.vue'),
      meta: {
        title: 'Services | Custom Web Development, Mobile Apps & SEO — Momentum Lab',
        description:
          'Explore our full suite of digital agency services: Full-Stack Web Development, SEO & Performance Optimization, Landing Page & UI Development, Digital Marketing, Cloud & DevOps, and Mobile App Development.',
        keywords:
          'Momentum Lab services, web development services, mobile app development, SEO optimization service, UI UX design services, cloud deployment VPS, digital marketing agency',
      },
    },
    {
      path: '/services/:id',
      name: 'service-detail',
      component: () => import('../views/ServiceDetailView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
      meta: {
        title: 'Selected Work & Portfolio | Web Apps & Mobile Projects — Momentum Lab',
        description:
          'Explore our showcase of 11+ live projects including e-commerce platforms, agency portals, real estate portals, FMCG catalogs, and cloud DevOps migrations.',
        keywords:
          'Momentum Lab projects, web development portfolio, full stack project showcase, React projects, Next.js portfolio, Vue apps, live web applications',
      },
    },
    {
      path: '/projects/:id',
      name: 'project-detail',
      component: () => import('../views/ProjectDetailView.vue'),
    },
    {
      path: '/estimator',
      name: 'estimator',
      component: () => import('../views/EstimatorView.vue'),
      meta: {
        title: 'Project Cost Estimator | Instant Web & App Pricing — Momentum Lab',
        description:
          'Calculate your project cost instantly with Momentum Lab’s transparent project cost estimator for custom websites, web applications, mobile apps, and SEO packages.',
        keywords:
          'web development cost estimator, app development price calculator, website budget calculator, agency pricing estimator, Momentum Lab cost estimator',
      },
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('../views/PricingView.vue'),
      meta: {
        title: 'Affordable Pricing Packages | Web Development & Apps — Momentum Lab',
        description:
          'Transparent, affordable pricing starting at ₹4,999 ($69 USD). Full-stack web development, SEO, landing pages, mobile apps, and cloud deployment packages.',
        keywords:
          'agency pricing packages, affordable web development India, fixed price web development, mobile app pricing, SEO optimization packages',
      },
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: {
        title: 'Contact Us | Start Your Project with Momentum Lab',
        description:
          'Get in touch with Momentum Lab for custom web development, mobile apps, or software engineering. Email info@momentumlab.in or call +91 91551 61786.',
        keywords:
          'Contact Momentum Lab, hire web developer, hire React developer, digital agency contact, web app developer India, info@momentumlab.in',
      },
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicyView,
      meta: {
        title: 'Privacy Policy | Momentum Lab',
        description:
          'Privacy Policy of Momentum Lab outlining how we handle customer data, project confidentiality, cookies, and data protection.',
        keywords: 'Momentum Lab privacy policy, data privacy, terms and conditions',
      },
    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: TermsConditionsView,
      meta: {
        title: 'Terms & Conditions | Momentum Lab',
        description:
          'Terms and Conditions for Momentum Lab services, project scope, payment terms, code handover, and intellectual property ownership.',
        keywords: 'Momentum Lab terms conditions, agency agreement, client terms',
      },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

// Helper function to update or create meta tags dynamically
function updateMetaTag(nameOrProperty, value, isProperty = false) {
  const attribute = isProperty ? 'property' : 'name'
  let element = document.querySelector(`meta[${attribute}="${nameOrProperty}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, nameOrProperty)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

// Helper function to update canonical link
function updateCanonicalLink(url) {
  let link = document.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', url)
}

// Helper to update dynamic JSON-LD schema
function updateDynamicSchema(schemaObj) {
  let script = document.getElementById('dynamic-seo-schema')
  if (!script) {
    script = document.createElement('script')
    script.id = 'dynamic-seo-schema'
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }
  script.textContent = JSON.stringify(schemaObj)
}

router.afterEach((to) => {
  let title = 'Momentum Lab | Web Development, Mobile Apps & Software Agency'
  let description =
    'Momentum Lab by Imran Akhtar is a premier digital agency building high-performance web applications, mobile apps, and custom software.'
  let keywords =
    'Momentum Lab, web development, mobile apps, software agency, Vue.js, React, Next.js, Django, UI UX, SEO'
  let fullUrl = `${BASE_URL}${to.path}`

  // Dynamic route resolution for Services and Projects
  if (to.name === 'service-detail') {
    const service = services.find((s) => s.id === to.params.id)
    if (service) {
      title = `${service.title} | Services — Momentum Lab`
      description = service.heroTagline || service.overview || service.shortDesc
      keywords = `${service.title}, ${service.techStack ? service.techStack.join(', ') : ''}, Momentum Lab services, web agency`
    } else {
      title = 'Service Details | Momentum Lab'
    }
  } else if (to.name === 'project-detail') {
    const project = projects.find((p) => p.id === to.params.id)
    if (project) {
      title = `${project.title} — Portfolio Project | Momentum Lab`
      description = project.description || project.shortDesc
      keywords = `${project.title}, ${project.category}, ${project.tech ? project.tech.join(', ') : ''}, Momentum Lab project`
    } else {
      title = 'Project Details | Momentum Lab'
    }
  } else if (to.meta) {
    if (to.meta.title) title = to.meta.title
    if (to.meta.description) description = to.meta.description
    if (to.meta.keywords) keywords = to.meta.keywords
  }

  // Update Page Title
  document.title = title

  // Update Meta Tags
  updateMetaTag('description', description)
  updateMetaTag('keywords', keywords)
  updateMetaTag('title', title)

  // Update Open Graph
  updateMetaTag('og:title', title, true)
  updateMetaTag('og:description', description, true)
  updateMetaTag('og:url', fullUrl, true)
  updateMetaTag('og:image', 'https://www.momentumlab.in/icon.webp', true)

  // Update Twitter Cards
  updateMetaTag('twitter:title', title)
  updateMetaTag('twitter:description', description)
  updateMetaTag('twitter:url', fullUrl)
  updateMetaTag('twitter:image', 'https://www.momentumlab.in/icon.webp')

  // Update Canonical Link
  updateCanonicalLink(fullUrl)

  // Inject Breadcrumb JSON-LD Schema
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: BASE_URL,
      },
    ],
  }

  if (to.path !== '/') {
    const pathSegments = to.path.split('/').filter(Boolean)
    let currentPath = ''
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`
      const formattedName = segment.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
      schema.itemListElement.push({
        '@type': 'ListItem',
        position: index + 2,
        name: formattedName,
        item: `${BASE_URL}${currentPath}`,
      })
    })
  }

  updateDynamicSchema(schema)
})

export default router
