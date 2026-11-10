import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react'
import { services, clients, IMG } from '../data'
import SectionHead from '../components/SectionHead'
import Callout from '../components/Callout'
import RevealHeading from '../components/RevealHeading'
import ParallaxImage from '../components/ParallaxImage'
import './Home.css'

const reveal = { hidden: { opacity: 0, y: 34 }, show: { opacity: 1, y: 0, transition: { duration: .75, ease: [.22, 1, .36, 1] } } }
const heroSlides = ['hero-event.jpg', 'ballroom.jpg', 'launch-event.jpg', 'corporate-events.jpg']

function HeroBackdrop() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const timer = window.setInterval(() => setActive(v => (v + 1) % heroSlides.length), 6500)
    return () => window.clearInterval(timer)
  }, [])
  return <>
    <div className="hero-slides" aria-hidden="true">
      <AnimatePresence initial={false}>
        <motion.img key={heroSlides[active]} src={IMG + heroSlides[active]} className="hero-slide" alt="" initial={{ opacity: 0, scale: 1.09 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ opacity: { duration: 1.35 }, scale: { duration: 7, ease: 'linear' } }} />
      </AnimatePresence>
    </div>
    <div className="hero-progress" aria-label={`Slide ${active + 1} of ${heroSlides.length}`}>
      {heroSlides.map((_, i) => <button key={i} className={i === active ? 'active' : ''} aria-label={`Show hero image ${i + 1}`} onClick={() => setActive(i)} />)}
    </div>
  </>
}

function HeroSpotlight() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches || !window.matchMedia('(hover: hover)').matches) return
    const hero = el.parentElement
    let raf
    const move = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const r = hero.getBoundingClientRect()
        el.style.setProperty('--mx', `${e.clientX - r.left}px`)
        el.style.setProperty('--my', `${e.clientY - r.top}px`)
        el.style.opacity = 1
      })
    }
    const leave = () => { el.style.opacity = 0 }
    hero.addEventListener('mousemove', move)
    hero.addEventListener('mouseleave', leave)
    return () => { cancelAnimationFrame(raf); hero.removeEventListener('mousemove', move); hero.removeEventListener('mouseleave', leave) }
  }, [])
  return <div className="hero-spotlight" ref={ref} aria-hidden="true" />
}

export default function Home() {
  return <main>
    <section className="hero">
      <HeroBackdrop />
      <div className="hero-shade" />
      <HeroSpotlight />
      <div className="hero-content">
        <motion.span className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2 }}>EVENTS THAT STAY WITH YOU</motion.span>
        <motion.h1 initial={{ opacity: 0, y: 55 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: .35 }}>Make every<br /><em>moment</em> matter.</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .9 }}>Stylish. Sensational. Spectacular. Success.</motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}><Link to="/work" className="button button-light">Explore our work <ArrowUpRight size={17} /></Link></motion.div>
      </div>
      <div className="hero-index"><span>{String(1).padStart(2, '0')}</span><i /><span>04</span></div>
      <a href="#intro" className="scroll-cue"><span>SCROLL TO DISCOVER</span><ArrowDown size={15} /></a>
      <div className="hero-stamp"><Sparkles /><span>CRAFTING<br />EXPERIENCES</span></div>
    </section>

    <section id="intro" className="intro section-pad">
      <div className="intro-number">01 / 04</div>
      <div className="intro-copy">
        <span className="eyebrow">WELCOME TO STARGAZER</span>
        <RevealHeading as="h2">We turn ideas into<br /><em>extraordinary experiences.</em></RevealHeading>
        <p>Stargazer Event Consultants has been designing and running world-class corporate event solutions for clients since 2009. We love what we do. Our creative approach and swift delivery in large-scale events make us specialists in our field.</p>
        <Link to="/about" className="text-link">Discover our story <ArrowUpRight size={17} /></Link>
      </div>
      <div className="intro-photo"><ParallaxImage src={IMG + 'about-event.jpg'} alt="A corporate event produced by Stargazer" /><span className="photo-caption">A MOMENT, BEAUTIFULLY MADE</span></div>
    </section>

    <section className="feature-band">
      <div className="feature-backdrop" />
      <div className="feature-inner">
        <span className="eyebrow">THE STARGAZER DIFFERENCE</span>
        <RevealHeading as="h2">Small details.<br /><em>Big impressions.</em></RevealHeading>
        <p>What sets us apart is our ability to turn small-budget events into extraordinary ones. Every event is given the utmost attention to detail, irrespective of size or budget.</p>
        <Link to="/services" className="button button-outline">What we do <ArrowUpRight size={17} /></Link>
      </div>
    </section>

    <section className="services-preview section-pad">
      <SectionHead kicker="WHAT WE DO" title={<>Every detail.<br /><em>Every possibility.</em></>} link="All services" href="/services" />
      <div className="service-grid">
        {services.slice(0, 6).map((s, i) => <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .25 }} className="service-tile" key={s}><span>0{i + 1}</span><h3>{s}</h3><ArrowUpRight /></motion.div>)}
      </div>
    </section>

    <section className="work-preview">
      <div className="work-preview-image"><ParallaxImage src={IMG + 'ballroom.jpg'} alt="Elegant corporate gala dinner" /></div>
      <div className="work-preview-copy">
        <span className="eyebrow">SELECTED EXPERIENCES</span>
        <RevealHeading as="h2">Built around<br /><em>your big moment.</em></RevealHeading>
        <p>From corporate launches and annual dinners to exhibitions and roadshows, we bring the vision, people and production together.</p>
        <Link to="/work" className="text-link">View our work <ArrowUpRight size={17} /></Link>
      </div>
    </section>

    <section className="client-strip section-pad">
      <SectionHead kicker="TRUSTED PARTNERS" title="In good company." link="Meet our clients" href="/about" />
      <div className="client-words">{clients.slice(0, 12).map(c => <span key={c}>{c}</span>)}</div>
    </section>

    <Callout />
  </main>
}
