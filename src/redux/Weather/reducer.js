import actionTypes from "./actionsTypes";

const initialState = {
  ownWeatherNow: {},
  fiveDayOwnWeather: {},
};

const weather = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.WEATHER_COORDS:
      return {
        ...state,
        ownWeatherNow: { ...payload },
      };
    case actionTypes.WEATHER_COORDS_5_DAYS:
      return {
        ...state,
        fiveDayOwnWeather: { ...payload },
      };
    default:
      return state;
  }
};

export default weather;
