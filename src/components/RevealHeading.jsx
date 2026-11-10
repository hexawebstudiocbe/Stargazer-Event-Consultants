import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import './RevealHeading.css'

const wordVariants = { hidden: { y: '115%' }, show: { y: 0, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } } }
const wrapVariants = (delay) => ({ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: delay } } })

// Walk children, wrapping every word in a masked span; keeps <br/> and nested <em>.
function split(node, prefix = '') {
  return React.Children.toArray(node).flatMap((child, i) => {
    const key = `${prefix}${i}`
    if (typeof child === 'string' || typeof child === 'number') {
      return String(child).split(/(\s+)/).filter(Boolean).map((part, j) =>
        /^\s+$/.test(part)
          ? ' '
          : <span className="rw" key={`${key}-${j}`}><motion.span className="rw-in" variants={wordVariants}>{part}</motion.span></span>
      )
    }
    if (child.type === 'br') return <br key={key} />
    if (React.isValidElement(child)) return React.cloneElement(child, { key }, split(child.props.children, `${key}-`))
    return child
  })
}

export default function RevealHeading({ as = 'h2', children, delay = 0, ...rest }) {
  const reduce = useReducedMotion()
  if (reduce) {
    const Plain = as
    return <Plain {...rest}>{children}</Plain>
  }
  const Tag = motion[as]
  return (
    <Tag {...rest} variants={wrapVariants(delay)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
      {split(children)}
    </Tag>
  )
}
