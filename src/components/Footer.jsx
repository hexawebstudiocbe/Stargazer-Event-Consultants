import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Facebook } from 'lucide-react'
import Logo from './Logo'
import { award } from '../data'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Logo />
          <p className="footer-tag">STYLISH, SOPHISTICATED,<br />SENSATIONAL &amp; SPECTACULAR.</p>
        </div>
        <div className="footer-cta">
          <span className="eyebrow">HAVE AN EVENT IN MIND?</span>
          <Link to="/contact">Let’s make it<br /><em>unforgettable.</em><ArrowUpRight /></Link>
        </div>
      </div>
      <p className="footer-award">★ {award}</p>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Stargazer Event Consultants</span>
        <span>Kuala Lumpur, Malaysia</span>
        <div className="socials">
          <a href="https://www.instagram.com/stargazerconsultants" aria-label="Instagram"><Instagram size={17} /></a>
          <a href="https://www.facebook.com/" aria-label="Facebook"><Facebook size={17} /></a>
        </div>
      </div>
    </footer>
  )
}
