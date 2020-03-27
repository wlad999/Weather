import React from "react";
import moment from "moment";
import funcFiveDaysForcaset from "../../servise/funcFiveDaysForcaset";

const Week = props => {
  const { fiveDayOwnWeather } = props;

  const today = moment().format("MMMM, D");
  let lastDay = null;
  const daysArr = [];
  const weatherArr = [];
  try {
    fiveDayOwnWeather.list.forEach(item => {
      const day = moment(item.dt * 1000).format("D");
      const weekDay = moment(item.dt * 1000).format("MMMM, D");
      if (daysArr.includes(day)) {
        return;
      }
      return daysArr.push(day);
    });
    console.log("daysArr", daysArr);

    daysArr.map(item => {
      return weatherArr.push(
        <div className="col border border-2 p-2 d-inline m-2">
          {item}
          {funcFiveDaysForcaset({
            fiveDayOwnWeather,
            rightDay: item,
          })}
        </div>,
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
