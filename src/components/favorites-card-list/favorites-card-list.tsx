import FavoritesCardItem from '../favorites-card-item/favorites-card-item';
import { ListOfferType } from '../../types/offers';


type OffersFavoriteProps = {
  offersFavorite: ListOfferType[];
  pageNames: string;
}

function FavoritesCardList({offersFavorite, pageNames}:OffersFavoriteProps):JSX.Element {
  const groupByList = Object.groupBy(offersFavorite, ({city}) => city.name);
  Object.keys(groupByList).map((cityName) => (
    <FavoritesCardItem
      key = {crypto.randomUUID()}
      offersFavorite = {groupByList[cityName]}
      pageNames = {pageNames}
    />));
  return (
    <ul className="favorites__list">
      {Object.keys(groupByList).map((key) => (
        <FavoritesCardItem
          key = {crypto.randomUUID()}
          offersFavorite = {groupByList[key]}
          pageNames = {pageNames}
        />))}
      {/* <FavoritesCardItem
        offersFavorite = {offersFavorite}
        pageNames = {pageNames}
      /> */}
    </ul>
  );
}

export default FavoritesCardList;
