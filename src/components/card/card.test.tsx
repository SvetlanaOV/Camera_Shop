import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {createMemoryHistory } from 'history';
import Card from './card';
import mockCamera from '../../mocks/mock-camera';

describe('Component: Card', () => {
  const history = createMemoryHistory();
  const camera = mockCamera();

  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Card camera={camera} />
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/Цена/i)).toBeInTheDocument();
    expect(screen.getByTestId('product-card__img')).toBeInTheDocument();
  });
});
