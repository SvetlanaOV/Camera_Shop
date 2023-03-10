import {render, screen} from '@testing-library/react';
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {createMemoryHistory} from 'history';
import HistoryRouter from '../../components/history-router/history-router';
import CameraPage from './camera-page';

describe('Component: CameraPage', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <HelmetProvider>
            <CameraPage />
          </HelmetProvider>
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByTestId('product')).toBeInTheDocument();
    expect(screen.getByText(/Оставить свой отзыв/i)).toBeInTheDocument();
  });
});
