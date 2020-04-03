import React from "react";
import "./Marker.scss";
import { ReactComponent as Point } from "../../assets/svg/point.svg";

const Marker = ({ showCurrenWeather }) => {
  return <Point className="Marker" onClick={showCurrenWeather} />;
};

export default Marker;
