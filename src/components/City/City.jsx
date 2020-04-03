import React from "react";
import "./City.scss";
import Geolocation from "../Geo/Geolocation";
import funcDataForCity from "../../service/cityService";

const City = ({
  ownWeatherNow,
  coords,
  isGeolocationAvailable,
  isGeolocationEnabled,
  saveCity,
  foundСity,
  citiesList,
  toggle,
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
    <div className="pt-4">
      {!ownWeatherNow.main ? (
        <Geolocation
          coords={coords}
          isGeolocationAvailable={isGeolocationAvailable}
          isGeolocationEnabled={isGeolocationEnabled}
        />
      ) : (
        <div className="row justify-content-between border-bottom border-2 City">
          <div className="col-4 offset-4 text-center align-self-center">
            <h2 className="font-weight-bold mb-0">
              {main.temp}
              &deg;C
            </h2>
          </div>
          <div className="col-4 text-right align-self-center">
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
            <p className="p-0">
              {toggle.showCurrenWeather &&
                `${overcast}, Wind - ${windSpeed} meter per second`}
              <span className="invisible">i</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default City;
