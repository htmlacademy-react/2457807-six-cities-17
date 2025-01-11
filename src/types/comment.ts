import { UserType } from './authorized-user';

export type CommentType = {
    'id': string;
    'comment' : string;
    'date': string;
    'rating' : number;
    'user' : UserType;
  };

export type OfferReviewType = {
    offerId: string;
    review: CommentType;
  };

