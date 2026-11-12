import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { events, recentEvents } from '../data'
import PageIntro from '../components/PageIntro'
import SectionHead from '../components/SectionHead'
import Callout from '../components/Callout'
import './Events.css'

export default function Events() {
  return <main>
    <PageIntro kicker="A CALENDAR OF MOMENTS" title={<>Our events.<br /><em>Delivered with care.</em></>} desc="Conferences, awards nights, launches and corporate celebrations produced by Stargazer Event Consultants." />

    <section className="events-recent section-pad">
      <SectionHead kicker="RECENT HIGHLIGHTS" title="Latest events." />
      <div className="events-recent-grid">
        {recentEvents.map((e, i) => <motion.div key={e} className="events-recent-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: (i % 2) * .08, duration: .6 }}>
          <span>{String(i + 1).padStart(2, '0')}</span>
          <h3>{e}</h3>
        </motion.div>)}
      </div>
    </section>

    <section className="events-past section-pad">
      <SectionHead kicker="OUR TRACK RECORD" title="Past events." />
      <p className="muted">A look at more of the events we have delivered.</p>
      <div className="event-columns">{events.map((e, i) => <div className="event-line" key={e}><span>{String(i + 1).padStart(2, '0')}</span><p>{e}</p></div>)}</div>
      <Link to="/work" className="text-link events-work-link">See photos from our events <ArrowUpRight size={17} /></Link>
    </section>

    <Callout />
  </main>
}
