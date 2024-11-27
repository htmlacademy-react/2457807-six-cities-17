type LogoAttributes = {
  className: string;
   width: number;
   height: number;
    };
    type LogoProps = {
      logoAttributes: LogoAttributes;
    }


function Logo({logoAttributes}:LogoProps):JSX.Element{
  const {className, width, height} = logoAttributes;
  return(
    <a className={className} href = 'main.html'>
      <img className="header__logo" src="img/logo.svg" alt="6 cities logo"
        width={width} height={height}
      />
    </a>
  );
}

export default Logo;
