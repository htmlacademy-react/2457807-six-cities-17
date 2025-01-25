import { memo } from 'react';
import {PageNames } from '../../constants';
import { HeaderLogoAttributes } from '../../style-options';
import HeaderNavigation from '../header-navigation/header-navigation';
import Logo from '../logo/logo';


type HeaderProps = {
  pageNames: string;
}

const Header = memo(({pageNames }:HeaderProps): JSX.Element => {
  const headerNavigationEmpty = pageNames === PageNames.Login ?
    '' : <HeaderNavigation />;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo
              logoAttributes = {HeaderLogoAttributes}
              pageNames = {pageNames}
            />
          </div>
          {headerNavigationEmpty}
        </div>
      </div>
    </header>
  );
}
);

Header.displayName = 'Header';

export default Header;


