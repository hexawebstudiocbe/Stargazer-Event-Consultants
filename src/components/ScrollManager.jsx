import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// `trigger` changes each time a new page has mounted, so the effect re-binds to the new page's elements.
export default function ScrollManager({ trigger }) {
  useEffect(() => {
    window.scrollTo(0, 0)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    let lenis
    let raf
    let cancelled = false
    const animated = gsap.utils.toArray('.service-tile, .event-line, .client-grid > div, .contact-item')
    gsap.set(animated, { opacity: 0, y: 28 })
    const triggers = animated.map((element) => gsap.to(element, {
      opacity: 1, y: 0, duration: .8, ease: 'power3.out',
      scrollTrigger: { trigger: element, start: 'top 88%', once: true }
    }))
    import('lenis').then(({ default: Lenis }) => {
      if (cancelled) return
      lenis = new Lenis({ duration: 1.15, smoothWheel: true })
      const tick = (time) => { lenis?.raf(time); raf = requestAnimationFrame(tick) }
      raf = requestAnimationFrame(tick)
    })
    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      lenis?.destroy()
      triggers.forEach(t => t.scrollTrigger?.kill())
      triggers.forEach(t => t.kill())
    }
  }, [trigger])
  return null
}
