import PlaceCardItem from '../places-card-item/places-card-item';
import { ListOfferType } from '../../types/list-offer';


type placeCardProps = {
  pageNames: string;
  offers: ListOfferType[];
}

function PlaceCardsList({pageNames, offers}:placeCardProps): JSX.Element {
  const cardsList = offers.filter((offer) => offer.city.name === 'Amsterdam').map((offer) => (
    <PlaceCardItem
      cardPlace={offer}
      pageNames = {pageNames}
      key={crypto.randomUUID()}
    />));
  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsList}
    </div>
  );
}

export default PlaceCardsList;
