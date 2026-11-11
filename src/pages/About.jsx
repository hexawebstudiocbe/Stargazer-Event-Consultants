import React from 'react'
import { clients, events, mission, award } from '../data'
import PageIntro from '../components/PageIntro'
import SectionHead from '../components/SectionHead'
import Callout from '../components/Callout'
import RevealHeading from '../components/RevealHeading'
import ParallaxImage from '../components/ParallaxImage'
import CountUp from '../components/CountUp'
import './About.css'

export default function About() {
  return <main>
    <PageIntro kicker="THE PEOPLE BEHIND THE MOMENTS" title={<>A little about<br /><em>Stargazer.</em></>} desc="Creative thinking, thoughtful planning and a passion for making every occasion count." />

    <section className="about-story section-pad">
      <div className="about-image"><ParallaxImage src={'/images/site/about-story.webp'} alt="Event stage and gala setup" /></div>
      <div className="about-text">
        <span className="eyebrow">OUR STORY · SINCE 2009</span>
        <RevealHeading as="h2">We love what<br /><em>we do.</em></RevealHeading>
        <p>Stargazer Event Consultants have been designing and running world class corporate event solutions for clients since 2009. We love what we do. Our creative approach and swift delivery in large scale events make us the specialists in our field.</p>
        <p>Heading Stargazer Event Consultants is Mark Achariam, a person no stranger to the event management industry. He boasts 23 years of industry experience, spearheading numerous projects with big names in the corporate sector.</p>
        <div className="stat-row">
          <div><strong><CountUp from={2000} to={2009} /></strong><span>Established</span></div>
          <div><strong><CountUp to={23} suffix=" yrs" /></strong><span>Industry experience</span></div>
          <div><strong><CountUp to={events.length} /></strong><span>Events showcased</span></div>
          <div><strong><CountUp to={clients.length} /></strong><span>Clients</span></div>
        </div>
      </div>
    </section>

    <section className="belief-section">
      <div className="belief-photo"><ParallaxImage src={'/images/site/belief.webp'} alt="Corporate launch celebration" /></div>
      <div className="belief-copy">
        <span className="eyebrow">WHAT WE BELIEVE</span>
        <RevealHeading as="h2">Events connect people.<br /><em>Experiences spark change.</em></RevealHeading>
        <p>What sets us apart from the rest is our ability to turn small budget events into extraordinary ones. Each event is given the utmost attention to detail, irrespective of size or budget. We always ensure to create outstanding results because of our creativity and experience.</p>
        <p>We believe events are so much more than launches and conferences. Events connect people, breed innovation, build communities, and spark change. With Stargazer Event Consultants, we ensure our clients keep reaching for the stars.</p>
      </div>
    </section>

    <section className="mission-band">
      <span className="eyebrow">OUR MISSION</span>
      <p>{mission}</p>
      <div className="award-line"><span className="award-mark">★</span>{award}</div>
    </section>

    <section className="client-list section-pad">
      <SectionHead kicker="THE COMPANY WE KEEP" title="Our clients." />
      <p className="muted">Organisations we have had the privilege of working with.</p>
      <div className="client-grid">{clients.map((c, i) => <div key={c}><span>{String(i + 1).padStart(2, '0')}</span>{c}</div>)}</div>
    </section>

    <Callout />
  </main>
}
