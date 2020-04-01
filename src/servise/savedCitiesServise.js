import React from "react";
import { Link } from "react-router-dom";

export const funcCitiesCard = ({ citiesList, cityToggle }) => {
  return Object.keys(citiesList).map(item => (
    <div className="col-sm-2 p-2" key={item} id={item}>
      <Link to={`?id=${item}`} style={{ color: "#95989a" }}>
        <div className="card" style={{ height: "8rem" }} onClick={cityToggle}>
          <div className="card-body">
            <h5 className="card-title text-center">{item}</h5>
          </div>
        </div>
      </Link>
    </div>
  ));
};
