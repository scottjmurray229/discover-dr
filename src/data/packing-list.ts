// packing-list.ts — Dominican Republic-specific packing config
import type { PackingItem, PackingConfig, GearRecommendation } from './packing-base';

export const DR_ESSENTIALS: PackingItem[] = [
  { id: 'dr-sunscreen', name: 'High-SPF Sunscreen (reef-safe)', category: 'destination', description: 'Caribbean sun hits at maximum intensity — you burn in under 20 minutes on Punta Cana beaches. SPF 50+ and reapply every 90 minutes. Reef-safe brands protect the coral reefs.', essential: true, amazonSearchFallback: 'reef+safe+sunscreen+spf+50', affiliatePrice: '$12–20' },
  { id: 'dr-repellent', name: 'DEET Insect Repellent', category: 'destination', description: 'Dengue and Zika are present in the DR. Mosquitoes are heavy near rivers, mangroves, and in the capital Santo Domingo. DEET-based repellent in the evenings.', essential: true, amazonSearchFallback: 'deet+insect+repellent+30+percent', affiliatePrice: '$8–15' },
  { id: 'dr-watershoes', name: 'Water Shoes', category: 'destination', description: 'Rocky beach entries on the north coast (Cabarete, Las Terrenas), river excursions (Damajagua waterfalls), and cenote swimming all require water shoes. Essential outside the Punta Cana resort strip.', essential: false, amazonSearchFallback: 'water+shoes+quick+dry+snorkeling', affiliatePrice: '$20–35' },
  { id: 'dr-drybag', name: 'Dry Bag (10–20L)', category: 'destination', description: 'Boat trips to Saona Island, whale watching in Samaná Bay, and river canyoning at Damajagua all put your gear at risk of getting soaked. A dry bag is the simple solution.', essential: true, amazonSearchFallback: 'dry+bag+10l+20l+waterproof', affiliatePrice: '$15–30' },
  {
    id: 'vpn-subscription',
    name: 'VPN Subscription',
    category: 'electronics',
    description: 'Secure your data on public WiFi — essential for hotel, airport, and cafe networks abroad.',
    essential: false,
    affiliateUrl: 'https://go.nordvpn.net/aff_c?offer_id=15&aff_id=XXXXX&url_id=902',
    affiliatePrice: '~$3/month',
    affiliatePartner: 'NordVPN',
  },
  {
    id: 'action-camera',
    name: 'Waterproof Action Camera',
    category: 'gear',
    description: 'Capture snorkeling, diving, and beach adventures hands-free.',
    essential: false,
    affiliateUrl: 'https://www.insta360.com/sal/go-ultra?utm_source=AffiliateCenter&utm_medium=copylink&utm_term=INRSG7H5RTR',
    affiliatePrice: '~$299',
    affiliatePartner: 'Insta360',
  },
  {
    id: 'phone-gimbal',
    name: 'Phone Gimbal for Travel Vlogging',
    category: 'electronics',
    description: 'Stabilized video from your phone — no editing needed.',
    essential: false,
    affiliateUrl: 'https://www.insta360.com/sal/flow-2-pro?utm_source=AffiliateCenter&utm_medium=copylink&utm_term=INRSG7H5RTR',
    affiliatePrice: '~$149',
    affiliatePartner: 'Insta360',
  },
];

