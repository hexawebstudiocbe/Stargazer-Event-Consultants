import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import RevealHeading from './RevealHeading'
import './Callout.css'

export default function Callout() {
  return (
    <section className="callout">
      <div className="callout-orbit" />
      <span className="eyebrow">YOUR JOURNEY TO A GREAT EVENT</span>
      <RevealHeading as="h2">Let’s create a moment<br /><em>worth remembering.</em></RevealHeading>
      <Link className="button button-light" to="/contact">Start a conversation <ArrowUpRight /></Link>
    </section>
  )
}
