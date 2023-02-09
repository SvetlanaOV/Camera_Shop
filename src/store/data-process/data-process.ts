import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {DataProcess} from '../../types/state';
import {fetchCamerasAction} from '../api-actions';

const initialState: DataProcess = {
  cameras: [],
  isDataLoading: false,
};

export const dataProcess = createSlice({
  name: NameSpace.Data,
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
