import {useState} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import {getCurrentCamera} from '../../store/cameras-data/selectors';
import {TabName} from '../../const';

function Tabs(): JSX.Element {
  const currentCamera = useAppSelector(getCurrentCamera);

  const [activeTab, setActiveTab] = useState(TabName.Description);

  const {vendorCode, category, type, level} = currentCamera;

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button className={`tabs__control ${activeTab === TabName.Features ? 'is-active' : ''}`} onClick={() => setActiveTab(TabName.Features)} type="button">Характеристики</button>
        <button className={`tabs__control ${activeTab === TabName.Description ? 'is-active' : ''}`} onClick={() => setActiveTab(TabName.Description)} type="button">Описание</button>
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
            <p>{currentCamera.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
