import API from "./axiosInstanse";
import { weatherApiKey } from "../utils/utils";

export const coord = (lat, lon) =>
  API.get(
    `data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`,
  );
export const coord5daysHours = (lat, lon) =>
  API.get(
    `data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}&units=metric`,
  );
// api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={your api key}
export const city = town => API.get(`q=${town}&appid=${weatherApiKey}`);
