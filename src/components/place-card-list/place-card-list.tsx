import { useAppSelector } from '../../hooks';
import { selectCurrentSort } from '../../store/selectors';
import { ListOfferType } from '../../types/offers';
import { sortOffers } from '../../utils';
import PlaceCardItem from '../places-card-item/places-card-item';

type placeCardProps = {
  pageNames: string;
  offers: ListOfferType[];
  onActiveOfferChange?: (id: string | null) => void;
}

function PlaceCardsList({pageNames, offers, onActiveOfferChange}:placeCardProps): JSX.Element {
  const currentSort = useAppSelector(selectCurrentSort);
  const sortedOfferCards = sortOffers(offers, currentSort);
  return (
    <>
      {sortedOfferCards.map((offer) => (
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
