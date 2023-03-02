import {useState} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getSimilarCameraList} from '../../store/cameras-data/selectors';
import {DEFAULT_SLIDE, MAX_SLIDES_ON_PAGE, SLIDE_COUNTER_STEP} from '../../const';
import Card from '../card/card';

function SimilarCardList (): JSX.Element {
  const [firstSlideCounter, setFirstSlideCounter] = useState(DEFAULT_SLIDE);

  const similarCameraList = useAppSelector(getSimilarCameraList);
  const similarCameraListSlice = similarCameraList.slice(firstSlideCounter, (firstSlideCounter + MAX_SLIDES_ON_PAGE));

  return (
    <section className="product-similar" data-testid='product-similar'>
      <div className="container">
        <h2 className="title title--h3">Похожие товары</h2>
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
          <button onClick={() => setFirstSlideCounter(firstSlideCounter - SLIDE_COUNTER_STEP)} className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд" disabled={firstSlideCounter === DEFAULT_SLIDE}>
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
          <button onClick={() => setFirstSlideCounter(firstSlideCounter + SLIDE_COUNTER_STEP)} className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд" disabled={firstSlideCounter === (similarCameraList.length - SLIDE_COUNTER_STEP)}>
            <svg width="7" height="12" aria-hidden="true">
              <use xlinkHref="#icon-arrow"></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SimilarCardList;
