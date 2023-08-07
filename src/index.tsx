import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './components/app/app';
import Offers from './components/offers/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App>
      <Offers />
    </App>
  </Provider>
  // </React.StrictMode>
);
