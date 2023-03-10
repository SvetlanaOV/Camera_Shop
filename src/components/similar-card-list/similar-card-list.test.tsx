import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-router/history-router';
import {Provider} from 'react-redux';
import {store} from '../../store';
import {createMemoryHistory } from 'history';
import SimilarCardList from './similar-card-list';

describe('Component: SimilarCardList', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <SimilarCardList />
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByText(/Похожие товары/i)).toBeInTheDocument();
    expect(screen.getByTestId('product-similar')).toBeInTheDocument();
  });
});
