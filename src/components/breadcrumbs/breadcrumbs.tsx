import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {Camera} from '../../types/camera';

type BreadcrumbsProps = {
  camera?: Camera;
}

function Breadcrumbs({camera}: BreadcrumbsProps): JSX.Element {
  return(
    <div className="breadcrumbs" data-testid='breadcrumbs'>
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.Root}>
              Главная
              <svg width="5" height="8" aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"></use>
              </svg>
            </Link>
          </li>
          <li className="breadcrumbs__item">
            {camera?.name ?
              <Link className="breadcrumbs__link" to={AppRoute.Root}>
                Каталог
                <svg width="5" height="8" aria-hidden="true">
                  <use xlinkHref="#icon-arrow-mini"></use>
                </svg>
              </Link> :
              <span className="breadcrumbs__link breadcrumbs__link--active">
                Каталог
              </span>}
          </li>
          {camera?.name &&
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link breadcrumbs__link--active">{camera?.name}</span>
              </li>}
        </ul>
      </div>
    </div>
  );
}

export default Breadcrumbs;
