import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { events, IMG } from '../data'
import PageIntro from '../components/PageIntro'
import SectionHead from '../components/SectionHead'
import Callout from '../components/Callout'
import './Work.css'

const corporateTitles = {
  '04': 'BrandLaureate awards stage',
  '06': 'SMEs BestBrands of the Decade Awards',
  '07': 'Official Launch of Chevrolet 3S Centre Puchong',
  '08': 'BrandLaureate Best Brands Awards',
  '10': 'AUREC exhibition display',
  '11': 'Malaysia Landscape Architecture Awards – Celebrating One Decade'
}
const exhibitionTitles = {
  '05': 'CIMB Islamic exhibition stand', '06': 'CIMB Islamic exhibition stand', '07': 'CIMB Islamic exhibition stand',
  '08': 'CIMB Islamic exhibition stand', '09': 'CIMB Islamic exhibition stand', '10': 'CIMB Islamic exhibition stand',
  '12': 'KWAP exhibition stand', '13': 'KWAP exhibition stand'
}
const range = (n) => Array.from({ length: n }, (_, i) => String(i + 1).padStart(2, '0'))
const gallery = [
  ...range(11).map(n => ({ type: 'Corporate Events', title: corporateTitles[n], src: `${IMG}work/corporate-${n}.jpg` })),
  ...range(13).map(n => ({ type: 'Exhibitions', title: exhibitionTitles[n], src: `${IMG}work/exhibition-${n}.jpg` }))
].map((g, i) => ({ ...g, alt: g.title || `${g.type === 'Exhibitions' ? 'Exhibition stand' : 'Corporate event'} by Stargazer Event Consultants` }))
const filters = ['All', 'Corporate Events', 'Exhibitions']

export default function Work() {
  const [filter, setFilter] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const shown = filter === 'All' ? gallery : gallery.filter(x => x.type === filter)
  const lightbox = lightboxIndex === null ? null : shown[lightboxIndex]
  const step = (d) => setLightboxIndex(i => (i + d + shown.length) % shown.length)

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, shown.length])

  useEffect(() => setLightboxIndex(null), [filter])

  return <main>
    <PageIntro kicker="A FEW MOMENTS WE HELPED CREATE" title={<>Our work.<br /><em>In the spotlight.</em></>} desc="Corporate events and exhibitions produced by Stargazer Event Consultants." />

    <section className="portfolio section-pad">
      <div className="filter-bar">{filters.map(f => <button key={f} onClick={() => setFilter(f)} className={filter === f ? 'active' : ''}>{f}</button>)}</div>
      <motion.div layout className="work-gallery">
        {shown.map((item, i) => <motion.button layout key={item.src} className="work-photo" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: .45 }} onClick={() => setLightboxIndex(i)} aria-label={`Enlarge: ${item.alt}`}>
          <img src={item.src} alt={item.alt} loading="lazy" />
          <span>{item.title || item.type}</span>
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
      {lightbox && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightboxIndex(null)} role="dialog" aria-modal="true" aria-label={lightbox.alt}>
        <button className="lightbox-close" aria-label="Close" onClick={() => setLightboxIndex(null)}><X /></button>
        <button className="lightbox-nav lightbox-prev" aria-label="Previous photo" onClick={(e) => { e.stopPropagation(); step(-1) }}><ChevronLeft /></button>
        <button className="lightbox-nav lightbox-next" aria-label="Next photo" onClick={(e) => { e.stopPropagation(); step(1) }}><ChevronRight /></button>
        <figure onClick={(e) => e.stopPropagation()}>
          <img src={lightbox.src} alt={lightbox.alt} />
          <figcaption><b>{lightbox.title || lightbox.type}</b><span>{lightboxIndex + 1} / {shown.length}</span></figcaption>
        </figure>
      </motion.div>}
    </AnimatePresence>
  </main>
}
