import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const enhancer = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, composeWithDevTools(enhancer));

export default store;
