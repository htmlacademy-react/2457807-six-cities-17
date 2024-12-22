import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import useMap from '../../hooks/use-map';
import 'leaflet/dist/leaflet.css';
import { ListOfferType } from '../../types/offers';
import { Pin } from '../../style-options';
import { MapSize } from '../../style-options';
import { PageNames } from '../../constants';

type MapProps = {
  mapClass: string;
  city: string;
  offers: ListOfferType[];
  selectedPointId: string | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: Pin.DefaultUrl,
  iconSize: Pin.Size,
  iconAnchor: Pin.Anchor
});

const currentCustomIcon = new Icon({
  iconUrl: Pin.CurrentUrl,
  iconSize: Pin.Size,
  iconAnchor: Pin.Anchor
});

function Map(props: MapProps): JSX.Element {
  const {city, offers, selectedPointId, mapClass} = props;
  const filtredPoints = offers.filter((offer) => offer.city.name === city);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city, filtredPoints[0]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      filtredPoints.forEach((filtredPoint) => {
        const marker = new Marker({
          lat: filtredPoint.location.latitude,
          lng: filtredPoint.location.longitude
        });

        marker
          .setIcon(
            selectedPointId !== null && filtredPoint.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, filtredPoints, selectedPointId]);

  return (
    <section
      className = {mapClass}
      style={{height: `${mapClass === PageNames.Offer ? MapSize.Offer : MapSize.MainPage}`}}
      ref={mapRef}
    >
    </section>);
}

export default Map;

