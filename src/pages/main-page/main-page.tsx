import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import SortForm from '../../components/sort-form/sort-form';
import PlaceCardsList from '../../components/place-card-list/place-card-list';
import Map from '../../components/map/map';
import { LOCATIONS, PageNames } from '../../constants';
import { ListOfferType } from '../../types/offers';
import MainPageEmpty from '../main-empty-page/main-empty-page';


type MainProps = {
offers: ListOfferType[];
};


function MainPage({offers}:MainProps): JSX.Element {
  const offersCount = offers.filter((offer) => offer.city.name === 'Amsterdam').length;
  return (
    <div className="page page--gray page--main">
      <Header pageNames= {PageNames.Main} />
      <main className={offersCount === 0 ? 'page__main page__main--index page__main--index-empty' : 'page__main page__main--index'}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList locations={LOCATIONS} pageNames={PageNames} />
          </section>
        </div>
        <div className="cities">
          {offersCount === 0 ? <MainPageEmpty location={LOCATIONS[3]}/> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersCount} places to stay in Amsterdam</b>
                <SortForm />
                <PlaceCardsList offers = {offers} pageNames= {PageNames.Main}/>
              </section>
              <div className="cities__right-section">
                <Map mapClass='cities'/>
              </div>
            </div> }
        </div>
      </main>
    </div>
  );
}

export default MainPage;
