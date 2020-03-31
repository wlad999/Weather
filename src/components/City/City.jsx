import React from "react";
import "./City.scss";
import classNames from "classnames";
import Geolocation from "../Geo/Geolocation";
// import { getTown } from "../../utils/utils";

const cityButton =
  "btn text-secondary font-weight-bold rounded-circle border border-secondary border-3";
const cityButtonSucces =
  "btn text-secondary font-weight-bold rounded-circle border border-secondary border-3 btn-success";

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

  // const listFromLocal = getTown();
  // console.log("listFromLocal", listFromLocal);

  try {
    if (props.ownWeatherNow && props.ownWeatherNow.main) {
      main = ownWeatherNow.main;
      sys = ownWeatherNow.sys;
      overcast = ownWeatherNow.weather[0].main;
      windSpeed = ownWeatherNow.wind.speed;
    }
  } catch (error) {
    console.log("ERRER", error);
  }
  // const savedCities = getTown();
  // console.log("savedCities", savedCities);

  return (
    <>
      {!ownWeatherNow.main ? (
        <Geolocation
          coords={coords}
          isGeolocationAvailable={isGeolocationAvailable}
          isGeolocationEnabled={isGeolocationEnabled}
        />
      ) : (
        <div className="row justify-content-between align-items-center border-bottom border-2 pt-4 pb-4">
          <div className="col-4 offset-4 text-center">
            <h2 className="font-weight-bold">{main && main.temp} &deg;C</h2>
          </div>
          <div className="col-4 text-right">
            <button
              type="button"
              className={classNames(!cityName ? cityButton : cityButtonSucces)}
              disabled={!cityName}
              onClick={() => saveCity(addCityToList)}
            >
              &#43;
              {/*+*/}
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
    </>
  );
};
export default City;
