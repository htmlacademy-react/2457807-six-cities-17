import { TypesPage } from './types/offers';

const TIMEOUT_SHOW_ERROR = 2000;
const NEAR_BY_OFFERS_LIMITED = 3;

const starsTitle = [
  'terrible','badly', 'not bad', 'good', 'perfect'
] as const;

const AppRoute = {
  Root: '/',
  Login: '/login',
  Logout: '/logout',
  Favorites: '/favorites',
  Offers: 'offers',
  Offer: '/offers/:offerId',
  NearbyOffers: '/offers/:offerId/nearby',
  Comments:'/comments/:offerId',
  NotFound: '*',
} as const;

const PageNames:TypesPage = {
  Main: 'cities',
  Offer: 'offer',
  Favorites: 'favorites',
  Login: 'login',
  NearPlaces: 'near-places',
} as const;

const AuthorizationStatus = {
  Auth: 'auth',
  NoAuth: 'no-auth',
  Unknown: 'unknown',
} as const;

const LOCATIONS = [
  'Paris', 'Cologne', 'Brussels',
  'Amsterdam', 'Hamburg', 'Dusseldorf'
] as const;

const DEFAULT_ACTIVE_LOCATION = LOCATIONS[0];


const APARTMENT_NAMES = [
  'room',	 'house',
  'hotel',	 'apartment',
] as const;

const PLACES_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

const DEFAULT_PLACES_OPTIONS = PLACES_OPTIONS[0];

const SortOptions = {
  Popular: 'Popular',
  LowToHigh:'Price: low to high',
  HighToLow:'Price: high to low',
  TopRated:'Top rated first',
} as const;

const CommentLengthLimit = {
  MIN: 50,
  MAX: 300
} as const;


const DateFormat = {
  DATE_FORMATE: 'MMMM YYYY',
  TIME_FORMAT: 'HH:mm',
  DATE_FORMATE_FORM: 'DD/MM/YY HH:mm',
  DATE_FORMATE_TRIP_INFO: 'DD MMM YYYY',
};

const DATE_NOW = new Date().toISOString();

export {LOCATIONS, APARTMENT_NAMES, PLACES_OPTIONS,
  CommentLengthLimit, DEFAULT_ACTIVE_LOCATION , DEFAULT_PLACES_OPTIONS, PageNames,
  SortOptions, AppRoute, AuthorizationStatus, starsTitle,
  DateFormat, DATE_NOW, TIMEOUT_SHOW_ERROR, NEAR_BY_OFFERS_LIMITED};
