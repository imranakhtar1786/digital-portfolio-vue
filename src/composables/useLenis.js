import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

export function useLenis() {
  let lenis = null
  let rafId = null

  onMounted(() => {
    lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      syncTouch: false,
    })

    const raf = (time) => {
      lenis?.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)
  })

  onUnmounted(() => {
    if (rafId) {
      cancelAnimationFrame(rafId)
    }

    lenis?.destroy()
    lenis = null
  })
}
