import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus} from '../../constants';
import { logOutAction } from '../../store/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectFavorites } from '../../store/offers/offers-selectors';
import { selectAuthorizationStatus, selectUser } from '../../store/user/user-selector';
import { Fragment, memo } from 'react';

type HeaderNavigationProps = {
  pageNames: string;
}

const HeaderNavigation = memo(({pageNames} : HeaderNavigationProps):JSX.Element =>{
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const email = useAppSelector(selectUser)?.email;
  const offersFavoriteCount = useAppSelector(selectFavorites)?.length;
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            { authorizationStatus === AuthorizationStatus.Auth ?
              <Fragment>
                <span className="header__user-name user__name">{email}</span>
                <span className="header__favorite-count">{offersFavoriteCount}</span>
              </Fragment> : <span className="header__login">Sign in</span>}
          </Link>
        </li>
        {authorizationStatus === AuthorizationStatus.Auth ?
          <li className="header__nav-item">
            <Link
              onClick={() => {
                dispatch(logOutAction(pageNames));
              }}
              className="header__nav-link"
              to={ ''}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li> : ''}
      </ul>
    </nav>
  );
}
);

HeaderNavigation.displayName = 'HeaderNavigation';

export default HeaderNavigation;

