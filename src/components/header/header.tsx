import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import SearchForm from '../search-form/search-form';

function Header(): JSX.Element {
  return(
    <header className="header" id="header">
      <div className="container">
        <Link className="header__logo" to={AppRoute.Root} aria-label="Переход на главную">
          <svg width="100" height="36" aria-hidden="true">
            <use xlinkHref="#icon-logo"></use>
          </svg>
        </Link>
        <nav className="main-nav header__main-nav" data-testid='main-nav'>
          <ul className="main-nav__list">
            <li className="main-nav__item">
              <Link className="main-nav__link" to={AppRoute.Root}>Каталог</Link>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="!#">Гарантии</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="!#">Доставка</a>
            </li>
            <li className="main-nav__item">
              <a className="main-nav__link" href="!#">О компании</a>
            </li>
          </ul>
        </nav>
        <SearchForm />
        <a className="header__basket-link" href="!#">
          <svg width="16" height="16" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
