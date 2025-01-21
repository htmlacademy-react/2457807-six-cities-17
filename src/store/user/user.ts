import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthorizationStatusType, AuthorizedUserType } from '../../types/authorized-user';
import { AuthorizationStatus } from '../../constants';
import { checkAuthAction, logInAction, logOutAction } from '../api-actions';
import { NameSpace } from '../../constants';

type UserState = {
  authorizationStatus: AuthorizationStatusType;
  user: null | AuthorizedUserType;
  isError: boolean;
  error: null | string;
  errorMessage: string;
}


const initialState:UserState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  error:  null,
  user: null,
  isError: false,
  errorMessage: '',
};

export const userSlice = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    setError (state, action: PayloadAction<string | null>){
      state.isError = true;
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logInAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(logInAction.rejected, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logOutAction.fulfilled, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logOutAction.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.Auth;
      });
  }
});

export const {setError} = userSlice.actions;
