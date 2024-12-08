import Header from '../../components/header/header';
import LocationsItemLink from '../../components/locations-item-link/locations-item-link';
import AuthorizationForm from '../../components/authorization-form/authorization-form';
import { PageNames } from '../../constans';
import { Helmet } from 'react-helmet-async';


function LoginPage(): JSX.Element {
  const location = 'Amsterdam';
  const pageNames:string = PageNames.Login;
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
            <AuthorizationForm />
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
