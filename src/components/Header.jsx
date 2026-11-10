import React, { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Logo from './Logo'
import './Header.css'

const nav = [['Home', '/'], ['About', '/about'], ['Services', '/services'], ['Our Work', '/work'], ['Contact', '/contact']]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={scrolled || open ? 'header header-scrolled' : 'header'}>
      <Logo />
      <nav className={open ? 'nav nav-open' : 'nav'}>
        {nav.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'}>{label}</NavLink>)}
      </nav>
      <Link className="nav-cta" to="/contact">Let’s talk <ArrowUpRight size={16} /></Link>
      <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </header>
  )
}
