import {store} from '../store/index';
import {Camera} from './camera';

export type CamerasDataProcess = {
  cameras: Camera[];
  isDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
