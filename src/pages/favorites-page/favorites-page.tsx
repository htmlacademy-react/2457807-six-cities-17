import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { PageNames } from '../../constans';
import FavoritesList from '../../components/favorites-list/favorites-card-list';
import { FooterLogoAttributes } from '../../constans';
import { offers } from '../../mock/list-offers';

function FavoriteEmpty(): JSX.Element {
  return (
    <main className="page__main page__main--favorites page__main--favorites-empty">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">Favorites (empty)</h1>
          <div className="favorites__status-wrapper">
            <b className="favorites__status">Nothing yet saved.</b>
            <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
          </div>
        </section>
      </div>
    </main>
  );
}

function FavoritesPage(): JSX.Element{
  const pageNames:string = PageNames.Favorites;
  const offersFavorite = offers.filter((offer) => offer.isFavorite === true);
  const offersFavoriteCount = offersFavorite.length;
  return (
    <div className= {offersFavoriteCount !== 0 ? 'page' : 'page page--favorites-empty'}>
      <Header pageNames={pageNames}/>
      {
        offersFavoriteCount === 0 ? <FavoriteEmpty/> :
          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <FavoritesList
                  offersFavorite = {offersFavorite}
                  pageNames={pageNames}
                />
              </section>
            </div>
          </main>
      }
      <Footer>
        <Logo logoAttributes={FooterLogoAttributes} />
      </Footer>
    </div>
  );
}

export default FavoritesPage;
