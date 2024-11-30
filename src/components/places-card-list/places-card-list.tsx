import PlaceCardItem from '../places-card-item/places-card-item';
import { offers } from '../../mock/list-offers';


function PlaceCardsList(): JSX.Element {
  const cardsList = offers.map((offer) => (
    <PlaceCardItem
      cardPlace={offer}
      key={crypto.randomUUID()}
    />));
  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsList}
    </div>
  );
}

export default PlaceCardsList;
