type LogoAttributes = {
  readonly className: string;
  readonly width: number;
  readonly height: number;
    };


function Logo(logoAttributes:LogoAttributes):JSX.Element{
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
