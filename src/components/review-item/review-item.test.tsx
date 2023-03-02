import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {createMemoryHistory} from 'history';
import mockReview from '../../mocks/mock-review';
import ReviewItem from './review-item';

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    const review = mockReview();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <ReviewItem reviewItem={review} />
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByText(/Комментарий/i)).toBeInTheDocument();
    expect(screen.getByText(/Достоинства/i)).toBeInTheDocument();
  });
});
