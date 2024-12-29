import { getRandomArrayElement, getRandomInteger} from '../utils';
import { ListOfferType } from '../types/offers';
import { LOCATIONS, APARTMENT_NAMES, TITLE, CityCoordinate} from '../constants';
import { APARTMENTS_IMAGE_PLACE_CARD } from '../constants';

const OFFERS_NUMBER = 70;

const getRandomListOffer = () : ListOfferType => {
  const cityName = getRandomArrayElement([...LOCATIONS]);
  const cityCoordinate = getRandomArrayElement(CityCoordinate[cityName]);
  return{
    id: crypto.randomUUID(),
    title: getRandomArrayElement([...TITLE]),
    type: getRandomArrayElement([...APARTMENT_NAMES]),
    price : getRandomInteger(1000, 5000),
    city: {
      name : cityName,
      location: {
        latitude : CityCoordinate[cityName][0][0],
        longitude : CityCoordinate[cityName][0][1],
        zoom : 13
      }
    },
    location: {
      latitude: cityCoordinate[0],
      longitude: cityCoordinate[1],
      zoom:16,
    },
    isFavorite: Boolean(getRandomInteger(0, 1)),
    isPremium: Boolean(getRandomInteger(0, 1)),
    rating: Number((getRandomInteger(0, 50) * 0.1).toFixed(1)),
    previewImage: getRandomArrayElement(APARTMENTS_IMAGE_PLACE_CARD),
  };
};

const offers = Array.from({length: OFFERS_NUMBER}, getRandomListOffer);
export {offers};
