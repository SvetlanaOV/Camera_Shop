import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {camerasData} from './cameras-data/cameras-data';
import {promoData} from './promo-data/promo-data';
import {reviewsData} from './reviews-data/reviews-data';

export const rootReducer = combineReducers({
  [NameSpace.CamerasData]: camerasData.reducer,
  [NameSpace.PromoData]: promoData.reducer,
  [NameSpace.ReviewsData]: reviewsData.reducer,
});
