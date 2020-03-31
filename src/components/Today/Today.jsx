import React from "react";
import moment from "moment";
import funcDayForecast from "../../servise/funcDayForcaset";
import GoogleMap from "../GoogleMap/GoogleMap";

const Today = props => {
  const { fiveDayOwnWeather } = props;
  let center = { lat: 52.374, lng: 4.8897 };

  if (fiveDayOwnWeather.city) {
    center = {
      lat: +fiveDayOwnWeather.city.coord.lat,
      lng: +fiveDayOwnWeather.city.coord.lon,
    };
  }

  const dateNow = moment().format("MMMM, D");
  const rightDay = moment().format("D");

  const dayForecast = funcDayForecast({ fiveDayOwnWeather, rightDay });

  return (
    <div className="col-12 pt-4">
      <div className="row">
        <div className="col-4 offset-1">
          <h2 className="font-weight-bold">Today</h2>
          <p className="pt-2">{dateNow}</p>
          <p className="pt-3 pb-2 border-bottom border-2">
            Time <span className="pl-5">Weather</span>
          </p>
          {dayForecast && dayForecast}
        </div>
        <div className="col-6">
          <GoogleMap center={center} />
        </div>
      </div>
    </div>
  );
};
export default Today;
