import React from "react";
import Today from "../Today/Today";
import Week from "../Week/Week";

const LongForecast = ({ fiveDayOwnWeather, toggle }) => {
  return (
    <>
      {toggle.today ? (
        <Today fiveDayOwnWeather={fiveDayOwnWeather} toggle={toggle} />
      ) : (
        <Week fiveDayOwnWeather={fiveDayOwnWeather} />
      )}
    </>
  );
};
export default LongForecast;
