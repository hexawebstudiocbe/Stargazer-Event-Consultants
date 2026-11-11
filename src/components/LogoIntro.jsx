import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { IMG } from '../data'
import './LogoIntro.css'

export default function LogoIntro({ onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 3000)
    return () => window.clearTimeout(timer)
  }, [onComplete])
  return (
    <motion.div className="logo-intro" initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .85, ease: 'easeInOut' } }}>
      <motion.div className="logo-intro-glow" animate={{ scale: [.86, 1.08, .98], opacity: [.35, .75, .5] }} transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.img src={IMG + 'stargazer-logo.png'} alt="Stargazer Event Consultants" initial={{ opacity: 0, scale: .82, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.15, ease: [.22, 1, .36, 1] }} />
      <motion.span initial={{ opacity: 0, letterSpacing: '.55em' }} animate={{ opacity: 1, letterSpacing: '.28em' }} transition={{ delay: .8, duration: 1 }}>STYLISH, SOPHISTICATED, SENSATIONAL &amp; SPECTACULAR.</motion.span>
      <motion.div className="logo-intro-line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 1.1, ease: 'easeInOut' }} />
    </motion.div>
  )
}
