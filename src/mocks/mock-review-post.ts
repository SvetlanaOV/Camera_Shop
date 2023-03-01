import {datatype, name} from 'faker';
import {ReviewPost} from '../types/review';

const mockReviewPost = (): ReviewPost => ({
  cameraId: datatype.number(),
  userName: name.firstName(),
  advantage: datatype.string(),
  disadvantage: datatype.string(),
  review: datatype.string(),
  rating: datatype.number({min: 1, max: 5}),
});

export default mockReviewPost;
