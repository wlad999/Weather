import actionTypes from "./actionsTypes";

const initialState = {
  ownWeatherNow: {},
  fiveDayOwnWeather: {},
  foundСity: {},
  citiesList: {
    London: "London",
    "New York": "New York",
    "Hong Kong": "Hong Kong",
    Singapore: "Singapore",
    "Frankfurt am Main": "Frankfurt am Main",
    Zurich: "Zurich",
  },
  inputError: {},
  toggle: {
    today: false,
    week: false,
    show: null,
    ownWeater: true,
  },
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
    case actionTypes.FOUND_CITY:
      return {
        ...state,
        foundСity: { ...payload },
      };
    case actionTypes.CITIES_LIST:
      return {
        ...state,
        citiesList: { ...payload },
      };
    case actionTypes.TOGGLE_SWOW:
      return {
        ...state,
        toggle: { ...state.toggle, ...payload },
      };
    case actionTypes.INPUT_ERROR:
      return {
        ...state,
        inputError: payload,
      };
    default:
      return state;
  }
};

export default weather;
