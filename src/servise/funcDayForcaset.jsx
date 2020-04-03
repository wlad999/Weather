import React from "react";
import moment from "moment";

const funcDayForecast = props => {
  let { fiveDayOwnWeather, rightDay } = props;
  rightDay += "";

  let forcasetDayList = {};
  let dayForecast = null;

  if (fiveDayOwnWeather.list) {
    forcasetDayList = fiveDayOwnWeather.list.filter(item => {
      const dayin = moment(item.dt * 1000).format("D");

      if (rightDay === dayin) {
        return item;
      }
    });
    dayForecast = forcasetDayList.map(item => {
      const time = moment(item.dt * 1000).format("HH:mm");

      return (
        <p key={item.dt}>
          {time}
          <span className="pl-5">
            {item.main.temp}&deg;C, {item.weather[0].main}, Wind -{" "}
            {item.wind.speed} meter per second
          </span>
        </p>
      );
    });
  }
  return dayForecast;
};

export default funcDayForecast;
