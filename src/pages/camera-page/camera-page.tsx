
import {useEffect, useState} from 'react';
import {RemoveScroll} from 'react-remove-scroll';
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
import NotFoundPage from '../not-found-page/not-found-page';
import {getCamerasLoadedData, getCurrentCamera, getSimilarCameraList} from '../../store/cameras-data/selectors';
import {fetchSimilarCameraListAction, fetchCurrentCameraAction, fetchReviewListAction} from '../../store/api-actions';
import {MIN_SLIDES_ON_PAGE} from '../../const';
import ReviewModal from '../../components/review-modal/review-modal';
import ReviewModalSuccess from '../../components/review-modal-success/review-modal-success';
import LoadingScreen from '../loading-screen/loading-screen';

function CameraPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const currentCamera = useAppSelector(getCurrentCamera);
  const similarCameraList = useAppSelector(getSimilarCameraList);
  const isCamerasDataLoading = useAppSelector(getCamerasLoadedData);

  const [isModalOpened, setModalOpened] = useState(false);
  const [isModalSuccessOpened, setModalSuccessOpened] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentCameraAction(id));
      dispatch(fetchSimilarCameraListAction(id));
      dispatch(fetchReviewListAction(id));
    }
  }, [id, dispatch]);

  if(isCamerasDataLoading) {
    return <LoadingScreen/>;
  }

  if(!currentCamera.id) {
    return <NotFoundPage/>;
  }

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
            {(similarCameraList.length !== MIN_SLIDES_ON_PAGE) ? <SimilarCardList /> : ''}
          </div>
          <div className="page-content__section">
            <ReviewList setModalOpened={setModalOpened}/>
            <RemoveScroll enabled={isModalOpened}>
              <ReviewModal isModalOpened={isModalOpened} setModalOpened={setModalOpened} setModalSuccessOpened={setModalSuccessOpened}/>
            </RemoveScroll>
            <RemoveScroll enabled={isModalSuccessOpened}>
              <ReviewModalSuccess isModalSuccessOpened={isModalSuccessOpened} setModalSuccessOpened={setModalSuccessOpened} />
            </RemoveScroll>
          </div>
        </div >
      </main >
      <Footer />
    </div>
  );
}

export default CameraPage;
