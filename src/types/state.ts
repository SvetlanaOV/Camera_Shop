import {store} from '../store/index';
import {Camera} from './camera';
import {Promo} from './promo';
import {Review} from './review';
import {SortType, SortOrder} from '../const';

export type CamerasData = {
  cameras: Camera[];
  camerasForSearch: Camera[];
  currentCamera: Camera;
  similarCameraList: Camera[];
  isDataLoading: boolean;
};

export type PromoData = {
  promo: Promo;
  isDataLoading: boolean;
};

export type ReviewsData = {
  reviews: Review[];
  isDataLoading: boolean;
};

export type ActionProcess = {
  sortType: SortType;
  sortOrder: SortOrder;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