export const DR_GEAR_RECOMMENDATIONS: GearRecommendation[] = [
  { id: 'gr-dr-sunscreen', name: 'Reef-Safe Sunscreen (SPF 50+)', reason: 'Punta Cana, Saona Island, and Catalina Island have significant coral — chemical sunscreen harms it. Caribbean UV burns in 15 minutes. Bring from home; it\'s expensive and inconsistently stocked at resorts.', amazonSearchFallback: 'reef+safe+mineral+sunscreen+spf+50', affiliatePrice: '~$16' },
  { id: 'gr-dr-repellent', name: 'DEET Insect Repellent', reason: 'Dengue is present across the DR. The north coast (Las Terrenas, Samaná) has heavy mosquitoes near mangroves. DEET every evening — non-negotiable outside the resort bubble.', amazonSearchFallback: 'deet+insect+repellent+tropical', affiliatePrice: '~$9' },
  { id: 'gr-dr-drybag', name: 'Dry Bag (20L)', reason: 'Saona Island boat trips, whale watching, and waterfall canyoning all soak your gear. A dry bag means your camera and phone survive every excursion.', amazonSearchFallback: 'dry+bag+20l+waterproof+roll+top', affiliatePrice: '~$22' },
  { id: 'gr-dr-watershoes', name: 'Water Shoes', reason: 'Damajagua 27 Waterfalls, rocky north coast beaches, and cenote swimming require foot protection. Flip-flops won\'t cut it — water shoes handle everything.', amazonSearchFallback: 'water+shoes+snorkeling+quick+dry', affiliatePrice: '~$28' },
  { id: 'gr-dr-waterbottle', name: 'Insulated Water Bottle', reason: 'DR heat is intense. Resort tap water isn\'t drinkable. An insulated bottle keeps your water cold all day and reduces single-use plastic while you\'re at it.', amazonSearchFallback: 'insulated+water+bottle+32oz+stainless', affiliatePrice: '~$25' },
];

export const DR_CONFIG: PackingConfig = {
  sitePrefix: 'ddr',
  destination: 'Dominican Republic',
  climate: ['tropical', 'coastal'],
  currency: 'DOP',
  plugType: 'Type A/B',
  plugVoltage: '110V',
  affiliateTag: 'discoverphili-20',
  seasons: [
    { value: 'dry', label: 'Dry Season' },
    { value: 'rainy', label: 'Wet / Rainy Season' },
    { value: 'shoulder', label: 'Shoulder Season' },
  ],
  activities: [
    { value: 'snorkeling', label: 'Snorkeling', icon: '🤿' },
    { value: 'diving', label: 'Diving', icon: '🐟' },
    { value: 'hiking', label: 'Hiking', icon: '🥾' },
    { value: 'surfing', label: 'Surfing', icon: '🏄' },
    { value: 'temples', label: 'Temples', icon: '🛕' },
    { value: 'photography', label: 'Photography', icon: '📸' },
    { value: 'nightlife', label: 'Nightlife', icon: '🍹' },
  ],
  destinationEssentials: DR_ESSENTIALS,
  gearRecommendations: DR_GEAR_RECOMMENDATIONS,
};

export const SITE_CONFIG = DR_CONFIG;

export const DR_PACKING_FAQS = [
  { question: 'What should I pack for the Dominican Republic?', answer: 'The essentials are reef-safe sunscreen (Caribbean UV is extreme), DEET insect repellent (dengue is present), water shoes for north coast adventures, and a dry bag for boat excursions. Our checklist covers 60+ items organized by category, customized for the DR\'s tropical climate.' },
  { question: 'Do I need bug spray in the Dominican Republic?', answer: 'Yes — DEET-based insect repellent is essential. Dengue fever is present across the country, with heavier mosquito activity near mangroves, rivers, and the north coast (Las Terrenas, Samaná). Use 20–30% DEET in the evenings and during outdoor excursions away from resort pools.' },
  { question: 'What power adapter do I need for the Dominican Republic?', answer: 'The Dominican Republic uses Type A and Type B plugs at 110V/60Hz — identical to the United States. American travelers need no adapter. Most modern electronics (phones, laptops, cameras) handle 110–120V automatically.' },
  { question: 'Can I buy toiletries in the Dominican Republic?', answer: 'Yes — basic toiletries are widely available at Supermercado Nacional, La Sirena, and resort shops. Bring your own reef-safe sunscreen (hard to find locally and expensive), DEET repellent, and any specialty medications. Everything else — shampoo, deodorant, toothpaste — is readily available.' },
  { question: 'How many outfits should I pack for the DR?', answer: 'For a 7-day trip: 4–5 lightweight shirts, 2–3 shorts or sundresses, 2 swimsuits, one nicer outfit for evening dining. Pack light — laundry service is available at most hotels and resorts. The tropical heat means you\'ll appreciate having fewer, lighter pieces.' },
  { question: 'What should I NOT bring to the Dominican Republic?', answer: 'Skip heavy clothing (you won\'t need it), expensive jewelry (theft risk in cities), and chemical sunscreen (it harms the coral reefs). Also leave the physical guidebook — Google Maps works well with a local SIM card, which you can buy at the airport for about $10.' },
];
