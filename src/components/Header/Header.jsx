import React from "react";
import "./Header.scss";
import Nav from "../Nav/Nav";
import Input from "../Input/Input";

const Header = ({
  showCityWeather,
  getCityWeather,
  foundСity,
  tomorrowToggle,
  todayToggle,
  weekToggle,
  ownWeatherNow,
  cityWeatherWeek,
  cityList,
  toggle,
}) => {
  return (
    <div className="row justify-content-between align-items-center Header border-bottom border-2">
      <div className="col-6">
        <Nav
          tomorrowToggle={tomorrowToggle}
          todayToggle={todayToggle}
          weekToggle={weekToggle}
          showCityWeather={showCityWeather}
          ownWeatherNow={ownWeatherNow}
          cityWeatherWeek={cityWeatherWeek}
          cityList={cityList}
          toggle={toggle}
        />
      </div>
      <div className="col-4">
        <Input getCityWeather={getCityWeather} foundСity={foundСity} />
      </div>
    </div>
  );
};
export default Header;
