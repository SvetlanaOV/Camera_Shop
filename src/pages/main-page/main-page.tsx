import {Helmet} from 'react-helmet-async';
import Banner from '../../components/banner/banner';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import Catalog from '../../components/catalog/catalog';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

function MainPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Camera shoр. Каталог</title>
      </Helmet>
      <Header />
      <main>
        <Banner />
        <div className="page-content">
          <Breadcrumbs />
          <Catalog />
        </div >
      </main >
      <Footer />
    </div>
  );
}

export default MainPage;
