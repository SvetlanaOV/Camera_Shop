import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import {store} from '../../store';
import mockCamera from '../../mocks/mock-camera';
import HistoryRouter from '../history-router/history-router';
import CameraProduct from './camera-product';

describe('Component: CameraProduct', () => {
  it ('should render corectly', () => {
    const history = createMemoryHistory();
    const camera = mockCamera();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CameraProduct />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('product')).toBeInTheDocument();
    expect(screen.queryByText(camera.description)).not.toBeInTheDocument();
  });
});
