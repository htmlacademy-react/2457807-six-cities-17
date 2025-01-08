import { Helmet } from 'react-helmet-async';
import { PageNames } from '../../constants';
import Header from '../../components/header/header';
import LocationsItemLink from '../../components/locations-item-link/locations-item-link';
import AuthorizationForm from '../../components/authorization-form/authorization-form';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FormEvent, useRef } from 'react';
import { loginAction } from '../../store/api-actions';

function LoginPage(): JSX.Element {
  const location = useAppSelector((state) => state.currentLocations);
  const pageNames:string = PageNames.Login;
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };
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
              <LocationsItemLink location={location} pageNames={pageNames} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
