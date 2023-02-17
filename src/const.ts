export enum AppRoute {
  Root = '/',
  Catalog = '/catalog',
  Camera = '/cameras',
}

export enum APIRoute {
  Cameras = '/cameras',
  Promo = '/promo',
}

export enum NameSpace {
  CamerasData = 'CamerasData',
  PromoData = 'PromoData',
  ReviewsData = 'ReviewsData',
}

export enum TabName {
  Features = 'Features',
  Description = 'Description'
}

export const MAX_RATING = 5;

export const MAX_CARDS_ON_PAGE = 9;

export const DEFAULT_PAGE = 1;

export const PAGE_COUNTER_STEP = 1;

export const DEFAULT_SLIDE = 0;

export const SLIDE_COUNTER_STEP = 1;

export const MAX_SLIDES_ON_PAGE = 3;

export const MIN_SLIDES_ON_PAGE = 0;

export const REVIEW_COUNTER_STEP = 3;

export const DEFAULT_REVIEW = 0;
