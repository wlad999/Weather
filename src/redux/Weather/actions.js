import { history, setTown } from "utils/utils";
import API from "api";
import actionTypes from "./actionsTypes";

export const userWeather = (lat, lon) => async dispatch => {
  try {
    const { data, status } = await API.getWeather.coord(lat, lon);
    if (status === 200) {
      await dispatch({
        type: actionTypes.WEATHER_COORDS,
        payload: data,
      });
    }
  } catch (error) {
    const { response } = error.request;
    console.log("response error", error, response);
  }
};

export const coord5daysHours = (lat, lon) => async dispatch => {
  try {
    const { data, status } = await API.getWeather.coord5daysHours(lat, lon);
    if (status === 200) {
      await dispatch({
        type: actionTypes.WEATHER_COORDS_5_DAYS,
        payload: data,
      });
    }
  } catch (error) {
    const { response } = error.request;
    console.log("response error", error, response);
  }
};
export const todayToggle = () => ({
  type: actionTypes.TOGGLE_SWOW,
  payload: { today: true, show: "Today" },
});
export const tomorrowToggle = () => ({
  type: actionTypes.TOGGLE_SWOW,
  payload: { today: true, show: "Tomorrow" },
});
export const weekToggle = () => ({
  type: actionTypes.TOGGLE_SWOW,
  payload: { today: false, show: "Week", week: true },
});
export const cityToggle = () => ({
  type: actionTypes.TOGGLE_SWOW,
  payload: { ownWeater: false },
});

export const cityList = () => async dispatch => {
  await dispatch({
    type: actionTypes.TOGGLE_SWOW,
    payload: { today: false, week: false, show: null, ownWeater: true },
  });
  history.push("");
};

export const getCityWeather = town => async dispatch => {
  try {
    const { data, status } = await API.getWeather.city(town);

    if (status === 200) {
      await dispatch({ type: actionTypes.FOUND_CITY, payload: data });
    }
  } catch (error) {
    const { response } = error.request;
    const errorData = JSON.parse(response);
    dispatch({ type: actionTypes.INPUT_ERROR, payload: errorData });
  }
};
export const clearInput = () => ({
  type: actionTypes.INPUT_ERROR,
  payload: {},
});

export const showCityWeather = town => async dispatch => {
  try {
    const { data, status } = await API.getWeather.city(town);

    if (status === 200) {
      await dispatch({ type: actionTypes.WEATHER_COORDS, payload: data });
    }
  } catch (error) {
    const { response } = error.request;
    console.log("response error", error, response);
  }
};
export const cityWeatherWeek = town => async dispatch => {
  try {
    const { data, status } = await API.getWeather.cityWeek(town);
    if (status === 200) {
      await dispatch({
        type: actionTypes.WEATHER_COORDS_5_DAYS,
        payload: data,
      });
    }
  } catch (error) {
    const { response } = error.request;
    console.log("response error", error, response);
  }
};

export const saveCity = list => async dispatch => {
  await setTown(list);
  await dispatch({ type: actionTypes.CITIES_LIST, payload: list });
  await dispatch({ type: actionTypes.FOUND_CITY, payload: {} });
};
