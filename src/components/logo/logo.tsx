import { Link } from 'react-router-dom';
import { AppRoute } from '../../constans';

type LogoAttributesType = {
  className: string;
   width: number;
   height: number;
    };
    type LogoProps = {
      logoAttributes: LogoAttributesType;
    }

function Logo({logoAttributes}:LogoProps):JSX.Element{
  const {className, width, height} = logoAttributes;
  return(
    <Link className={`${className}-link`} to = {AppRoute.Root}>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo"
        width={width} height={height}
      />
    </Link>
  );
}

export default Logo;
