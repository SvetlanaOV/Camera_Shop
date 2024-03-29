import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {APIRoute} from '../../const';
import {Camera} from '../../types/camera';
import {MAX_RATING} from '../../const';
import './card.css';

type CardProps = {
  camera: Camera;
}

function Card({camera}: CardProps) {
  const {id, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x, name, rating, reviewCount, price, category} = camera;

  return(
    <Fragment key={id}>
      <div className="product-card__img" data-testid="product-card__img">
        <picture>
          <source type="image/webp" srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`} />
          <img src={previewImg} srcSet={`/${previewImg2x} 2x`} width="280" height="240" alt={`${category} ${name}`} />
        </picture>
      </div>
      <div className="product-card__info">
        <div className="rate product-card__rate">
          {Array.from({length: MAX_RATING}, (_, index) => (
            <svg width="17" height="16" aria-hidden="true" key={index}>
              <use xlinkHref={`#icon-${index < rating ? 'full-' : ''}star`}></use>
            </svg>
          ))}
          <p className="visually-hidden">Рейтинг: {rating}</p>
          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
        </div>
        <p className="product-card__title">{`${category} ${name}`}</p>
        <p className="product-card__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>
      </div>
      <div className="product-card__buttons">
        <button className="btn btn--purple product-card__btn" type="button">Купить</button>
        <Link className="btn btn--transparent" to={`${APIRoute.Cameras}/${id}`}>Подробнее</Link>
      </div>
    </Fragment>
  );
}

export default Card;
