import { NEAR_BY_OFFERS_LIMITED } from '../constants';
import { AuthorizationStatusType } from '../types/authorized-user';
import { CommentType } from '../types/comment';
import { FullOfferType } from '../types/full-offer';
import { CityKeys, ListOfferType } from '../types/offers';
import { State } from '../types/state';

export const selectFullOffer = (state: State):FullOfferType | null => state.fullOffer;
export const selectNearByOffers = (state: State):ListOfferType[] => state.nearByOffers.slice(
  0,
  NEAR_BY_OFFERS_LIMITED
);
export const selectReviewList = (state: State):CommentType[] => state.reviewsList;
export const selectOffers = (state:State) : ListOfferType[] => state.offersList;
export const selectIsNearByOffersLoading = (state : State) : boolean => state.isNearByOffersLoading;
export const selectIsReviewsListLoading = (state:State):boolean => state.isReviewsListLoading;
export const selectIsFullOfferLoading = (state:State):boolean => state.isFullOfferLoading;
export const selectAuthorizationStatus = (state:State):AuthorizationStatusType => state.authorizationStatus;
export const selectLocation = (state:State):CityKeys => state.currentLocations;
export const selectIsSubmitReviewLoading = (state: State): boolean => state.isSubmitReviewLoading;
export const selectIsError = (state: State): boolean => state.isError;
export const selectErrorMessage = (state: State): string => state.errorMessage;


