import {useState, Fragment, FormEvent} from 'react';
import {useForm} from 'react-hook-form';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {ReviewPost} from '../../types/review';
import {sendNewReviewAction} from '../../store/api-actions';
import {getCurrentCamera} from '../../store/cameras-data/selectors';
import {REVIEW_STAR_RATING, DEFAULT_REVIEW_RATING} from '../../const';

type ReviewModalProps = {
  isModalOpened: boolean;
  setModalOpened: (status: boolean) => void;
};

function ReviewModal({isModalOpened, setModalOpened}: ReviewModalProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCamera = useAppSelector(getCurrentCamera);

  const [currentRating, setCurrentRating] = useState(DEFAULT_REVIEW_RATING);

  const {register, handleSubmit, formState: {errors}, reset} = useForm<ReviewPost>({mode: 'all'});

  const handleReviewFormSubmit = handleSubmit((review) => {
    const reviewData = {
      ...review,
      cameraId: currentCamera.id,
      rating: Number(review.rating),
    };
    dispatch(sendNewReviewAction(reviewData));

    reset();
  });

  const onSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleReviewFormSubmit(evt);
  };

  //todo: Рейтинг не очищается после отправки формы
  return(
    <div className={`modal ${isModalOpened ? 'is-active' : ''}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay">
        </div>
        <div className="modal__content">
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">
            <form method="post" action="#" onSubmit={onSubmit}>
              <div className="form-review__rate">
                <fieldset className={errors.userName ? 'rate form-review__item is-invalid' : 'rate form-review__item'}>
                  <legend className="rate__caption">Рейтинг
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </legend>
                  <div className="rate__bar">
                    <div className="rate__group">
                      {REVIEW_STAR_RATING.map((item) => (
                        <Fragment key = {item.starNumber}>
                          <input onClick={() => setCurrentRating(item.starNumber)} className="visually-hidden" id={`star-${item.starNumber}`} type="radio" value={item.starNumber} {...register('rating', {required: true})} />
                          <label className="rate__label" htmlFor={`star-${item.starNumber}`} title={item.title}></label>
                        </Fragment>
                      )
                      )}
                    </div>
                    <div className="rate__progress">
                      <span className="rate__stars">{currentRating}</span>
                      <span>/</span>
                      <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                  <p className="rate__message">Нужно оценить товар</p>
                </fieldset>
                <div className={errors.userName ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
                  <label>
                    <span className="custom-input__label">Ваше имя
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input type="text" placeholder="Введите ваше имя" {...register('userName', {required: true})} aria-invalid={errors.userName ? 'true' : 'false'}/>
                  </label>
                  <p className="custom-input__error">Нужно указать имя</p>
                </div>
                <div className={errors.advantage ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
                  <label>
                    <span className="custom-input__label">Достоинства
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input type="text" placeholder="Основные преимущества товара" {...register('advantage', {required: true})} aria-invalid={errors.advantage ? 'true' : 'false'} />
                  </label>
                  <p className="custom-input__error">Нужно указать достоинства</p>
                </div>
                <div className={errors.disadvantage ? 'custom-input form-review__item is-invalid' : 'custom-input form-review__item'}>
                  <label>
                    <span className="custom-input__label">Недостатки
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input type="text" placeholder="Главные недостатки товара" {...register('disadvantage', {required: true})} aria-invalid={errors.disadvantage ? 'true' : 'false'} />
                  </label>
                  <p className="custom-input__error">Нужно указать недостатки</p>
                </div>
                <div className={errors.review ? 'custom-textarea form-review__item is-invalid' : 'custom-textarea form-review__item'}>
                  <label>
                    <span className="custom-textarea__label">Комментарий
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <textarea placeholder="Поделитесь своим опытом покупки" {...register('review', {required: true, minLength: 5})} aria-invalid={errors.review ? 'true' : 'false'}></textarea>
                  </label>
                  <div className="custom-textarea__error">Нужно добавить комментарий</div>
                </div>
              </div>
              <button className="btn btn--purple form-review__btn" type="submit">Отправить отзыв</button>
            </form>
          </div>
          <button onClick={() => setModalOpened(false)} className="cross-btn" type="button" aria-label="Закрыть попап">
            <svg width="10" height="10" aria-hidden="true">
              <use xlinkHref="#icon-close"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
