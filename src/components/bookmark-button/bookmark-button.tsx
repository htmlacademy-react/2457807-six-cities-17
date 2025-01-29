import { memo, useState } from 'react';
import { BookmarkAttributes } from '../../style-options';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { toggleFavoriteAction } from '../../store/api-actions';
import { selectAuthorizationStatus } from '../../store/user/user-selector';


type BookmarkButtonProps = {
  bookmarkClass: string;
  offerId: string;
  isFavorite: boolean;
}

const BookmarkButton = memo(({bookmarkClass, offerId, isFavorite}: BookmarkButtonProps): JSX.Element =>{
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const navigate = useNavigate();
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const text = isFavorite ? 'In' : 'To';
  return (
    <button onClick = {() => {
      if (authorizationStatus === AuthorizationStatus.Auth){
        dispatch(toggleFavoriteAction({offerId: offerId, isFavorite: isFavorite}))
          .finally(() => {
            setDisableButton(false);
          });
      }else{
        return navigate(AppRoute.Login);
      }
    }}
    className={`${bookmarkClass}__bookmark-button ${authorizationStatus === AuthorizationStatus.Auth && isFavorite ? `${bookmarkClass}__bookmark-button--active` : ''} button`} type="button"
    disabled = {disableButton}
    >
      <svg className={`${bookmarkClass}__bookmark-icon`} width={BookmarkAttributes[bookmarkClass].width} height={BookmarkAttributes[bookmarkClass].height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{`${text} bookmarks`}</span>
    </button>
  );
}
);
BookmarkButton.displayName = 'BookmarkButton';

export default BookmarkButton;
