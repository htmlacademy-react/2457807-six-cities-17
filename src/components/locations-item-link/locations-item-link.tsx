import { Link } from 'react-router-dom';
import { AppRoute, PageNames } from '../../constans';


type LocationLinkProps = {
  location: string;
  pageNames: string;
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
