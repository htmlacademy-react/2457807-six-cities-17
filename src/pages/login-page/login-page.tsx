import { Helmet } from 'react-helmet-async';
import { LOCATIONS, PageNames } from '../../constants';
import Header from '../../components/header/header';
import LocationsItemLink from '../../components/locations-item-link/locations-item-link';
import AuthorizationForm from '../../components/authorization-form/authorization-form';
import { useAppDispatch } from '../../hooks';
import { FormEvent, useCallback, useRef } from 'react';
import { logInAction } from '../../store/api-actions';

function LoginPage(): JSX.Element {
  const pageNames:string = PageNames.Login;
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(logInAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  }, [dispatch]);
  const randomCityIndex = Math.floor(Math.random() * LOCATIONS.length);

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Страница авторизации</title>
      </Helmet>
      <Header pageNames={pageNames} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <AuthorizationForm
              loginRef = {loginRef}
              passwordRef = {passwordRef}
              onLogInSubmit = {handleSubmit}
            />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <LocationsItemLink location={LOCATIONS[randomCityIndex]} pageNames={pageNames} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
