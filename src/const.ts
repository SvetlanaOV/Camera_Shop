export enum AppRoute {
  Root = '/',
  Catalog = '/catalog',
  Camera = '/cameras',
  NotFound = '/404',
}

export enum APIRoute {
  Cameras = '/cameras',
  Promo = '/promo',
  Reviews = '/reviews'
}

export enum NameSpace {
  CamerasData = 'CamerasData',
  PromoData = 'PromoData',
  ReviewsData = 'ReviewsData',
}

export enum TabName {
  Features = 'features',
  Description = 'description',
}

export const DEFAULT_REVIEW_RATING = 0;

export const REVIEW_STAR_RATING = [
  {
    starNumber: 5,
    title: 'Отлично'
  },
  {
    starNumber: 4,
    title: 'Хорошо'
  },
  {
    starNumber: 3,
    title: 'Нормально'
  },
  {
    starNumber: 2,
    title: 'Плохо'
  },
  {
    starNumber: 1,
    title: 'Ужасно'
  },
];

export const MAX_RATING = 5;

export const MAX_CARDS_ON_PAGE = 9;

export const DEFAULT_PAGE = 1;

export const PAGE_COUNTER_STEP = 1;

export const DEFAULT_SLIDE = 0;

export const SLIDE_COUNTER_STEP = 1;

export const SLIDE_LAST_STEP = 3;

export const MAX_SLIDES_ON_PAGE = 3;

export const MIN_SLIDES_ON_PAGE = 0;

export const REVIEW_COUNTER_STEP = 3;

export const DEFAULT_REVIEW = 0;

export const DEFAULT_TIMEOUT = 500;
