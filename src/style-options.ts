import { BookmarkAttributesType, RatingAttributesType } from './types/full-offer';

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

export { HeaderLogoAttributes, PlaceCardAttributes, BookmarkAttributes,
  RatingAttributes, FooterLogoAttributes };
