import Card from '../card/card';
import {Camera} from '../../types/camera';

type CardListProps = {
  cameras: Camera[];
}

function CardList ({cameras}: CardListProps): JSX.Element {
  return (
    <div className="cards catalog__cards" data-testid="catalog__cards">
      {cameras.map((camera) => (
        <div key={camera.id} className="product-card">
          <Card
            key={camera.id}
            camera={camera}
          />
        </div>
      ))}
    </div>
  );
}

export default CardList;
