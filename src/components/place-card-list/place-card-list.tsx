import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { selectCurrentSort } from '../../store/active-main/active-main-selectors';
import { ListOfferType } from '../../types/offers';
import { sortOffers } from '../../utils';
import PlaceCardItem from '../places-card-item/places-card-item';

type placeCardProps = {
  pageNames: string;
  offers: ListOfferType[];
  onActiveOfferChange?: (id: string | null) => void;
}

const PlaceCardsList = memo(({pageNames, offers, onActiveOfferChange}:placeCardProps): JSX.Element => {
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
});

PlaceCardsList.displayName = 'PlaceCardsList';

export default PlaceCardsList;
