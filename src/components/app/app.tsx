import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
import {AppRoute, APIRoute, DEFAULT_PAGE} from '../../const';
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
          element={<Navigate to = {`${APIRoute.Catalog}/${DEFAULT_PAGE}`} />}
        />
        <Route
          path={`${AppRoute.Catalog}`}
          element={<MainPage />}
        />
        <Route
          path={`${AppRoute.Camera}`}
          element={<CameraPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
