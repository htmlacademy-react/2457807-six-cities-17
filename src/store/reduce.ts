import { createReducer } from '@reduxjs/toolkit';
import { changeLocation, loadOfferList } from './action';
import { DEFAULT_ACTIVE_LOCATION } from '../constants';
import { CityKeys, ListOfferType } from '../types/offers';


const initialState = {
  currentLocations: DEFAULT_ACTIVE_LOCATION as CityKeys,
  offersList: [] as ListOfferType[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOfferList, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(changeLocation, (state, action) => {
      state.currentLocations = action.payload;
    });
});

export {reducer};
