import React from "react";
import moment from "moment";
import funcDayForecast from "../../servise/funcDayForcaset";
import GoogleMap from "../GoogleMap/GoogleMap";

const Today = ({ fiveDayOwnWeather, toggle }) => {
  let center = { lat: 52.374, lng: 4.8897 };

  if (fiveDayOwnWeather.city) {
    center = {
      lat: +fiveDayOwnWeather.city.coord.lat,
      lng: +fiveDayOwnWeather.city.coord.lon,
    };
  }
  const month = moment().format("MMMM");
  let rightDay;
  if (toggle.show === "Today") {
    rightDay = moment().format("D");
    console.log("rightDay", rightDay);
  }
  if (toggle.show === "Tomorrow") {
    const tomorrow = +moment().format("x") + 86400000;
    rightDay = moment(tomorrow).format("D");
  }

  const dayForecast = funcDayForecast({ fiveDayOwnWeather, rightDay });

  return (
    <div className="row pt-4">
      <div className="col-4 offset-1">
        <h2 className="font-weight-bold">{toggle.show}</h2>
        <p className="pt-2">
          {month}, {rightDay}
        </p>
        <p className="pb-2 border-bottom border-2">
          Time <span className="pl-5">Weather</span>
        </p>
        {dayForecast && (
          <div className="overflow-auto" style={{ height: "15rem" }}>
            {dayForecast}
          </div>
        )}
      </div>
      <div className="col-6">
        <GoogleMap center={center} />
      </div>
    </div>
  );
};
export default Today;
