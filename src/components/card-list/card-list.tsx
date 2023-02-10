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
        <Card
          key={camera.id}
          camera={camera}
        />
      ))}
    </Fragment>
  );
}

export default CardList;
