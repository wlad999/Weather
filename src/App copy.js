import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { geolocated } from "react-geolocated";
import Header from "./components/Header/Header";
import City from "./components/City/City";
import SavedCities from "./components/SavedCitys/SavedCitys";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { isGeolocationAvailable, isGeolocationEnabled, coords } = this.props;
    console.log(
      "isGeolocationAvailable, isGeolocationEnabled, coords",
      isGeolocationAvailable,
      isGeolocationEnabled,
      coords,
    );

    return (
      <div className="container-fluid">
        <div className="row">
          <Header />
          <City />
          <SavedCities />
        </div>
        {!isGeolocationAvailable ? (
          <div>Your browser does not support Geolocation</div>
        ) : !isGeolocationEnabled ? (
          <div>Geolocation is not enabled</div>
        ) : coords ? (
          <table>
            <tbody>
              <tr>
                <td>latitude</td>
                <td>{coords.latitude}</td>
              </tr>
              <tr>
                <td>longitude</td>
                <td>{coords.longitude}</td>
              </tr>
              <tr>
                <td>altitude</td>
                <td>{coords.altitude}</td>
              </tr>
              <tr>
                <td>heading</td>
                <td>{coords.heading}</td>
              </tr>
              <tr>
                <td>speed</td>
                <td>{coords.speed}</td>
              </tr>
            </tbody>
          </table>
        ) : (
          <div>Getting the location data&hellip; </div>
        )}
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(App);
