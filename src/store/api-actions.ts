import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { ListOfferType } from '../types/offers';
import { AuthData, AuthorizedUserType} from '../types/authorized-user';
import { AppRoute, NameSpace} from '../constants';
import { redirectToRoute} from './action';
import { dropToken, saveToken } from '../services/token';
import { FullOfferType } from '../types/full-offer';
import { CommentType, OfferReviewType } from '../types/comment';
import { generatePath } from 'react-router-dom';
import { toast } from 'react-toastify';

type ToggleFavoritePayload = {
  offerId: string;
  isFavorite: boolean | undefined;
}

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>();


export const toggleFavorite = createAppAsyncThunk<ListOfferType, ToggleFavoritePayload>(
  'favorite/toggleFavorite',
  async({offerId: id, isFavorite}, { getState, extra: api}) => {
    const path = generatePath(AppRoute.Favorite, {offerId: id, status: `${isFavorite ? 0 : 1}`});
    const {data} = await api.post<ListOfferType>(path);
    const {offersList} = getState().offers;
    const currentOffer = offersList.find((offer) => offer.id === data.id);
    if(!currentOffer){
      toast.warn(`No such offer with given id: ${data.id}`);
      throw new Error(`No such offer with giver id: ${data.id}`);
    }
    return {...currentOffer, isFavorite: data.isFavorite};
  }
);

export const fetchFavoriteOffersAction = createAppAsyncThunk<ListOfferType[], undefined>(
  `${NameSpace.Offers}/fetchFavoriteOffers`,
  async(_arg, { extra: api}) => {
    const {data} = await api.get<ListOfferType[]>(AppRoute.FavoritesLoad);
    return data;
  }
);

export const fetchOffersAction = createAppAsyncThunk<ListOfferType[], undefined>(
  `${NameSpace.Offers}/fetchOffers`,
  async(_arg, { extra: api}) => {
    const {data} = await api.get<ListOfferType[]>(AppRoute.Offers);
    return data;
  }
);

export const fetchOfferInfoByIDAction = createAppAsyncThunk<FullOfferType, string | null>(
  `${NameSpace.Offers}/fetchOfferInfo`,
  async(id, {extra: api}) => {
    const path = generatePath(AppRoute.Offer, {offerId: id});
    const {data} = await api.get<FullOfferType>(path);
    return data;
  }
);

export const fetchOffesNearAction = createAppAsyncThunk<ListOfferType[], string | null>(
  'offer/fetchOffersNear',
  async(id, { extra: api}) => {
    const path = generatePath(AppRoute.NearbyOffers, {offerId: id});
    const {data} = await api.get<ListOfferType[]>(path);
    return data;
  }
);

export const fetchOfferReviewListAction = createAppAsyncThunk<CommentType[], string | null>(
  'offer/fetchOfferReviewList',
  async(id, { extra: api}) => {
    const path = generatePath(AppRoute.Comments, {offerId: id});
    const {data} = await api.get<CommentType[]>(path);
    return data;
  }
);

export const submitToOfferReviewAction = createAppAsyncThunk<CommentType, OfferReviewType>(
  'offer/postOfferReview',
  async({offerId: id, comment, rating}, { extra: api}) => {
    const path = generatePath(AppRoute.Comments, {offerId: id});
    const {data} = await api.post<CommentType>(path, {comment, rating});
    return data;
  }
);

export const checkAuthAction = createAppAsyncThunk<AuthorizedUserType, undefined>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<AuthorizedUserType>(AppRoute.Login);
    return data;
  }
);

export const logInAction = createAppAsyncThunk<AuthorizedUserType, AuthData>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {

    const {data: user} = await api.post<AuthorizedUserType>(AppRoute.Login, {email, password});
    saveToken(user.token);
    dispatch(redirectToRoute(AppRoute.Root));
    return user;

  }
);

export const logOutAction = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async(_arg, {dispatch, extra: api}) => {
    await api.delete(AppRoute.Logout);
    dropToken();
    dispatch(redirectToRoute(AppRoute.Login));
  }
);

