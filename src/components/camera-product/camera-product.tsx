import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {getCurrentCamera} from '../../store/cameras-data/selectors';
import { fetchCurrentCameraAction } from '../../store/api-actions';
import { MAX_RATING } from '../../const';

function CameraProduct(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  const currentCamera = useAppSelector(getCurrentCamera);

  useEffect(() => {
    if (id) {
      dispatch(fetchCurrentCameraAction(Number(id)));
    }
  }, [id, dispatch]);

  const {previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, name, type, rating, reviewCount, price, vendorCode, category, level, description} = currentCamera;

  return(
    <section className="product">
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
            <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
          </div>
          <p className="product__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>
          <button className="btn btn--purple" type="button">
            <svg width="24" height="16" aria-hidden="true">
              <use xlinkHref="!#icon-add-basket"></use>
            </svg>Добавить в корзину
          </button>
          <div className="tabs product__tabs">
            <div className="tabs__controls product__tabs-controls">
              <button className="tabs__control" type="button">Характеристики</button>
              <button className="tabs__control is-active" type="button">Описание</button>
            </div>
            <div className="tabs__content">
              <div className="tabs__element">
                <ul className="product__tabs-list">
                  <li className="item-list"><span className="item-list__title">Артикул:</span>
                    <p className="item-list__text">{vendorCode}</p>
                  </li>
                  <li className="item-list"><span className="item-list__title">Категория:</span>
                    <p className="item-list__text">{category}</p>
                  </li>
                  <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                    <p className="item-list__text">{type}</p>
                  </li>
                  <li className="item-list"><span className="item-list__title">Уровень:</span>
                    <p className="item-list__text">{level}</p>
                  </li>
                </ul>
              </div>
              <div className="tabs__element is-active">
                <div className="product__tabs-text">
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CameraProduct;
