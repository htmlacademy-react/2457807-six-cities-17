
import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user/user';
import { offersSlice } from './offers/offers';
import { activeMainSlice } from './active-main/active-main';
import { NameSpace } from '../constants';


export const rootReducer = combineReducers({
  [NameSpace.User]: userSlice.reducer,
  [NameSpace.Offers]: offersSlice.reducer,
  [NameSpace.ActiveMain]: activeMainSlice.reducer,
});
