import { ListOfferType } from '../../types/offers';
import { PageNames } from '../../constants';
import PlaceCardItem from '../places-card-item/places-card-item';

type placeCardProps = {
  pageNames: string;
  offers: ListOfferType[];
}

function PlaceCardsList({pageNames, offers}:placeCardProps): JSX.Element {
  const cardsList = offers.map((offer) => (
    <PlaceCardItem
      cardPlace={offer}
      pageNames = {pageNames}
      key={offer.id}
    />));
  return (
    <div className={`${pageNames === PageNames.Main ? 'cities__places-list places__list tabs__content' : 'favorites__places'}`}>
      {cardsList}
    </div>
  );
}

export default PlaceCardsList;

