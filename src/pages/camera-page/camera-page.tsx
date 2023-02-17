
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ReviewList from '../../components/review-list/review-list';
import CameraProduct from '../../components/camera-product/camera-product';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SimilarCardList from '../../components/similar-card-list/similar-card-list';
import {getCurrentCamera, getSimilarCameraList} from '../../store/cameras-data/selectors';
import {fetchSimilarCameraListAction, fetchCurrentCameraAction, fetchReviewListAction} from '../../store/api-actions';
import {MIN_SLIDES_ON_PAGE} from '../../const';

function CameraPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const currentCamera = useAppSelector(getCurrentCamera);
  const similarCameraList = useAppSelector(getSimilarCameraList);

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentCameraAction(id));
      dispatch(fetchSimilarCameraListAction(id));
      dispatch(fetchReviewListAction(id));
    }
  }, [id, dispatch]);

  return (
    <div className="wrapper">
      <Helmet>
        <title>Camera shop. Страница товара</title>
      </Helmet>
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs camera={currentCamera}/>
          <div className="page-content__section">
            <CameraProduct />
          </div>
          <div className="page-content__section">
            <section className="product-similar">
              <div className="container">
                <h2 className="title title--h3">Похожие товары</h2>
                {(similarCameraList.length !== MIN_SLIDES_ON_PAGE) ? <SimilarCardList /> : ''}
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <ReviewList />
          </div>
        </div >
      </main >
      <Footer />
    </div>
  );
}

export default CameraPage;
