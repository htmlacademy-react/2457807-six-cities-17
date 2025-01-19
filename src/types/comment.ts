import { UserType } from './authorized-user';

export type CommentType = {
    'id': string;
    'comment' : string;
    'date': string;
    'rating' : number | null;
    'user' : UserType;
  };

export type OfferReviewType = {
    offerId: string | null;
    rating: number | null;
    comment: string;
  };

