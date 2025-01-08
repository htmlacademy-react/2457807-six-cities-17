import './style.modules.css';

function LoadingScreen(): JSX.Element {
  return (
    <section className="loading">
      <h1 className="visually-hidden">Page loading</h1>
      <div className="loader">
        {'Loading...'}
      </div>
      <div className="cities__status-wrapper tabs__content">
        <b className="cities__status">No load yet</b>
      </div>
    </section>
  );
}

export default LoadingScreen;
