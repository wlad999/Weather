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

export const city = town =>
  API.get(`data/2.5/weather?q=${town}&appid=${weatherApiKey}`);
