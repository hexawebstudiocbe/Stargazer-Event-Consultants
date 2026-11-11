import React, { useState } from 'react'
import { ArrowUpRight, Instagram, Facebook, Mail, Phone, MapPin, MessageCircle, Globe } from 'lucide-react'
import PageIntro from '../components/PageIntro'
import RevealHeading from '../components/RevealHeading'
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
        <RevealHeading as="h2">Let’s make<br /><em>it happen.</em></RevealHeading>
        <p className="contact-person"><b>Mark Achariam</b><span>Managing Director</span></p>
        <div className="contact-item"><MapPin /><div><b>Visit us</b><p>Stargazer Event Consultants<br />2-02 &amp; 2-03 (Level 2), Menara Manulife,<br />6, Jalan Gelenggang, Bukit Damansara,<br />50490 Kuala Lumpur, Malaysia.</p></div></div>
        <div className="contact-item"><Phone /><div><b>Call us</b><p><a href="tel:+60173375545">+6017 337 5545</a></p></div></div>
        <div className="contact-item"><MessageCircle /><div><b>WhatsApp</b><p><a href="https://wa.me/60105667445" target="_blank" rel="noreferrer">+6010 566 7445</a></p></div></div>
        <div className="contact-item"><Mail /><div><b>Email</b><p><a href="mailto:info@stargazerconsultants.com.my">info@stargazerconsultants.com.my</a></p></div></div>
        <div className="contact-item"><Globe /><div><b>Website</b><p><a href="https://www.stargazerconsultants.com.my">www.stargazerconsultants.com.my</a></p></div></div>
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
