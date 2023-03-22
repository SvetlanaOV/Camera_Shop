import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, QueryParameter} from '../const';
import {Camera} from '../types/camera';
import {Promo} from '../types/promo';
import {Review, ReviewPost} from '../types/review';
import {AppDispatch, State} from '../types/state';

export const fetchCamerasAction = createAsyncThunk<Camera[], {paramsSort: {_sort: string; _order: string} }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCameras',
  async ({paramsSort}, {extra: api}) => {
    const {data} = await api.get<Camera[]>(APIRoute.Cameras, {
      params: {
        [QueryParameter.Sort]: paramsSort._sort,
        [QueryParameter.Order]: paramsSort._order,
      }});

    return data;
  }
);

export const fetchPromoAction = createAsyncThunk<Promo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchPromo',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Promo>(APIRoute.Promo);
    return data;
  }
);

export const fetchCurrentCameraAction = createAsyncThunk<Camera, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCurrentCamera',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Camera>(`${APIRoute.Cameras}/${id}`);
    return data;
  }
);

export const fetchSimilarCameraListAction = createAsyncThunk<Camera[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarCameras',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Camera[]>(`${APIRoute.Cameras}/${id}/similar`);
    return data;
  },
);

export const fetchCamerasForSearchAction = createAsyncThunk<Camera[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchCamerasForSearch',
  async (name, {extra: api}) => {
    const {data} = await api.get<Camera[]>(APIRoute.Cameras, {
      params: {
        [QueryParameter.NameLike]: name,
      }});

    return data;
  }
);

export const fetchReviewListAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviewList',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Cameras}/${id}/reviews`);
    return data;
  },
);

export const sendNewReviewAction = createAsyncThunk<void, ReviewPost, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendNewReview',
  async (review: ReviewPost, {dispatch, extra: api}) => {
    await api.post<ReviewPost>(APIRoute.Reviews, review);
    dispatch(fetchReviewListAction(String(review.cameraId)));
  }
);
