import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getCurrentCamera} from '../../store/cameras-data/selectors';
import {TabName} from '../../const';

function Tabs(): JSX.Element {
  const currentCamera = useAppSelector(getCurrentCamera);

  const [activeTab, setActiveTab] = useState(TabName.Description);

  const {vendorCode, category, type, level, description} = currentCamera;

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <Link className={`tabs__control ${activeTab === TabName.Features ? 'is-active' : ''}`} onClick={() => setActiveTab(TabName.Features)} to={`?tab=${TabName.Features}`}>Характеристики</Link>
        <Link className={`tabs__control ${activeTab === TabName.Description ? 'is-active' : ''}`} onClick={() => setActiveTab(TabName.Description)} to={`?tab=${TabName.Description}`}>Описание</Link>
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
