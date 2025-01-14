import SortOffersItem from '../sort-offers-item/sort-offers-item';
import { PLACES_OPTIONS } from '../../constants';
import { useAppSelector } from '../../hooks';

type isMenuOpenedProps = {
  isMenuOpened: boolean;
}

function SortOffersList({isMenuOpened}:isMenuOpenedProps): JSX.Element {
  const currentSort = useAppSelector((state) => state.currentSort);
  const sortOptionsList = PLACES_OPTIONS.map(
    (option) => (
      <SortOffersItem
        sortOption={option}
        isActive={option === currentSort}
        key={option}
      />
    )
  );
  return (
    <ul className={`places__options places__options--custom ${isMenuOpened ? 'places__options--opened' : ''}`}>
      {sortOptionsList}
    </ul>
  );
}

export default SortOffersList;