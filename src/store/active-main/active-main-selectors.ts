
import { CityKeys, SortOptionsType } from '../../types/offers';
import { NameSpace } from '../../constants';
import { State } from '../../types/state';

export const selectCurrentSort = (state: State): SortOptionsType => state[NameSpace.ActiveMain].currentSort;
export const selectLocation = (state:State):CityKeys => state[NameSpace.ActiveMain].currentLocations;
