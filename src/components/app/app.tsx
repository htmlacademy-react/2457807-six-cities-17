import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { PrivateRoute } from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../constants';
import MainPage from '../../pages/main-page/main-page';
import FullOfferPage from '../../pages/full-offer-page/full-offer-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoadingScreen from '../../pages/page-loading/page-loading';
import { ScrollToTop } from '../scroll-to-top/scroll-to-top';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectIsDataLoading } from '../../store/offers/offers-selectors';
import { selectAuthorizationStatus } from '../../store/user/user-selector';
import { fetchFavoriteOffersAction } from '../../store/api-actions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const isDataLoading = useAppSelector(selectIsDataLoading);
  useEffect(() => {
    if(authorizationStatus === AuthorizationStatus.Auth){
      dispatch(fetchFavoriteOffersAction());
    }

  }, [authorizationStatus, dispatch]);
  if(authorizationStatus === AuthorizationStatus.Unknown || isDataLoading){
    return <LoadingScreen />;
  }
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route
            path = {AppRoute.Root}
            element = {<MainPage/>}
          />
          <Route
            path = {AppRoute.Favorites}
            element = {
              <PrivateRoute appRoute = {AppRoute.Favorites} authorizationStatus= {authorizationStatus}>
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path = {AppRoute.Offer}
            element = {<FullOfferPage />}
          />
          <Route
            path = {AppRoute.Login}
            element = {
              <PrivateRoute appRoute = {AppRoute.Login} authorizationStatus={authorizationStatus}>
                <LoginPage />
              </PrivateRoute>
            }
          />
          <Route
            path = "*"
            element = {<NotFoundPage />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;

