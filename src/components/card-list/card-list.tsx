import {Fragment} from 'react';
import Card from '../card/card';
import {Camera} from '../../types/camera';

type CardListProps = {
  cameras: Camera[];
}

function CardList ({cameras}: CardListProps): JSX.Element {
  return (
    <Fragment>
      {cameras.map((camera) => (
        <div key={camera.id} className="product-card">
          <Card
            key={camera.id}
            camera={camera}
          />
        </div>
      ))}
    </Fragment>
  );
}

export default CardList;
