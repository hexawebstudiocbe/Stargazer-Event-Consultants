import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services, IMG } from '../data'
import PageIntro from '../components/PageIntro'
import Callout from '../components/Callout'
import './Services.css'

export default function Services() {
  return <main>
    <PageIntro kicker="THOUGHTFULLY PLANNED. BEAUTIFULLY EXECUTED." title={<>One partner.<br /><em>Every detail.</em></>} desc="A considered range of event planning, production and on-the-ground services." />

    <section className="services-page section-pad">
      <div className="services-lead">
        <span className="eyebrow">OUR SERVICES</span>
        <h2>From the first idea<br />to the <em>final encore.</em></h2>
        <p>Sixteen services covering launches, staging, audiovisual and lighting systems, venue decoration, food &amp; beverage, logistics, security and merchandising.</p>
      </div>
      <div className="services-list">
        {services.map((s, i) => <motion.div key={s} className="service-row" initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .035 }}><span>{String(i + 1).padStart(2, '0')}</span><h3>{s}</h3><ArrowUpRight /></motion.div>)}
      </div>
    </section>

    <section className="services-image">
      <img src={IMG + 'ballroom.jpg'} alt="Large-scale event venue with stage and lighting" />
      <div><span className="eyebrow">PRODUCTION WITH PURPOSE</span><h2>Make room for<br /><em>the extraordinary.</em></h2></div>
    </section>

    <Callout />
  </main>
}
