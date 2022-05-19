import React from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Search from './Search';
import Locate from './Geolocation'

let service;
const containerStyle = {
  width: '80vw',
  height: '80vh'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const options = {
  disableDefaultUI: true,
  zoomControl: true
}

const libraries = ["places"]

export default function MyComponent(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDN3RyOvTueeIClwEbnrrmBoPOvouFoXoA",
    libraries
  })

  const [map, setMap] = React.useState(null)

  const mapRef = React.useRef();
  const onLoad = React.useCallback(map => {
    mapRef.current = map;
  }, []);

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  const moveMap = React.useCallback(({ lat, lng }) => {
    mapRef.current.moveMap({ lat, lng });
    mapRef.current.setZoom(14);
    let map = mapRef.current;

    let request = {
      location: { lat, lng },
      radius: "500",
      type: ["establishment"]
    };

    service = new google.maps.places.PlacesService(mapRef.current);
    service.nearbySearch(request, callback);
    function callback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          let place = results[i];
          new google.maps.Marker({
            position: place.geometry.location,
            map
          });
        }
      }
    }
  }, []);

  if (loadError) return "Error Loading Maps"

  return isLoaded ? (
    <div>
      <Search moveMap={moveMap}/>
      <Locate moveMap={moveMap}/>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={options}
        onLoad={onLoad}
        // onUnmount={onUnmount}
      >
      <></>
      </GoogleMap>
    </div>
  ) : <div> Loading Map... </div>
}
