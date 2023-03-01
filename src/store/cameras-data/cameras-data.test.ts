import {camerasData} from './cameras-data';
import {CamerasData} from '../../types/state';
import {fetchCamerasAction, fetchCurrentCameraAction, fetchSimilarCameraListAction} from '../api-actions';
import mockCamera from '../../mocks/mock-camera';
import mockCameras from '../../mocks/mock-cameras';
import {Camera} from '../../types/camera';

const currentCamera = mockCamera();
const cameras = mockCameras();

describe('Reducer: CamerasData', () => {
  let state: CamerasData;

  beforeEach(() => {
    state = {
      cameras: [],
      currentCamera: {} as Camera,
      similarCameraList: [],
      isDataLoading: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(camerasData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchCamerasAction test', () => {
    it('should add cameras to state and downloading status is false', () => {
      expect(camerasData.reducer(state, {type: fetchCamerasAction.fulfilled.type, payload: cameras}))
        .toEqual({...state, cameras, isDataLoading: false});
    });
  });

  describe('fetchCurrentCameraAction test', () => {
    it('should update current camera at state and downloading status is false', () => {
      expect(camerasData.reducer(state, {type: fetchCurrentCameraAction.fulfilled.type, payload: currentCamera}))
        .toEqual({...state, currentCamera, isDataLoading: false});
    });
  });

  describe('fetchSimilarCamerasAction test', () => {
    it('should add similar cameras to state', () => {
      expect(camerasData.reducer(state, {type: fetchSimilarCameraListAction.fulfilled.type, payload: cameras}))
        .toEqual({...state, similarCameraList: cameras});
    });
  });
});
