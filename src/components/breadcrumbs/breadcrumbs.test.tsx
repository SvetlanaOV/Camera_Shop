import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import HistoryRouter from '../../components/history-route/history-route';
import {store} from '../../store';
import Breadcrumbs from './breadcrumbs';

describe('Component: Breadcrumbs', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();

    render(
      <HistoryRouter history={history}>
        <Provider store={store}>
          <Breadcrumbs />
        </Provider>
      </HistoryRouter>,
    );

    expect(screen.getByTestId('breadcrumbs')).toBeInTheDocument();
  });
});
