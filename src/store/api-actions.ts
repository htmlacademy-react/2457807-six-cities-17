import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { ListOfferType } from '../types/offers';
import { AuthData, AuthorizedUserType} from '../types/authorized-user';
import { AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../constants';
import { loadFullOffer, loadOfferList, loadOffersNear, loadReviewList, redirectToRoute, requireAuthorization, setDataLoadingStatus, setError, setUser, setUserEmail } from './action';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';
import { FullOfferType } from '../types/full-offer';
import { CommentType, OfferReviewType } from '../types/comment';
import { generatePath } from 'react-router-dom';

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: State;
  dispatch: AppDispatch;
  extra: AxiosInstance;
}>();

export const fetchOffersAction = createAppAsyncThunk<ListOfferType[], undefined>(
  'offers/fetchOffers',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<ListOfferType[]>(AppRoute.Offers);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOfferList(data));
    return data;
  }
);

export const fetchOfferInfoByIDAction = createAppAsyncThunk<FullOfferType, string | null>(
  'offer/fetchOfferInfo',
  async(id, {dispatch, extra: api}) => {
    // dispatch(setDataLoadingStatus(true));
    const path = generatePath(AppRoute.Offer, {offerId: id});
    const {data} = await api.get<FullOfferType>(path);
    dispatch(loadFullOffer(data));
    // dispatch(setDataLoadingStatus(false));
    return data;
  }
);

export const fetchOfferReviewListAction = createAppAsyncThunk<CommentType[], string>(
  'offer/fetchOfferReviewList',
  async(id, {dispatch, extra: api}) => {
    // dispatch(setDataLoadingStatus(true));
    const path = generatePath(AppRoute.Comments, {offerId: id});
    const {data} = await api.get<CommentType[]>(path);
    dispatch(loadReviewList(data));
    // dispatch(setDataLoadingStatus(false));
    return data;
  }
);

export const submitToOfferReviewAction = createAppAsyncThunk<CommentType, OfferReviewType>(
  'offer/postOfferReview',
  async({offerId: id, review: {comment, rating}}, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const path = generatePath(AppRoute.Comments, {offerId: id});
    const {data} = await api.post<CommentType>(path, {comment, rating});
    dispatch(setDataLoadingStatus(false));
    return data;
  }
);
export const fetchOffesNearAction = createAppAsyncThunk<ListOfferType[], string>(
  'offer/fetchOffersNear',
  async(id, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const path = generatePath(AppRoute.Comments, {offerId: id});
    const {data} = await api.get<ListOfferType[]>(path);
    dispatch(loadOffersNear(data));
    dispatch(setDataLoadingStatus(false));
    return data;
  }
);


export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const checkAuthAction = createAppAsyncThunk<void, undefined>(
  'user/checkAuth',
  async(_arg, {dispatch, extra: api}) => {
    try{
      await api.get(AppRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch{
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAppAsyncThunk<void, AuthData>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {

    const {data: User} = await api.post<AuthorizedUserType>(AppRoute.Login, {email, password});
    saveToken(User.token);
    dispatch(setUserEmail(User.email));
    dispatch(setUser(User));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Root));

  }
);

export const logoutAction = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async(_arg, {dispatch, extra: api}) => {
    await api.delete(AppRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserEmail(null));
    dispatch(setUser(null));
  }
);
