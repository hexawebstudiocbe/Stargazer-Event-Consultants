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

// Brochure service numbers shown on the site
export const servicePicks = [1, 2, 4, 6, 8, 13, 14, 16]
export const services = servicePicks.map(n => allServices[n - 1])

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
  '37th LAWASIA Conference 2024 with Prime Minister of Malaysia',
  'DNA Symposium Kuala Lumpur',
  'Malaysian Bar Annual Dinner & Dance'
]

export const clients = [
  'CIMB Bank','Gamuda Land','Institute of Landscape Architects Malaysia (ILAM)','Mah Sing Group','YES',
  'NAZA Group of Companies','Malaysian Bar Council','Manulife','OCBC Bank','QNET','Mercy Malaysia',
  'Carrier','Sunway University','Low Yat Group','International Brands Gallery (IBG)','Recron',
  'The BrandLaureate','Reckitt','Emerson Process Management','Chevrolet','Acts One Group Inc',
  'The Alice Smith School','Sheraton Subang','Kingdomcity','EFTRA','Jump Street','IACT College',
  'Early Autism Project','Brickfields Asia College','CFA Society Malaysia','Film Point',
  'Oriental Hearts And Minds Study Institute (OHMSI)'
]

export const clientLogo = i => `/images/clients/${String(i + 1).padStart(2, '0')}.webp`

export const mission = 'Our mission is dedicated to creating STYLISH, SENSATIONAL events while ensuring it to be a SPECTACULAR SUCCESS.'
export const award = 'Winner of The BrandLaureate SMEs BestBrands of The Decade Award'
export const IMG = '/images/'
