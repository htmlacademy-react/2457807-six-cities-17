import { Helmet } from 'react-helmet-async';


type MainEmptyProps = {
    location: string;
  };

function MainPageEmpty({ location }: MainEmptyProps): JSX.Element {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
          We could not find any property available at the moment in {location}
          </p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}
export default MainPageEmpty;
