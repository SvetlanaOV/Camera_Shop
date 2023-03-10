import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {store} from '../../store';
import HistoryRouter from '../history-router/history-router';
import Banner from './banner';

describe('Component: Banner', () => {
  const history = createMemoryHistory();

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Banner />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(/Новинка!/i)).toBeInTheDocument();
    expect(screen.getByText(/Профессиональная камера от известного производителя/i)).toBeInTheDocument();
  });
});
