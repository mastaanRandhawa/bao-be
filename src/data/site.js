// Central site configuration — restaurant details, external links, brand assets.

export const restaurant = {
  name: 'Bao Bei',
  cnName: '宝贝小館',
  tagline: 'Chinese Brasserie',
  descriptor: 'Vancouver Chinatown',
  address: {
    street: '163 Keefer Street',
    city: 'Vancouver, BC',
    postal: 'V6A 1X3',
  },
  phone: '604 688 0876',
  phoneHref: 'tel:+16046880876',
  email: 'info@bao-bei.ca',
  blurb:
    'A modern Chinese brasserie in Vancouver’s Chinatown serving shareable small plates. Influences drawn from Taiwan and China, filtered through a global lens.',
};

const TOCK_URL = 'https://www.exploretock.com/bao-bei/';

export const externalLinks = {
  reservations: TOCK_URL,
  familyTable: TOCK_URL,
  giftCards: TOCK_URL,
  instagram: 'http://instagram.com/baobei1',
  dinnerMenuPdf: 'https://www.bao-bei.ca/s/Food-Menu-Feb2825.pdf',
  drinkMenuPdf: 'https://www.bao-bei.ca/s/DRINK-MENU_May-24th26.pdf',
  directions: 'https://maps.google.com/?q=163+Keefer+Street+Vancouver',
};

export const mapEmbedUrl =
  'https://www.google.com/maps?q=163+Keefer+Street,+Vancouver,+BC&output=embed';

// Self-hosted full-resolution originals downloaded from the current site.
export const assets = {
  logo: '/images/logo.png',
  hero: '/images/hero.jpg',
};

export const hours = [
  { day: 'Monday', time: '5:30PM – 10:00PM' },
  { day: 'Tuesday', time: '5:30PM – 10:00PM' },
  { day: 'Wednesday', time: '5:30PM – 10:00PM' },
  { day: 'Thursday', time: '5:30PM – 10:00PM' },
  { day: 'Friday', time: '5:30PM – 12:00AM' },
  { day: 'Saturday', time: '5:30PM – 12:00AM' },
  { day: 'Sunday', time: '5:30PM – 10:00PM' },
];

export const hoursNote = 'Kitchen last call is half an hour before closing time.';

// Recurring bilingual identity motif from the original site.
export const bilingualPhrase = {
  chinese: '我想你。',
  pinyin: 'Wǒ xiǎng nǐ',
  english: 'I miss you',
};
