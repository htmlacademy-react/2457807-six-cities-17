import { BookmarkAttributesType, RatingAttributesType } from './types/offer';
import { TypesPage } from './types/list-offer';

const previewImage: string = 'https//16.design.htmlacademy.pro/static/hotel/';
const galleryImages: string = 'img/apartment-';

const HeaderLogoAttributes = {
  className: 'header__logo-link',
  width: 81,
  height: 41,
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

const PageNames:TypesPage = {
  Main: 'cities',
  Offer: 'near-places',
  Favorites: 'favorites',
  Login: 'login',
} as const;

const LOCATIONS: Array<string> = [
  'Paris', 'Cologne', 'Brussels',
  'Amsterdam', 'Hamburg', 'Dusseldorf'
] as const;

const DEFAULT_ACTIVE_LOCATION = LOCATIONS[0];


const APARTMENT_NAMES: Array<string> = [
  'room',	 'house',
  'hotel',	 'apartment',
] as const;

const PLACES_OPTIONS: Array<string> = [
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

const TITLE: Array<string> = [
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

const coordinates = [[ 48.85661, 2.351499],	[ 48.868610000000004, 2.342499],	[ 48.858610000000006, 2.330499],
  [ 48.834610000000005, 2.335499],	[ 48.85761, 2.358499],	[ 48.87561, 2.375499],	[ 48.87961000000001, 2.353499],
  [ 48.837610000000005, 2.364499],	[ 48.84761, 2.3454990000000002],	[ 48.862610000000004, 2.356499],	[ 48.83861, 2.369499],
  [ 48.861610000000006, 2.350499],	[ 48.87861, 2.340499],	[ 48.877610000000004, 2.357499],	[ 48.83961, 2.333499],
  [ 48.865610000000004, 2.374499],	[ 48.846610000000005, 2.338499],	[ 48.843610000000005, 6.959974],
  [ 48.84461, 6.961974],	[ 50.938361, 6.937974],	[ 50.950361, 6.943974],	[ 50.932361, 6.9799739999999995],
  [ 50.934361, 6.967974],	[ 50.947361, 6.956974],	[ 50.960361, 6.944974],	[ 50.941361, 6.976974],	[ 50.916361, 6.9509739999999995],
  [ 50.949361, 6.969974],	[ 50.913361, 6.978974],	[ 50.930361, 6.960974],	[ 50.918461, 6.982974],	[ 50.957361, 6.962974],
  [ 50.951361, 6.977974],	[ 50.959361, 6.935974],	[ 50.954361, 4.351697],	[ 50.945361, 4.364697],	[ 50.917361, 4.371696999999999],
  [ 50.846557, 4.336697],	[ 50.854557, 4.374696999999999],	[ 50.867557, 4.339697],	[ 50.827557, 4.3376969999999995],
  [ 50.833557, 4.362697],	[ 50.837557, 4.354697],	[ 50.849557, 4.346697],	[ 50.852557, 4.332697],	[ 50.828556999999996, 4.376697],
  [ 50.835556999999994, 4.375697],	[ 50.839557, 4.3536969999999995],	[ 50.844556999999995, 4.347697],	[ 50.865556999999995, 4.357697],
  [ 50.869557, 4.363696999999999],	[ 50.860557, 4.897976],	[ 50.862556999999995, 4.911976],	[ 50.842557, 4.902976],
  [ 50.822556999999996, 4.9099759999999995],	[ 52.37454, 4.881976],	[ 52.36554, 4.883976],	[ 52.385540000000006, 4.9179759999999995],
  [ 52.397540000000006, 4.894976],	[ 52.367540000000005, 4.887976],	[ 52.361540000000005, 4.908976],	[ 52.35754, 4.889976],
  [ 52.37854, 4.9019759999999994],	[ 52.36854, 4.899976],	[ 52.370540000000005, 4.914976],	[ 52.389540000000004, 4.886976],
  [ 52.35054, 10.000654],	[ 52.37154, 10.018654000000002],	[ 52.364540000000005, 9.976654000000002],	[ 52.36354, 10.019654000000001],
  [ 52.388540000000006, 9.975654],	[ 52.36954, 9.980654000000001],	[ 52.37554, 10.022654000000001],	[ 53.550341, 9.978654],
  [ 53.528341000000005, 10.001654],	[ 53.538341, 10.009654000000001],	[ 53.563341, 9.994654],	[ 53.529341, 9.982654],
  [ 53.565341, 10.025654000000001],	[ 53.546341000000005, 9.998654],	[ 53.565341000000004, 9.999654000000001],
  [ 53.570341000000006, 6.776314],	[ 53.558341000000006, 6.784314],	[ 53.573341000000006, 6.798314],
  [ 53.540341000000005, 6.756314000000001],	[ 53.555341000000006, 6.7773140000000005],	[ 53.534341000000005, 6.7693140000000005],
  [ 53.574341000000004, 6.782314],	[ 51.225402, 6.800314],	[ 51.236402000000005, 6.779314],	[ 51.210402, 6.797314],
  [ 51.211402, 6.786314],	[ 51.228402, 6.758314],	[ 51.204402, 6.7613140000000005],	[ 51.217402, 6.763314],
  [ 51.241402, 6.7853140000000005],	[ 51.235402, 6.791314],	[ 51.237402, 6.764314000000001],
];

export {LOCATIONS, APARTMENT_NAMES, PLACES_OPTIONS,
  CommentLengthLimit, TITLE, previewImage, galleryImages,
  coordinates, HeaderLogoAttributes,
  DEFAULT_ACTIVE_LOCATION , DEFAULT_PLACES_OPTIONS, PageNames,
  SortOptions, PlaceCardAttributes, BookmarkAttributes,
  RatingAttributes};
