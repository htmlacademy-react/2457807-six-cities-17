import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import { ListOfferType } from '../../types/offers';
import { logOutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectAuthorizationStatus, selectUser } from '../../store/selectors';

type headerNavigationProps = {
  Offers: ListOfferType[];
}

type UserAuthorizedProps = {
  Offers: ListOfferType[];
  authorizationStatus: typeof AuthorizationStatus[keyof typeof AuthorizationStatus];
}

function UserAuthorized({Offers, authorizationStatus}:UserAuthorizedProps): JSX.Element {
  const email = useAppSelector(selectUser)?.email;
  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <Link className="header__nav-link" to={AppRoute.Favorites}>
          <span className="header__user-name user__name">{email}</span>
          <span className="header__favorite-count">{Offers.filter((offer) => offer.isFavorite).length}</span>
        </Link>
      </>
    );
  }
  return (
    <>
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <Link className="header__nav-link" to={AppRoute.Login}>
        <span className="header__login">Sign in</span>
      </Link>
    </>
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

function HeaderNavigation({Offers}:headerNavigationProps):JSX.Element{
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <UserAuthorized
            Offers = {Offers}
            authorizationStatus = {authorizationStatus}
          />
        </li>
        {authorizationStatus === AuthorizationStatus.Auth && Item()}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;

