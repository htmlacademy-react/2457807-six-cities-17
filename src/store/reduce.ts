import { createReducer} from '@reduxjs/toolkit';
import { CityKeys, ListOfferType, SortOptionsType} from '../types/offers';
import { AuthorizedUserType } from '../types/authorized-user';
import { FullOfferType } from '../types/full-offer';
import { CommentType } from '../types/comment';
import { AuthorizationStatus, DEFAULT_ACTIVE_LOCATION, SortOptions } from '../constants';
import { changeLocation, changeSorting, requireAuthorization, setDataLoadingStatus, setError, setUserEmail, setUser, loadOfferList, loadFullOffer, loadOffersNear, loadReviewList } from './action';
import { fetchOffersAction } from './api-actions';

type InitialState = {
  currentLocations: CityKeys;
  currentSort: SortOptionsType;
  offersList: ListOfferType[];
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
  error: null | string;
  isDataLoading: boolean;
  email:null | string;
  user: null | AuthorizedUserType;
  fullOffer: null | FullOfferType;
  isFullOfferLoading: boolean;
  nearByOffers: ListOfferType[];
  isNearByOffersLoading: boolean;
  reviewsList: CommentType[];
  isReviewListLoading: boolean;
}


const initialState:InitialState = {
  currentLocations: DEFAULT_ACTIVE_LOCATION,
  currentSort: SortOptions.Popular,
  offersList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error:  null,
  isDataLoading: false,
  email: null,
  user: null,
  fullOffer: null,
  isFullOfferLoading: false,
  nearByOffers: [],
  isNearByOffersLoading: false,
  reviewsList: [],
  isReviewListLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffersAction.pending, (state) => {
      state.isDataLoading = true;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offersList = action.payload;
      state.isDataLoading = false;
    })
    .addCase(fetchOffersAction.rejected, (state) => {
      state.offersList = [];
      state.isDataLoading = false;
    })
    .addCase(loadOfferList, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(loadFullOffer, (state, action) => {
      state.fullOffer = action.payload;
    })
    .addCase(loadOffersNear, (state, action) => {
      state.nearByOffers = action.payload;
    })
    .addCase(loadReviewList, (state, action) => {
      state.reviewsList = action.payload;
    })
    .addCase(changeLocation, (state, action) => {
      state.currentLocations = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

export {reducer};
