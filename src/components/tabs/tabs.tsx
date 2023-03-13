import {useEffect} from 'react';
import {useSearchParams, useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getCurrentCamera} from '../../store/cameras-data/selectors';
import {APIRoute, TabName} from '../../const';

function Tabs(): JSX.Element {
  const {id} = useParams();
  const currentCamera = useAppSelector(getCurrentCamera);

  const {vendorCode, category, type, level, description} = currentCamera;

  const [searchParams, setSearchParams] = useSearchParams({tab: TabName.Description});
  const activeTab = searchParams.get('tab');

  const navigate = useNavigate();

  useEffect(() => {
    const tabList: Array<string> = Object.values(TabName);
    const isTabIncluded = activeTab ? tabList.includes(activeTab) : false;

    if (!isTabIncluded) {
      navigate(`${APIRoute.Cameras}/${String(id)}?tab=${TabName.Description}`);
    }
  }, [navigate, activeTab, id]);

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button className={`tabs__control ${activeTab === TabName.Features ? 'is-active' : ''}`} onClick={() => setSearchParams({tab: TabName.Features})} type="button">Характеристики</button>
        <button className={`tabs__control ${activeTab === TabName.Description ? 'is-active' : ''}`} onClick={() => setSearchParams({tab: TabName.Description})} type="button">Описание</button>
      </div>
      <div className="tabs__content">
        <div className={`tabs__element ${activeTab === TabName.Features ? 'is-active' : ''}`}>
          <ul className="product__tabs-list">
            <li className="item-list"><span className="item-list__title">Артикул:</span>
              <p className="item-list__text">{vendorCode}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Категория:</span>
              <p className="item-list__text">{category}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">{type}</p>
            </li>
            <li className="item-list"><span className="item-list__title">Уровень:</span>
              <p className="item-list__text">{level}</p>
            </li>
          </ul>
        </div>
        <div className={`tabs__element ${activeTab === TabName.Description ? 'is-active' : ''}`}>
          <div className="product__tabs-text">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
