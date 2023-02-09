import {useAppSelector} from '../../hooks/useAppSelector';
import CardList from '../card-list/card-list';
import Pagination from '../pagination/pagination';
import FilterForm from '../filter-form/filter-form';
import SortForm from '../sort-form/sort-form';
import {getCameras} from '../../store/data-process/selectors';

function Catalog(): JSX.Element{
  const cameras = useAppSelector(getCameras);

  return(
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <div className="catalog__aside">
            <div className="catalog-filter">
              <FilterForm />
            </div>
          </div>
          <div className="catalog__content">
            <div className="catalog-sort">
              <SortForm />
            </div>
            <div className="cards catalog__cards">
              <CardList cameras={cameras}/>
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Catalog;
