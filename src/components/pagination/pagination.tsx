import {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getCameras} from '../../store/cameras-data/selectors';
import {MAX_CARDS_ON_PAGE, DEFAULT_PAGE, PAGE_COUNT_STEP, AppRoute} from '../../const';

function Pagination(): JSX.Element {
  const cameras = useAppSelector(getCameras);

  const params = useParams();
  const pageId = Number(params.pageId);

  const [currentPage, setCurrentPage] = useState(pageId);

  const pageCount = Math.ceil(cameras.length / MAX_CARDS_ON_PAGE);

  return(
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <Link onClick={() => setCurrentPage(currentPage - PAGE_COUNT_STEP)} className={currentPage === DEFAULT_PAGE ? 'visually-hidden' : 'pagination__link pagination__link--text'} to={`${AppRoute.Catalog}/${currentPage - PAGE_COUNT_STEP}`}>Назад</Link>
        </li>
        {Array.from({length: pageCount}, (_, index) => (
          <li className="pagination__item" key={`pagination-${index}`}>
            <Link onClick={() => setCurrentPage(PAGE_COUNT_STEP + index)} className={`pagination__link ${(currentPage === (PAGE_COUNT_STEP + index)) ? 'pagination__link--active' : ''}`} to={`${AppRoute.Catalog}/${PAGE_COUNT_STEP + index}`}>{PAGE_COUNT_STEP + index}</Link>
          </li>
        ))}
        <li className="pagination__item">
          <Link onClick={() => setCurrentPage(currentPage + PAGE_COUNT_STEP)} className={currentPage === pageCount ? 'visually-hidden' : 'pagination__link pagination__link--text'} to={`${AppRoute.Catalog}/${currentPage + PAGE_COUNT_STEP}`}>Далее</Link>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
