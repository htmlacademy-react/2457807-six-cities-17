import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../constants';
import MainPage from '../../pages/main-page/main-page';
import FullOfferPage from '../../pages/full-offer-page/full-offer-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { PrivateRoute } from '../private-route/private-route';
import { offers } from '../../mock/offers';
import User from '../../mock/users';
import { HelmetProvider } from 'react-helmet-async';


function App(): JSX.Element {
  const authorizationStatus = User.token ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path = {AppRoute.Root}
            element = {<MainPage offers={offers} />}
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
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

