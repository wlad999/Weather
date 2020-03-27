import React from "react";

const City = props => {
  let main = {};
  let sys = {};
  let overcast = "";
  let windSpeed = "";
  const { ownWeatherNow } = props;

  try {
    if (props.ownWeatherNow && props.ownWeatherNow.main) {
      main = ownWeatherNow.main;
      sys = ownWeatherNow.sys;
      overcast = ownWeatherNow.weather[0].main;
      windSpeed = ownWeatherNow.wind.speed;
    }
  } catch (error) {
    console.log("ERRER", error);
  }

  return (
    <div className="col-12 border-bottom border-2 pt-5 pb-5">
      <div className="row justify-content-between align-items-center">
        <div className="col-4 offset-4 text-center">
          <h3 className="font-weight-bold">{main && main.temp} &deg;C</h3>
        </div>
        <div className="col-4 text-right">
          <button
            type="button"
            className="btn text-black-50 font-weight-bold rounded-circle border border-3 border-black-50"
          >
            +
          </button>
        </div>
        <div className="col-12 text-center">
          <p>
            {ownWeatherNow && ownWeatherNow.name}, {sys && sys.country}
          </p>
        </div>
        <div className="col-12 text-center font-weight-bold">
          <p>
            {overcast && overcast}, Wind - {windSpeed && windSpeed} meter per
            second
          </p>
        </div>
      </div>
    </div>
  );
};
export default City;
