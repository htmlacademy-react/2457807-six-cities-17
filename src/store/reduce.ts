import { createReducer} from '@reduxjs/toolkit';
import { changeLocation, changeSorting, loadOfferList, requireAuthorization, setDataLoadingStatus, setError, setUserEmail, setUser } from './action';
import { AuthorizationStatus, DEFAULT_ACTIVE_LOCATION, SortOptions } from '../constants';
import { CityKeys, ListOfferType, SortOptionsType } from '../types/offers';
import { AuthorizedUserType } from '../types/authorized-user';
import { fetchOffersAction } from './api-actions';


const initialState = {
  currentLocations: DEFAULT_ACTIVE_LOCATION as CityKeys,
  currentSort: SortOptions.Popular as SortOptionsType,
  offersList: [] as ListOfferType[],
  authorizationStatus: AuthorizationStatus.Unknown as typeof AuthorizationStatus[keyof typeof AuthorizationStatus],
  error:  null as null | string,
  isDataLoading: false as boolean,
  email: null as null | string,
  User: null as null | AuthorizedUserType,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeLocation, (state, action) => {
      state.currentLocations = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadingStatus, (state, action) => {
      state.isDataLoading = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.email = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.User = action.payload;
    })
    .addCase(loadOfferList, (state, action) => {
      state.offersList = action.payload; //
    });
  // .addCase(fetchOffersAction.fulfilled, (state, action) => {
  //   state.offersList = action.payload;
  //   state.isDataLoading = false;
  // });
});

export {reducer};
