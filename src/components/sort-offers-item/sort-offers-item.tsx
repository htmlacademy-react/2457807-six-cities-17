type SortOffersItemProps = {
    sortOption: string;
    isActive?: boolean;
}

function SortOffersItem({ isActive = false, sortOption }: SortOffersItemProps): JSX.Element {
  return (
    <li className={`places__option ${isActive ? 'places__option--active' : ''}`} tabIndex={0}>
      {sortOption}
    </li>
  );
}

export default SortOffersItem;
