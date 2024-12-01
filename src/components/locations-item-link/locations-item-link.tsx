import { PageNames } from '../../constans';


type LocationLinkProps = {
  location: string;
  typesPage: string;
  isActive?: boolean;
};

function LocationsItemLink(props: LocationLinkProps): JSX.Element {
  const { location, typesPage, isActive } = props;
  return (
    <a className = {`locations__item-link ${typesPage === PageNames.Main ? 'tabs__item' : '' } ${isActive ? 'tabs__item--active' : ''}`} href="#">
      <span>{location}</span>
    </a>
  );
}

export default LocationsItemLink;
