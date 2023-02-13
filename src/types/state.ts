import {store} from '../store/index';
import {Camera} from './camera';
import {Promo} from './promo';

export type CamerasData = {
  cameras: Camera[];
  currentCamera: Camera;
  similarCameraList: Camera[];
  isDataLoading: boolean;
};

export type PromoData = {
  promo: Promo;
  isDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
