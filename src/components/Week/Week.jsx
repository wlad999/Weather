import React from "react";
import funkDataForWeek from "../../servise/weekServise";

const Week = ({ fiveDayOwnWeather }) => {
  const dataForWeek = funkDataForWeek(fiveDayOwnWeather);

  const { today, lastDay, weatherArr } = dataForWeek;

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
