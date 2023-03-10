import {render, screen} from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import {store} from '../../store';
import mockCameras from '../../mocks/mock-cameras';
import HistoryRouter from '../history-router/history-router';
import CardList from './card-list';

describe('Component: CardList', () => {
  const history = createMemoryHistory();
  const cameras = mockCameras();
  it ('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardList cameras={cameras}/>
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByTestId('catalog__cards')).toBeInTheDocument();
  });
});
