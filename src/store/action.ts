import { createAction } from '@reduxjs/toolkit';
import { CityKeys, ListOfferType, SortOptionsType } from '../types/offers';
import { AuthorizationStatus, AppRoute } from '../constants';

export const changeLocation = createAction<CityKeys>('app/changeLocation');

export const loadOfferList = createAction<ListOfferType[]>('data/loadOffers');

export const changeSorting = createAction<SortOptionsType>('app/changeSorting');

export const requireAuthorization = createAction<typeof AuthorizationStatus[keyof typeof AuthorizationStatus]>('user/requiredAuthorization');

export const setError = createAction<string | null>('app/setError');

export const setDataLoadingStatus = createAction<boolean>('app/setDataLoadingStatus');

export const redirectToRoute = createAction<typeof AppRoute[keyof typeof AppRoute]>('app/redirectToRoute');

export const setUserEmail = createAction<string | null>('app/setUserEmail');

