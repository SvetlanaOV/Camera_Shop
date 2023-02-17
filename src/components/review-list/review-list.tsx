import {useState} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getReviewList} from '../../store/reviews-data/selectors';
import {REVIEW_COUNTER_STEP, DEFAULT_REVIEW} from '../../const';
import ReviewItem from '../review-item/review-item';

function ReviewList(): JSX.Element {
  const [featuredReviewList, setFeaturedReviewList] = useState(DEFAULT_REVIEW);

  const reviewList = useAppSelector(getReviewList);

  const reviewListSlice = reviewList.slice(DEFAULT_REVIEW, (featuredReviewList + REVIEW_COUNTER_STEP));

  return(
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button">Оставить свой отзыв</button>
        </div>
        <ul className="review-block__list">
          {reviewListSlice.map((review) => (
            <ReviewItem
              key={review.id}
              reviewItem={review}
            />
          ))}
        </ul>
        <div className={(reviewList.length !== reviewListSlice.length) ? 'review-block__buttons' : 'visually-hidden'}>
          <button onClick={() => setFeaturedReviewList(featuredReviewList + REVIEW_COUNTER_STEP)} className="btn btn--purple" type="button">
            Показать больше отзывов
          </button>
        </div>
      </div>
      <a className="up-btn" href="#header">
        <svg width="12" height="18" aria-hidden="true">
          <use xlinkHref="#icon-arrow2"></use>
        </svg>
      </a>
    </section>
  );
}

export default ReviewList;
