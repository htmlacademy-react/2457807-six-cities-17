import { ListOfferType } from '../../types/offers';
import PlaceCardItem from '../places-card-item/places-card-item';

type placeCardProps = {
  pageNames: string;
  offers: ListOfferType[];
  onHandleActiveOfferChange?: (id: string | null) => void;
}

function PlaceCardsList({pageNames, offers, onHandleActiveOfferChange}:placeCardProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (
        <PlaceCardItem
          onHandleActiveOfferChange = {onHandleActiveOfferChange}
          cardPlace={offer}
          pageNames = {pageNames}
          key={offer.id}
        />))}
    </>
  );
}

export default PlaceCardsList;
