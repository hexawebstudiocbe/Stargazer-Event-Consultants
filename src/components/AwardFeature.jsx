import React, { useState } from 'react'
import { Award } from 'lucide-react'
import RevealHeading from './RevealHeading'
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
        <RevealHeading as="h2">Acknowledgement<br />of <em>Excellence</em></RevealHeading>
        <p className="award-recipient">Recipient of The BrandLaureate SMEs BestBrands of The Decade Award</p>
        <p>Stargazer Event Consultants was honoured with the prestigious BrandLaureate SMEs BestBrands of The Decade Award, accepted by Managing Director, Mark Achariam, on behalf of the company.</p>
        <p>This distinguished accolade recognises Stargazer’s unwavering commitment to creative excellence, professional integrity and the delivery of exceptional event experiences. It reflects the dedication, expertise and meticulous attention to detail that underpin every project we undertake, while reinforcing the high standards and values that continue to define the Stargazer brand.</p>
      </div>
    </section>
  )
}
