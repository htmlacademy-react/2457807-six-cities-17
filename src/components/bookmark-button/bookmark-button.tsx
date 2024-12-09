import { BookmarkAttributes } from '../../constans';
import { ListOfferType } from '../../types/list-offer';


type BookmarkButtonProps = {
  bookmarkClass: string;
  cardPlace?: ListOfferType;
}

function BookmarkButton({bookmarkClass, cardPlace}: BookmarkButtonProps): JSX.Element{
  const isActive = cardPlace?.isFavorite;
  return (
    <button className={`${bookmarkClass}__bookmark-button ${isActive ? `${bookmarkClass}__bookmark-button--active` : ''} button`} type="button">
      <svg className={`${bookmarkClass}__bookmark-icon`} width={BookmarkAttributes[bookmarkClass].width} height={BookmarkAttributes[bookmarkClass].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
