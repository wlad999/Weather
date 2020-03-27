import React from "react";
import moment from "moment";
import funcDayForecast from "../../servise/funcDayForcaset";

const Today = props => {
  const { fiveDayOwnWeather } = props;

  const dateNow = moment().format("MMMM, D");
  const rightDay = moment().format("D");

  const dayForecast = funcDayForecast({ fiveDayOwnWeather, rightDay });

  return (
    <div className="col-12 pt-5">
      <div className="row">
        <div className="col-4 offset-1">
          <h3 className="font-weight-bold">Today</h3>
          <p className="pt-2">{dateNow}</p>
          <p className="pt-4 pb-2 border-bottom border-2">
            Time <span className="pl-5">Weather</span>
          </p>
          {dayForecast && dayForecast}
        </div>
      </div>
    </div>
  );
};
export default Today;
