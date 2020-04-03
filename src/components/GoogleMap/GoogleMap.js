import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../Marker/Marker";

const GoogleMaps = ({ showCurrenWeather, center }) => {
  const { lat, lng } = center;

  return (
    <div style={{ height: "430px", width: "100%" }}>
      <GoogleMapReact
        defaultCenter={{
          lat: 52.374,
          lng: 4.8897,
        }}
        defaultZoom={11}
        center={center}
      >
        <Marker lat={lat} lng={lng} showCurrenWeather={showCurrenWeather} />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMaps;
