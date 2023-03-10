import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import LoadingScreen from './loading-screen';

describe('Component: LoadingScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <HelmetProvider>
            <LoadingScreen />
          </HelmetProvider>
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByText(/Loading .../i)).toBeInTheDocument();
  });
});
