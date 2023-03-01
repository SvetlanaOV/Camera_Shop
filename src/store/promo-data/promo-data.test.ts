import {PromoData} from '../../types/state';
import {promoData} from './promo-data';
import {fetchPromoAction} from '../api-actions';
import mockPromoCamera from '../../mocks/mock-promo-camera';
import {Promo} from '../../types/promo';

const promo = mockPromoCamera();

describe('Reducer: PromoData', () => {
  let state: PromoData;

  beforeEach(() => {
    state = {
      promo: {} as Promo,
      isDataLoading: false,
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(promoData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('fetchPromoAction test', () => {
    it('should add promo to state and downloading status is false', () => {
      expect(promoData.reducer(state, {type: fetchPromoAction.fulfilled.type, payload: promo}))
        .toEqual({...state, promo, isDataLoading: false});
    });
  });
});
