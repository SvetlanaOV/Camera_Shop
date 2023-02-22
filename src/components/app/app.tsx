import {Route, BrowserRouter, Routes, Navigate} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, DEFAULT_PAGE} from '../../const';
import MainPage from '../../pages/main-page/main-page';
import CameraPage from '../../pages/camera-page/camera-page';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
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
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
