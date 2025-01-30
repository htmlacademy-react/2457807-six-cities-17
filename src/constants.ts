import { TypesPage } from './types/offers';

const TIMEOUT_SHOW_ERROR = 3000;
const NEAR_BY_OFFERS_LIMITED = 3;
const PERCENTAGE_FILLING_ONE_STAR = 20;
const NUMBER_IMAGES_IN_GALLERY = 6;
const NUMBER_OF_VISIBLE_COMMENTS = 10;
const DATE_FORMATE = 'MMMM YYYY';

const MEANING_STARS = [
  'terribly','badly', 'not bad', 'good', 'perfect'
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

const PageName:TypesPage = {
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

const SortOption = {
  Popular: 'Popular',
  LowToHigh:'Price: low to high',
  HighToLow:'Price: high to low',
  TopRated:'Top rated first',
} as const;

const CommentLengthLimit = {
  Min: 50,
  Max: 300
} as const;

const Status = {
  Idle: 'IDLE',
  Loading: 'LOADING',
  Success: 'SUCCESS',
  Error: 'ERROR'
} as const;

export {LOCATIONS, PLACES_OPTIONS as PLACES_OPTIONS,
  CommentLengthLimit, DEFAULT_ACTIVE_LOCATION , PageName as PageNames,
  SortOption as SortOptions, AppRoute, APIRoute, NameSpace, AuthorizationStatus, MEANING_STARS as starsTitle,
  DATE_FORMATE, TIMEOUT_SHOW_ERROR, NEAR_BY_OFFERS_LIMITED,
  PERCENTAGE_FILLING_ONE_STAR, Status, NUMBER_IMAGES_IN_GALLERY, NUMBER_OF_VISIBLE_COMMENTS};
