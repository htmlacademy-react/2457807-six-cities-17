import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import SortOffersList from '../../components/sort-offers-list/sort-offers-list';
import PlaceCardsList from '../../components/places-card-list/places-card-list';
import Map from '../../components/map/map';
import { LOCATIONS, PageNames } from '../../constans';


function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={LOCATIONS} pageNames={PageNames} />
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortOffersList />
              </form>
              <PlaceCardsList />
            </section>
            <div className="cities__right-section">
              <Map mapClass='cities'/>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default MainPage;
