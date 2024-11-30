import { ListOfferType } from './list-offer';
import { UserType } from './authorized-user';

type OfferType = {
    'listOffer' : ListOfferType;
    'description': string;
'bedrooms': number;
'goods': string[];
'host': UserType;
'images': string[];
'maxAdults': number;
  };

export type {OfferType};
