import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const weatherApiKey = "1fcb6a8d1c0a2784ad8119001af42f2c";

export const cityRegExp = /(^[a-zA-Z ]+$)|(^[ЁёА-я ]+$)/;

export const setTown = town => {
  const citiesList = JSON.stringify(town);
  localStorage.setItem("savedCities", citiesList);
};

export const getCitiesList = () => {
  const savedCities = localStorage.getItem("savedCities");
  return JSON.parse(savedCities);
};

export const setDefaultCitiesList = ({ saveCity }) => {
  if (Boolean(getCitiesList()) && Object.keys(getCitiesList()).length) {
    saveCity(getCitiesList());
  }
};
