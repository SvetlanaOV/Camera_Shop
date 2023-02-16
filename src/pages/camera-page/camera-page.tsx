
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {Helmet} from 'react-helmet-async';
import {useAppSelector} from '../../hooks/useAppSelector';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ReviewList from '../../components/review-list/review-list';
import CameraProduct from '../../components/camera-product/camera-product';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SimilarCardList from '../../components/similar-card-list/similar-card-list';
import {getCurrentCamera, getSimilarCameraList} from '../../store/cameras-data/selectors';
import { mockReview } from '../../mock/review';
import {fetchSimilarCameraListAction, fetchCurrentCameraAction} from '../../store/api-actions';

function CameraPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const camera = useAppSelector(getCurrentCamera);
  const similarCameras = useAppSelector(getSimilarCameraList);

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentCameraAction(Number(id)));
      dispatch(fetchSimilarCameraListAction(Number(id)));
    }
  }, [id, dispatch]);

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
                <SimilarCardList similarCameraList={similarCameras}/>
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
