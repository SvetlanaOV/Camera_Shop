import {useAppSelector} from '../../hooks/useAppSelector';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ReviewList from '../../components/review-list/review-list';
import CameraProduct from '../../components/camera-product/camera-product';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SimilarCardList from '../../components/similar-card-list/similar-card-list';
import {getCameras, getCurrentCamera} from '../../store/cameras-data/selectors';
import { mockReview } from '../../mock/review';

function CameraPage(): JSX.Element {
  const cameras = useAppSelector(getCameras);

  const camera = useAppSelector(getCurrentCamera);
  //todo: Подключить данные с сервера, пока просто три карточки
  const similarCameraList = cameras.slice(3, 6);

  return (
    <div className="wrapper">
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
                    <SimilarCardList cameras={similarCameraList}/>
                  </div>
                  <button className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд" disabled>
                    <svg width="7" height="12" aria-hidden="true">
                      <use xlinkHref="!#icon-arrow"></use>
                    </svg>
                  </button>
                  <button className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд">
                    <svg width="7" height="12" aria-hidden="true">
                      <use xlinkHref="!#icon-arrow"></use>
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
