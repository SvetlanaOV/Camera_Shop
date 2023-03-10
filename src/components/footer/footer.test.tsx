import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import HistoryRouter from '../history-router/history-router';
import {store} from '../../store';
import Footer from './footer';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <Footer />
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByText('Поддержка')).toBeInTheDocument();
    expect(screen.getByText('Задать вопрос')).toBeInTheDocument();
  });
});
