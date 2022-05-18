import React from 'react'
import { GoogleMap, useJsApiLoader, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

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

function MyComponent(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDN3RyOvTueeIClwEbnrrmBoPOvouFoXoA",
    libraries
  })

  // const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds(center);
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  if (loadError) return "Error Loading Maps"

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        options={options}
        onClick={ () => console.log("Clicked Map") }
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <div> Loading Map... </div>
}

export default MyComponent
