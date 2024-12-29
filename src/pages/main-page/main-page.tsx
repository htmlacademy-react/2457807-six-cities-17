import { useState } from 'react';
import { DEFAULT_ACTIVE_LOCATION, LOCATIONS, PageNames } from '../../constants';
import { CityKeys, ListOfferType } from '../../types/offers';
import MainPageEmpty from '../main-empty-page/main-empty-page';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import SortForm from '../../components/sort-form/sort-form';
import PlaceCardsList from '../../components/place-card-list/place-card-list';
import Map from '../../components/map/map';

type MainProps = {
offers: ListOfferType[];
};

function MainPage({offers}:MainProps): JSX.Element {
  const [isActiveOffer, setiIsActiveOffer] = useState<string | null>(null);
  const [currentCity, setCurrentCity] = useState<CityKeys>(DEFAULT_ACTIVE_LOCATION);
  const handleActiveOfferChange = (id:string | null) =>{
    setiIsActiveOffer(id);
  };
  const handleCurrentCityChange = (city:CityKeys):void =>{
    if(city === currentCity) {
      return;
    }
    setCurrentCity(city);
  };
  const filteredOfferByCity = offers.filter((offer) => offer.city.name === currentCity);
  const offersCount = filteredOfferByCity.length;
  return (
    <div className="page page--gray page--main">
      <Header pageNames= {PageNames.Main} />
      <main className={offersCount === 0 ? 'page__main page__main--index page__main--index-empty' : 'page__main page__main--index'}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList
              locations={LOCATIONS}
              pageNames={PageNames}
              onCurrentCityChange={handleCurrentCityChange}
              currentCity={currentCity}
            />
          </section>
        </div>
        <div className="cities">
          {offersCount === 0 ? <MainPageEmpty location={currentCity}/> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersCount} {offersCount > 1 ? 'places' : 'place'} to stay in {currentCity}</b>
                <SortForm />
                <div className={'cities__places-list places__list tabs__content'}>
                  <PlaceCardsList
                    onActiveOfferChange = {handleActiveOfferChange}
                    offers = {filteredOfferByCity}
                    pageNames= {PageNames.Main}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                {isActiveOffer ? '' : ''}
                <Map mapClass={PageNames.Main} city = {currentCity} selectedPointId = {isActiveOffer} offers = {filteredOfferByCity} />
              </div>
            </div> }
        </div>
      </main>
    </div>
  );
}

export default MainPage;
