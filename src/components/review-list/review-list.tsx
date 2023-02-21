import {useState} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getReviewList} from '../../store/reviews-data/selectors';
import {REVIEW_COUNTER_STEP, DEFAULT_REVIEW} from '../../const';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  setModalOpened: (status: boolean) => void;
};

function ReviewList({setModalOpened}: ReviewListProps): JSX.Element {
  const [featuredReviewList, setFeaturedReviewList] = useState(DEFAULT_REVIEW);

  const reviewList = useAppSelector(getReviewList);

  const reviewListSlice = reviewList.slice(DEFAULT_REVIEW, (featuredReviewList + REVIEW_COUNTER_STEP));

  return(
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button onClick={() => {setModalOpened(true); document.body.style.overflow = 'hidden';}} className="btn" type="button">Оставить свой отзыв</button>
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
      <button className="up-btn">
        <svg width="12" height="18" aria-hidden="true">
          <use xlinkHref="#icon-arrow2"></use>
        </svg>
      </button>
    </section>
  );
}

export default ReviewList;
