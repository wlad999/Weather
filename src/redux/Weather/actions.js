import { createAction, history } from "utils/utils";
import API from "api";
import actionTypes from "./actionsTypes";

const weatherOwn = createAction(actionTypes.WEATHER_COORDS);
// export const authError = createAction(actionTypes.AUTH_ERROR);

export const userWeather = (lat, lon) => async dispatch => {
  try {
    const { data, status } = await API.getWeather.coord(lat, lon);
    // console.log("response", response);

    if (status === 200) {
      dispatch(
        weatherOwn({
          ...data,
        }),
      );

      //    history.push("/signup/confirm");
    }
  } catch (error) {
    const { response } = error.request;
    console.log("response error", response);
    console.log("error", error);
  }
};

export const coord5daysHours = (lat, lon) => async dispatch => {
  try {
    const { data, status } = await API.getWeather.coord5daysHours(lat, lon);
    if (status === 200) {
      dispatch({ type: actionTypes.WEATHER_COORDS_5_DAYS, payload: data });
    }
  } catch (error) {
    const { response } = error.request;
    console.log("response error", response);
    console.log("error", error);
  }
};

export const cityWeather = () => {
  console.log("ljnbib");
};
