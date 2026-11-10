import React from 'react'
import { Link } from 'react-router-dom'
import { IMG } from '../data'
import './Logo.css'

export default function Logo({ small = false }) {
  return (
    <Link to="/" className={`brand ${small ? 'brand-small' : ''}`}>
      <img src={IMG + 'stargazer-logo.png'} alt="Stargazer Event Consultants" />
    </Link>
  )
}
