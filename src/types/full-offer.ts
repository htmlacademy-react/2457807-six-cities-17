import { ListOfferType } from './offers';
import { UserType } from './authorized-user';

type FullOfferType = ListOfferType&{
'description': string;
'bedrooms': number;
'goods': string[];
'host': UserType;
'images': string[];
'maxAdults': number;
  };

  type BookmarkAttributesType = {
    [key: string]: {width: number; height: number};
  }
  type StyleType ={
    width: string;
  }

  type RatingAttributesType = {
    [key: string]: {style: StyleType; ratingVisibility: boolean};
  }

export type {FullOfferType, BookmarkAttributesType, RatingAttributesType};
