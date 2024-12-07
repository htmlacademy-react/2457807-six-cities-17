import { getRandomArrayElement, getRandomInteger} from '../utils';
import { ListOfferType } from '../types/list-offer';
import { LOCATIONS, APARTMENT_NAMES, TITLE, coordinates} from '../constans';
import { APARTMENTS_IMAGE_PLACE_CARD } from '../constans';

const OFFERS_NUMBER = 20;

const getRandomListOffer = () : ListOfferType => ({
  id: crypto.randomUUID(),
  title: getRandomArrayElement(TITLE),
  type: getRandomArrayElement([...APARTMENT_NAMES]),
  price : getRandomInteger(1000, 5000),
  city: {
    name : getRandomArrayElement([...LOCATIONS]),
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
  previewImage: getRandomArrayElement(APARTMENTS_IMAGE_PLACE_CARD),
}
);

const offers = Array.from({length: OFFERS_NUMBER}, getRandomListOffer);
export {offers};
