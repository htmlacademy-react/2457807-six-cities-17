import { Link } from 'react-router-dom';
import { AppRoute } from '../../constants';
import { AuthorizationType} from '../../types/authorized-user';
import { ListOfferType } from '../../types/offers';
import { logoutAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';

type headerNavigationProps = {
  User: AuthorizationType;
  Offers: ListOfferType[];
}

function UserAuthorized({User, Offers}:headerNavigationProps): JSX.Element {
  const {token, email} = User;
  if (token) {
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
          dispatch(logoutAction());
        }}
        className="header__nav-link"
        to={AppRoute.Login}
      >
        <span className="header__signout">Sign out</span>
      </Link>
    </li>
  );
}

function HeaderNavigation({User, Offers}:headerNavigationProps):JSX.Element{
  const {token} = User;
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <UserAuthorized
            User={User}
            Offers = {Offers}
          />
        </li>
        {token && Item()}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;

