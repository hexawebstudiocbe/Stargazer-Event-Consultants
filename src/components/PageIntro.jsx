import React from 'react'
import RevealHeading from './RevealHeading'
import './PageIntro.css'

export default function PageIntro({ kicker, title, desc }) {
  return (
    <section className="page-intro">
      <span className="eyebrow">{kicker}</span>
      <RevealHeading as="h1" delay={0.15}>{title}</RevealHeading>
      {desc && <p>{desc}</p>}
      <span className="intro-orbit" />
    </section>
  )
}
