const allServices = [
  'Corporate launch specialist',
  '3D projection & multi-image AV system',
  'Special effects / pyrotechnics',
  'Staging & backdrop design / construction',
  'Corporate video presentation',
  'Sound & lighting system / disc jockey',
  'International / local entertainment consultants',
  'LCD / LED / plasma projection system',
  'Press & media relations',
  'Exclusive venue decoration',
  'Food & beverage',
  'Site selection & logistics',
  'Outdoor venues – giant marquee tents, gazebos, pyramid & Arabic tents',
  'Exhibition & roadshow showcase',
  'Security, VIP handling & crowd management',
  'Merchandising, premium gifts & personalised printing'
]

// Brochure service numbers shown on the site (all 16)
export const servicePicks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
export const services = servicePicks.map(n => allServices[n - 1])

// Recent highlights, shown first on the Our Events page
export const recentEvents = [
  'Taylor’s University Club & Societies Event',
  '37th LAWASIA Conference 2024 with Prime Minister of Malaysia',
  'Malaysia Landscape Architecture Award with YB Hannah Yeoh, Minister in the Prime Minister’s Department',
  'Drew Network Asia Symposium Kuala Lumpur',
  'Bumiputera & World Halal BestBrands Award',
  'CIMB S.A.F.E Conference',
  'CIMB Regional Media Engagement',
  'Taylor’s University International & Cultural Feista'
]

export const events = [
  'The Official Opening of Chevrolet 3S Centre Puchong with Minister of Transport',
  'TT Global Annual Dinner',
  'Media Launch of the New Chevrolet Captiva',
  'The Official Launch of International Bedding Gallery',
  'APW Christmas Market',
  'CIMB Developers Appreciation Evening',
  'CIMB Retail & Enterprise Distribution Annual Awards',
  'BrandLaureate Best Brand Awards with Former Prime Minister of Malaysia',
  'NAZA World Sales Convention',
  'BrandLaureate Best Brand Icon Awards',
  'BrandLaureate World Awards, Shenzhen, China',
  'The Gamuda Land Biodiversity Day',
  'MAHSING Property Showcase',
  'Malaysia Landscape Architecture Awards 2019 with Minister of Federal Territories',
  'Carrier Sports Club Annual Team Building, Langkawi',
  'BrandLaureate World Awards, Hanoi, Vietnam',
  'CIMB Staff Sustainability Appreciation Dinner',
  'BrandLaureate Special Edition World Awards, Singapore',
  'Malaysia Landscape Architecture Awards 2022 with Chief Minister of Penang',
  'Gold A-Heart Fundraising Appreciation Dinner with Duli Yang Maha Mulia Tuanku Raja Perlis',
  'YTL Communications “Learn From Home” Project with Minister of Communications & Multimedia',
  'CIMB EPICC Roadshow',
  'CIMB Consumer Sales & Distribution Half Yearly Review',
  'Malaysia Landscape Architecture Awards 2023 with Menteri Besar of Johor',
  'The BrandLaureate Brand ICON Leadership Awards',
  'International Malaysia Law Conference 2023 with Prime Minister of Malaysia',
  'Malaysian Bar Annual Dinner & Dance'
]

export const clients = [
  'CIMB Bank','Gamuda Land','Institute of Landscape Architects Malaysia (ILAM)','Mah Sing Group','YES',
  'NAZA Group of Companies','Malaysian Bar Council','Manulife','OCBC Bank','QNET','Mercy Malaysia',
  'Carrier','Sunway University','Low Yat Group','International Brands Gallery (IBG)','Recron',
  'The BrandLaureate','Reckitt','Emerson Process Management','Chevrolet','Acts One Group Inc',
  'The Alice Smith School','Sheraton Subang','Kingdomcity','EFTRA','Jump Street','IACT College',
  'Early Autism Project','Brickfields Asia College','CFA Society Malaysia','Film Point',
  'Oriental Hearts And Minds Study Institute (OHMSI)','Shearn Delamore & Co.','Taylor’s University'
]

export const clientLogo = i => `/images/clients/${String(i + 1).padStart(2, '0')}.webp`

export const mission = 'Our mission is to conceptualise and deliver STYLISH, SOPHISTICATED, SENSATIONAL and SPECTACULAR events through creativity, innovation and meticulous attention to detail. We are committed to creating exceptional experiences, exceeding expectations and transforming every occasion into a memorable celebration of excellence.'
export const award = 'Winner of The BrandLaureate SMEs BestBrands of The Decade Award'
export const IMG = '/images/'
