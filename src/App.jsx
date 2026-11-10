import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import ScrollManager from './components/ScrollManager'
import Header from './components/Header'
import Footer from './components/Footer'
import LogoIntro from './components/LogoIntro'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Work from './pages/Work'
import Contact from './pages/Contact'

export default function App() {
  const [introVisible, setIntroVisible] = useState(() => !sessionStorage.getItem('stargazer-intro-seen'))
  const finishIntro = () => { sessionStorage.setItem('stargazer-intro-seen', '1'); setIntroVisible(false) }
  return <>
    <ScrollManager />
    <Header />
    <AnimatePresence>{introVisible && <LogoIntro onComplete={finishIntro} />}</AnimatePresence>
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
    <Footer />
  </>
}
