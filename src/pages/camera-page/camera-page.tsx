import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ReviewList from '../../components/review-list/review-list';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { mockReview } from '../../mock/review';

function CameraPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs />
          <div className="page-content__section">
            <section className="product">
              <div className="container">
                <div className="product__img">
                  <picture>
                    <source type="image/webp" srcSet="img/content/img1.webp, img/content/img1@2x.webp 2x" />
                    <img src="img/content/img1.jpg" srcSet="img/content/img1@2x.jpg 2x" width="560" height="480" alt="Ретрокамера Das Auge IV" />
                  </picture>
                </div>
                <div className="product__content">
                  <h1 className="title title--h3">Ретрокамера «Das Auge IV»</h1>
                  <div className="rate product__rate">
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="!#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="!#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="!#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="!#icon-full-star"></use>
                    </svg>
                    <svg width="17" height="16" aria-hidden="true">
                      <use xlinkHref="!#icon-star"></use>
                    </svg>
                    <p className="visually-hidden">Рейтинг: 4</p>
                    <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>12</p>
                  </div>
                  <p className="product__price"><span className="visually-hidden">Цена:</span>73 450 ₽</p>
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
                            <p className="item-list__text"> DA4IU67AD5</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Категория:</span>
                            <p className="item-list__text">Видеокамера</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Тип камеры:</span>
                            <p className="item-list__text">Коллекционная</p>
                          </li>
                          <li className="item-list"><span className="item-list__title">Уровень:</span>
                            <p className="item-list__text">Любительский</p>
                          </li>
                        </ul>
                      </div>
                      <div className="tabs__element is-active">
                        <div className="product__tabs-text">
                          <p>Немецкий концерн BRW разработал видеокамеру Das Auge IV в&nbsp;начале 80-х годов, однако она до&nbsp;сих пор пользуется популярностью среди коллекционеров и&nbsp;яростных почитателей старинной техники.</p>
                          <p>Вы&nbsp;тоже можете прикоснуться к&nbsp;волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с&nbsp;Das Auge IV&nbsp;начнётся ваш путь к&nbsp;наградам всех престижных кинофестивалей.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <section className="product-similar">
              <div className="container">
                <h2 className="title title--h3">Похожие товары</h2>
                <div className="product-similar__slider">
                  <div className="product-similar__slider-list">
                    <div className="product-card is-active">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/img9.webp, img/content/img9@2x.webp 2x" />
                          <img src="img/content/img9.jpg" srcSet="img/content/img9@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат FastShot MR-5" />
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <div className="rate product-card__rate">
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-star"></use>
                          </svg>
                          <p className="visually-hidden">Рейтинг: 4</p>
                          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>12</p>
                        </div>
                        <p className="product-card__title">Фотоаппарат FastShot MR-5</p>
                        <p className="product-card__price"><span className="visually-hidden">Цена:</span>18 970 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn--purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn--transparent" href="!#">Подробнее
                        </a>
                      </div>
                    </div>
                    <div className="product-card is-active">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/img1.webp, img/content/img1@2x.webp 2x" />
                          <img src="img/content/img1.jpg" srcSet="img/content/img1@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <div className="rate product-card__rate">
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-star"></use>
                          </svg>
                          <p className="visually-hidden">Рейтинг: 3</p>
                          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>23</p>
                        </div>
                        <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
                        <p className="product-card__price"><span className="visually-hidden">Цена:</span>73 450 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn--purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn--transparent" href="!#">Подробнее
                        </a>
                      </div>
                    </div>
                    <div className="product-card is-active">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/img5.webp, img/content/img5@2x.webp 2x" />
                          <img src="img/content/img5.jpg" srcSet="img/content/img5@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат Instaprinter P2" />
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <div className="rate product-card__rate">
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <p className="visually-hidden">Рейтинг: 5</p>
                          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>849</p>
                        </div>
                        <p className="product-card__title">Фотоаппарат Instaprinter P2</p>
                        <p className="product-card__price"><span className="visually-hidden">Цена:</span>8 430 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn--purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn--transparent" href="!#">Подробнее
                        </a>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/img4.webp, img/content/img4@2x.webp 2x" />
                          <img src="img/content/img4.jpg" srcSet="img/content/img4@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат FastShot MR-5" />
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <div className="rate product-card__rate">
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-star"></use>
                          </svg>
                          <p className="visually-hidden">Рейтинг: 4</p>
                          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>12</p>
                        </div>
                        <p className="product-card__title">Фотоаппарат FastShot MR-5</p>
                        <p className="product-card__price"><span className="visually-hidden">Цена:</span>18 970 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn--purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn--transparent" href="!#">Подробнее
                        </a>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/img3.webp, img/content/img3@2x.webp 2x" />
                          <img src="img/content/img3.jpg" srcSet="img/content/img3@2x.jpg 2x" width="280" height="240" alt="Ретрокамера «Das Auge IV»" />
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <div className="rate product-card__rate">
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-star"></use>
                          </svg>
                          <p className="visually-hidden">Рейтинг: 3</p>
                          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>23</p>
                        </div>
                        <p className="product-card__title">Ретрокамера «Das Auge IV»</p>
                        <p className="product-card__price"><span className="visually-hidden">Цена:</span>73 450 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn--purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn--transparent" href="!#">Подробнее
                        </a>
                      </div>
                    </div>
                    <div className="product-card">
                      <div className="product-card__img">
                        <picture>
                          <source type="image/webp" srcSet="img/content/img11.webp, img/content/img11@2x.webp 2x" />
                          <img src="img/content/img11.jpg" srcSet="img/content/img11@2x.jpg 2x" width="280" height="240" alt="Фотоаппарат Instaprinter P2" />
                        </picture>
                      </div>
                      <div className="product-card__info">
                        <div className="rate product-card__rate">
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <svg width="17" height="16" aria-hidden="true">
                            <use xlinkHref="!#icon-full-star"></use>
                          </svg>
                          <p className="visually-hidden">Рейтинг: 5</p>
                          <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>849</p>
                        </div>
                        <p className="product-card__title">Фотоаппарат Instaprinter P2</p>
                        <p className="product-card__price"><span className="visually-hidden">Цена:</span>8 430 ₽
                        </p>
                      </div>
                      <div className="product-card__buttons">
                        <button className="btn btn--purple product-card__btn" type="button">Купить
                        </button>
                        <a className="btn btn--transparent" href="!#">Подробнее
                        </a>
                      </div>
                    </div>
                  </div>
                  <button className="slider-controls slider-controls--prev" type="button" aria-label="Предыдущий слайд" disabled>
                    <svg width="7" height="12" aria-hidden="true">
                      <use xlinkHref="!#icon-arrow"></use>
                    </svg>
                  </button>
                  <button className="slider-controls slider-controls--next" type="button" aria-label="Следующий слайд">
                    <svg width="7" height="12" aria-hidden="true">
                      <use xlinkHref="!#icon-arrow"></use>
                    </svg>
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div className="page-content__section">
            <ReviewList reviews={mockReview}/>
          </div>
        </div >
      </main >
      <Footer />
    </div>
  );
}

export default CameraPage;