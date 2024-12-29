import { BookmarkAttributes } from '../../style-options';
import { ListOfferType } from '../../types/offers';


type BookmarkButtonProps = {
  bookmarkClass: string;
  cardPlace?: ListOfferType;
}

function BookmarkButton({bookmarkClass, cardPlace}: BookmarkButtonProps): JSX.Element{
  const isSelectedFavorite = cardPlace?.isFavorite;
  const handleButtonClick = (cardPlaceFavorite:ListOfferType|undefined):void =>{
    if(cardPlaceFavorite?.isFavorite) {
      cardPlaceFavorite.isFavorite = false;
    }
    if(!cardPlaceFavorite?.isFavorite === false){
      cardPlaceFavorite.isFavorite = true;
    }
  };
  return (
    <button onClick = {() => handleButtonClick(cardPlace)} className={`${bookmarkClass}__bookmark-button ${isSelectedFavorite ? `${bookmarkClass}__bookmark-button--active` : ''} button`} type="button">
      <svg className={`${bookmarkClass}__bookmark-icon`} width={BookmarkAttributes[bookmarkClass].width} height={BookmarkAttributes[bookmarkClass].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
