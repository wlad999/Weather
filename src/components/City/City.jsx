import React from "react";
import "./City.scss";
import Geolocation from "../Geo/Geolocation";
import funcDataForCity from "../../servise/cityServise";

const cityButton =
  "btn text-secondary font-weight-bold rounded-circle border border-secondary border-3";
const cityButtonSucces =
  "btn font-weight-bold rounded-circle border border-secondary border-3 btn-success";

const City = ({
  ownWeatherNow,
  coords,
  isGeolocationAvailable,
  isGeolocationEnabled,
  saveCity,
  foundСity,
  citiesList,
}) => {
  const dataForCity = funcDataForCity({
    ownWeatherNow,
    saveCity,
    foundСity,
    citiesList,
  });
  const { main, cityName, sys, overcast, windSpeed, addCity } = dataForCity;

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
              onClick={addCity}
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
