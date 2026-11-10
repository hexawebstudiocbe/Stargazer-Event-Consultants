import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollManager() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    let lenis
    let raf
    const animated = gsap.utils.toArray('.service-tile, .portfolio-card, .event-line, .client-grid > div, .contact-item')
    gsap.set(animated, { opacity: 0, y: 28 })
    const triggers = animated.map((element) => gsap.to(element, {
      opacity: 1, y: 0, duration: .8, ease: 'power3.out',
      scrollTrigger: { trigger: element, start: 'top 88%', once: true }
    }))
    import('lenis').then(({ default: Lenis }) => {
      lenis = new Lenis({ duration: 1.15, smoothWheel: true })
      const tick = (time) => { lenis?.raf(time); raf = requestAnimationFrame(tick) }
      raf = requestAnimationFrame(tick)
    })
    return () => {
      cancelAnimationFrame(raf)
      lenis?.destroy()
      triggers.forEach(t => t.scrollTrigger?.kill())
      triggers.forEach(t => t.kill())
    }
  }, [location.pathname])
  return null
}
