import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {CamerasDataProcess} from '../../types/state';
import {fetchCamerasAction} from '../api-actions';

const initialState: CamerasDataProcess = {
  cameras: [],
  isDataLoading: false,
};

export const camerasDataProcess = createSlice({
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
      });
  }
});
