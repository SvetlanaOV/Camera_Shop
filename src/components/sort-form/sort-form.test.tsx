import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {createMemoryHistory } from 'history';
import SortForm from './sort-form';

describe('Component: SortForm', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <SortForm />
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByText(/Сортировать/i)).toBeInTheDocument();
    expect(screen.getByTestId('catalog-sort__inner')).toBeInTheDocument();
  });
});
