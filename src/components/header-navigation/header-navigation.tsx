import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../../constants';
import { logOutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectFavorites } from '../../store/offers/offers-selectors';
import { selectAuthorizationStatus, selectUser } from '../../store/user/user-selector';
import { memo } from 'react';

type UserAuthorizedProps = {
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
}

function UserAuthorized({authorizationStatus}:UserAuthorizedProps): JSX.Element {
  const email = useAppSelector(selectUser)?.email;
  const offersFavoriteCount = useAppSelector(selectFavorites)?.length;
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">{email}</span>
        <span className="header__favorite-count">{offersFavoriteCount}</span>
      </Link>
    );
  }
  return (
    <Link className="header__nav-link" to={AppRoute.Login}>
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__login">Sign in</span>
    </Link>
  );
}

function Item(): JSX.Element {
  const dispatch = useAppDispatch();
  return (
    <li className="header__nav-item">
      <Link
        onClick={() => {
          dispatch(logOutAction());
        }}
        className="header__nav-link"
        to={AppRoute.Login}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

const HeaderNavigation = memo(():JSX.Element =>{
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <UserAuthorized
            authorizationStatus = {authorizationStatus}
          />
        </li>
        {authorizationStatus === AuthorizationStatus.Auth && Item()}
      </ul>
    </nav>
  );
}
);

HeaderNavigation.displayName = 'HeaderNavigation';

export default HeaderNavigation;

