import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../constants';

export const redirectToRoute = createAction<typeof AppRoute[keyof typeof AppRoute]>('app/redirectToRoute');


