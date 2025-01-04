import {configureStore} from '@reduxjs/toolkit';
import { reducer } from './reduce';

export const store = configureStore({reducer});
