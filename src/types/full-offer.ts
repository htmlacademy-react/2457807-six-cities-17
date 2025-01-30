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
    [key: string]: {Width: number; Height: number};
  }

  type UserProfileType = {
    [key: string]: {ClassName: string; Width: number; Height: number};
  }

  type StyleType ={
    Width: string;
  }

  type RatingAttributesType = {
    [key: string]: {Style: StyleType; RatingVisibility: boolean};
  }

export type {FullOfferType, BookmarkAttributesType,
  RatingAttributesType, UserProfileType};
