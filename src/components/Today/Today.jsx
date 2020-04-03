import React from "react";
import GoogleMap from "../GoogleMap/GoogleMap";
import funkDataForDay from "../../service/dayService";

const Today = ({
  fiveDayOwnWeather,
  toggle,
  showCurrenWeather = { showCurrenWeather },
}) => {
  const dataForDay = funkDataForDay({ fiveDayOwnWeather, toggle });
  const { dayForecast, month, rightDay, center } = dataForDay;

  return (
    <div className="row pt-5">
      <div className="col-4 offset-1">
        <h2 className="font-weight-bold mb-0">{toggle.show}</h2>
        <p>
          {month}, {rightDay}
        </p>
        <p className="pb-2 border-bottom border-2">
          Time <span className="pl-5">Weather</span>
        </p>
        {dayForecast && (
          <div className="overflow-auto" style={{ height: "15rem" }}>
            {dayForecast}
          </div>
        )}
      </div>
      <div className="col-6">
        <GoogleMap center={center} showCurrenWeather={showCurrenWeather} />
      </div>
    </div>
  );
};
export default Today;
