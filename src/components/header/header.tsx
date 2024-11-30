import { HeaderLogoAttributes } from '../../constans';
import User from '../../mock/users';
import HeaderNavigation from '../header-navigation/header-navigation';
import Logo from '../logo/logo';
import { offers } from '../../mock/list-offers';


function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoAttributes = {HeaderLogoAttributes} />
          </div>
          <HeaderNavigation
            User={User}
            Offers = {offers}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
