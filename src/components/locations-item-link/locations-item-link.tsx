import { PageNames } from '../../constans';


type LocationLinkProps = {
  location: string;
  pageNames: string;
  isActive?: boolean;
};

function LocationsItemLink(props: LocationLinkProps): JSX.Element {
  const { location, pageNames, isActive } = props;
  return (
    <a className = {`locations__item-link ${pageNames === PageNames.Main ? 'tabs__item' : '' } ${isActive ? 'tabs__item--active' : ''}`} href="#">
      <span>{location}</span>
    </a>
  );
}

export default LocationsItemLink;
