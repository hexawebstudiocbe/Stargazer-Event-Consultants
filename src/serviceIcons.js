import { Rocket, Layers, Flame, Hammer, Clapperboard, Music, Mic, Monitor, Newspaper, Sparkles, UtensilsCrossed, MapPin, Tent, Store, ShieldCheck, Gift } from 'lucide-react'

// allIcons follows the full brochure list; serviceIcons matches the picked services
import { servicePicks } from './data'

const allIcons = [Rocket, Layers, Flame, Hammer, Clapperboard, Music, Mic, Monitor, Newspaper, Sparkles, UtensilsCrossed, MapPin, Tent, Store, ShieldCheck, Gift]

export const serviceIcons = servicePicks.map(n => allIcons[n - 1])
