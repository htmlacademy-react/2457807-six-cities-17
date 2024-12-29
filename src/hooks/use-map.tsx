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
  const centerMap = centerPoint.city.location;

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: centerMap.latitude,
          lng: centerMap.longitude
        },
        zoom: centerMap.zoom
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
  }, [mapRef, city, centerMap]);

  return map;
}

export default useMap;
