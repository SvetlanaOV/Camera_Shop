export enum AppRoute {
  Root = '/',
  Catalog = '/catalog/:pageId',
  Camera = '/cameras/:id',
}

export enum APIRoute {
  Cameras = '/cameras',
  Promo = '/promo',
  Catalog = '/catalog',
}

export enum NameSpace {
  CamerasData = 'CamerasData',
  PromoData = 'PromoData',
  App = 'App',
}

export const MAX_RATING = 5;

export const MAX_CARDS_ON_PAGE = 9;

export const DEFAULT_PAGE = 1;

export const PAGE_COUNT_STEP = 1;
