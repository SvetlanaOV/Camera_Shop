import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {configureMockStore} from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import {AppRoute} from '../../const';
import App from './app';
import mockCameras from '../../mocks/mock-cameras';
import mockPromoCamera from '../../mocks/mock-promo-camera';
import mockCamera from '../../mocks/mock-camera';
import mockReview from '../../mocks/mock-review';

const mockStore = configureMockStore();

const cameras = mockCameras();
const camera = mockCamera();
const promo = mockPromoCamera();
const reviews = mockReview();

const store = mockStore({
  Promo: {promo: promo, isDataLoading: false},
  Cameras: {isDataLoading: false, cameras: cameras, currentCamera: camera, similarCameraList: cameras},
  Reviews: {reviews: reviews, isDataLoading: false},
});

const history = createMemoryHistory();

const fakeApp = (
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

window.scrollTo = jest.fn();

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.Root);

    render(fakeApp);

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });

  it('should render CatalogPage when user navigate to "/catalog/id"', () => {
    history.push('/catalog/2');

    render(fakeApp);

    expect(screen.getByText(/Каталог фото- и видеотехники/i)).toBeInTheDocument();
  });

  it('should render CameraPage when user navigate to "/cameras/id"', () => {
    history.push('/cameras/2');

    render(fakeApp);

    expect(screen.getByText(/Похожие товары/i)).toBeInTheDocument();
    expect(screen.getByText(/Отзывы/i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');

    render(fakeApp);

    expect(screen.getByText('404. Page not found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
