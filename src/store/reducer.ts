// import { createReducer} from '@reduxjs/toolkit';
// import { CityKeys, ListOfferType, SortOptionsType} from '../types/offers';
// import { AuthorizationStatusType, AuthorizedUserType } from '../types/authorized-user';
// import { FullOfferType } from '../types/full-offer';
// import { CommentType } from '../types/comment';
// import { AuthorizationStatus, DEFAULT_ACTIVE_LOCATION, SortOptions } from '../constants';
// import { changeLocation, changeSorting, setDataLoadingStatus, setError, setUser } from './action';
// import { checkAuthAction, fetchOfferInfoByIDAction, fetchOfferReviewListAction, fetchOffersAction, fetchOffesNearAction, logInAction, logOutAction, submitToOfferReviewAction } from './api-actions';

// type InitialState = {
//   currentLocations: CityKeys;
//   currentSort: SortOptionsType;
//   offersList: ListOfferType[];
//   isDataLoading: boolean;
//   fullOffer: null | FullOfferType;
//   isFullOfferLoading: boolean;
//   nearByOffers: ListOfferType[];
//   isNearByOffersLoading: boolean;
//   reviewsList: CommentType[];
//   isReviewsListLoading: boolean;
//   isSubmitReviewLoading: boolean;
//   authorizationStatus: AuthorizationStatusType;
//   user: null | AuthorizedUserType;
//   isError: boolean;
//   error: null | string;
//   errorMessage: string;
// }


// const initialState:InitialState = {
//   currentLocations: DEFAULT_ACTIVE_LOCATION,
//   currentSort: SortOptions.Popular,
//   offersList: [],
//   isDataLoading: false,
//   fullOffer: null,
//   isFullOfferLoading: false,
//   nearByOffers: [],
//   isNearByOffersLoading: false,
//   reviewsList: [],
//   isReviewsListLoading: false,
//   isSubmitReviewLoading: false,
//   authorizationStatus: AuthorizationStatus.Unknown,
//   error:  null,
//   user: null,
//   isError: false,
//   errorMessage: '',
// };

// const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(submitToOfferReviewAction.pending, (state) => {
//       state.isSubmitReviewLoading = true;
//     })
//     .addCase(submitToOfferReviewAction.fulfilled, (state, action) => {
//       state.reviewsList = [...state.reviewsList, action.payload];
//       state.isSubmitReviewLoading = false;
//     })
//     .addCase(submitToOfferReviewAction.rejected, (state) => {
//       state.isSubmitReviewLoading = false;
//     })
//     .addCase(fetchOfferReviewListAction.pending, (state) => {
//       state.isReviewsListLoading = true;
//     })
//     .addCase(fetchOfferReviewListAction.fulfilled, (state, action) => {
//       state.reviewsList = action.payload;
//       state.isReviewsListLoading = false;
//     })
//     .addCase(fetchOfferReviewListAction.rejected, (state) => {
//       state.reviewsList = [];
//       state.isReviewsListLoading = false;
//     })
//     .addCase(fetchOffesNearAction.pending, (state) => {
//       state.isNearByOffersLoading = true;
//     })
//     .addCase(fetchOffesNearAction.fulfilled, (state, action) => {
//       state.nearByOffers = action.payload;
//       state.isNearByOffersLoading = false;
//     })
//     .addCase(fetchOffesNearAction.rejected, (state) => {
//       state.nearByOffers = [];
//       state.isNearByOffersLoading = false;
//     })
//     .addCase(fetchOfferInfoByIDAction.pending, (state) => {
//       state.isFullOfferLoading = true;
//     })
//     .addCase(fetchOfferInfoByIDAction.fulfilled, (state, action) => {
//       state.fullOffer = action.payload;
//       state.isFullOfferLoading = false;
//     })
//     .addCase(fetchOfferInfoByIDAction.rejected, (state) => {
//       state.isFullOfferLoading = false;
//     })
//     .addCase(fetchOffersAction.pending, (state) => {
//       state.isDataLoading = true;
//     })
//     .addCase(fetchOffersAction.fulfilled, (state, action) => {
//       state.offersList = action.payload;
//       state.isDataLoading = false;
//     })
//     .addCase(fetchOffersAction.rejected, (state) => {
//       state.offersList = [];
//       state.isDataLoading = false;
//     })
//     .addCase(changeLocation, (state, action) => {
//       state.currentLocations = action.payload;
//     })
//     .addCase(changeSorting, (state, action) => {
//       state.currentSort = action.payload;
//     })
//     .addCase(checkAuthAction.fulfilled, (state, action) => {
//       state.user = action.payload;
//       state.authorizationStatus = AuthorizationStatus.Auth;
//     })
//     .addCase(checkAuthAction.rejected, (state) => {
//       state.authorizationStatus = AuthorizationStatus.NoAuth;
//     })
//     .addCase(logInAction.fulfilled, (state, action) => {
//       state.user = action.payload;
//       state.authorizationStatus = AuthorizationStatus.Auth;
//     })
//     .addCase(logInAction.rejected, (state) => {
//       state.user = null;
//       state.authorizationStatus = AuthorizationStatus.NoAuth;
//     })
//     .addCase(logOutAction.fulfilled, (state) => {
//       state.user = null;
//       state.authorizationStatus = AuthorizationStatus.NoAuth;
//     })
//     .addCase(logOutAction.rejected, (state) => {
//       state.authorizationStatus = AuthorizationStatus.Auth;
//     })
//     .addCase(setError, (state, action) => {
//       state.isError = true;
//       state.error = action.payload;
//     })
//     .addCase(setDataLoadingStatus, (state, action) => {
//       state.isDataLoading = action.payload;
//     })
//     .addCase(setUser, (state, action) => {
//       state.user = action.payload;
//     });
// });
