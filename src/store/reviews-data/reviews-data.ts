import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ReviewsData} from '../../types/state';
import {fetchReviewListAction} from '../api-actions';
import {sortReviews} from '../../utils';

const initialState: ReviewsData = {
  reviews: [],
  isDataLoading: false,
};

export const reviewsData = createSlice({
  name: NameSpace.CamerasData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewListAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchReviewListAction.fulfilled, (state, action) => {
        state.reviews = sortReviews(action.payload);
        state.isDataLoading = false;
      });
  }
});
