import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const createAction = type => payload => ({
  type,
  payload,
});

export const weatherApiKey = "0bebc8141664e41c59c89d99a03681cd";

export const cityRegExp = /(^[a-zA-Z]+$)|(^[ЁёА-я]+$)/;

export const setTown = town => {
  const citiesList = JSON.stringify(town);

  localStorage.setItem("savedCities", citiesList);
};

export const getCitiesList = () => {
  const savedCities = localStorage.getItem("savedCities");
  return JSON.parse(savedCities);
};
