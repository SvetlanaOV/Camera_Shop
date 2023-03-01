import {Route, Routes, Navigate} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, DEFAULT_PAGE} from '../../const';
import ScrollToTop from '../../components/scroll-to-top/scroll-to-top';
import MainPage from '../../pages/main-page/main-page';
import CameraPage from '../../pages/camera-page/camera-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Navigate to = {`${AppRoute.Catalog}/${DEFAULT_PAGE}`} />}
        />
        <Route
          path={`${AppRoute.Catalog}/:pageId`}
          element={<MainPage />}
        />
        <Route
          path={`${AppRoute.Camera}/:id`}
          element={<CameraPage />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
