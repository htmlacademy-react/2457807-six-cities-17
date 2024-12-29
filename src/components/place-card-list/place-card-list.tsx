import { ListOfferType } from '../../types/offers';
import PlaceCardItem from '../places-card-item/places-card-item';

type placeCardProps = {
  pageNames: string;
  offers: ListOfferType[];
  onActiveOfferChange?: (id: string | null) => void;
}

function PlaceCardsList({pageNames, offers, onActiveOfferChange}:placeCardProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCardItem
          onActiveOfferChange = {onActiveOfferChange}
          cardPlace={offer}
          pageNames = {pageNames}
          key={offer.id}
        />))}
    </>
  );
}

export default PlaceCardsList;
