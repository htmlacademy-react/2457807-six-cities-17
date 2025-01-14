import { toast } from 'react-toastify';
import { SortOptions } from './constants';
import { ListOfferType, SortOptionsType } from './types/offers';

const notify = (message: string) => toast.warn(message);

const getRandomArrayElement = <T>(items : T[]) : T => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (startNumber : number, endNumber : number) : number=> {
  const lower = Math.ceil(Math.min(startNumber, endNumber));
  const upper = Math.floor(Math.max(startNumber, endNumber));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
const getRandomDate = (startDate : Date, endDate : Date) : Date => new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));

const sortBy = {
  [SortOptions.Popular] : (offers: ListOfferType[]) =>[... offers],
  [SortOptions.LowToHigh] : (offers: ListOfferType[]) =>[... offers].sort((leftOffers, rightOffers) => leftOffers.price - rightOffers.price),
  [SortOptions.HighToLow] : (offers: ListOfferType[]) =>[... offers].sort((leftOffers, rightOffers) => rightOffers.price - leftOffers.price),
  [SortOptions.TopRated] : (offers: ListOfferType[]) =>[... offers].sort((leftOffers, rightOffers) => rightOffers.rating - leftOffers.rating),
};
const sortOffers = (offers:ListOfferType[], sortOptionsType:SortOptionsType) => sortBy[sortOptionsType](offers);

export {getRandomArrayElement, getRandomInteger, getRandomDate, sortOffers, notify};
