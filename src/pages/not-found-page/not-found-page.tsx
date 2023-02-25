import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {AppRoute} from '../../const';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Camera shoр. Страница не найдена</title>
      </Helmet>
      <Header />
      <main>
        <div className="page-content not-found-page">
          <h1 className="title title--h2">404. Page not found</h1>
          <Link className="btn btn--purple" to={AppRoute.Root}>Вернуться на главную</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default NotFoundPage;
