import React from 'react'
import './PageIntro.css'

export default function PageIntro({ kicker, title, desc }) {
  return (
    <section className="page-intro">
      <span className="eyebrow">{kicker}</span>
      <h1>{title}</h1>
      {desc && <p>{desc}</p>}
      <span className="intro-orbit" />
    </section>
  )
}
