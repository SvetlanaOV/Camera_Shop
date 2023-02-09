import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {Promo} from '../../types/promo';
import {PromoData} from '../../types/state';
import {fetchPromoAction} from '../api-actions';

const initialState: PromoData = {
  promo: {} as Promo,
  isDataLoading: false,
};

export const promoData = createSlice({
  name: NameSpace.PromoData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchPromoAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchPromoAction.fulfilled, (state, action) => {
        state.promo = action.payload;
        state.isDataLoading = false;
      });
  }
});
