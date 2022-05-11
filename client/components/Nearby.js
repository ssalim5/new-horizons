import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

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
      <div>THIS IS THE NEARBY</div>
      {<Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
        />}
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDN3RyOvTueeIClwEbnrrmBoPOvouFoXoA'
})(Nearby);
