import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { events, IMG } from '../data'
import PageIntro from '../components/PageIntro'
import SectionHead from '../components/SectionHead'
import Callout from '../components/Callout'
import './Work.css'

const range = (n) => Array.from({ length: n }, (_, i) => String(i + 1).padStart(2, '0'))
const gallery = [
  ...range(11).map(n => ({ type: 'Corporate Events', src: `${IMG}work/corporate-${n}.jpg`, alt: `Corporate event by Stargazer, photo ${Number(n)}` })),
  ...range(13).map(n => ({ type: 'Exhibitions', src: `${IMG}work/exhibition-${n}.jpg`, alt: `Exhibition stand by Stargazer, photo ${Number(n)}` }))
]
const filters = ['All', 'Corporate Events', 'Exhibitions']

export default function Work() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const shown = filter === 'All' ? gallery : gallery.filter(x => x.type === filter)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e) => e.key === 'Escape' && setLightbox(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox])

  return <main>
    <PageIntro kicker="A FEW MOMENTS WE HELPED CREATE" title={<>Our work.<br /><em>In the spotlight.</em></>} desc="Corporate events and exhibitions produced by Stargazer Event Consultants." />

    <section className="portfolio section-pad">
      <div className="filter-bar">{filters.map(f => <button key={f} onClick={() => setFilter(f)} className={filter === f ? 'active' : ''}>{f}</button>)}</div>
      <motion.div layout className="work-gallery">
        {shown.map((item) => <motion.button layout key={item.src} className="work-photo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .45 }} onClick={() => setLightbox(item)} aria-label={`Enlarge: ${item.alt}`}>
          <img src={item.src} alt={item.alt} loading="lazy" />
          <span>{item.type}</span>
        </motion.button>)}
      </motion.div>
    </section>

    <section className="events-list section-pad">
      <SectionHead kicker="OUR EVENTS" title="A calendar of moments." />
      <p className="muted">A look at the events we have delivered.</p>
      <div className="event-columns">{events.map((e, i) => <div className="event-line" key={e}><span>{String(i + 1).padStart(2, '0')}</span><p>{e}</p></div>)}</div>
    </section>

    <Callout />

    <AnimatePresence>
      {lightbox && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label={lightbox.alt}>
        <button className="lightbox-close" aria-label="Close" onClick={() => setLightbox(null)}><X /></button>
        <img src={lightbox.src} alt={lightbox.alt} onClick={(e) => e.stopPropagation()} />
      </motion.div>}
    </AnimatePresence>
  </main>
}
