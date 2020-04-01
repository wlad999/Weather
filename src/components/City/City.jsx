import React from "react";
import "./City.scss";
import Geolocation from "../Geo/Geolocation";

const cityButton =
  "btn text-secondary font-weight-bold rounded-circle border border-secondary border-3";
const cityButtonSucces =
  "btn font-weight-bold rounded-circle border border-secondary border-3 btn-success";

const City = props => {
  let main = {};
  let sys = {};
  let overcast = "";
  let windSpeed = "";
  const {
    ownWeatherNow,
    coords,
    isGeolocationAvailable,
    isGeolocationEnabled,
    saveCity,
    foundСity,
    citiesList,
  } = props;

  const cityName = foundСity.name;
  const addCityToList = { ...citiesList };
  addCityToList[cityName] = cityName;

  try {
    if (ownWeatherNow && ownWeatherNow.main) {
      main = ownWeatherNow.main;
      sys = ownWeatherNow.sys;
      overcast = ownWeatherNow.weather[0].main;
      windSpeed = ownWeatherNow.wind.speed;
    }
  } catch (error) {
    console.log("ERRER", error);
  }

  return (
    <div className="City pt-4 pb-4">
      {!ownWeatherNow.main ? (
        <Geolocation
          coords={coords}
          isGeolocationAvailable={isGeolocationAvailable}
          isGeolocationEnabled={isGeolocationEnabled}
        />
      ) : (
        <div className="row justify-content-between border-bottom border-2">
          <div className="col-4 offset-4 text-center">
            <h2 className="font-weight-bold">
              {main && main.temp}
              &deg;C
            </h2>
          </div>
          <div className="col-4 text-right">
            <button
              type="button"
              className={!cityName ? cityButton : cityButtonSucces}
              disabled={!cityName}
              onClick={() => saveCity(addCityToList)}
            >
              <span className="d-flex align-items-center">&#43;</span>
            </button>
          </div>
          <div className="col-12 text-center">
            <p>
              {ownWeatherNow && ownWeatherNow.name}, {sys && sys.country}
            </p>
          </div>
          <div className="col-12 text-center font-weight-bold">
            <p>
              {overcast && overcast}, Wind - {windSpeed && windSpeed} meter per
              second
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default City;
