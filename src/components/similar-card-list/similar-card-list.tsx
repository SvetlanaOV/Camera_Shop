import {Fragment} from 'react';
import Card from '../card/card';
import {Camera} from '../../types/camera';

type SimilarCardListProps = {
  cameras: Camera[];
}

//todo: Класс active только у активных карточек, удалить компонент в дальнейшем
function SimilarCardList ({cameras}: SimilarCardListProps): JSX.Element {
  return (
    <Fragment>
      {cameras.map((camera) => (
        <div key={camera.id} className="product-card is-active">
          <Card
            key={camera.id}
            camera={camera}
          />
        </div>
      ))}
    </Fragment>
  );
}

export default SimilarCardList;
