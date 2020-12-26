import axios from "axios";

const ALLOW_CORS = "https://cors-anywhere.herokuapp.com";
const BASE_API_URL = `${ALLOW_CORS}/https://www.metaweather.com/api`;
const API_TIMEOUT = 30000;

const apiClient = axios.create({
  timeout: API_TIMEOUT,
});

const GET_WOEID_URL = `${BASE_API_URL}/location/search/?query=`;
const GET_WEATHER_BY_WOEID_URL = `${BASE_API_URL}/location`;
const GET_ICON_URL = 'https://www.metaweather.com/';

export const getWoeid = (location) =>
  apiClient
    .get(GET_WOEID_URL + location)
    .then((response) => response)
    .catch(function (error) {
      console.error(error);
      throw error;
    });

export const getWeatherByWoeid = (woeid) => {
  return apiClient
    .get(`${GET_WEATHER_BY_WOEID_URL}/${woeid}`)
    .then((response) => response)
    .catch(function (error) {
      console.error(error);
      throw error;
    });
};

export const getIconWeather = (icon) => `${GET_ICON_URL}/static/img/weather/${icon}.svg`;
