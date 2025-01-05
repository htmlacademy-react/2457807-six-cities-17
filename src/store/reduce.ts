import { createReducer} from '@reduxjs/toolkit';
import { changeLocation, changeSorting, loadOfferList } from './action';
import { DEFAULT_ACTIVE_LOCATION, SortOptions } from '../constants';
import { CityKeys, ListOfferType, SortOptionsType } from '../types/offers';


const initialState = {
  currentLocations: DEFAULT_ACTIVE_LOCATION as CityKeys,
  currentSort: SortOptions.Popular as SortOptionsType,
  offersList: [] as ListOfferType[],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOfferList, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(changeLocation, (state, action) => {
      state.currentLocations = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.currentSort = action.payload;
    });
});

export {reducer};
