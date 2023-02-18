import {useState, ChangeEvent, FormEvent, Fragment} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {RevieWPost} from '../../types/review';
import {sendNewReviewAction} from '../../store/api-actions';
import {getCurrentCamera} from '../../store/cameras-data/selectors';
import {REVIEW_STAR_RATING} from '../../const';

type ReviewModalProps = {
  isModalOpened: boolean;
  setModalOpened: (status: boolean) => void;
};

function ReviewModal({isModalOpened, setModalOpened}: ReviewModalProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    cameraId: 0,
    userName: '',
    advantage: '',
    disadvantage: '',
    review: '',
    rating: 0,
  });

  const handleReviewFormChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const {name, value} = evt.target;
    setFormData({...formData, [name]: value});
  };

  const onSubmit = (reviewData: RevieWPost) => {
    dispatch(sendNewReviewAction(reviewData));
  };

  const currentCamera = useAppSelector(getCurrentCamera);

  const handleReviewFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (currentCamera.id) {
      onSubmit({
        cameraId: currentCamera.id,
        userName: formData.userName,
        advantage: formData.advantage,
        disadvantage: formData.disadvantage,
        review: formData.review,
        rating: Number(formData.rating),
      });
    }

    setFormData({...formData,
      cameraId: 0,
      userName: '',
      advantage: '',
      disadvantage: '',
      review: '',
      rating: 0,
    });
  };


  return(
    <div className={`modal ${isModalOpened ? 'is-active' : ''}`}>
      <div className="modal__wrapper">
        <div className="modal__overlay">
        </div>
        <div className="modal__content">
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">
            <form method="post" action="#" onSubmit={handleReviewFormSubmit}>
              <div className="form-review__rate">
                <fieldset className="rate form-review__item">
                  <legend className="rate__caption">Рейтинг
                    <svg width="9" height="9" aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"></use>
                    </svg>
                  </legend>
                  <div className="rate__bar">
                    <div className="rate__group">
                      {REVIEW_STAR_RATING.map((item) => (
                        <Fragment key = {item.starNumber}>
                          <input onChange={handleReviewFormChange} className="visually-hidden" id={`star-${item.starNumber}`} name="rating" type="radio" value={item.starNumber} checked={(item.starNumber === Number(formData.rating))}/>
                          <label className="rate__label" htmlFor={`star-${item.starNumber}`} title={item.title}></label>
                        </Fragment>
                      )
                      )}
                    </div>
                    <div className="rate__progress">
                      <span className="rate__stars">{formData.rating}</span>
                      <span>/</span>
                      <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                  <p className="rate__message">Нужно оценить товар</p>
                </fieldset>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Ваше имя
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input onChange={handleReviewFormChange} type="text" name="userName" id="userName" value={formData.userName} placeholder="Введите ваше имя" required />
                  </label>
                  <p className="custom-input__error">Нужно указать имя</p>
                </div>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Достоинства
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input onChange={handleReviewFormChange} type="text" name="advantage" id="advantage" value={formData.advantage} placeholder="Основные преимущества товара" required />
                  </label>
                  <p className="custom-input__error">Нужно указать достоинства</p>
                </div>
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">Недостатки
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <input onChange={handleReviewFormChange} type="text" name="disadvantage" id="disadvantage" value={formData.disadvantage} placeholder="Главные недостатки товара" required />
                  </label>
                  <p className="custom-input__error">Нужно указать недостатки</p>
                </div>
                <div className="custom-textarea form-review__item">
                  <label>
                    <span className="custom-textarea__label">Комментарий
                      <svg width="9" height="9" aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"></use>
                      </svg>
                    </span>
                    <textarea onChange={handleReviewFormChange} name="review" id="review" value={formData.review} minLength={5} placeholder="Поделитесь своим опытом покупки"></textarea>
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
