import { HeaderLogoAttributes } from '../../constans';
import User from '../../mock/users';
import HeaderNavigation from '../header-navigation/header-navigation';
import Logo from '../logo/logo';
import { offers } from '../../mock/list-offers';


type headerProps = {
  pageNames: string;
}

function Header({pageNames }:headerProps): JSX.Element {
  const headerNavigationEmpty = (pageNames === 'login') ?
    '' : <HeaderNavigation User={User} Offers = {offers}/>;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoAttributes = {HeaderLogoAttributes} />
          </div>
          {headerNavigationEmpty}
        </div>
      </div>
    </header>
  );
}

export default Header;
