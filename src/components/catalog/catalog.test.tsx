import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {store} from '../../store';
import HistoryRouter from '../history-router/history-router';
import Catalog from './catalog';

describe('Component: Catalog', () => {
  const history = createMemoryHistory();

  it ('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Catalog />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
    expect(screen.getByTestId('catalog__content')).toBeInTheDocument();
  });
});
