import { Link } from 'react-router-dom';
import { AppRoute, PageNames } from '../../constants';
import { memo } from 'react';

type LogoAttributesType = {
  className: string;
   width: number;
   height: number;
    };

    type LogoProps = {
      logoAttributes: LogoAttributesType;
      pageNames: string;
    }

const Logo = memo(({logoAttributes, pageNames}:LogoProps):JSX.Element =>{
  const {className, width, height} = logoAttributes;
  return(
    <Link className={`${className}-link ${pageNames === PageNames.Main ? 'header__logo-link--active' : ''} `} to = {AppRoute.Root}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo"
        width={width} height={height}
      />
    </Link>
  );
});
Logo.displayName = 'Logo';

export default Logo;
