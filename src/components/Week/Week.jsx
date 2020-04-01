import React from "react";
import moment from "moment";
import funcFiveDaysForcaset from "../../servise/funcFiveDaysForcaset";
import { funkDataForWeek } from "../../servise/weekServise";

// import "./Week.scss";

const Week = ({ fiveDayOwnWeather }) => {
  const { today, lastDay, weatherArr } = funkDataForWeek(fiveDayOwnWeather);
  // const today = moment().format("MMMM, D");
  // let lastDay = null;
  // const daysArr = [];
  // const weatherArr = [];
  // try {
  //  fiveDayOwnWeather.list.forEach(item => {
  //    const weekDay = moment(item.dt * 1000).format("MMMM, D");
  //    if (daysArr.includes(weekDay)) {
  //      return;
  //    }
  //    return daysArr.push(weekDay);
  //  });
  //  daysArr.map(item => {
  //    return weatherArr.push(
  //      <div key={item} className="col-sm-2">
  //        <div className="card">
  //          <div className="card-body ">
  //            <h5 className="card-title">{item}</h5>
  //            <div className="overflow-auto" style={{ height: "15rem" }}>
  //              {funcFiveDaysForcaset({
  //                fiveDayOwnWeather,
  //                rightDay: item,
  //              })}
  //            </div>
  //          </div>
  //        </div>
  //        ,
  //      </div>,
  //    );
  //  });

  //  lastDay = moment(
  //    fiveDayOwnWeather.list[fiveDayOwnWeather.list.length - 1].dt * 1000,
  //  ).format("MMMM, D");
  // } catch (error) {
  //  console.log("error in trycatch");
  // }

  return (
    <div className="row">
      <div className="col-10 offset-1 pt-4">
        <h2 className="font-weight-bold">Week</h2>
        <p className="pt-2">
          {today} - {lastDay}
        </p>
        <div className="row">{weatherArr && weatherArr}</div>
      </div>
    </div>
  );
};
export default Week;
