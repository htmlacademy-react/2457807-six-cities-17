import { memo } from 'react';
import './style.modules.css';

const LoadingScreen = memo((): JSX.Element => (
  <section className="loading">
    <h1 className="visually-hidden">Page loading</h1>
    <div className="loader">
      {'Loading...'}
    </div>
    <div className="cities__status-wrapper tabs__content">
      <b className="cities__status">No load yet</b>
    </div>
  </section>
));
LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;
