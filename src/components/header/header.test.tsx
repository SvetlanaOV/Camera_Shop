import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import HistoryRouter from '../history-router/history-router';
import {store} from '../../store';
import Header from './header';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <Header />
        </Provider>
      </HistoryRouter>
    );

    expect(screen.getByTestId('main-nav')).toBeInTheDocument();
    expect(screen.getByText(/Доставка/i)).toBeInTheDocument();
  });
});
