import {useRef, useEffect} from 'react';
import {Icon, LayerGroup, Marker, layerGroup} from 'leaflet';
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

  const mapRef = useRef(null);
  const map = useMap(mapRef, city, offers[0]);

  const markerLayerNew = useRef<LayerGroup>(layerGroup());
  const location = offers[0].city.location;

  useEffect(() => {
    if (map) {
      map.setView(
        [location.latitude,
          location.longitude],
        location.zoom
      );
      markerLayerNew.current.addTo(map);
      markerLayerNew.current.clearLayers();
    }
  }, [location, map]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((filtredPoint) => {
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
  }, [map, offers, selectedPointId]);

  return (
    <section
      className = {mapClass}
      style={{height: `${mapClass === PageNames.Offer ? MapSize.Offer : MapSize.MainPage}`}}
      ref={mapRef}
    >
    </section>);
}

export default Map;

