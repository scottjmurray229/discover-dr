export interface NetworkSite {
  id: string;
  name: string;
  shortName: string;
  domain: string;
  url: string;
  flag: string;
  region: 'hub' | 'southeast-asia' | 'east-asia' | 'americas' | 'europe' | 'south-america';
  status: 'live' | 'coming-soon';
  tagline: string;
}

export const NETWORK_SITES: NetworkSite[] = [
  // Hub
  {
    id: 'hub',
    name: 'Discover More Travel',
    shortName: 'Hub',
    domain: 'discovermore.travel',
    url: 'https://discovermore.travel',
    flag: '\ud83c\udf0d',
    region: 'hub',
    status: 'coming-soon',
    tagline: 'Your gateway to authentic travel worldwide',
  },
  // South America
  {
    id: 'dr',
    name: 'Discover Dominican Republic',
    shortName: 'DR',
    domain: 'discoverdr.info',
    url: 'https://discoverdr.info',
    flag: '\ud83c\uddf2\ud83c\udde9',
    region: 'americas',
    status: 'live',
    tagline: 'Beaches, history, and merengue rhythms',
  },
  // Europe
  {
    id: 'eastern-europe',
    name: 'Discover Eastern Europe',
    shortName: 'Eastern Europe',
    domain: 'discovereasterneurope.info',
    url: 'https://discovereasterneurope.info',
    flag: '\ud83c\udff0',
    region: 'europe',
    status: 'live',
    tagline: 'Castles, thermal baths, and cobblestone charm',
  },
  // Southeast Asia
  {
    id: 'philippines',
    name: 'Discover Philippines',
    shortName: 'Philippines',
    domain: 'discoverphilippines.info',
    url: 'https://discoverphilippines.info',
    flag: '\ud83c\uddf5\ud83c\udded',
    region: 'southeast-asia',
    status: 'live',
    tagline: 'Immersive guides to 7,641 islands',
  },
  {
    id: 'thailand',
    name: 'Discover Thailand',
    shortName: 'Thailand',
    domain: 'discoverthailand.info',
    url: 'https://discoverthailand.info',
    flag: '\ud83c\uddf9\ud83c\udded',
    region: 'southeast-asia',
    status: 'coming-soon',
    tagline: 'Temples, street food, and tropical beaches',
  },
  {
    id: 'cambodia',
    name: 'Discover Cambodia',
    shortName: 'Cambodia',
    domain: 'discovercambodia.info',
    url: 'https://discovercambodia.info',
    flag: '\ud83c\uddf0\ud83c\udded',
    region: 'southeast-asia',
    status: 'coming-soon',
    tagline: 'Ancient temples and hidden coastlines',
  },
  {
    id: 'laos',
    name: 'Discover Laos',
    shortName: 'Laos',
    domain: 'discoverlaos.info',
    url: 'https://discoverlaos.info',
    flag: '\ud83c\uddf1\ud83c\udde6',
    region: 'southeast-asia',
    status: 'coming-soon',
    tagline: 'Waterfalls, monks, and the Mekong',
  },
  {
    id: 'vietnam',
    name: 'Discover Vietnam',
    shortName: 'Vietnam',
    domain: 'discovervietnam.info',
    url: 'https://discovervietnam.info',
    flag: '\ud83c\uddfb\ud83c\uddf3',
    region: 'southeast-asia',
    status: 'coming-soon',
    tagline: 'From Ha Long Bay to the Mekong Delta',
  },
  // East Asia
  {
    id: 'japan',
    name: 'Discover Japan',
    shortName: 'Japan',
    domain: 'discoverjapan.info',
    url: 'https://discoverjapan.info',
    flag: '\ud83c\uddef\ud83c\uddf5',
    region: 'east-asia',
    status: 'coming-soon',
    tagline: 'Cherry blossoms, shrines, and culinary mastery',
  },
  // Americas
  {
    id: 'baja',
    name: 'Discover Baja',
    shortName: 'Baja',
    domain: 'discoverbaja.info',
    url: 'https://discoverbaja.info',
    flag: '\ud83c\uddf2\ud83c\uddfd',
    region: 'americas',
    status: 'live',
    tagline: 'Tacos, surf breaks, and desert landscapes',
  },
  {
    id: 'nevada',
    name: 'Discover Nevada',
    shortName: 'Nevada',
    domain: 'discovernevada.info',
    url: 'https://discovernevada.info',
    flag: '\ud83c\uddfa\ud83c\uddf8',
    region: 'americas',
    status: 'live',
    tagline: 'Desert highways, neon lights, and wide-open spaces',
  },
  {
    id: 'san-diego',
    name: 'Discover San Diego',
    shortName: 'San Diego',
    domain: 'discoversandiego.info',
    url: 'https://discoversandiego.info',
    flag: '\ud83c\uddfa\ud83c\uddf8',
    region: 'americas',
    status: 'coming-soon',
    tagline: 'Sun, surf, and craft beer culture',
  },
  {
    id: 'california',
    name: 'Discover California',
    shortName: 'California',
    domain: 'discovercalifornia.info',
    url: 'https://discovercalifornia.info',
    flag: '\ud83c\uddfa\ud83c\uddf8',
    region: 'americas',
    status: 'coming-soon',
    tagline: 'Coast, mountains, and wine country',
  },
  {
    id: 'hawaii',
    name: 'Discover Hawaii',
    shortName: 'Hawaii',
    domain: 'discoverhawaii.info',
    url: 'https://discoverhawaii.info',
    flag: '\ud83c\uddfa\ud83c\uddf8',
    region: 'americas',
    status: 'coming-soon',
    tagline: 'Volcanoes, reefs, and aloha spirit',
  },
  {
    id: 'florida',
    name: 'Discover Florida',
    shortName: 'Florida',
    domain: 'discoverflorida.info',
    url: 'https://discoverflorida.info',
    flag: '\ud83c\uddfa\ud83c\uddf8',
    region: 'americas',
    status: 'coming-soon',
    tagline: 'Beaches, everglades, and theme parks',
  },
  {
    id: 'new-england',
    name: 'Discover New England',
    shortName: 'New England',
    domain: 'discovernewengland.info',
    url: 'https://discovernewengland.info',
    flag: '\ud83c\uddfa\ud83c\uddf8',
    region: 'americas',
    status: 'coming-soon',
    tagline: 'Fall foliage, lobster, and colonial history',
  },
  {
    id: 'alaska',
    name: 'Discover Alaska',
    shortName: 'Alaska',
    domain: 'discoveralaska.info',
    url: 'https://discoveralaska.info',
    flag: '\ud83c\uddfa\ud83c\uddf8',
    region: 'americas',
    status: 'coming-soon',
    tagline: 'Glaciers, wildlife, and the last frontier',
  },
];

export const HUB_URL = 'https://discovermore.travel';

export const NETWORK_REGIONS = [
  { id: 'south-america', label: 'South America' },
  { id: 'europe', label: 'Europe' },
  { id: 'southeast-asia', label: 'Southeast Asia' },
  { id: 'east-asia', label: 'East Asia' },
  { id: 'americas', label: 'Americas' },
] as const;

export const CURRENT_SITE_ID = 'dr';

export function getSitesByRegion(region: string): NetworkSite[] {
  return NETWORK_SITES.filter((s) => s.region === region);
}

export function getHub(): NetworkSite {
  return NETWORK_SITES.find((s) => s.region === 'hub')!;
}
