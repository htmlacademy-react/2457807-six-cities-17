import { Link } from 'react-router-dom';
import { AppRoute, PageNames } from '../../constants';


type LocationLinkProps = {
  location: string;
  pageNames: typeof PageNames[keyof typeof PageNames];
  isActive?: boolean;
};

function LocationsItemLink(props: LocationLinkProps): JSX.Element {
  const { location, pageNames, isActive } = props;
  return (
    <Link className = {`locations__item-link ${pageNames === PageNames.Main ? 'tabs__item' : '' } ${isActive ? 'tabs__item--active' : ''}`} to={AppRoute.Root}>
      <span>{location}</span>
    </Link>
  );
}

export default LocationsItemLink;
