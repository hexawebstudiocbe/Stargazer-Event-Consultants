import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import './SectionHead.css'

export default function SectionHead({ kicker, title, link, href }) {
  return (
    <div className="section-head">
      <div><span className="eyebrow">{kicker}</span><h2>{title}</h2></div>
      {link && <Link className="text-link" to={href}>{link}<ArrowUpRight size={17} /></Link>}
    </div>
  )
}
