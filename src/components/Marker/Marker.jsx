import React from "react";
import "./Marker.scss";
import { ReactComponent as Point } from "../../assets/svg/point.svg";

const Marker = () => {
  return (
    <div className="Marker">
      <Point />
    </div>
  );
};

export default Marker;
