import {Review} from '../../types/review';
import ReviewItem from '../review-item/review-item';

type ReviewItemProps = {
  reviews: Review[];
}

function ReviewList({reviews}: ReviewItemProps): JSX.Element {
  return(
    <section className="review-block">
      <div className="container">
        <div className="page-content__headed">
          <h2 className="title title--h3">Отзывы</h2>
          <button className="btn" type="button">Оставить свой отзыв</button>
        </div>
        <ul className="review-block__list">
          {reviews.map((review) => (
            <ReviewItem
              key={review.id}
              reviewContent={review}
            />
          ))}
        </ul>
        <div className="review-block__buttons">
          <button className="btn btn--purple" type="button">Показать больше отзывов
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReviewList;
