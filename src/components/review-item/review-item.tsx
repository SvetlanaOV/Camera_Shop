import {Review} from '../../types/review';
import {MAX_RATING} from '../../const';
import {humanizeDate} from '../../utils';

type ReviewItemProps = {
  reviewItem: Review;
}

function ReviewItem({reviewItem}: ReviewItemProps): JSX.Element {
  const {userName, rating, advantage, disadvantage, review, createAt} = reviewItem;

  const reviewDate = humanizeDate(createAt);

  return (
    <li className="review-card">
      <div className="review-card__head">
        <p className="title title--h4">{userName}</p>
        <time className="review-card__data" dateTime={reviewDate}>{reviewDate}</time>
      </div>
      <div className="rate review-card__rate">
        {Array.from({length: MAX_RATING}, (_, index) => (
          <svg width="17" height="16" aria-hidden="true" key={index}>
            <use xlinkHref={`#icon-${index < rating ? 'full-' : ''}star`}></use>
          </svg>
        ))}
        <p className="visually-hidden">Оценка: {rating}</p>
      </div>
      <ul className="review-card__list">
        <li className="item-list"><span className="item-list__title">Достоинства:</span>
          <p className="item-list__text">{advantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Недостатки:</span>
          <p className="item-list__text">{disadvantage}</p>
        </li>
        <li className="item-list"><span className="item-list__title">Комментарий:</span>
          <p className="item-list__text">{review}</p>
        </li>
      </ul>
    </li>
  );
}

export default ReviewItem;
