import { getRandomArrayElement, getRandomInteger} from '../utils';
import { ListOffer } from '../types/list-offer';
import { CITY_NAMES, APARTMENT_TYPES, TITLE, previewImage, coordinates} from '../constans';
const OFFERS_NUMBER = 10;

const getRandomListOffer = () : ListOffer => ({
  id: crypto.randomUUID(),
  title: getRandomArrayElement(TITLE),
  type: getRandomArrayElement(APARTMENT_TYPES),
  price : getRandomInteger(1000, 5000),
  city: {
    name : getRandomArrayElement(CITY_NAMES),
    location: {
      latitude : getRandomArrayElement(coordinates)[0],
      longitude : getRandomArrayElement(coordinates)[1],
      zoom : getRandomInteger(10, 18)
    }
  },
  location: {
    latitude: getRandomArrayElement(coordinates)[0],
    longitude: getRandomArrayElement(coordinates)[1],
    zoom: getRandomInteger(5, 18),
  },
  isFavorite: Boolean(getRandomInteger(0, 1)),
  isPremium: Boolean(getRandomInteger(0, 1)),
  rating: Number((getRandomInteger(0, 50) * 0.1).toFixed(1)),
  previewImage: `${previewImage + String(getRandomInteger(1, 20))}.jpg`
}
);

const offers = Array.from({length: OFFERS_NUMBER}, getRandomListOffer);
export {offers};
