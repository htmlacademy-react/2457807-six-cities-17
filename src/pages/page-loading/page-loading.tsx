import './style.modules.css';

function LoadingScreen(): JSX.Element {
  return (
    <section className="loading">
      <h1 className="visually-hidden">Page loading</h1>
      <div className="loader">
        {'Loading...'}
      </div>
      {/* <div className={'wrappers'}>
        <b className="loading__message">Nothing is loading yet.</b>
        <p className="favorites__status-description">
        </p>
      </div> */}
      <div className="cities__places-container cities__places-container--empty container">
        <section className="cities__no-places">
          <div className="cities__status-wrapper tabs__content">
            <b className="cities__status">No load yet</b>
          </div>
        </section>
        <div className="cities__right-section" />
      </div>
    </section>
  );
}

export default LoadingScreen;
