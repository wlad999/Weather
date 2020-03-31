import React from "react";
import moment from "moment";
import funcFiveDaysForcaset from "../../servise/funcFiveDaysForcaset";
import "./Week.scss";

const Week = props => {
  const { fiveDayOwnWeather } = props;

  const today = moment().format("MMMM, D");
  let lastDay = null;
  const daysArr = [];
  const weatherArr = [];
  try {
    fiveDayOwnWeather.list.forEach(item => {
      const weekDay = moment(item.dt * 1000).format("MMMM, D");
      if (daysArr.includes(weekDay)) {
        return;
      }
      return daysArr.push(weekDay);
    });
    daysArr.map(item => {
      return weatherArr.push(
        <span
          key={item}
          className="col border border-2 p-2 m-2 inline pre-scrollable Week"
        >
          {item}
          {funcFiveDaysForcaset({
            fiveDayOwnWeather,
            rightDay: item,
          })}
        </span>,
      );
    });

    lastDay = moment(
      fiveDayOwnWeather.list[fiveDayOwnWeather.list.length - 1].dt * 1000,
    ).format("MMMM, D");
  } catch (error) {
    console.log("error in trycatch");
  }

  return (
    <div className="col-10 offset-1 pt-5">
      <div className="row">
        <div className="col-12">
          <h3 className="font-weight-bold">Week</h3>
          <p className="pt-2">
            {today} - {lastDay}
          </p>
        </div>
        {weatherArr && weatherArr}
      </div>
    </div>
  );
};
export default Week;
