import React from "react";
import moment from "moment";

const funcFiveDaysForcaset = props => {
  console.log("props", props);

  let { fiveDayOwnWeather, rightDay } = props;
  rightDay += "";

  let forcasetDayList = {};
  let dayForecast = null;

  try {
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
          <p key={item.dt} className="small">
            {time}
            <span className="pl-2">
              {item.main.temp}&deg;C, {item.weather[0].main},
            </span>
            <div> Wind - {item.wind.speed} meter/sec</div>
          </p>
        );
      });
    }
  } catch (error) {
    console.log(error);
  }

  return dayForecast;
};

export default funcFiveDaysForcaset;
