import { TypesPage } from './types/offers';

const previewImage: string = 'https//16.design.htmlacademy.pro/static/hotel/';
const galleryImages: string = 'img/apartment-';
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

const TITLE = [
  'House in countryside',
  'Nice, cozy, warm big bed apartment',
  'Wood and stone place',
  'The house among olive ',
  'Loft Studio in the Central Area',
  'Perfectly located Castro',
  'Waterfront with extraordinary view',
  'Canal View Prinsengracht',
  'The Pondhouse - A Magical Place',
  'Penthouse, 4-5 rooms + 5 balconies',
  'Amazing and Extremely Central Flat',
  'Beautiful & luxurious apartment at great location',
  'The Joshua Tree House',
] as const;

const APARTMENTS_IMAGE_PLACE_CARD = ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'];

const CityCoordinate = {
  Paris: [[ 48.85661, 2.351499], [48.868610000000004,2.342499] ,
    [48.858610000000006,2.330499], [48.834610000000005, 2.335499],
    [48.85861,2.330499], [48.83461,2.335499],
    [48.85761 ,2.358499 ], [48.87561 ,2.375499 ],
    [48.87961 ,2.353499], [48.83461 ,2.364499 ]],
  Cologne : [[50.938361 ,6.959974 ], [50.950361 ,6.961974 ] ,
    [50.932361 ,6.937974 ], [50.934361 , 6.943974 ],
    [50.947361 ,6.979974 ], [50.960361 ,6.967974 ],
    [50.941361 ,6.956974 ] , [50.916361 ,6.944974 ],
    [50.949361,6.976974 ], [50.938361 ,6.959974 ]],
  Brussels: [[50.846557 ,4.351697 ], [50.844557 ,4.346697 ] ,
    [50.865557 ,4.371697 ], [50.869557 ,4.332697 ],
    [50.860557 ,4.376697 ], [50.862557 ,4.375697 ],
    [50.842557 ,4.353697 ] , [50.822557 ,4.347697 ],
    [50.867557 ,4.357697 ], [50.842557 ,4.363697 ]],
  Amsterdam:[[52.37454 ,4.897976 ], [52.36754 ,4.883976 ] ,
    [52.36154 ,4.883976 ], [52.35754 ,4.917976 ],
    [52.37854 ,4.894976 ], [52.36854 ,4.887976 ],
    [52.37054 ,4.909976 ] , [52.38954 ,4.883976 ],
    [52.35054 ,4.908976 ], [52.37154 ,4.889976 ]],
  Hamburg: [[53.550341 ,10.000654 ], [53.538341 ,9.976654 ] ,
    [53.563341 ,10.019654 ], [53.529341 ,9.975654 ],
    [53.565341 ,9.980654 ], [53.546341 ,10.022654 ],
    [53.565341 ,9.978654 ] , [53.570341 ,9.975654 ],
    [53.558341 ,10.001654 ], [53.573341 ,10.009654 ]],
  Dusseldorf:[[51.225402 ,6.776314 ], [51.236402 ,6.784314 ] ,
    [51.210402 ,6.798314 ], [51.211402 ,6.756314 ],
    [51.228402 ,6.784314 ], [51.228402 ,6.784314 ],
    [51.217402 ,6.769314 ] , [51.241402 ,6.782314 ],
    [51.235402 ,6.800314 ], [51.237402 ,6.779314 ]],};

const DateFormat = {
  DATE_FORMATE: 'MMMM YYYY',
  TIME_FORMAT: 'HH:mm',
  DATE_FORMATE_FORM: 'DD/MM/YY HH:mm',
  DATE_FORMATE_TRIP_INFO: 'DD MMM YYYY',
};

const DATE_NOW = new Date().toISOString();

export {LOCATIONS, APARTMENT_NAMES, PLACES_OPTIONS,
  CommentLengthLimit, TITLE, previewImage, galleryImages,
  DEFAULT_ACTIVE_LOCATION , DEFAULT_PLACES_OPTIONS, PageNames,
  SortOptions, APARTMENTS_IMAGE_PLACE_CARD,
  AppRoute, AuthorizationStatus, starsTitle,
  DateFormat, DATE_NOW, CityCoordinate, TIMEOUT_SHOW_ERROR, NEAR_BY_OFFERS_LIMITED};
