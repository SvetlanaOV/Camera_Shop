import {useState} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getSimilarCameraList} from '../../store/cameras-data/selectors';
import {DEFAULT_SLIDE, MAX_SLIDES_ON_PAGE, SLIDE_COUNT_STEP} from '../../const';
import Card from '../card/card';

function SimilarCardList (): JSX.Element {
  const [firstSlideCount, setFirstSlideCount] = useState(DEFAULT_SLIDE);

  const similarCameraList = useAppSelector(getSimilarCameraList);
  const similarCameraListSlice = similarCameraList.slice(firstSlideCount, (firstSlideCount + MAX_SLIDES_ON_PAGE));

  return (
    <div className="product-similar__slider">
      <div className="product-similar__slider-list">
        {similarCameraListSlice.map((camera) => (
          <div key={camera.id} className="product-card is-active">
            <Card
              key={camera.id}
              camera={camera}
            />
          </div>
        ))}
      </div>
      <button onClick={() => setFirstSlideCount(firstSlideCount - SLIDE_COUNT_STEP)} className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд" disabled={firstSlideCount === DEFAULT_SLIDE}>
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
      <button onClick={() => setFirstSlideCount(firstSlideCount + SLIDE_COUNT_STEP)} className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд" disabled={firstSlideCount === similarCameraList.length - SLIDE_COUNT_STEP}>
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
    </div>
  );
}

export default SimilarCardList;
