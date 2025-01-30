import { BookmarkAttributeType, RatingAttributeType, UserProfileType } from './types/full-offer';

const MapSize = {
  MainPage: '100%',
  Offer: '580px',
} as const;

const Layer = {
  Url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
} as const;

const Pin = {
  DefaultUrl: '/img/pin.svg',
  CurrentUrl: '/img/pin-active.svg',
  Size: [37, 53] as [number, number],
  Anchor: [13, 39] as [number, number],
} as const;

const HeaderLogoAttribute = {
  ClassName: 'header__logo',
  Width: 81,
  Height: 41,
} as const;

const FooterLogoAttribute = {
  ClassName: 'footer__logo',
  Width: 64,
  Height: 33,
} as const;

const PlaceCardAttribute = {
  'cities': {
    Width: 260,
    Height: 200,
  },
  'near-places': {
    Width: 260,
    Height: 200,
  },
  'favorites': {
    Width: 150,
    Height: 110,
  },
} as const;

const BookmarkAttribute:BookmarkAttributeType = {
  'place-card': {
    Width: 18,
    Height: 19,
  },
  'offer': {
    Width: 31,
    Height: 33,
  },
} as const;

const RatingAttribute: RatingAttributeType = {
  'offer': {
    Style: {
      Width: '80%'
    },
    RatingVisibility: true
  },
  'reviews': {
    Style: {
      Width: '80%'
    },
    RatingVisibility: false
  },
  'place-card': {
    Style: {
      Width: '100%'
    },
    RatingVisibility: false
  }
} as const;

const UserProfileAttribute:UserProfileType = {
  'host': {
    ClassName: 'host',
    Width: 74,
    Height: 74
  },
  'reviews': {
    ClassName: 'reviews',
    Width: 54,
    Height: 54
  }
} as const;

export { HeaderLogoAttribute as HeaderLogoAttributes, PlaceCardAttribute as PlaceCardAttributes, BookmarkAttribute as BookmarkAttributes,
  RatingAttribute as RatingAttributes, FooterLogoAttribute as FooterLogoAttributes, UserProfileAttribute as UserProfileAttributes, Pin, Layer,
  MapSize };
