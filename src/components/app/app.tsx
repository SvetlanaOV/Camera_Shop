import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import MainPage from '../../pages/main-page/main-page';
import CameraPage from '../../pages/camera-page/camera-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Catalog}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Camera}
          element={<CameraPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
