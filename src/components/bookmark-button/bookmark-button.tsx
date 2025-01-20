import { memo } from 'react';
import { BookmarkAttributes } from '../../style-options';
import { ListOfferType } from '../../types/offers';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { toggleFavorite } from '../../store/api-actions';
import { selectAuthorizationStatus, selectFavoriteByOfferId } from '../../store/selectors';


type BookmarkButtonProps = {
  bookmarkClass: string;
  cardPlace?: ListOfferType;
  offerId: string;
}

const BookmarkButton = memo(({bookmarkClass, cardPlace, offerId}: BookmarkButtonProps): JSX.Element =>{
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const navigate = useNavigate();
  const isSelectedFavorite = useAppSelector((state) => selectFavoriteByOfferId(state, offerId));
  return (
    <button onClick = {() => {
      if (authorizationStatus !== AuthorizationStatus.Auth){
        return navigate(AppRoute.Login);
      }
      dispatch(toggleFavorite({offerId: offerId, isFavorite: cardPlace?.isFavorite ? 0 : 1}));

    }}
    className={`${bookmarkClass}__bookmark-button ${authorizationStatus === AuthorizationStatus.Auth && isSelectedFavorite ? `${bookmarkClass}__bookmark-button--active` : ''} button`} type="button"
    >
      <svg className={`${bookmarkClass}__bookmark-icon`} width={BookmarkAttributes[bookmarkClass].width} height={BookmarkAttributes[bookmarkClass].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}
);
BookmarkButton.displayName = 'BookmarkButton';

export default BookmarkButton;
