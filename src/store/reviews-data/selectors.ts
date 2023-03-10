import {NameSpace} from '../../const';
import {State} from '../../types/state';
import {Review} from '../../types/review';

export const getReviewList = (state: State): Review[] => state[NameSpace.ReviewsData].reviews;
export const getDataLoaded = (state: State): boolean => state[NameSpace.ReviewsData].isDataLoading;
