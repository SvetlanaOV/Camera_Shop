import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-route/history-route';
import MainPage from './main-page';

describe('Component: MainPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <HelmetProvider>
            <MainPage />
          </HelmetProvider>
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
    expect(screen.getByText(/Новинка/i)).toBeInTheDocument();
  });
});
