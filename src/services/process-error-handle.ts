import { createAsyncThunk } from '@reduxjs/toolkit';
import { TIMEOUT_SHOW_ERROR } from '../constants';
import { store } from '../store';
import { setError } from '../store/action';


export const clearErrorAction = createAsyncThunk(
  'app/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const processErrorHandle = (message: string) : void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
