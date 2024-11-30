
import { CitiesType, TypesPage } from '../../types/list-offer';
import { DEFAULT_ACTIVE_LOCATION } from '../../constans';
import LocationsItemLink from '../locations-item-link/locations-item-link';

type LocationsProps = {
  locations: CitiesType;
  pageNames: TypesPage;
};

type LocationItemProps = {
   location: string;
   pageNames: TypesPage;
   isActive: boolean;};

function LocationsItem(props: LocationItemProps): JSX.Element {
  const { location, isActive, pageNames } = props;
  return (
    <li className="locations__item">
      <LocationsItemLink
        location={location}
        typesPage={pageNames.Main}
        isActive={isActive}
      />
    </li>
  );
}

function LocationsList({locations, pageNames}:LocationsProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        locations.map((location:string) => (
          <LocationsItem
            key={crypto.randomUUID()}
            pageNames={pageNames}
            location={location}
            isActive={location === DEFAULT_ACTIVE_LOCATION}
          />
        ))
      }
    </ul>
  );
}

export default LocationsList;
