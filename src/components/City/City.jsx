import React from "react";
import "./City.scss";
import Geolocation from "../Geo/Geolocation";
import funcDataForCity from "../../servise/cityServise";

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
  const {
    main,
    cityName,
    sys,
    overcast,
    windSpeed,
    addCity,
    cityButton,
    cityButtonSucces,
  } = dataForCity;

  return (
    <div className="City pt-4">
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
              &#43;
            </button>
          </div>
          <div className="col-12 text-center">
            <p>
              {ownWeatherNow.name}, {sys.country}
            </p>
          </div>
          <div className="col-12 text-center font-weight-bold">
            <p>
              {overcast}, Wind - {windSpeed} meter per second
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default City;
