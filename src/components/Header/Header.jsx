import React from "react";
import "./Header.scss";
import Nav from "../Nav/Nav";
import Input from "../Input/Input";

const Header = props => {
  const { coord5daysHours, getCityWeather, coords, foundСity } = props;
  return (
    <div className="row justify-content-between align-items-center Nav border-bottom border-2">
      <div className="col-6">
        <Nav coord5daysHours={coord5daysHours} coords={coords} />
      </div>
      <div className="col-4">
        <Input getCityWeather={getCityWeather} foundСity={foundСity} />
      </div>
    </div>
  );
};
export default Header;
