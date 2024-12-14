
import { getRandomInteger} from '../utils';
import { FullOfferType } from '../types/full-offer';
import { offers } from './offers';

const fullOffer:FullOfferType = {
  id: offers[0].id,
  title: 'Tile House',
  description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
  type: 'apartment',
  price: 209,
  images: [
    'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    'https://16.design.htmlacademy.pro/static/hotel/10.jpg'
  ],
  city: {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  location: {
    latitude: 48.868610000000004,
    longitude: 2.342499,
    zoom: 16
  },
  goods: [
    'Cable TV',
    'Coffee machine',
    'Fridge',
    'Air conditioning',
    'Laptop friendly workspace',
    'Heating',
    'Towels',
    'Washing machine',
    'Wi-Fi',
    'Kitchen',
    'Washer',
    'Breakfast',
    'Dishwasher'
  ],
  host: {
    isPro: Boolean(getRandomInteger(0, 1)),
    userName: 'Измученный Антон',
    avatarUrl: 'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
  },
  isPremium: Boolean(getRandomInteger(0, 1)),
  isFavorite: Boolean(getRandomInteger(0, 1)),
  rating: Number((getRandomInteger(0, 50) * 0.1).toFixed(1)),
  bedrooms: getRandomInteger(1, 5),
  maxAdults: getRandomInteger(1, 10)
};

export {fullOffer};

