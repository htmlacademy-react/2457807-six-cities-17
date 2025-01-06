import { useAppSelector } from '../../hooks';
import SortOffersList from '../sort-offers-list/sort-offers-list';
import { useEffect, useRef, useState } from 'react';

function SortForm():JSX.Element{
  const sortSpanRef = useRef<HTMLElement>(null);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const currentSort = useAppSelector((state) => state.currentSort);
  useEffect(() =>{
    const hideSortList = (evt: MouseEvent) => {
      if(evt.target instanceof HTMLElement && sortSpanRef.current && !sortSpanRef.current.contains(evt.target)){
        setMenuOpened(false);
      }
    };
    document.addEventListener('click', hideSortList);
    return () => {
      document.removeEventListener('click', hideSortList);
    };
  }, []);
  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>&nbsp;
      <span
        ref = {sortSpanRef}
        className="places__sorting-type" tabIndex={0}
        onClick={() => setMenuOpened((lastOpened) => !lastOpened)}
      >
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortOffersList isMenuOpened = {isMenuOpened} />
    </form>
  );
}

export default SortForm;

