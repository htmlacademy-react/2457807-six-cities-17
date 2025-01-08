import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoute, AuthorizationStatus } from '../../constants';
import MainPage from '../../pages/main-page/main-page';
import FullOfferPage from '../../pages/full-offer-page/full-offer-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { ScrollToTop } from '../scroll-to-top/scroll-to-top';
// import User from '../../mock/users';
import LoadingScreen from '../../pages/page-loading/page-loading';
import { useAppSelector } from '../../hooks';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

// type Status = typeof AuthorizationStatus[keyof typeof AuthorizationStatus]

function App(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const isDataLoading = useAppSelector((state) => state.isDataLoading);
  // const authorizationStatus:Status = (User.token ? AuthorizationStatus.Auth : AuthorizationStatus.Unknown);
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

