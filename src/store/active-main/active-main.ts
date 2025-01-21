import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CityKeys, SortOptionsType} from '../../types/offers';
import { DEFAULT_ACTIVE_LOCATION, SortOptions } from '../../constants';
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
  reducers: {
    changeLocation (state, action: PayloadAction<CityKeys>){
      state.currentLocations = action.payload;
    },
    changeSorting (state, action: PayloadAction<SortOptionsType>){
      state.currentSort = action.payload;
    },
  },
});

export const {changeLocation, changeSorting} = activeMainSlice.actions;
