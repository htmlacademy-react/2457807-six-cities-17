import { BookmarkAttributes } from '../../style-options';
import { ListOfferType } from '../../types/offers';


type BookmarkButtonProps = {
  bookmarkClass: string;
  cardPlace?: ListOfferType;
}

function BookmarkButton({bookmarkClass, cardPlace}: BookmarkButtonProps): JSX.Element{
  const isSelectedFavorite = cardPlace?.isFavorite;
  console.log(bookmarkClass);
  return (
    <button className={`${bookmarkClass}__bookmark-button ${isSelectedFavorite ? `${bookmarkClass}__bookmark-button--active` : ''} button`} type="button">
      <svg className={`${bookmarkClass}__bookmark-icon`} width={BookmarkAttributes[bookmarkClass].width} height={BookmarkAttributes[bookmarkClass].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
