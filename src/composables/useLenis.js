import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

let lenis = null
let rafId = null

const startLenis = () => {
  if (lenis) {
    lenis.start()
    return
  }

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
}

export function pauseLenis() {
  lenis?.stop()
}

export function resumeLenis() {
  if (lenis) {
    lenis.start()
  }
}

export function useLenis() {
  onMounted(() => {
    startLenis()
  })

  onUnmounted(() => {
    if (rafId) {
      cancelAnimationFrame(rafId)
    }

    lenis?.destroy()
    lenis = null
    rafId = null
  })
}
