import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import GeoLocation from './Geolocation';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

export class Nearby extends React.Component {
  render() {
    return (
      <div>
        <GeoLocation />
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
              lat: -1.2884,
              lng: 36.8233
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"test"}/>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDN3RyOvTueeIClwEbnrrmBoPOvouFoXoA'
})(Nearby);
