import { CommentType } from '../types/comment';
import { FullOfferType } from '../types/full-offer';
import { ListOfferType } from '../types/offers';
import { State } from '../types/state';

export const selectFullOffer = (state: State):FullOfferType | null => state.fullOffer;
export const selectNearByOffers = (state: State):ListOfferType[] => state.nearByOffers;
export const selectReviewList = (state: State):CommentType[] => state.reviewsList;


