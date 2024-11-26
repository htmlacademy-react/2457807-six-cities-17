import { HeaderLogoAttributes } from '../../constans';
import HeaderNavigation from '../header-navigation/header-navigation';
import Logo from '../logo/logo';


function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo logoAttributes = {HeaderLogoAttributes} />
          </div>
          {/* <HeaderNavigation
            isLoggedIn
            userName={'Oliver.conner@gmail.com'}
            favoriteCount={3}
          /> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
