import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import styles from './style.module.css';
import { AppRoute } from '../../constans';
import Header from '../../components/header/header';
import { PageNames } from '../../constans';

function NotFoundPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Нет такой страницы неудачники!</title>
      </Helmet>
      <Header pageNames = {PageNames.Login}/>

      <div className={styles.backgroundImageContainer}>
      </div>
      <div className={styles.wrapper}>
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
