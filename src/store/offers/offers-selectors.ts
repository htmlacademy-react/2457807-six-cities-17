import { CommentType } from '../../types/comment';
import { FullOfferType } from '../../types/full-offer';
import { ListOfferType } from '../../types/offers';
import { State } from '../../types/state';
import { NameSpace } from '../../constants';

export const selectFavorites = (state: State):ListOfferType[] | null => state[NameSpace.Offers].favorites;
export const selectFullOffer = (state: State):FullOfferType | null => state[NameSpace.Offers].fullOffer;
export const selectNearByOffers = (state: State):ListOfferType[] => state[NameSpace.Offers].nearByOffers;
export const selectReviewList = (state: State):CommentType[] => state[NameSpace.Offers].reviewsList;
export const selectOffers = (state:State) : ListOfferType[] => state[NameSpace.Offers].offersList;
export const selectIsNearByOffersLoading = (state : State) : boolean => state[NameSpace.Offers].isNearByOffersLoading;
export const selectIsReviewsListLoading = (state:State):boolean => state[NameSpace.Offers].isReviewsListLoading;
export const selectIsFullOfferLoading = (state:State):boolean => state[NameSpace.Offers].isFullOfferLoading;
export const selectIsDataLoading = (state:State):boolean => state[NameSpace.Offers].isDataLoading;
export const selectIsSubmitReviewLoading = (state: State): boolean => state[NameSpace.Offers].isSubmitReviewLoading;

