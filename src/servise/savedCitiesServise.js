import React from "react";
import { Link } from "react-router-dom";

const funcCitiesCard = ({ citiesList, cityToggle, saveCity }) => {
  return Object.keys(citiesList).map(item => {
    const deleteCityFromList = () => {
      const сityDellFromList = { ...citiesList };
      delete сityDellFromList[item];
      saveCity(сityDellFromList);
    };

    return (
      <div className="col-sm-2 p-2" key={item} id={item}>
        <div className="card" style={{ height: "8rem" }}>
          <button
            className="btn text-secondary text-right p-0 pr-2"
            onClick={deleteCityFromList}
          >
            &#215;
          </button>
          <Link to={`?id=${item}`} style={{ color: "#95989a" }}>
            <div className="card-body" onClick={cityToggle}>
              <h5 className="card-title text-center">{item}</h5>
            </div>
          </Link>
        </div>
      </div>
    );
  });
};
export default funcCitiesCard;
