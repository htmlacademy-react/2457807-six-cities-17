import { LOCATIONS} from '../constants';

declare global {
  interface ObjectConstructor {
    groupBy<T, K extends PropertyKey>(
      array: T[],
      keyGetter: (item: T) => K
    ): Record<K, T[]>;
  }
}

type OfferType = 'room' | 'house' | 'hotel' | 'apartment';

type LocationType = {
    'latitude': number;
    'longitude': number;
    'zoom': number;
  };

  type CitiesType = typeof LOCATIONS;
  type CityKeys = CitiesType[number];

  type SortOptionsType = 'Popular' | 'Price: low to high' | 'Price: high to low' | 'Top rated first';

  type CityType = {
    'name': string;
    'location': LocationType;
  };

  type TypesPage = {
    'Main': string;
    'Offer': string;
    'Favorites': string;
    'Login': string;
     'NearPlaces': string;
  };

  type ListOfferType = {
    'id': string;
    'title': string;
    'type': string;
    'price': number;
    'city':CityType;
    'location': LocationType;
    'isFavorite': boolean;
    'isPremium': boolean;
    'rating': number;
    'previewImage'?: string;
  };

export type { ListOfferType, CityType, CitiesType, CityKeys,
  LocationType, TypesPage, OfferType, SortOptionsType };


