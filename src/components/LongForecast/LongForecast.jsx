import React from "react";
import Today from "../Today/Today";
import Week from "../Week/Week";

const LongForecast = ({ fiveDayOwnWeather, toggle, showCurrenWeather }) => {
  return (
    <>
      {toggle.today ? (
        <Today
          fiveDayOwnWeather={fiveDayOwnWeather}
          toggle={toggle}
          showCurrenWeather={showCurrenWeather}
        />
      ) : (
        <Week fiveDayOwnWeather={fiveDayOwnWeather} />
      )}
    </>
  );
};
export default LongForecast;
