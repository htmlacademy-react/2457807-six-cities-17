import { createAction } from '@reduxjs/toolkit';
import { CityKeys, ListOfferType, SortOptionsType } from '../types/offers';
import { AuthorizationStatus, AppRoute } from '../constants';
import { AuthorizedUserType } from '../types/authorized-user';
import { FullOfferType } from '../types/full-offer';
import { CommentType } from '../types/comment';

export const loadOfferList = createAction<ListOfferType[]>('offers/loadOffers');

export const loadFullOffer = createAction<FullOfferType>('offer/loadFullOfferByID');

export const loadOffersNear = createAction<ListOfferType[]>('offer/loadOffersNear');

export const loadReviewList = createAction<CommentType[]>('offer/loadReviewList');

export const changeLocation = createAction<CityKeys>('app/changeLocation');

export const changeSorting = createAction<SortOptionsType>('app/changeSorting');

export const requireAuthorization = createAction<typeof AuthorizationStatus[keyof typeof AuthorizationStatus]>('user/requiredAuthorization');

export const setError = createAction<string | null>('app/setError');

export const setDataLoadingStatus = createAction<boolean>('app/setDataLoadingStatus');

export const redirectToRoute = createAction<typeof AppRoute[keyof typeof AppRoute]>('app/redirectToRoute');

export const setUserEmail = createAction<string | null>('app/setUserEmail');

export const setUser = createAction<AuthorizedUserType| null>('app/setUser');


