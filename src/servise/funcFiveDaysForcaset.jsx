import React from "react";
import moment from "moment";

const funcFiveDaysForcaset = props => {
  let { fiveDayOwnWeather, rightDay } = props;
  rightDay += "";

  let forcasetDayList = {};
  let dayForecast = null;

  try {
    if (fiveDayOwnWeather.list) {
      forcasetDayList = fiveDayOwnWeather.list.filter(item => {
        const dayin = moment(item.dt * 1000).format("MMMM, D");
        if (rightDay === dayin) {
          return item;
        }
      });
      dayForecast = forcasetDayList.map(item => {
        const time = moment(item.dt * 1000).format("HH:mm");

        return (
          <div key={item.dt} className="small">
            <span key={item.dt}>
              {time}
              <span className="pl-2">
                {item.main.temp}&deg;C, {item.weather[0].main},
              </span>
            </span>
            <p>Wind - {item.wind.speed} meter/sec</p>
          </div>
        );
      });
    }
  } catch (error) {
    console.log(error);
  }

  return dayForecast;
};

export default funcFiveDaysForcaset;
