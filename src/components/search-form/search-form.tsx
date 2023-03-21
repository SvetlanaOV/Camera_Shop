import {ChangeEvent, KeyboardEvent, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {fetchCamerasForSearchAction} from '../../store/api-actions';
import {getCamerasForSearch} from '../../store/cameras-data/selectors';
import {APIRoute} from '../../const';

function SearchForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [cameraName, setCameraName] = useState('');
  const cameraList = useAppSelector(getCamerasForSearch);

  const [isSearchListOpened, setSearchListOpened] = useState(false);

  const handleSearchChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setCameraName(evt.target.value);
    setSearchListOpened(true);
  };

  const handleEnterKeyDown = (evt: KeyboardEvent<HTMLLIElement>, id: number) => {
    if (evt.key === 'Enter') {
      redirectToCamera(id);
    }
  };

  const redirectToCamera = (id: number) => {
    navigate(`${APIRoute.Cameras}/${id}`);
    setCameraName('');
  };

  useEffect(()=> {
    if (!cameraName) {
      setSearchListOpened(false);}

    if (cameraName) {
      dispatch(fetchCamerasForSearchAction(cameraName));}
  }, [dispatch, cameraName]);

  return(
    <div className={isSearchListOpened ? 'form-search list-opened' : 'form-search'}>
      <form onSubmit={(evt) => evt.preventDefault()}>
        <label>
          <svg className="form-search__icon" width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-lens"></use>
          </svg>
          <input onChange={handleSearchChange} value={cameraName} className="form-search__input" type="text" autoComplete="off" placeholder="Поиск по сайту" />
        </label>
        <ul className="form-search__select-list">
          {cameraList.map((camera) =>
            (<li key={`search-camera-${camera.id}`} onKeyDown={(evt) => handleEnterKeyDown(evt, camera.id)} onClick={() => redirectToCamera(camera.id)} className="form-search__select-item">{camera.name}</li>))}
        </ul>
      </form>
      <button onClick={() => setCameraName('')} className="form-search__reset" type="reset">
        <svg width="10" height="10" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg>
        <span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default SearchForm;
