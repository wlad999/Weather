import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const SavedCities = ({ citiesList }) => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const id = query.get("id");
  console.log("id", id);

  const citiesCard = Object.keys(citiesList).map(item => (
    <div className="col-sm-2 p-2" key={item} id={item}>
      <NavLink to={`?id=${item}`} style={{ color: "#95989a" }}>
        <div className="card" style={{ height: "8rem" }}>
          <div className="card-body">
            <h5 className="card-title text-center text-">{item}</h5>
          </div>
        </div>
      </NavLink>
    </div>
  ));

  return (
    <div className="row">
      <div className="col-10 offset-1 pt-4">
        <h3 className="font-weight-bold mb-4 text-center">Saved cities</h3>
        <div className="row">{citiesCard && citiesCard}</div>
      </div>
    </div>
  );
};
export default SavedCities;
