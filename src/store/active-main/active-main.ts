import { createSlice } from '@reduxjs/toolkit';
import { CityKeys, SortOptionsType} from '../../types/offers';
import { DEFAULT_ACTIVE_LOCATION, SortOptions } from '../../constants';
import { changeLocation, changeSorting } from '../action';
import { NameSpace } from '../../constants';

type ActiveMain = {
  currentLocations: CityKeys;
  currentSort: SortOptionsType;
}

const initialState:ActiveMain = {
  currentLocations: DEFAULT_ACTIVE_LOCATION,
  currentSort: SortOptions.Popular,
};

export const activeMainSlice = createSlice({
  name: NameSpace.ActiveMain,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeLocation, (state, action) => {
        state.currentLocations = action.payload;
      })
      .addCase(changeSorting, (state, action) => {
        state.currentSort = action.payload;
      });
  }
});
