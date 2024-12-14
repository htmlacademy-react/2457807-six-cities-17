import FavoritesCardItem from '../favorites-card-item/favorites-card-item';
import { ListOfferType } from '../../types/offers';


type OffersFavoriteProps = {
  offersFavorite: ListOfferType[];
  pageNames: string;
}


function FavoritesCardList({offersFavorite, pageNames}:OffersFavoriteProps):JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoritesCardItem
        offersFavorite = {offersFavorite}
        pageNames = {pageNames}
      />
    </ul>
  );
}

export default FavoritesCardList;
