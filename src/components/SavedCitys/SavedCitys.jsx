import React from "react";
import funcCitiesCard from "../../service/savedCitiesService";

const SavedCities = ({ citiesList, cityToggle, saveCity }) => {
  const citiesCard = funcCitiesCard({ citiesList, cityToggle, saveCity });

  return (
    <div className="row">
      <div className="col-10 offset-1 pt-1">
        <h3 className="font-weight-bold mb-4 text-center">Saved cities</h3>
        <div className="row">{citiesCard && citiesCard}</div>
      </div>
    </div>
  );
};
export default SavedCities;
