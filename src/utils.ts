import { SortOptions } from './constants';
import { ListOfferType, SortOptionsType } from './types/offers';
import { FullOfferType } from './types/full-offer';

const adaptFullOfferToOfferList = (fullOffer:FullOfferType | null):ListOfferType[] | [] => {
  if (fullOffer === null) {
    return [];
  }
  const {id, title, type, price, city, location, isFavorite,
    isPremium, rating, previewImage} = fullOffer;
  return [{
    id, title, type, price, city, location,
    isFavorite, isPremium, rating, previewImage,
  }];
};


const sortBy = {
  [SortOptions.Popular] : (offers: ListOfferType[]) =>[... offers],
  [SortOptions.LowToHigh] : (offers: ListOfferType[]) =>[... offers].sort((leftOffers, rightOffers) => leftOffers.price - rightOffers.price),
  [SortOptions.HighToLow] : (offers: ListOfferType[]) =>[... offers].sort((leftOffers, rightOffers) => rightOffers.price - leftOffers.price),
  [SortOptions.TopRated] : (offers: ListOfferType[]) =>[... offers].sort((leftOffers, rightOffers) => rightOffers.rating - leftOffers.rating),
};
const sortOffers = (offers:ListOfferType[], sortOptionsType:SortOptionsType) => sortBy[sortOptionsType](offers);

export { sortOffers, adaptFullOfferToOfferList};
