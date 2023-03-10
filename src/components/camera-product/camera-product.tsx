import {useAppSelector} from '../../hooks/useAppSelector';
import {getCurrentCamera} from '../../store/cameras-data/selectors';
import {getReviewList} from '../../store/reviews-data/selectors';
import {MAX_RATING} from '../../const';
import Tabs from '../tabs/tabs';

function CameraProduct(): JSX.Element {
  const currentCamera = useAppSelector(getCurrentCamera);
  const reviewList = useAppSelector(getReviewList);

  const {previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, name, rating, price, category} = currentCamera;

  return(
    <section className="product" data-testid='product'>
      <div className="container">
        <div className="product__img">
          <picture>
            <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`} />
            <img src={previewImg} srcSet={`/${previewImg2x} 2x`} width="560" height="480" alt={`${category} ${name}`} />
          </picture>
        </div>
        <div className="product__content">
          <h1 className="title title--h3">{`${category} ${name}`}</h1>
          <div className="rate product__rate">
            {Array.from({length: MAX_RATING}, (_, index) => (
              <svg width="17" height="16" aria-hidden="true" key={index}>
                <use xlinkHref={`#icon-${index < rating ? 'full-' : ''}star`}></use>
              </svg>
            ))}
            <p className="visually-hidden">Рейтинг: {rating}</p>
            <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewList.length}</p>
          </div>
          <p className="product__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>
          <button className="btn btn--purple" type="button">
            <svg width="24" height="16" aria-hidden="true">
              <use xlinkHref="#icon-add-basket"></use>
            </svg>Добавить в корзину
          </button>
          <Tabs />
        </div>
      </div>
    </section>
  );
}

export default CameraProduct;
