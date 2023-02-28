import {datatype, date, name} from 'faker';
import {Review} from '../types/review';

const mockReview = (): Review => ({
  id: datatype.string(),
  userName: name.firstName(),
  advantage: datatype.string(),
  disadvantage: datatype.string(),
  review: datatype.string(),
  rating: datatype.number({min: 1, max: 5}),
  createAt: date.past().toISOString(),
  cameraId: datatype.number(),
});

export default mockReview;
