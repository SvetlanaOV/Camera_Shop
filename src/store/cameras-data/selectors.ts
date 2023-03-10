import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Camera} from '../../types/camera';

export const getCameras = (state: State): Camera[] => state[NameSpace.CamerasData].cameras;
export const getCurrentCamera = (state: State): Camera => state[NameSpace.CamerasData].currentCamera;
export const getSimilarCameraList = (state: State): Camera[] => state[NameSpace.CamerasData].similarCameraList;
export const getCamerasLoadedData = (state: State): boolean => state[NameSpace.CamerasData].isDataLoading;
