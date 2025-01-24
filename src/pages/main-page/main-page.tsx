import { useCallback, useMemo, useState } from 'react';
import { LOCATIONS, PageNames } from '../../constants';
import { CityKeys } from '../../types/offers';
import MainPageEmpty from '../main-empty-page/main-empty-page';
import Header from '../../components/header/header';
import LocationsList from '../../components/locations-list/locations-list';
import SortForm from '../../components/sort-form/sort-form';
import PlaceCardsList from '../../components/place-card-list/place-card-list';
import Map from '../../components/map/map';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { changeLocation } from '../../store/active-main/active-main';
import {selectOffers } from '../../store/offers/offers-selectors';
import { selectLocation } from '../../store/active-main/active-main-selectors';


function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(selectOffers);
  const currentCity = useAppSelector(selectLocation);
  const [isActiveOffer, setiIsActiveOffer] = useState<string | null>(null);

  const handleActiveOfferChange = (id:string | null) =>{
    setiIsActiveOffer(id);
  };
  const handleCurrentCityChange = useCallback((city:CityKeys):void =>{
    if(city === currentCity) {
      return;
    }
    dispatch(changeLocation(city));
  }, [dispatch, currentCity]);
  const filteredOfferByCity = useMemo(() => offers.filter((offer) => offer.city.name === currentCity), [currentCity, offers]);
  const offersCount = filteredOfferByCity.length;
  return (
    <div className="page page--gray page--main">
      <Header pageNames= {PageNames.Main} />
      <main className={`page__main page__main--index${offersCount > 0 ? '' : ' page__main--index-empty'}`}>
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
