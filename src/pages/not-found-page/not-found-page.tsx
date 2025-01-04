import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './style.module.css';
import { PageNames, AppRoute } from '../../constants';
import Header from '../../components/header/header';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Вернись на главную страницу и никому не рассказывай что был на этой!</title>
      </Helmet>
      <Header pageNames = {PageNames.Login}/>

      <div className={styles.backgroundImageContainer}>
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Жираф - это лошадь выполненная по всем требованиям заказчика!</h1>
        <h1 className={styles.title}>404: С Днем потерянных страниц, сайтоделы!</h1>
        <Link
          className={styles.link}
          to={AppRoute.Root}
        >
      Вернуться на Главную
        </Link>
      </div>
    </>

  );

}

export default NotFoundPage;
