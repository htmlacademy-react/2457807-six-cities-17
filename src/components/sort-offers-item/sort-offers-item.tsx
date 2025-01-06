import { changeSorting } from '../../store/action';
import { useAppDispatch } from '../../hooks';
import { SortOptionsType } from '../../types/offers';

type SortOffersItemProps = {
    sortOption: SortOptionsType;
    isActive?: boolean;
}

function SortOffersItem({ isActive = true, sortOption }: SortOffersItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <li
      className={`places__option${isActive ? ' places__option--active' : ''}`}
      tabIndex={0}
      onClick={() => dispatch(changeSorting(sortOption))}
    >
      {sortOption}
    </li>
  );
}

export default SortOffersItem;
