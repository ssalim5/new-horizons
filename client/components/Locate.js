import React from "react";
import axios from "axios";
import { setLocation } from "../store/location";
import { useDispatch } from "react-redux";

//Center map at your location for activities search.
export default function Locate({panTo}) {
  const dispatch = useDispatch()
  return (
    <button onClick={() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const loc = { lat: pos.coords.latitude, lng: pos.coords.longitude }
          panTo(loc)
          dispatch( setLocation(loc) )
        }, errorCallback);
      } else {
        alert("Sorry, Geolocation is not supported by this browser.");
      }
    }}>
      Find My Location!
    </button>
  )
}

// Check permissions if the error occured due to user not allowing location to be shared
export const errorCallback = () => {
  if (navigator.permissions) {
    navigator.permissions.query({ name: 'geolocation' }).then(res => {
      if (res.state === 'denied') {
        alert('Enable location permissions for this website in your browser settings.')
      }
    })
  } else {
    alert('Unable to access your location. Enter your location manually.')
  }
}

// Converting lat/long from browser geolocation into city, state, and zip code using Google Geocoding API
const getAddress = async(lat, long) => {
  const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${googleKey}`)
  setZip(res)
}
  // Dispatching city, state, and zip code to store state
const setZip = (address) => {
  let city = address.results[5].address_components[2].short_name
  let state = address.results[5].address_components[4].short_name
  let postal = address.results[5].address_components[0].short_name
}
