import { memo } from 'react';
import { BookmarkAttributes } from '../../style-options';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { toggleFavoriteAction } from '../../store/api-actions';
import { selectFavoriteByOfferId, selectIsFavoriteLoading } from '../../store/offers/offers-selectors';
import { selectAuthorizationStatus } from '../../store/user/user-selector';

type BookmarkButtonProps = {
  bookmarkClass: string;
  offerId: string;
}

const BookmarkButton = memo(({bookmarkClass, offerId}: BookmarkButtonProps): JSX.Element =>{
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const navigate = useNavigate();
  const isSelectedFavorite = useAppSelector((state) => selectFavoriteByOfferId(state, offerId));
  const isFavoriteLoading = useAppSelector(selectIsFavoriteLoading);
  return (
    <button onClick = {() => {
      if (authorizationStatus !== AuthorizationStatus.Auth){
        return navigate(AppRoute.Login);
      }
      dispatch(toggleFavoriteAction({offerId: offerId, isFavorite: isSelectedFavorite}));
    }}
    className={`${bookmarkClass}__bookmark-button ${authorizationStatus === AuthorizationStatus.Auth && isSelectedFavorite ? `${bookmarkClass}__bookmark-button--active` : ''} button`} type="button"
    disabled = {isFavoriteLoading}
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
