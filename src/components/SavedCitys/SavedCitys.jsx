import React from "react";
import { funcCitiesCard } from "../../servise/savedCitiesServise";

const SavedCities = ({ citiesList, cityToggle }) => {
  const citiesCard = funcCitiesCard(citiesList);

  return (
    <div className="row">
      <div className="col-10 offset-1 pt-1">
        <h3 className="font-weight-bold mb-4 text-center">Saved cities</h3>
        <div className="row" onClick={cityToggle}>
          {citiesCard && citiesCard}
        </div>
      </div>
    </div>
  );
};
export default SavedCities;
