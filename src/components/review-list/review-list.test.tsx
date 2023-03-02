import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {createMemoryHistory } from 'history';
import ReviewList from './review-list';

describe('Component: ReviewList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <ReviewList setModalOpened={() => false}/>
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByText(/Оставить свой отзыв/i)).toBeInTheDocument();
    expect(screen.getByText(/Показать больше отзывов/i)).toBeInTheDocument();
  });
});
