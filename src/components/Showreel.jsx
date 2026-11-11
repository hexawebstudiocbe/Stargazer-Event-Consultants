import React, { useRef, useState } from 'react'
import { Play, Film } from 'lucide-react'
import RevealHeading from './RevealHeading'
import { heroImages } from '../workData'
import './Showreel.css'

// Drop the ~90s video at public/videos/showreel.mp4 (H.264, 1080p, ideally under ~30 MB).
const VIDEO_SRC = '/videos/showreel.mp4'
const POSTER = heroImages[0]

export default function Showreel() {
  const ref = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [missing, setMissing] = useState(false)
  const start = () => { ref.current?.play(); setPlaying(true) }
  return (
    <section className="showreel section-pad">
      <div className="showreel-head">
        <span className="eyebrow">THE STARGAZER SHOWREEL</span>
        <RevealHeading as="h2">See us<br /><em>in action.</em></RevealHeading>
      </div>
      <div className="showreel-frame">
        {missing
          ? <div className="showreel-placeholder"><Film strokeWidth={1.2} /><span>SHOWREEL · 90 SECONDS · COMING SOON</span></div>
          : <>
              <video ref={ref} poster={POSTER} controls={playing} preload="metadata" playsInline onEnded={() => setPlaying(false)}>
                <source src={VIDEO_SRC} type="video/mp4" onError={() => setMissing(true)} />
              </video>
              {!playing && <button className="showreel-play" onClick={start} aria-label="Play showreel"><Play fill="currentColor" /></button>}
            </>}
      </div>
    </section>
  )
}
