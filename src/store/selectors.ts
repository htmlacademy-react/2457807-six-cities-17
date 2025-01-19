import { AuthorizationStatusType, AuthorizedUserType } from '../types/authorized-user';
import { CommentType } from '../types/comment';
import { FullOfferType } from '../types/full-offer';
import { CityKeys, ListOfferType, SortOptionsType } from '../types/offers';
import { State } from '../types/state';
import { NameSpace } from '../constants';

export const selectFavorites = (state: State):ListOfferType[] | null => state[NameSpace.Offers].favorites;
export const selectFullOffer = (state: State):FullOfferType | null => state[NameSpace.Offers].fullOffer;
export const selectNearByOffers = (state: State):ListOfferType[] => state[NameSpace.Offers].nearByOffers;
export const selectReviewList = (state: State):CommentType[] => state[NameSpace.Offers].reviewsList;
export const selectOffers = (state:State) : ListOfferType[] => state[NameSpace.Offers].offersList;
export const selectIsNearByOffersLoading = (state : State) : boolean => state[NameSpace.Offers].isNearByOffersLoading;
export const selectIsReviewsListLoading = (state:State):boolean => state[NameSpace.Offers].isReviewsListLoading;
export const selectIsFullOfferLoading = (state:State):boolean => state[NameSpace.Offers].isFullOfferLoading;
export const selectIsDataLoading = (state:State):boolean => state[NameSpace.Offers].isDataLoading;
export const selectAuthorizationStatus = (state:State):AuthorizationStatusType => state[NameSpace.User].authorizationStatus;
export const selectLocation = (state:State):CityKeys => state[NameSpace.ActiveMain].currentLocations;
export const selectIsSubmitReviewLoading = (state: State): boolean => state[NameSpace.Offers].isSubmitReviewLoading;
export const selectIsError = (state: State): boolean => state[NameSpace.User].isError;
export const selectError = (state: State): null | string => state[NameSpace.User].error;
export const selectErrorMessage = (state: State): string => state[NameSpace.User].errorMessage;
export const selectUser = (state: State): AuthorizedUserType | null => state[NameSpace.User].user;
export const selectCurrentSort = (state: State): SortOptionsType => state[NameSpace.ActiveMain].currentSort;

