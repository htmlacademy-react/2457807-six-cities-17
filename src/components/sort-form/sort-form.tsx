import SortOffersList from '../sort-offers-list/sort-offers-list';

function SortForm():JSX.Element{
  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>&nbsp;
      <span className="places__sorting-type" tabIndex={0}>
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortOffersList />
    </form>
  );
}

export default SortForm;

