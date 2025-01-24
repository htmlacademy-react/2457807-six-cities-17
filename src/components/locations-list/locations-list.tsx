import { memo } from 'react';
import { CitiesType, CityKeys, TypesPage } from '../../types/offers';
import LocationsItemLink from '../locations-item-link/locations-item-link';

type LocationsListProps = {
  locations: CitiesType;
  pageNames: TypesPage;
  onCurrentCityChange: (city: CityKeys) => void;
   currentCity: CityKeys;
};

type LocationItemProps = {
   location: CityKeys;
   pageNames: TypesPage;
   isActive: boolean;
   onCurrentCityChange: (city: CityKeys) => void;
  };

function LocationsItem(props: LocationItemProps): JSX.Element {
  const { location, isActive, pageNames, onCurrentCityChange } = props;
  return (
    <li className="locations__item" onClick = {() => onCurrentCityChange(location)}>
      <LocationsItemLink
        location={location}
        pageNames={pageNames.Main}
        isActive={isActive}
      />
    </li>
  );
}

const LocationsList = memo(({locations, pageNames, currentCity, onCurrentCityChange}:LocationsListProps): JSX.Element => (
  <ul className="locations__list tabs__list">
    {
      locations.map((location) => (
        <LocationsItem
          key={location}
          pageNames={pageNames}
          location={location}
          isActive={location === currentCity}
          onCurrentCityChange={onCurrentCityChange}
        />
      ))
    }
  </ul>
));

LocationsList.displayName = 'LocationList';

export default LocationsList;
