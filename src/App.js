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
import Nav from "./components/Nav/Nav";
import * as actions from "./redux/Weather/actions";
import { getCitiesList } from "./utils/utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const listFromLocal = getCitiesList();
    this.props.saveCity(listFromLocal);
  }

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
      getCityWeather,
      foundСity,
      saveCity,
      citiesList,
    } = this.props;

    return (
      <div className="container-fluid">
        <Header
          coord5daysHours={coord5daysHours}
          coords={coords}
          getCityWeather={getCityWeather}
          foundСity={foundСity}
        />

        <City
          ownWeatherNow={ownWeatherNow}
          coords={coords}
          isGeolocationAvailable={isGeolocationAvailable}
          isGeolocationEnabled={isGeolocationEnabled}
          saveCity={saveCity}
          foundСity={foundСity}
          citiesList={citiesList}
        />

        {/* <Week fiveDayOwnWeather={fiveDayOwnWeather} /> */}
        {/* <Tomorrow fiveDayOwnWeather={fiveDayOwnWeather} /> */}
        {/* <Today fiveDayOwnWeather={fiveDayOwnWeather} /> */}
        <SavedCities citiesList={citiesList} />
      </div>
    );
  }
}
const MSTP = state => ({
  ownWeatherNow: state.weather.ownWeatherNow,
  fiveDayOwnWeather: state.weather.fiveDayOwnWeather,
  foundСity: state.weather.foundСity,
  citiesList: state.weather.citiesList,
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
