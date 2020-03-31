import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker/Marker";

class GoogleMaps extends Component {
  static defaultProps = {
    center: {
      lat: 52.374,
      lng: 4.8897,
    },
    zoom: 11,
  };

  render() {
    const { lat } = this.props.center;
    const { lng } = this.props.center;

    return (
      <div style={{ height: "430px", width: "100%" }}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.props.center}
        >
          <Marker lat={lat} lng={lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMaps;
// bootstrapURLKeys={{ key: "AIzaSyAqizZFmDgJC5l6Md8drBBaeK4TFAyCNy8" }}
