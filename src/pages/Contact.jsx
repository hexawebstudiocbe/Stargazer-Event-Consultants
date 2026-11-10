import React, { useState } from 'react'
import { ArrowUpRight, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  function submit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent('Event enquiry — ' + data.get('name'))
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nEvent details: ${data.get('message')}`)
    window.location.href = `mailto:info@stargazerconsultants.com.my?subject=${subject}&body=${body}`
    setSent(true)
  }
  return <main>
    <PageIntro kicker="LET'S CREATE SOMETHING MEMORABLE" title={<>Your next event<br /><em>starts here.</em></>} desc="Tell us what you’re imagining. We’d love to hear about it." />

    <section className="contact-layout section-pad">
      <div className="contact-details">
        <span className="eyebrow">GET IN TOUCH</span>
        <h2>Let’s make<br /><em>it happen.</em></h2>
        <div className="contact-item"><MapPin /><div><b>Visit us</b><p>39, Jalan Desa Bahagia,<br />Taman Desa, Old Klang Road,<br />58100 Kuala Lumpur, Malaysia.</p></div></div>
        <div className="contact-item"><Phone /><div><b>Call us</b><p>+6017 337 5545<br />+603 6211 5281</p></div></div>
        <div className="contact-item"><Mail /><div><b>Email</b><p><a href="mailto:info@stargazerconsultants.com.my">info@stargazerconsultants.com.my</a><br /><a href="mailto:stargazerconsultants@gmail.com">stargazerconsultants@gmail.com</a></p></div></div>
        <div className="contact-social"><a href="https://www.instagram.com/stargazerconsultants"><Instagram /> Instagram</a><a href="https://www.facebook.com/"><Facebook /> Facebook</a></div>
      </div>

      <form className="contact-form" onSubmit={submit}>
        <span className="eyebrow">SEND AN ENQUIRY</span>
        <label>Your name<input name="name" required placeholder="How should we call you?" /></label>
        <label>Email address<input name="email" type="email" required placeholder="you@example.com" /></label>
        <label>Tell us about your event<textarea name="message" rows="5" required placeholder="Event type, date, location, guest count…" /></label>
        <button className="button button-light" type="submit">Send enquiry <ArrowUpRight /></button>
        {sent && <p className="form-note">Your email app should open with your enquiry ready to send.</p>}
        <small>This form opens your email application; it does not submit to a server.</small>
      </form>
    </section>
  </main>
}
