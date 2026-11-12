import React from 'react'
import { clients, clientLogo, mission, award } from '../data'
import PageIntro from '../components/PageIntro'
import SectionHead from '../components/SectionHead'
import Callout from '../components/Callout'
import RevealHeading from '../components/RevealHeading'
import ParallaxImage from '../components/ParallaxImage'
import AwardFeature from '../components/AwardFeature'
import './About.css'

export default function About() {
  return <main>
    <PageIntro kicker="THE PEOPLE BEHIND THE MOMENTS" title={<>A little about<br /><em>Stargazer.</em></>} desc="Creative thinking, thoughtful planning and a passion for making every occasion count." />

    <section className="about-story section-pad">
      <div className="about-image"><ParallaxImage src={'/images/site/about-story.webp'} alt="Event stage and gala setup" /></div>
      <div className="about-text">
        <RevealHeading as="h2">About Stargazer<br /><em>Event Consultants</em></RevealHeading>
        <p>Established in 2009, Stargazer Event Consultants is a corporate event management company specialising in the conceptualisation, design and execution of world-class event experiences. Driven by creativity, precision and a passion for excellence, we deliver innovative event solutions with seamless execution, particularly for large-scale corporate events. Our commitment to quality, attention to detail and ability to deliver with efficiency have earned us a reputation as a trusted partner in the industry.</p>
        <h3 className="about-subhead">Leadership &amp; Experience</h3>
        <p>At the helm of Stargazer Event Consultants is Mark Achariam, a respected industry professional with over 25 years of experience in event management. Throughout his career, Mark has spearheaded numerous high-profile projects and collaborated with prominent names across the corporate sector.</p>
        <p>Under his leadership, Stargazer Event Consultants was honoured with the prestigious BrandLaureate SMEs BestBrands of The Decade Award, a testament to the company's commitment to excellence, industry contribution and brand reputation.</p>
        <p>With a clear vision and an unwavering passion for creating exceptional experiences, Mark continues to lead the team in delivering events that go beyond expectations.</p>
      </div>
    </section>

    <section className="belief-section">
      <div className="belief-photo"><ParallaxImage src={'/images/site/belief.webp'} alt="Corporate launch celebration" /></div>
      <div className="belief-copy">
        <RevealHeading as="h2">Our Philosophy<br />&amp; <em>Approach</em></RevealHeading>
        <p>What distinguishes Stargazer Event Consultants is our ability to transform every event into an exceptional experience, regardless of its scale or budget. We believe that great events are not defined by how much is spent, but by the vision, creativity and attention to detail behind every execution. Every project is approached with the same dedication, thoughtful planning and commitment to excellence, ensuring outstanding results that leave a lasting impression.</p>
        <p>To us, events are more than just launches, conferences or corporate gatherings. They are powerful platforms that bring people together, inspire ideas, foster meaningful connections, strengthen communities and create lasting impact.</p>
        <p>At Stargazer Event Consultants, we believe in turning possibilities into extraordinary experiences. Through creativity, experience and a passion for excellence, we strive to take every vision further and inspire our clients to continue reaching for the stars.</p>
      </div>
    </section>

    <AwardFeature />

    <section className="mission-band">
      <span className="eyebrow">OUR MISSION</span>
      <p>{mission}</p>
      <div className="award-line"><img className="award-trophy" src="/images/site/trophy.webp" alt="" />{award}</div>
    </section>

    <section className="client-list section-pad">
      <SectionHead kicker="THE COMPANY WE KEEP" title="Our clients." />
      <p className="muted">Organisations we have had the privilege of working with.</p>
      <div className="logo-wall">{clients.map((c, i) => <div key={c} className="logo-tile"><img src={clientLogo(i)} alt={c} title={c} loading="lazy" /></div>)}</div>
    </section>

    <Callout />
  </main>
}
