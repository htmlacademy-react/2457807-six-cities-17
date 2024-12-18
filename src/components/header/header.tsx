import {PageNames } from '../../constants';
import { HeaderLogoAttributes } from '../../style-options';
import HeaderNavigation from '../header-navigation/header-navigation';
import Logo from '../logo/logo';
import { offers } from '../../mock/offers';
import User from '../../mock/users';


type HeaderProps = {
  pageNames: string;
}

function Header({pageNames }:HeaderProps): JSX.Element {
  const headerNavigationEmpty = pageNames === PageNames.Login ?
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

