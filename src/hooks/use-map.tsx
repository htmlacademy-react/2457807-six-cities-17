import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer} from 'leaflet';
import { Layer } from '../style-options';
import { ListOfferType } from '../types/offers';


function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: string, centerPoint: ListOfferType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: centerPoint.city.location.latitude,
          lng: centerPoint.city.location.longitude
        },
        zoom: centerPoint.city.location.zoom
      });

      const layer = new TileLayer(
        Layer.Url,
        {
          attribution:
           Layer.Attribution
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city, centerPoint]);

  return map;
}

export default useMap;
