import { TypesPage } from './types/offers';

const TIMEOUT_SHOW_ERROR = 3000;
const NEAR_BY_OFFERS_LIMITED = 3;
const PERCENTAGE_FILLING_ONE_STAR = 20;
const DATE_FORMATE = 'MMMM YYYY';

const starsTitle = [
  'terrible','badly', 'not bad', 'good', 'perfect'
] as const;

const AppRoute = {
  Root: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:offerId',
  NotFound: '*',
} as const;

const APIRoute = {
  Offers: 'offers',
  Offer: '/offers/:offerId',
  NearbyOffers: '/offers/:offerId/nearby',
  Comments:'/comments/:offerId',
  Login: '/login',
  Logout: '/logout',
  FavoritesLoad: '/favorite',
  Favorite: '/favorite/:offerId/:status',
} as const;

const PageNames:TypesPage = {
  Main: 'cities',
  Offer: 'offer',
  Favorites: 'favorites',
  Login: 'login',
  NearPlaces: 'near-places',
} as const;

const NameSpace = {
  Offers: 'offers',
  User: 'user',
  ActiveMain:'activeMain',
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

const PLACES_OPTIONS = [
  'Popular',
  'Price: low to high',
  'Price: high to low',
  'Top rated first',
] as const;

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

export enum Status {
  Idle = 'IDLE',
  Loading = 'LOADING',
  Success = 'SUCCESS',
  Error = 'ERROR'
}

export {LOCATIONS, PLACES_OPTIONS,
  CommentLengthLimit, DEFAULT_ACTIVE_LOCATION , PageNames,
  SortOptions, AppRoute, APIRoute, NameSpace, AuthorizationStatus, starsTitle,
  DATE_FORMATE, TIMEOUT_SHOW_ERROR, NEAR_BY_OFFERS_LIMITED,
  PERCENTAGE_FILLING_ONE_STAR};
