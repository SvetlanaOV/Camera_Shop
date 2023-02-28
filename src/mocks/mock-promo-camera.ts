import {datatype, commerce, image} from 'faker';
import {Promo} from '../types/promo';

const mockPromoCamera = (): Promo => ({
  id: datatype.number(),
  name: commerce.productName(),
  previewImg: image.imageUrl(),
  previewImg2x: image.imageUrl(),
  previewImgWebp: image.imageUrl(),
  previewImgWebp2x: image.imageUrl(),
});

export default mockPromoCamera;
