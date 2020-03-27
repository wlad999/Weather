import React from "react";
import moment from "moment";
import funcDayForecast from "../../servise/funcDayForcaset";

const Tomorrow = props => {
  const { fiveDayOwnWeather } = props;

  const month = moment().format("MMMM");
  const tomorrow = +moment().format("D") + 1;

  const dayForecast = funcDayForecast({
    fiveDayOwnWeather,
    rightDay: tomorrow,
  });

  return (
    <div className="col-12 pt-5">
      <div className="row">
        <div className="col-4 offset-1">
          <h3 className="font-weight-bold">Tomorrow</h3>
          <p className="pt-2">
            {month}, {tomorrow}
          </p>
          <p className="pt-4 pb-2 border-bottom border-2">
            Time <span className="pl-5">Weather</span>
          </p>
          {dayForecast && dayForecast}
        </div>
      </div>
    </div>
  );
};
export default Tomorrow;
