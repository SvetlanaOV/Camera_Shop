import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store';
import App from './components/app/app';
import {fetchCamerasAction, fetchPromoAction} from './store/api-actions';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browser-history';

store.dispatch(fetchCamerasAction());
store.dispatch(fetchPromoAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <HistoryRouter history={browserHistory}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
