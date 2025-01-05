import { createAction } from '@reduxjs/toolkit';
import { CityKeys, ListOfferType, SortOptionsType } from '../types/offers';

export const changeLocation = createAction<CityKeys>('app/changeLocation');
export const loadOfferList = createAction<ListOfferType[]>('data/loadOffers');
export const changeSorting = createAction<SortOptionsType>('app/changeSorting');

