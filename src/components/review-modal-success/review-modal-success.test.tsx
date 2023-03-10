import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {createMemoryHistory } from 'history';
import ReviewModalSuccess from './review-modal-success';

describe('Component: ReviewModalSuccess', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <ReviewModalSuccess setModalSuccessOpened={() => false} isModalSuccessOpened={false}/>
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByText(/Спасибо за отзыв/i)).toBeInTheDocument();
    expect(screen.getByText(/Вернуться к покупкам/i)).toBeInTheDocument();
  });
});
