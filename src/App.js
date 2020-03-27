import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { geolocated } from "react-geolocated";
import Header from "./components/Header/Header";
import City from "./components/City/City";
import SavedCities from "./components/SavedCitys/SavedCitys";
import Geolocation from "./components/Geo/Geolocation";
import Today from "./components/Today/Today";
import Tomorrow from "./components/Tomorrow/Tomorrow";
import Week from "./components/Week/Week";
import * as actions from "./redux/Weather/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.coords !== this.props.coords) {
      this.props.userWeather(
        this.props.coords.latitude,
        this.props.coords.longitude,
      );
    }
  }

  render() {
    const {
      ownWeatherNow,
      isGeolocationAvailable,
      isGeolocationEnabled,
      coords,
      coord5daysHours,
      fiveDayOwnWeather,
    } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <Header coord5daysHours={coord5daysHours} coords={coords} />
          {ownWeatherNow ? (
            <City ownWeatherNow={ownWeatherNow} />
          ) : (
            <Geolocation
              coords={coords}
              isGeolocationAvailable={isGeolocationAvailable}
              isGeolocationEnabled={isGeolocationEnabled}
            />
          )}
          <Week fiveDayOwnWeather={fiveDayOwnWeather} />
          {/* <Tomorrow fiveDayOwnWeather={fiveDayOwnWeather} /> */}
          {/* <Today fiveDayOwnWeather={fiveDayOwnWeather} /> */}
          {/* <SavedCities /> */}
        </div>
      </div>
    );
  }
}
const MSTP = state => ({
  ownWeatherNow: state.weather.ownWeatherNow,
  fiveDayOwnWeather: state.weather.fiveDayOwnWeather,
});

export default compose(
  connect(MSTP, { ...actions }),
  geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  }),
)(App);
