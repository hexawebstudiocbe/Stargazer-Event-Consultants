import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data'
import PageIntro from '../components/PageIntro'
import Callout from '../components/Callout'
import RevealHeading from '../components/RevealHeading'
import ParallaxImage from '../components/ParallaxImage'
import './Services.css'

export default function Services() {
  return <main>
    <PageIntro kicker="THOUGHTFULLY PLANNED. BEAUTIFULLY EXECUTED." title={<>One partner.<br /><em>Every detail.</em></>} desc="A considered range of event planning, production and on-the-ground services." />

    <section className="services-page section-pad">
      <div className="services-lead">
        <span className="eyebrow">OUR SERVICES</span>
        <RevealHeading as="h2">From the first idea<br />to the <em>final encore.</em></RevealHeading>
        <p>Sixteen services covering launches, staging, audiovisual and lighting systems, venue decoration, food &amp; beverage, logistics, security and merchandising.</p>
      </div>
      <div className="services-list">
        {services.map((s, i) => <motion.div key={s} className="service-row" initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * .035 }}><span>{String(i + 1).padStart(2, '0')}</span><h3>{s}</h3><ArrowUpRight /></motion.div>)}
      </div>
    </section>

    <section className="services-image">
      <ParallaxImage src={'/images/site/services-banner.webp'} alt="Large-scale event venue with stage and lighting" />
      <div className="services-image-copy"><span className="eyebrow">PRODUCTION WITH PURPOSE</span><RevealHeading as="h2">Make room for<br /><em>the extraordinary.</em></RevealHeading></div>
    </section>

    <Callout />
  </main>
}
