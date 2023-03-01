import {Action} from 'redux';
import thunk, {ThunkDispatch} from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createAPI} from '../services/api';
import {fetchCamerasAction, fetchCurrentCameraAction, fetchSimilarCameraListAction, fetchPromoAction, fetchReviewListAction, sendNewReviewAction} from './api-actions';
import {APIRoute} from '../const';
import {State} from '../types/state';
import mockCameras from '../mocks/mock-cameras';
import mockCamera from '../mocks/mock-camera';
import mockReviews from '../mocks/mock-reviews';
import mockReviewPost from '../mocks/mock-review-post';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should dispatch fetchCamerasAction when GET /cameras', async () => {
    const cameras = mockCameras();

    mockAPI
      .onGet(APIRoute.Cameras)
      .reply(200, cameras);

    const store = mockStore();

    await store.dispatch(fetchCamerasAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCamerasAction.pending.type,
      fetchCamerasAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchCurrentCameraAction when GET /cameras/id', async () => {
    const currentCamera = mockCamera();
    const id = currentCamera.id;

    mockAPI
      .onGet(`${APIRoute.Cameras}/${id}`)
      .reply(200, currentCamera);

    const store = mockStore();

    await store.dispatch(fetchCurrentCameraAction(id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchCurrentCameraAction.pending.type,
      fetchCurrentCameraAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchSimilarCameraListAction when GET /hotels/id/similar', async () => {
    const currentCamera = mockCamera();
    const id = currentCamera.id;
    const similarCamerasList = mockCameras();

    mockAPI
      .onGet(`${APIRoute.Cameras}/${id}/similar`)
      .reply(200, similarCamerasList);

    const store = mockStore();

    await store.dispatch(fetchSimilarCameraListAction(id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchSimilarCameraListAction.pending.type,
      fetchSimilarCameraListAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchPromoAction when GET /promo', async () => {
    const camera = mockCamera();

    mockAPI
      .onGet(APIRoute.Promo)
      .reply(200, camera);

    const store = mockStore();

    await store.dispatch(fetchPromoAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchPromoAction.pending.type,
      fetchPromoAction.fulfilled.type
    ]);
  });

  it('should dispatch fetchReviewListAction when GET /cameras/id/reviews', async () => {
    const camera = mockCamera();
    const id = camera.id;
    const reviews = mockReviews();

    mockAPI
      .onGet(`${APIRoute.Cameras}/${id}/reviews`)
      .reply(200, reviews);

    const store = mockStore();

    await store.dispatch(fetchReviewListAction(id.toString()));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      fetchReviewListAction.pending.type,
      fetchReviewListAction.fulfilled.type
    ]);
  });

  it('should dispatch sendNewReviewAction when POST /reviews', async () => {
    const review = mockReviewPost();

    mockAPI
      .onPost(APIRoute.Reviews)
      .reply(200, []);

    const store = mockStore();

    await store.dispatch(sendNewReviewAction(review));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      sendNewReviewAction.pending.type,
      fetchReviewListAction.pending.type,
      sendNewReviewAction.fulfilled.type,
    ]);
  });

});
