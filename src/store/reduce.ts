import { createReducer} from '@reduxjs/toolkit';
import { CityKeys, ListOfferType, SortOptionsType} from '../types/offers';
import { AuthorizedUserType } from '../types/authorized-user';
import { changeLocation, changeSorting, requireAuthorization, setDataLoadingStatus, setError, setUserEmail, setUser, loadOfferList, loadFullOffer, loadOffersNear, loadReviewList } from './action';
import { AuthorizationStatus, DEFAULT_ACTIVE_LOCATION, SortOptions } from '../constants';
import { FullOfferType } from '../types/full-offer';
import { CommentType } from '../types/comment';

const initialState = {
  currentLocations: DEFAULT_ACTIVE_LOCATION as CityKeys,
  currentSort: SortOptions.Popular as SortOptionsType,
  offersList: [] as ListOfferType[],
  authorizationStatus: AuthorizationStatus.Unknown as typeof AuthorizationStatus[keyof typeof AuthorizationStatus],
  error:  null as null | string,
  isDataLoading: false as boolean,
  email: null as null | string,
  user: null as null | AuthorizedUserType,
  fullOffer: null as null | FullOfferType,
  nearByOffers: [] as ListOfferType[],
  reviewsList: [] as CommentType[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
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
    })
    // .addCase(fetchOffersAction.pending, (state, action) => {
    //   // state.offersList = action.payload;
    //   state.isDataLoading = true;
    // })
    .addCase(loadOfferList, (state, action) => {
      state.offersList = action.payload;
    });
});

export {reducer};
