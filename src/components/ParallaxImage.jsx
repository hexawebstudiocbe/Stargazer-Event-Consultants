import React, { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import './ParallaxImage.css'

// speed = % of image height travelled each way; scale hides the edges.
export default function ParallaxImage({ src, alt, speed = 8 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${speed}%`, `${speed}%`])
  return (
    <div className="parallax" ref={ref}>
      <motion.img src={src} alt={alt} loading="lazy" style={reduce ? undefined : { y, scale: 1 + (speed * 2) / 100 + 0.02 }} />
    </div>
  )
}
