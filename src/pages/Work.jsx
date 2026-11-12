import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'
import { workEvents, workCategories } from '../workData'
import PageIntro from '../components/PageIntro'
import SectionHead from '../components/SectionHead'
import Callout from '../components/Callout'
import './Work.css'

// Extra exhibition photos taken from the company brochure (lower resolution than the event photos).
const brochureExhibition = Array.from({ length: 13 }, (_, i) => {
  const src = `/images/work/exhibition-${String(i + 1).padStart(2, '0')}.jpg`
  return { src, thumb: src, w: 1200, h: 800 }
})
const eventList = workEvents.map(e => e.slug === 'exhibitions' ? { ...e, photos: [...e.photos, ...brochureExhibition] } : e)

export default function Work() {
  const [category, setCategory] = useState('All')
  const [open, setOpen] = useState(null) // { event, index }
  const shown = category === 'All' ? eventList : eventList.filter(e => e.category === category)
  const current = open ? open.event.photos[open.index] : null

  const step = (d) => setOpen(o => o && ({ ...o, index: (o.index + d + o.event.photos.length) % o.event.photos.length }))
  const close = () => setOpen(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  // preload neighbours so next/previous feels instant
  useEffect(() => {
    if (!open) return
    const n = open.event.photos.length
    ;[1, -1].forEach(d => { const img = new Image(); img.src = open.event.photos[(open.index + d + n) % n].src })
  }, [open])

  useEffect(() => { close() }, [category])

  return <main>
    <PageIntro kicker="A FEW MOMENTS WE HELPED CREATE" title={<>Our work.<br /><em>In the spotlight.</em></>} desc="Awards nights, conferences, launches and exhibitions produced by Stargazer Event Consultants." />

    <section className="portfolio section-pad">
      <div className="filter-bar">{workCategories.map(c => <button key={c} onClick={() => setCategory(c)} className={category === c ? 'active' : ''}>{c}</button>)}</div>
      <motion.div layout className="event-cards">
        <AnimatePresence mode="popLayout">
          {shown.map((ev) => <motion.button layout key={ev.slug} className="event-card" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: .45 }} onClick={() => setOpen({ event: ev, index: 0 })} aria-label={`View ${ev.photos.length} photos: ${ev.title}`}>
            <span className="event-card-img"><img src={ev.photos[0].thumb} alt={ev.title} loading="lazy" /></span>
            <span className="event-card-meta">
              <span className="event-card-cat">{ev.category}</span>
              <span className="event-card-title">{ev.title}</span>
              <span className="event-card-desc">{ev.desc}</span>
              <span className="event-card-count">{ev.photos.length} photos <ArrowUpRight size={14} /></span>
            </span>
          </motion.button>)}
        </AnimatePresence>
      </motion.div>
    </section>


    <Callout />

    <AnimatePresence>
      {open && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={close} role="dialog" aria-modal="true" aria-label={open.event.title}>
        <button className="lightbox-close" aria-label="Close" onClick={close}><X /></button>
        <button className="lightbox-nav lightbox-prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1) }}><ChevronLeft /></button>
        <button className="lightbox-nav lightbox-next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1) }}><ChevronRight /></button>
        <figure onClick={(e) => e.stopPropagation()}>
          <img key={current.src} src={current.src} alt={`${open.event.title}, photo ${open.index + 1}`} />
          <figcaption><b>{open.event.title}</b><span>{open.index + 1} / {open.event.photos.length}</span></figcaption>
          <div className="lightbox-strip">
            {open.event.photos.map((p, i) => <button key={p.src} className={i === open.index ? 'active' : ''} onClick={() => setOpen({ ...open, index: i })} aria-label={`Photo ${i + 1}`}><img src={p.thumb} alt="" loading="lazy" /></button>)}
          </div>
        </figure>
      </motion.div>}
    </AnimatePresence>
  </main>
}
