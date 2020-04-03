import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { geolocated } from "react-geolocated";
import Header from "./components/Header/Header";
import City from "./components/City/City";
import SavedCities from "./components/SavedCitys/SavedCitys";
import LongForecast from "./components/LongForecast/LongForecast";
import * as actions from "./redux/Weather/actions";
import { setDefaultCitiesList } from "./utils/utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { saveCity } = this.props;
    setDefaultCitiesList({ saveCity });
  }

  componentDidUpdate(prevProps) {
    const { coords, toggle, userWeather, coord5daysHours } = this.props;
    if (
      prevProps.coords !== coords ||
      (prevProps.toggle.ownWeater !== toggle.ownWeater &&
        toggle.ownWeater === true)
    ) {
      userWeather(coords.latitude, coords.longitude);
      coord5daysHours(coords.latitude, coords.longitude);
    }
  }

  render() {
    const {
      showCityWeather,
      ownWeatherNow,
      isGeolocationAvailable,
      isGeolocationEnabled,
      coords,
      fiveDayOwnWeather,
      getCityWeather,
      foundСity,
      saveCity,
      citiesList,
      toggle,
      tomorrowToggle,
      todayToggle,
      weekToggle,
      cityWeatherWeek,
      cityList,
      cityToggle,
      inputError,
      clearInput,
      showCurrenWeather,
    } = this.props;

    return (
      <div className="container-fluid">
        <Header
          showCityWeather={showCityWeather}
          getCityWeather={getCityWeather}
          foundСity={foundСity}
          tomorrowToggle={tomorrowToggle}
          todayToggle={todayToggle}
          weekToggle={weekToggle}
          ownWeatherNow={ownWeatherNow}
          cityWeatherWeek={cityWeatherWeek}
          cityList={cityList}
          toggle={toggle}
          inputError={inputError}
          clearInput={clearInput}
        />
        <City
          ownWeatherNow={ownWeatherNow}
          coords={coords}
          isGeolocationAvailable={isGeolocationAvailable}
          isGeolocationEnabled={isGeolocationEnabled}
          saveCity={saveCity}
          foundСity={foundСity}
          citiesList={citiesList}
          toggle={toggle}
        />
        {toggle.today || toggle.week ? (
          <LongForecast
            toggle={toggle}
            fiveDayOwnWeather={fiveDayOwnWeather}
            showCurrenWeather={showCurrenWeather}
          />
        ) : (
          <SavedCities
            citiesList={citiesList}
            cityToggle={cityToggle}
            saveCity={saveCity}
          />
        )}
      </div>
    );
  }
}
const MSTP = state => ({
  ownWeatherNow: state.weather.ownWeatherNow,
  fiveDayOwnWeather: state.weather.fiveDayOwnWeather,
  foundСity: state.weather.foundСity,
  citiesList: state.weather.citiesList,
  toggle: state.weather.toggle,
  inputError: state.weather.inputError,
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
