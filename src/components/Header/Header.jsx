import React from "react";
import "./Header.scss";
import Nav from "../Nav/Nav";
import Input from "../Input/Input";

const Header = props => {
  const { coord5daysHours } = props;
  const { coords } = props;
  return (
    <div className="col-12 border-bottom border-2 Header">
      <div className="row justify-content-between align-items-center">
        <Nav coord5daysHours={coord5daysHours} coords={coords} />
        <Input />
      </div>
    </div>
  );
};
export default Header;
