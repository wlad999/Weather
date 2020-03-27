import React from "react";

const Nav = props => {
  const { coord5daysHours } = props;

  let todayWeather;

  try {
    const { coords } = props;
    const { latitude, longitude } = coords;

    todayWeather = () => {
      if (latitude && longitude) {
        coord5daysHours(latitude, longitude);
      }
    };
  } catch (error) {
    console.log("error in trycatch");
  }

  return (
    <div className="col">
      <nav className="nav">
        <button
          type="button"
          className="btn text-black-50"
          onClick={todayWeather}
        >
          Today
        </button>
        <button type="button" className="btn text-black-50">
          Tomorrow
        </button>
        <button type="button" className="btn text-black-50">
          Week
        </button>
      </nav>
    </div>
  );
};
export default Nav;
