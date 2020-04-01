import React from "react";
import { useLocation } from "react-router-dom";

const Nav = ({
  tomorrowToggle,
  todayToggle,
  weekToggle,
  showCityWeather,
  ownWeatherNow,
  cityWeatherWeek,
  cityList,
  toggle,
}) => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const city = query.get("id");

  if (
    city &&
    ownWeatherNow.name &&
    city !== ownWeatherNow.name &&
    toggle.ownWeater === false
  ) {
    showCityWeather(city);
    cityWeatherWeek(city);
  }

  return (
    <nav className="nav">
      <button type="button" className="btn text-black-50" onClick={todayToggle}>
        Today
      </button>
      <button
        type="button"
        className="btn text-black-50"
        onClick={tomorrowToggle}
      >
        Tomorrow
      </button>
      <button type="button" className="btn text-black-50" onClick={weekToggle}>
        Week
      </button>
      <button type="button" className="btn text-black-50" onClick={cityList}>
        Own weather
      </button>
    </nav>
  );
};
export default Nav;
