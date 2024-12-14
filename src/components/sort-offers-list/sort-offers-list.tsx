import SortOffersItem from '../sort-offers-item/sort-offers-item';
import { PLACES_OPTIONS } from '../../constants';

function SortOffersList(): JSX.Element {
  const sortOptionsList = PLACES_OPTIONS.map(
    (option) => (
      <SortOffersItem
        sortOption={option}
        isActive={option === 'Popular'}
        key={crypto.randomUUID()}
      />
    )
  );
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {sortOptionsList}
    </ul>
  );
}

export default SortOffersList;
