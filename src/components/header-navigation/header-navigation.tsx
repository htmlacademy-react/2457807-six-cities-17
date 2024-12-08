import { Link } from 'react-router-dom';
import { AppRoute } from '../../constans';
import { AuthorizationType} from '../../types/authorized-user';
import { ListOfferType } from '../../types/list-offer';

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
        <span className="header__user-name user__name">{email}</span>
        <span className="header__favorite-count">{Offers.filter((offer) => offer.isFavorite).length}</span>
      </>
    );
  }
  return (
    <>
      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
      <span className="header__login">Sign in</span>
    </>
  );
}

function Item(): JSX.Element {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to={AppRoute.Root}>
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
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Root}>
            <UserAuthorized
              User={User}
              Offers = {Offers}
            />
          </Link>
        </li>
        {token && Item()}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
