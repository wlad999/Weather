import React from "react";
import moment from "moment";
import funcFiveDaysForcaset from "./funcFiveDaysForcaset";

const funkDataForWeek = fiveDayOwnWeather => {
  const today = moment().format("MMMM, D");
  let lastDay = null;
  const daysArr = [];
  const weatherArr = [];

  if (fiveDayOwnWeather.list) {
    fiveDayOwnWeather.list.forEach(item => {
      const weekDay = moment(item.dt * 1000).format("MMMM, D");
      if (daysArr.includes(weekDay)) {
        return;
      }
      return daysArr.push(weekDay);
    });
  }
  daysArr.map(item => {
    return weatherArr.push(
      <div key={item} className="col-sm-2">
        <div className="card">
          <div className="card-body ">
            <h5 className="card-title">{item}</h5>
            <div className="overflow-auto" style={{ height: "15rem" }}>
              {funcFiveDaysForcaset({
                fiveDayOwnWeather,
                rightDay: item,
              })}
            </div>
          </div>
        </div>
        ,
      </div>,
    );
  });
  if (fiveDayOwnWeather.list) {
    lastDay = moment(
      fiveDayOwnWeather.list[fiveDayOwnWeather.list.length - 1].dt * 1000,
    ).format("MMMM, D");
  }

  return { today, lastDay, weatherArr };
};

export default funkDataForWeek;
