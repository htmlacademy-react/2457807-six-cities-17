import {store} from '../store/index.js';
import { ListOfferType } from './offers.js';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type OfferUpdate = Pick<ListOfferType, 'id' | 'isFavorite'>;
