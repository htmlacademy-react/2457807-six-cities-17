import { BookmarkAttributesType, RatingAttributesType, UserProfileType } from './types/full-offer';

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
  Size: [28, 40] as [number, number],
  Anchor: [14, 40] as [number, number],
} as const;

const HeaderLogoAttributes = {
  className: 'header__logo',
  width: 81,
  height: 41,
} as const;

const FooterLogoAttributes = {
  className: 'footer__logo',
  width: 64,
  height: 33,
} as const;

const PlaceCardAttributes = {
  'cities': {
    width: 260,
    height: 200,
  },
  'near-places': {
    width: 260,
    height: 200,
  },
  'favorites': {
    width: 150,
    height: 110,
  },
} as const;

const BookmarkAttributes:BookmarkAttributesType = {
  'place-card': {
    width: 18,
    height: 19,
  },
  'offer': {
    width: 31,
    height: 33,
  },
} as const;

const RatingAttributes: RatingAttributesType = {
  'offer': {
    style: {
      width: '80%'
    },
    ratingVisibility: true
  },
  'reviews': {
    style: {
      width: '80%'
    },
    ratingVisibility: false
  },
  'place-card': {
    style: {
      width: '100%'
    },
    ratingVisibility: false
  }
} as const;

const UserProfileAttributes:UserProfileType = {
  'host': {
    className: 'host',
    width: 74,
    height: 74
  },
  'reviews': {
    className: 'reviews',
    width: 54,
    height: 54
  }
} as const;

export { HeaderLogoAttributes, PlaceCardAttributes, BookmarkAttributes,
  RatingAttributes, FooterLogoAttributes, UserProfileAttributes, Pin, Layer,
  MapSize };
