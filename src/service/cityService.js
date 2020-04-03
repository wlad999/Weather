const funcDataForCity = ({
  ownWeatherNow,
  saveCity,
  foundСity,
  citiesList,
}) => {
  let main = {};
  let sys = {};
  let overcast = "";
  let windSpeed = "";
  let cityName;
  let addCityToList = {};

  if (foundСity.name) {
    cityName = foundСity.name;
    addCityToList = { ...citiesList };
    addCityToList[cityName] = cityName;
  }

  if (ownWeatherNow.main) {
    main = ownWeatherNow.main;
    sys = ownWeatherNow.sys;
    overcast = ownWeatherNow.weather[0].main;
    windSpeed = ownWeatherNow.wind.speed;
  }

  const addCity = () => saveCity(addCityToList);
  const cityButton =
    "btn text-secondary font-weight-bold rounded-circle border border-secondary border-3";
  const cityButtonSucces =
    "btn font-weight-bold rounded-circle border border-secondary border-3 btn-success";
  return {
    main,
    cityName,
    sys,
    overcast,
    windSpeed,
    addCity,
    cityButton,
    cityButtonSucces,
  };
};

export default funcDataForCity;
