import { createAction } from '@reduxjs/toolkit';
import { CityKeys, ListOfferType } from '../types/offers';

export const changeLocation = createAction<CityKeys>('app/changeLocation');
export const loadOfferList = createAction<ListOfferType[]>('data/loadOffers');

