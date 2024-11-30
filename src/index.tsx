import React from 'react';
import ReactDOM from 'react-dom/client';
import { offers } from './mock/list-offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
console.log(offers);
root.render(
  <React.StrictMode>
    <h1>Hello, World!</h1>
  </React.StrictMode>
);
