import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Instagram, Facebook, Mail, Phone, MapPin, Sparkles } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
import { services, events, clients } from './data'

const A='/images/'
const nav=[['Home','/'],['About','/about'],['Services','/services'],['Our Work','/work'],['Contact','/contact']]
const reveal={hidden:{opacity:0,y:34},show:{opacity:1,y:0,transition:{duration:.75,ease:[.22,1,.36,1]}}}
const heroSlides=['hero-event.jpg','ballroom.jpg','launch-event.jpg','corporate-events.jpg']
function HeroBackdrop(){
 const [active,setActive]=useState(0)
 useEffect(()=>{const timer=window.setInterval(()=>setActive(v=>(v+1)%heroSlides.length),6500);return()=>window.clearInterval(timer)},[])
 return <><div className="hero-slides" aria-hidden="true"><AnimatePresence initial={false}><motion.img key={heroSlides[active]} src={A+heroSlides[active]} className="hero-slide" alt="" initial={{opacity:0,scale:1.09}} animate={{opacity:1,scale:1}} exit={{opacity:0}} transition={{opacity:{duration:1.35},scale:{duration:7,ease:'linear'}}}/></AnimatePresence></div><div className="hero-progress" aria-label={`Slide ${active+1} of ${heroSlides.length}`}>{heroSlides.map((_,i)=><button key={i} className={i===active?'active':''} aria-label={`Show hero image ${i+1}`} onClick={()=>setActive(i)}/>)}</div></>
}
function Logo({small=false}){return <Link to="/" className={`brand ${small?'brand-small':''}`}><img src={A+'stargazer-logo.png'} alt="Stargazer Event Consultants"/></Link>}
function Header(){
  const [open,setOpen]=useState(false)
  const location=useLocation()
  useEffect(()=>setOpen(false),[location])
  return <header className="header">
    <Logo/>
    <nav className={open?'nav nav-open':'nav'}>{nav.map(([label,path])=><NavLink key={path} to={path} end={path==='/'}>{label}</NavLink>)}</nav>
    <Link className="nav-cta" to="/contact">Let’s talk <ArrowUpRight size={16}/></Link>
    <button className="menu-btn" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </header>
}
function Footer(){
 return <footer className="footer"><div className="footer-top"><div><Logo/><p className="footer-tag">STYLISH. SENSATIONAL.<br/>SPECTACULAR. SUCCESS.</p></div><div className="footer-cta"><span className="eyebrow">HAVE AN EVENT IN MIND?</span><Link to="/contact">Let’s make it<br/><em>unforgettable.</em><ArrowUpRight/></Link></div></div>
 <div className="footer-bottom"><span>© {new Date().getFullYear()} Stargazer Event Consultants</span><span>Kuala Lumpur, Malaysia</span><div className="socials"><a href="https://www.instagram.com/stargazerconsultants" aria-label="Instagram"><Instagram size={17}/></a><a href="https://www.facebook.com/" aria-label="Facebook"><Facebook size={17}/></a></div></div></footer>
}
function PageIntro({kicker,title,desc}){return <section className="page-intro"><span className="eyebrow">{kicker}</span><h1>{title}</h1>{desc&&<p>{desc}</p>}<span className="intro-orbit"/></section>}
function SectionHead({kicker,title,link,href}){return <div className="section-head"><div><span className="eyebrow">{kicker}</span><h2>{title}</h2></div>{link&&<Link className="text-link" to={href}>{link}<ArrowUpRight size={17}/></Link>}</div>}
function Home(){
 return <main>
  <section className="hero">
   <HeroBackdrop/>
   <div className="hero-shade"/>
   <div className="hero-content"><motion.span className="eyebrow" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.2}}>EVENTS THAT STAY WITH YOU</motion.span>
    <motion.h1 initial={{opacity:0,y:55}} animate={{opacity:1,y:0}} transition={{duration:1,delay:.35}}>Make every<br/><em>moment</em> matter.</motion.h1>
    <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.9}}>Stylish. Sensational. Spectacular. Success.</motion.p>
    <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:1.1}}><Link to="/work" className="button button-light">Explore our work <ArrowUpRight size={17}/></Link></motion.div>
   </div>
   <div className="hero-index"><span>{String(1).padStart(2,'0')}</span><i/><span>04</span></div>
   <a href="#intro" className="scroll-cue"><span>SCROLL TO DISCOVER</span><ArrowDown size={15}/></a>
   <div className="hero-stamp"><Sparkles/><span>CRAFTING<br/>EXPERIENCES</span></div>
  </section>
  <section id="intro" className="intro section-pad"><div className="intro-number">01 / 04</div><div className="intro-copy"><span className="eyebrow">WELCOME TO STARGAZER</span><h2>We turn ideas into<br/><em>extraordinary experiences.</em></h2><p>Stargazer Event Consultants has been designing and running world-class corporate event solutions for clients since 2009. We love what we do. Our creative approach and swift delivery in large-scale events make us specialists in our field.</p><Link to="/about" className="text-link">Discover our story <ArrowUpRight size={17}/></Link></div><div className="intro-photo"><img src={A+'about-event.jpg'} alt="A corporate event produced by Stargazer"/><span className="photo-caption">A MOMENT, BEAUTIFULLY MADE</span></div></section>
  <section className="feature-band"><div className="feature-backdrop"/><div className="feature-inner"><span className="eyebrow">THE STARGAZER DIFFERENCE</span><h2>Small details.<br/><em>Big impressions.</em></h2><p>What sets us apart is our ability to turn small-budget events into extraordinary ones. Every event is given the utmost attention to detail, irrespective of size or budget.</p><Link to="/services" className="button button-outline">What we do <ArrowUpRight size={17}/></Link></div></section>
  <section className="services-preview section-pad"><SectionHead kicker="WHAT WE DO" title={<>Every detail.<br/><em>Every possibility.</em></>} link="All services" href="/services"/><div className="service-grid">{services.slice(0,6).map((s,i)=><motion.div variants={reveal} initial="hidden" whileInView="show" viewport={{once:true,amount:.25}} className="service-tile" key={s}><span>0{i+1}</span><h3>{s}</h3><ArrowUpRight/></motion.div>)}</div></section>
  <section className="work-preview"><div className="work-preview-image"><img src={A+'ballroom.jpg'} alt="Elegant corporate gala dinner"/></div><div className="work-preview-copy"><span className="eyebrow">SELECTED EXPERIENCES</span><h2>Built around<br/><em>your big moment.</em></h2><p>From corporate launches and annual dinners to exhibitions and roadshows, we bring the vision, people and production together.</p><Link to="/work" className="text-link">View our work <ArrowUpRight size={17}/></Link></div></section>
  <section className="client-strip section-pad"><SectionHead kicker="TRUSTED PARTNERS" title="In good company." link="Meet our clients" href="/about"/><div className="client-words">{clients.slice(0,12).map(c=><span key={c}>{c}</span>)}</div></section>
  <Callout/>
 </main>
}
function About(){
 return <main><PageIntro kicker="THE PEOPLE BEHIND THE MOMENTS" title={<>A little about<br/><em>Stargazer.</em></>} desc="Creative thinking, thoughtful planning and a passion for making every occasion count."/>
 <section className="about-story section-pad"><div className="about-image"><img src={A+'about-event.jpg'} alt="Event stage and gala setup"/></div><div className="about-text"><span className="eyebrow">OUR STORY · SINCE 2009</span><h2>We love what<br/><em>we do.</em></h2><p>Stargazer Event Consultants have been designing and running world-class corporate event solutions for clients since 2009. Our creative approach and swift delivery in large-scale events make us specialists in our field.</p><p>Led by Mark Achariam, who the brochure describes as having 23 years of industry experience, Stargazer has spearheaded numerous projects with big names in the corporate sector.</p><div className="stat-row"><div><strong>2009</strong><span>Established</span></div><div><strong>23 yrs</strong><span>Experience noted in brochure</span></div></div></div></section>
 <section className="belief-section"><div className="belief-photo"><img src={A+'launch-event.jpg'} alt="Corporate launch celebration"/></div><div className="belief-copy"><span className="eyebrow">WHAT WE BELIEVE</span><h2>Events connect people.<br/><em>Experiences spark change.</em></h2><p>We believe events are so much more than launches and conferences. Events connect people, breed innovation, build communities, and spark change. With Stargazer Event Consultants, we ensure our clients keep reaching for the stars.</p></div></section>
 <section className="client-list section-pad"><SectionHead kicker="THE COMPANY WE KEEP" title="Our clients."/><p className="muted">A selection of organisations featured in the company brochure.</p><div className="client-grid">{clients.map((c,i)=><div key={c}><span>{String(i+1).padStart(2,'0')}</span>{c}</div>)}</div></section><Callout/></main>
}
function Services(){
 return <main><PageIntro kicker="THOUGHTFULLY PLANNED. BEAUTIFULLY EXECUTED." title={<>One partner.<br/><em>Every detail.</em></>} desc="A considered range of event planning, production and on-the-ground services."/>
 <section className="services-page section-pad"><div className="services-lead"><span className="eyebrow">OUR SERVICES</span><h2>From the first idea<br/>to the <em>final encore.</em></h2><p>Our brochure outlines capabilities spanning event production, staging, audiovisual systems, venue styling, logistics and guest experience.</p></div><div className="services-list">{services.map((s,i)=><motion.div key={s} className="service-row" initial={{opacity:0,x:35}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.035}}><span>{String(i+1).padStart(2,'0')}</span><h3>{s}</h3><ArrowUpRight/></motion.div>)}</div></section>
 <section className="services-image"><img src={A+'ballroom.jpg'} alt="Large-scale event venue with stage and lighting"/><div><span className="eyebrow">PRODUCTION WITH PURPOSE</span><h2>Make room for<br/><em>the extraordinary.</em></h2></div></section><Callout/></main>
}
function Work(){
 const [filter,setFilter]=useState('All')
 const items=[{name:'Corporate events',type:'Corporate',img:'corporate-events.jpg',desc:'Annual dinners, launches and corporate celebrations.'},{name:'Exhibitions & showcases',type:'Exhibitions',img:'exhibitions.jpg',desc:'Exhibition stands, roadshows and brand showcases.'},{name:'Gala dinners',type:'Corporate',img:'ballroom.jpg',desc:'Atmosphere-led dining and award experiences.'},{name:'Launch moments',type:'Corporate',img:'launch-event.jpg',desc:'Launches and milestone celebrations.'}]
 const shown=filter==='All'?items:items.filter(x=>x.type===filter)
 return <main><PageIntro kicker="A FEW MOMENTS WE HELPED CREATE" title={<>Our work.<br/><em>In the spotlight.</em></>} desc="A visual selection inspired by the corporate events and exhibitions featured in our brochure."/>
 <section className="portfolio section-pad"><div className="filter-bar">{['All','Corporate','Exhibitions'].map(f=><button key={f} onClick={()=>setFilter(f)} className={filter===f?'active':''}>{f}</button>)}</div><motion.div layout className="portfolio-grid">{shown.map((item,i)=><motion.article layout key={item.name} className={`portfolio-card card-${i}`} initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.55}}><div className="portfolio-img"><img src={A+item.img} alt={item.name}/><span className="portfolio-arrow"><ArrowUpRight/></span></div><div className="portfolio-meta"><span>{item.type}</span><h3>{item.name}</h3><p>{item.desc}</p></div></motion.article>)}</motion.div></section>
 <section className="events-list section-pad"><SectionHead kicker="SELECTED CREDENTIALS" title="A calendar of moments."/><p className="muted">Events listed in the company brochure.</p><div className="event-columns">{events.map((e,i)=><div className="event-line" key={e}><span>{String(i+1).padStart(2,'0')}</span><p>{e}</p></div>)}</div></section><Callout/></main>
}
function Contact(){
 const [sent,setSent]=useState(false)
 function submit(e){e.preventDefault();const data=new FormData(e.currentTarget);const subject=encodeURIComponent('Event enquiry — '+data.get('name'));const body=encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nEvent details: ${data.get('message')}`);window.location.href=`mailto:info@stargazerconsultants.com.my?subject=${subject}&body=${body}`;setSent(true)}
 return <main><PageIntro kicker="LET'S CREATE SOMETHING MEMORABLE" title={<>Your next event<br/><em>starts here.</em></>} desc="Tell us what you’re imagining. We’d love to hear about it."/>
 <section className="contact-layout section-pad"><div className="contact-details"><span className="eyebrow">GET IN TOUCH</span><h2>Let’s make<br/><em>it happen.</em></h2><div className="contact-item"><MapPin/><div><b>Visit us</b><p>39, Jalan Desa Bahagia,<br/>Taman Desa, Old Klang Road,<br/>58100 Kuala Lumpur, Malaysia.</p></div></div><div className="contact-item"><Phone/><div><b>Call us</b><p>+6017 337 5545<br/>+603 6211 5281</p></div></div><div className="contact-item"><Mail/><div><b>Email</b><p><a href="mailto:info@stargazerconsultants.com.my">info@stargazerconsultants.com.my</a><br/><a href="mailto:stargazerconsultants@gmail.com">stargazerconsultants@gmail.com</a></p></div></div><div className="contact-social"><a href="https://www.instagram.com/stargazerconsultants"><Instagram/> Instagram</a><a href="https://www.facebook.com/"><Facebook/> Facebook</a></div></div>
 <form className="contact-form" onSubmit={submit}><span className="eyebrow">SEND AN ENQUIRY</span><label>Your name<input name="name" required placeholder="How should we call you?"/></label><label>Email address<input name="email" type="email" required placeholder="you@example.com"/></label><label>Tell us about your event<textarea name="message" rows="5" required placeholder="Event type, date, location, guest count…"/></label><button className="button button-light" type="submit">Send enquiry <ArrowUpRight/></button>{sent&&<p className="form-note">Your email app should open with your enquiry ready to send.</p>}<small>This form opens your email application; it does not submit to a server.</small></form></section></main>
}
function Callout(){return <section className="callout"><div className="callout-orbit"/><span className="eyebrow">YOUR JOURNEY TO A GREAT EVENT</span><h2>Let’s create a moment<br/><em>worth remembering.</em></h2><Link className="button button-light" to="/contact">Start a conversation <ArrowUpRight/></Link></section>}
function ScrollManager(){
 const location=useLocation()
 useEffect(()=>{
  window.scrollTo(0,0)
  let lenis
  let raf
  const animated = gsap.utils.toArray('.service-tile, .portfolio-card, .event-line, .client-grid > div, .contact-item')
  gsap.set(animated, { opacity: 0, y: 28 })
  const triggers = animated.map((element) => gsap.to(element, {
    opacity: 1, y: 0, duration: .8, ease: 'power3.out',
    scrollTrigger: { trigger: element, start: 'top 88%', once: true }
  }))
  import('lenis').then(({default:Lenis})=>{
   lenis=new Lenis({duration:1.15,smoothWheel:true})
   const tick=(time)=>{lenis?.raf(time);raf=requestAnimationFrame(tick)}
   raf=requestAnimationFrame(tick)
  })
  return()=>{cancelAnimationFrame(raf);lenis?.destroy();triggers.forEach(t=>t.scrollTrigger?.kill());triggers.forEach(t=>t.kill())}
 },[location.pathname])
 return null
}
function LogoIntro({onComplete}){
 useEffect(()=>{const timer=window.setTimeout(onComplete,3000);return()=>window.clearTimeout(timer)},[onComplete])
 return <motion.div className="logo-intro" initial={{opacity:1}} exit={{opacity:0,transition:{duration:.85,ease:'easeInOut'}}}>
  <motion.div className="logo-intro-glow" animate={{scale:[.86,1.08,.98],opacity:[.35,.75,.5]}} transition={{duration:2.5,repeat:Infinity,ease:'easeInOut'}}/>
  <motion.img src={A+'stargazer-logo.png'} alt="Stargazer Event Consultants" initial={{opacity:0,scale:.82,y:18}} animate={{opacity:1,scale:1,y:0}} transition={{duration:1.15,ease:[.22,1,.36,1]}} />
  <motion.span initial={{opacity:0,letterSpacing:'.55em'}} animate={{opacity:1,letterSpacing:'.28em'}} transition={{delay:.8,duration:1}}>STYLISH. SENSATIONAL. SPECTACULAR. SUCCESS.</motion.span>
  <motion.div className="logo-intro-line" initial={{scaleX:0}} animate={{scaleX:1}} transition={{delay:1,duration:1.1,ease:'easeInOut'}}/>
 </motion.div>
}
export default function App(){
 const [introVisible,setIntroVisible]=useState(()=>!sessionStorage.getItem('stargazer-intro-seen'))
 const finishIntro=()=>{sessionStorage.setItem('stargazer-intro-seen','1');setIntroVisible(false)}
 return <><ScrollManager/><Header/><AnimatePresence>{introVisible&&<LogoIntro onComplete={finishIntro}/>}</AnimatePresence><AnimatePresence mode="wait"><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/work" element={<Work/>}/><Route path="/contact" element={<Contact/>}/></Routes></AnimatePresence><Footer/></>
}