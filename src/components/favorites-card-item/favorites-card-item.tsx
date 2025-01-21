import { memo } from 'react';
import { ListOfferType } from '../../types/offers';
import LocationsItemLink from '../locations-item-link/locations-item-link';
import PlaceCardsList from '../place-card-list/place-card-list';


type OffersFavoriteItemProps = {
  offersFavorite: ListOfferType[];
  pageNames: string;
}

const FavoritesCardItem = memo(({offersFavorite, pageNames}:OffersFavoriteItemProps):JSX.Element => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <LocationsItemLink location={offersFavorite[0].city.name} pageNames={pageNames}/>
      </div>
    </div>
    <div className="favorites__places">
      <PlaceCardsList offers= {offersFavorite} pageNames={pageNames}/>
    </div>
  </li>
)
);

FavoritesCardItem.displayName = 'FavoritesCardItem';

export default FavoritesCardItem;
