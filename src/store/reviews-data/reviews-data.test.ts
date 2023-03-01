import { reviewsData } from './reviews-data';
import { ReviewsData } from '../../types/state';
import {fetchReviewListAction} from '../api-actions';
import mockReviews from '../../mocks/mock-reviews';

const reviews = mockReviews();

describe('Reducer: ReviewsData', () => {
  let state: ReviewsData;

  beforeEach(() => {
    state = {
      reviews: [],
      isDataLoading: false
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(reviewsData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchPromoAction test', () => {
    it('should dd review list to state and downloading status is false', () => {
      expect(reviewsData.reducer(state, {type: fetchReviewListAction.fulfilled.type, payload: reviews}))
        .toEqual({...state, reviews, isDataLoading: false});
    });
  });
});
