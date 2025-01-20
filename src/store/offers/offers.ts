import { createSlice } from '@reduxjs/toolkit';
import { ListOfferType} from '../../types/offers';
import { FullOfferType } from '../../types/full-offer';
import { CommentType } from '../../types/comment';
import { setDataLoadingStatus } from '../action';
import { fetchFavoriteOffersAction, fetchOfferInfoByIDAction, fetchOfferReviewListAction, fetchOffersAction,
  fetchOffesNearAction, submitToOfferReviewAction, toggleFavorite } from '../api-actions';
import { NameSpace } from '../../constants';
import { toast } from 'react-toastify';


type OffersState = {
  offersList: ListOfferType[];
  isDataLoading: boolean;
  fullOffer: null | FullOfferType;
  isFullOfferLoading: boolean;
  nearByOffers: ListOfferType[];
  isNearByOffersLoading: boolean;
  reviewsList: CommentType[];
  isReviewsListLoading: boolean;
  isSubmitReviewLoading: boolean;
  favorites: ListOfferType[];
  isFavoriteLoading: boolean;
}

const initialState:OffersState = {
  offersList: [],
  isDataLoading: false,
  fullOffer: null,
  isFullOfferLoading: false,
  nearByOffers: [],
  isNearByOffersLoading: false,
  reviewsList: [],
  isReviewsListLoading: false,
  isSubmitReviewLoading: false,
  favorites: [],
  isFavoriteLoading: false,
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoriteOffersAction.pending, (state) => {
        state.isFavoriteLoading = true;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoriteLoading = false;
      })
      .addCase(fetchFavoriteOffersAction.rejected, (state) => {
        state.isFavoriteLoading = false;
        state.favorites = [];
        toast.warn('Error while loading offers');
      })
      .addCase(toggleFavorite.pending, (state) => {
        state.isFavoriteLoading = true;
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((item) => item.id !== action.payload.id);
        }
      })
      .addCase(toggleFavorite.rejected, (state) => {
        state.isFavoriteLoading = false;
      })
      .addCase(submitToOfferReviewAction.pending, (state) => {
        state.isSubmitReviewLoading = true;
      })
      .addCase(submitToOfferReviewAction.fulfilled, (state, action) => {
        state.reviewsList = [...state.reviewsList, action.payload];
        state.isSubmitReviewLoading = false;
      })
      .addCase(submitToOfferReviewAction.rejected, (state) => {
        state.isSubmitReviewLoading = false;
      })
      .addCase(fetchOfferReviewListAction.pending, (state) => {
        state.isReviewsListLoading = true;
      })
      .addCase(fetchOfferReviewListAction.fulfilled, (state, action) => {
        state.reviewsList = action.payload;
        state.isReviewsListLoading = false;
      })
      .addCase(fetchOfferReviewListAction.rejected, (state) => {
        state.reviewsList = [];
        state.isReviewsListLoading = false;
      })
      .addCase(fetchOffesNearAction.pending, (state) => {
        state.isNearByOffersLoading = true;
      })
      .addCase(fetchOffesNearAction.fulfilled, (state, action) => {
        state.nearByOffers = action.payload;
        state.isNearByOffersLoading = false;
      })
      .addCase(fetchOffesNearAction.rejected, (state) => {
        state.nearByOffers = [];
        state.isNearByOffersLoading = false;
      })
      .addCase(fetchOfferInfoByIDAction.pending, (state) => {
        state.isFullOfferLoading = true;
      })
      .addCase(fetchOfferInfoByIDAction.fulfilled, (state, action) => {
        state.fullOffer = action.payload;
        state.isFullOfferLoading = false;
      })
      .addCase(fetchOfferInfoByIDAction.rejected, (state) => {
        state.isFullOfferLoading = false;
      })
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
        toast.warn('Error while loading offers');
      })
      .addCase(setDataLoadingStatus, (state, action) => {
        state.isDataLoading = action.payload;
      });
  }
});


