import { combineReducers } from "redux";
import weather from "./Weather/reducer";

const rootReducer = combineReducers({
  weather,
});

export default rootReducer;
