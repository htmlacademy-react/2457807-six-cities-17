import { AuthorizedUser } from '../../types/authorized-user';
import User from '../../mock/users';
import { offers } from '../../mock/list-offers';
import { ListOffer } from '../../types/list-offer';

function UserAuthorized({token, userName}:AuthorizedUser, listOffers:ListOffer[]): JSX.Element {

  if (token) {
    return (
      <>
        <div className="header__avatar-wrapper user__avatar-wrapper"></div>
        <span className="header__user-name user__name">{userName}</span>
        <span className="header__favorite-count">{listOffers.filter((offer) => offer.isFavorite).length}</span>
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
      <a className="header__nav-link" href="#">
        <span className="header__signout">Sign out</span>
      </a>
    </li>
  );
}

function HeaderNavigation({token, userName}:AuthorizedUser, listOffers:ListOffer[]):JSX.Element{
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <UserAuthorized
              token={token}
              userName={userName}
              listOffers={listOffers}
            />
          </a>
        </li>
        {token && Item()}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
