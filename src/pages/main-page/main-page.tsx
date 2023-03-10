import {Helmet} from 'react-helmet-async';
import {useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {AppRoute, MAX_CARDS_ON_PAGE} from '../../const';
import {getCameras} from '../../store/cameras-data/selectors';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Catalog from '../../components/catalog/catalog';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import NotFoundPage from '../not-found-page/not-found-page';

function MainPage(): JSX.Element {
  const cameras = useAppSelector(getCameras);

  const {pageId} = useParams();
  const navigate = useNavigate();

  const pageCount = Math.ceil(cameras.length / MAX_CARDS_ON_PAGE);

  useEffect(() => {
    if (!Number(pageId)) {
      navigate(AppRoute.NotFound);
    }
  }, [pageId, navigate]);

  if ((Number(pageId) > pageCount || Number(pageId) <= 0) && pageCount !== 0) {
    return <NotFoundPage />;
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Camera shoр. Каталог</title>
      </Helmet>
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <Breadcrumbs />
          <Catalog />
        </div >
      </main >
      <Footer />
    </div>
  );
}

export default MainPage;
