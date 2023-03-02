import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {createMemoryHistory } from 'history';
import ReviewModal from './review-modal';

describe('Component: ReviewModal', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <ReviewModal setModalOpened={() => false} setModalSuccessOpened={() => false} isModalOpened={false}/>
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByText(/Нужно оценить товар/i)).toBeInTheDocument();
    expect(screen.getByTestId('rate__message')).toBeInTheDocument();
  });
});
