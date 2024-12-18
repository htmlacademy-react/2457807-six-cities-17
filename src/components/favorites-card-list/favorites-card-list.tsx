import { ListOfferType } from '../../types/offers';
import FavoritesCardItem from '../favorites-card-item/favorites-card-item';


type OffersFavoriteProps = {
  offersFavorite: ListOfferType[];
  pageNames: string;
}

function FavoritesCardList({offersFavorite, pageNames}:OffersFavoriteProps):JSX.Element {
  const groupByList = Object.groupBy(offersFavorite, ({city}) => city.name);
  return (
    <ul className="favorites__list">
      {Object.keys(groupByList).map((key) => (
        <FavoritesCardItem
          key = {crypto.randomUUID()}
          offersFavorite = {groupByList[key]}
          pageNames = {pageNames}
        />))}
    </ul>
  );
}

export default FavoritesCardList;
