import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

export const createAction = type => payload => ({
  type,
  payload,
});

export const weatherApiKey = "0bebc8141664e41c59c89d99a03681cd";
