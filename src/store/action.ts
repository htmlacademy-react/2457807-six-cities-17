import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../constants';
import { AuthorizedUserType } from '../types/authorized-user';


export const setError = createAction<string | null>('app/setError');

export const setDataLoadingStatus = createAction<boolean>('app/setDataLoadingStatus');

export const redirectToRoute = createAction<typeof AppRoute[keyof typeof AppRoute]>('app/redirectToRoute');

export const setUser = createAction<AuthorizedUserType| null>('app/setUser');


