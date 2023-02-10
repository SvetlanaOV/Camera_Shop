import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getCameras } from '../../store/cameras-data/selectors';
import {MAX_CARDS_ON_PAGE, DEFAULT_PAGE} from '../../const';

function Pagination(): JSX.Element {
  const cameras = useAppSelector(getCameras);
  const pageCount = Math.ceil(cameras.length / MAX_CARDS_ON_PAGE);

  const [currentPage, setCurrentPage] = useState(1);

  return(
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__item">
          <Link onClick={() => setCurrentPage(currentPage - 1)} className={currentPage === DEFAULT_PAGE ? 'visually-hidden' : 'pagination__link pagination__link--text'} to="!#">Назад</Link>
        </li>
        {Array.from({length: pageCount}, (_, index) => (
          <li className="pagination__item" key={`pagination-${index}`}>
            <Link onClick={() => setCurrentPage(1 + index)} className={`pagination__link ${(currentPage === (1 + index)) ? 'pagination__link--active' : ''}`} to="!#">{1 + index}</Link>
          </li>
        ))}
        <li className="pagination__item">
          <Link onClick={() => setCurrentPage(currentPage + 1)} className={currentPage === pageCount ? 'visually-hidden' : 'pagination__link pagination__link--text'} to="!#">Далее</Link>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
