import { ListOffer } from './list-offer';
import { User } from './authorized-user';

type Offer = {
    'listOffer' : ListOffer;
    'description': string;
'bedrooms': number;
'goods': string[];
'host': User;
'images': string[];
'maxAdults': number;
  };

export type {Offer};
