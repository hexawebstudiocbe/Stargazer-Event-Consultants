import React, { useState } from 'react'
import { Award } from 'lucide-react'
import RevealHeading from './RevealHeading'
import { award } from '../data'
import './AwardFeature.css'

// Drop the photo at public/images/site/award.webp (or change AWARD_PHOTO).
const AWARD_PHOTO = '/images/site/award.webp'

export default function AwardFeature() {
  const [missing, setMissing] = useState(false)
  return (
    <section className="award-feature">
      <div className="award-photo">
        {missing
          ? <div className="award-placeholder"><Award strokeWidth={1.2} /><span>AWARD PHOTO COMING SOON</span></div>
          : <img src={AWARD_PHOTO} alt="Mark Achariam receiving the BrandLaureate SMEs BestBrands of The Decade Award" onError={() => setMissing(true)} />}
      </div>
      <div className="award-copy">
        <span className="eyebrow">RECOGNISED EXCELLENCE</span>
        <RevealHeading as="h2">An award-winning<br /><em>brand.</em></RevealHeading>
        <p>{award}. Mark Achariam received the BrandLaureate SMEs BestBrands of The Decade Award on behalf of Stargazer Event Consultants, a recognition of the creativity, care and consistency our clients have come to expect.</p>
      </div>
    </section>
  )
}
