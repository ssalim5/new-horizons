import React, {useRef, useCallback, useState} from 'react'
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Search from './Search';
import Locate from './Locate'

let service;
const containerStyle = {
  width: '80vw',
  height: '80vh'
};

export const defaultCenter = {
  lat: 40.7580,
  lng: -73.9855
};

const options = {
  disableDefaultUI: true,
  zoomControl: true
}

const libraries = ["places"]

export default function Map(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
    libraries
  })

  const [map, setMap] = useState(null)
  const [markers, setMarkers] = useState([])
  const [selectedMarker, setSelectedMarker] = useState(null)


  const mapRef = useRef();
  const onLoad = useCallback(map => {
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

  const panTo = useCallback( ({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(11);
    let map = mapRef.current;
    new google.maps.Marker({
      position: {lat, lng},
      icon: {
        urL: "http://maps.google.com/mapfiles/kml/pushpin/blue-pushpin.png"
      },
      map
    })

    let request = {
      location: { lat, lng },
      radius: "0.2",
      query: props.activityQuery
    };

    service = new google.maps.places.PlacesService(mapRef.current);
    service.textSearch(request, searchCallback);
    function searchCallback(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          let place = results[i];
          if(place.business_status !== "OPERATIONAL")
            continue
          setMarkers( current => [...current,
            {
              key: i,
              lat: place.geometry.location.lat(),
              lng: place.geometry.location.lng(),
              name: place.name,
              address: place.formatted_address,
              url: "https://www.google.com/maps/place/?q=place_id:" + encodeURIComponent(place.place_id),
              openBool: place.hasOwnProperty("opening_hours") ? place.opening_hours.isOpen() : null
            }
          ])
        }
      }
    }
  }, []);

  if (loadError) return "Error Loading Maps"

  return isLoaded ? (
    <div>
      <Locate panTo={panTo}/>
      <Search panTo={panTo}/>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={12}
        options={options}
        onLoad={onLoad}
        // onUnmount={onUnmount}
      >
        { markers.map( marker => (
          <Marker
            key={marker.key}
            position={ {lat: marker.lat, lng: marker.lng} }
            onClick={() => setSelectedMarker(marker)}
          />
        ))}

        {selectedMarker ? (
          <InfoWindow
            position={{lat: selectedMarker.lat, lng: selectedMarker.lng}}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h1> {selectedMarker.name}  </h1>
              <h2> {selectedMarker.address} </h2>
              { selectedMarker.openBool === null ? <></> : <h3> {selectedMarker.openBool ? "Open Now" : "Closed Now"} </h3> }
              <h3>
                <a href={selectedMarker.url} >
                  View on Google Maps
                </a>
              </h3>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  ) : <div> Loading Map... </div>
}
