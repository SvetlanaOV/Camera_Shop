import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {CamerasData} from '../../types/state';
import {fetchCamerasAction} from '../api-actions';

const initialState: CamerasData = {
  cameras: [],
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
      });
  }
});
