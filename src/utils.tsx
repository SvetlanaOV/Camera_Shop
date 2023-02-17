import dayjs from 'dayjs';
import {Review} from './types/review';

export const humanizeDate = (date: string) => dayjs(date).format('DD MMMM');

export function sortReviews(reviews: Review[]) {
  return reviews.sort((reviewA, reviewB) => dayjs(reviewB.createAt).diff(dayjs(reviewA.createAt)));
}
