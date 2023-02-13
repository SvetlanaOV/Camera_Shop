import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {CamerasData} from '../../types/state';
import {fetchCamerasAction, fetchCurrentCameraAction} from '../api-actions';
import {Camera} from '../../types/camera';

const initialState: CamerasData = {
  cameras: [],
  currentCamera: {} as Camera,
  isDataLoading: false,
};

export const camerasData = createSlice({
  name: NameSpace.CamerasData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCamerasAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchCamerasAction.fulfilled, (state, action) => {
        state.cameras = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchCurrentCameraAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchCurrentCameraAction.fulfilled, (state, action) => {
        state.currentCamera = action.payload;
        state.isDataLoading = false;
      });
  }
});
