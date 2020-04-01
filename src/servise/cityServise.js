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

  try {
    if (ownWeatherNow && ownWeatherNow.main) {
      main = ownWeatherNow.main;
      sys = ownWeatherNow.sys;
      overcast = ownWeatherNow.weather[0].main;
      windSpeed = ownWeatherNow.wind.speed;
    }
  } catch (error) {
    console.log("ERRER", error);
  }
  const addCity = () => saveCity(addCityToList);
  return { main, cityName, sys, overcast, windSpeed, addCity };
};

export default funcDataForCity;
