import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store';
import { loadOfferList } from './store/action';
import { offers } from './mock/offers';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(loadOfferList(offers));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
