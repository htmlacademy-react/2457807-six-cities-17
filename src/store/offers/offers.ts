import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListOfferType} from '../../types/offers';
import { FullOfferType } from '../../types/full-offer';
import { CommentType } from '../../types/comment';
import { fetchFavoriteOffersAction, fetchOfferInfoByIDAction, fetchOfferReviewListAction, fetchOffersAction,
  fetchOffesNearAction, submitToOfferReviewAction, toggleFavoriteAction } from '../api-actions';
import { NameSpace, Status } from '../../constants';
import { OfferUpdate } from '../../types/state';


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
  uploadFavoritesStatus: typeof Status[keyof typeof Status];
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
  uploadFavoritesStatus: Status.Idle
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    updateOfferStatus(state, action: PayloadAction<OfferUpdate>) {
      const indexUpdateOffer = state.offersList.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (indexUpdateOffer !== -1) {
        state.offersList[indexUpdateOffer].isFavorite = action.payload.isFavorite;
      }
    },
    updateFullOfferStatus(state, action: PayloadAction<OfferUpdate>) {
      if (state.fullOffer && state.fullOffer.id === action.payload.id) {
        state.fullOffer.isFavorite = action.payload.isFavorite;
      }
    },
    updateNearByOffersStatus(state, action: PayloadAction<OfferUpdate>) {
      const indexUpdateOffer = state.nearByOffers.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (indexUpdateOffer !== -1) {
        state.nearByOffers[indexUpdateOffer].isFavorite = action.payload.isFavorite;
      }
    }
  },
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
      })
      .addCase(toggleFavoriteAction.pending, (state) => {
        state.isFavoriteLoading = true;
        state.uploadFavoritesStatus = Status.Loading;
      })
      .addCase(toggleFavoriteAction.fulfilled, (state, action) => {
        state.uploadFavoritesStatus = Status.Success;
        const currentOffer = state.offersList.find((offer) => offer.id === action.payload.id);
        if(!currentOffer){
          throw new Error(`No such offer with giver id: ${action.payload.id}`);
        }
        currentOffer.isFavorite = action.payload.isFavorite;
        if (action.payload.isFavorite) {
          state.favorites.push(action.payload);
        } else {
          state.favorites = state.favorites.filter((offer) => offer.id !== action.payload.id);
        }
        state.isFavoriteLoading = false;
      })
      .addCase(toggleFavoriteAction.rejected, (state) => {
        state.isFavoriteLoading = false;
        state.uploadFavoritesStatus = Status.Error;
        state.uploadFavoritesStatus = Status.Idle;
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
      });
  }
});

export const {updateOfferStatus, updateFullOfferStatus, updateNearByOffersStatus} = offersSlice.actions;
