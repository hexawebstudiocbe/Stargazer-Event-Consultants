import React, { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './PageTransition.css'

let firstLoad = true

// Old page fades out (AnimatePresence mode="wait"), new page mounts under a curtain that wipes away.
export default function PageTransition({ children, onEnter }) {
  const reduce = useReducedMotion()
  const showCurtain = !firstLoad && !reduce
  useEffect(() => {
    firstLoad = false
    onEnter?.()
  }, [])
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      {showCurtain && (
        <motion.div className="page-curtain" aria-hidden="true" initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} transition={{ duration: 0.85, delay: 0.08, ease: [0.76, 0, 0.24, 1] }} />
      )}
      {children}
    </motion.div>
  )
}
