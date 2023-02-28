import {datatype, commerce, image} from 'faker';
import {Camera} from '../types/camera';

const mockCamera = (): Camera => ({
  id: datatype.number(),
  name: commerce.productName(),
  vendorCode: datatype.string(),
  type: datatype.string(),
  category: datatype.string(),
  description: datatype.string(),
  level: datatype.string(),
  rating: datatype.number({min: 1, max: 5}),
  price: datatype.number(),
  previewImg: image.imageUrl(),
  previewImg2x: image.imageUrl(),
  previewImgWebp: image.imageUrl(),
  previewImgWebp2x: image.imageUrl(),
  reviewCount: datatype.number(),
});

export default mockCamera;
