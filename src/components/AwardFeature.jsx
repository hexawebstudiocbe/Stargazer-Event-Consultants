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
        <p>Stargazer Event Consultants was honoured with the prestigious BrandLaureate SMEs BestBrands of The Decade Award, received by Managing Director, Mark Achariam, on behalf of the company.</p>
        <p>This distinguished recognition reflects the organisation's enduring commitment to creative excellence, professional integrity and consistently delivering exceptional event experiences. It stands as a testament to the dedication, expertise and high standards that define the Stargazer brand.</p>
      </div>
    </section>
  )
}
