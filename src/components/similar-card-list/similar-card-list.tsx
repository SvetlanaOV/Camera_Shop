import {useState} from 'react';
import {Camera} from '../../types/camera';
import Card from '../card/card';

type SimilarCamerasProps = {
  similarCameraList: Camera[];
}

function SimilarCardList ({similarCameraList: similarCameras}: SimilarCamerasProps): JSX.Element {
  const [sliderStart, setSliderStart] = useState(1);
  const similarCameraListSlice = similarCameras.slice(sliderStart, (sliderStart + 3));

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
      <button onClick={() => setSliderStart(sliderStart - 1)} className="slider-controls slider-controls--prev" type="button"aria-label="Предыдущий слайд">
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
      <button onClick={() => setSliderStart(sliderStart + 1)} className="slider-controls slider-controls--next" aria-label="Следующий слайд">
        <svg width="7" height="12" aria-hidden="true">
          <use xlinkHref="#icon-arrow"></use>
        </svg>
      </button>
    </div>
  );
}

export default SimilarCardList;
