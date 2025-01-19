import {PageNames } from '../../constants';
import { HeaderLogoAttributes } from '../../style-options';
import HeaderNavigation from '../header-navigation/header-navigation';
import Logo from '../logo/logo';
import { useAppSelector } from '../../hooks';
import { selectOffers } from '../../store/selectors';

type HeaderProps = {
  pageNames: string;
}

function Header({pageNames }:HeaderProps): JSX.Element {
  const offers = useAppSelector(selectOffers);
  const headerNavigationEmpty = pageNames === PageNames.Login ?
    '' : <HeaderNavigation Offers = {offers}/>;
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

