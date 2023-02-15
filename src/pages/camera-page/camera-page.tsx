
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ReviewList from '../../components/review-list/review-list';
import CameraProduct from '../../components/camera-product/camera-product';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SimilarCardList from '../../components/similar-card-list/similar-card-list';
import {getCurrentCamera, getSimilarCameraList} from '../../store/cameras-data/selectors';
import { mockReview } from '../../mock/review';
import { fetchSimilarCameraListAction } from '../../store/api-actions';

function CameraPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchSimilarCameraListAction(Number(id)));
    }
  }, [id, dispatch]);

  const camera = useAppSelector(getCurrentCamera);
  const similarCameraList = useAppSelector(getSimilarCameraList);
  //todo: Тут просто обрезаю
  const similarCameraListSlice = similarCameraList.slice(0, 3);

  return (
    <div className="wrapper">
      <Helmet>
        <title>Camera shoр. Страница товара</title>
      </Helmet>
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs camera={camera}/>
          <div className="page-content__section">
            <CameraProduct />
          </div>
          <div className="page-content__section">
            <section className="product-similar">
              <div className="container">
                <h2 className="title title--h3">Похожие товары</h2>
                <div className="product-similar__slider">
                  <div className="product-similar__slider-list">
                    <SimilarCardList cameras={similarCameraListSlice}/>
                  </div>
                  <button className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд" disabled>
                    <svg width="7" height="12" aria-hidden="true">
                      <use xlinkHref="#icon-arrow"></use>
                    </svg>
                  </button>
                  <button className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд">
                    <svg width="7" height="12" aria-hidden="true">
                      <use xlinkHref="#icon-arrow"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <ReviewList reviews={mockReview}/>
          </div>
        </div >
      </main >
      <Footer />
    </div>
  );
}

export default CameraPage;
