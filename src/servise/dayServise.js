import moment from "moment";
import funcDayForecast from "./funcDayForcaset";

const funkDataForDay = ({ fiveDayOwnWeather, toggle }) => {
  let center = { lat: 52.374, lng: 4.8897 };

  if (fiveDayOwnWeather.city) {
    center = {
      lat: +fiveDayOwnWeather.city.coord.lat,
      lng: +fiveDayOwnWeather.city.coord.lon,
    };
  }

  const month = moment().format("MMMM");
  let rightDay;
  if (toggle.show === "Today") {
    rightDay = moment().format("D");
  }
  if (toggle.show === "Tomorrow") {
    const tomorrow = +moment().format("x") + 86400000;
    rightDay = moment(tomorrow).format("D");
  }

  const dayForecast = funcDayForecast({ fiveDayOwnWeather, rightDay });

  return { dayForecast, month, rightDay, center };
};

export default funkDataForDay;
