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
    <a className={`${className}-link`} href = 'main.html'>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo"
        width={width} height={height}
      />
    </a>
  );
}

export default Logo;
