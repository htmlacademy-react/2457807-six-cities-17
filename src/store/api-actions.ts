import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { ListOfferType } from '../types/offers';
import { AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../constants';
import { loadOfferList, requireAuthorization, setDataLoadingStatus, setError } from './action';
import { AuthData, AuthorizedUserType } from '../types/authorized-user';
import { dropToken, saveToken } from '../services/token';
import { store } from '.';

export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async(_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadingStatus(true));
    const {data} = await api.get<ListOfferType[]>(AppRoute.Offers);
    dispatch(setDataLoadingStatus(false));
    dispatch(loadOfferList(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
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

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/login',
  async({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<AuthorizedUserType>(AppRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'user/logout',
  async(_arg, {dispatch, extra: api}) => {
    await api.delete(AppRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  }
);
