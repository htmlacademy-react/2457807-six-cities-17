import { memo } from 'react';
import { ListOfferType } from '../../types/offers';
import FavoritesCardItem from '../favorites-card-item/favorites-card-item';


type OffersFavoriteProps = {
  offersFavorite: ListOfferType[];
  pageNames: string;
}

const FavoritesCardList = memo(({offersFavorite, pageNames}:OffersFavoriteProps):JSX.Element => {
  const groupByList = Object.groupBy(offersFavorite, ({city}) => city.name);
  return (
    <ul className="favorites__list">
      {Object.keys(groupByList).map((key) => (
        <FavoritesCardItem
          key = {key}
          offersFavorite = {groupByList[key] ?? []}
          pageNames = {pageNames}
        />))}
    </ul>
  );
});

FavoritesCardList.displayName = 'FavoritesCardItem';

export default FavoritesCardList;
