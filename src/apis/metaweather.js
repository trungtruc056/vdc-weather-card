import axios from "axios";

const BASE_API_URL = "api";
const API_TIMEOUT = 30000;

const apiClient = axios.create({
  timeout: API_TIMEOUT,
});

const GET_WOEID = `${BASE_API_URL}/location/search/?query=`;
const GET_WEATHER_BY_WOEID = `${BASE_API_URL}/location`;

export const getWoeid = (location) =>
  apiClient
    .get(GET_WOEID + location)
    .then((response) => response)
    .catch(function (error) {
      throw error;
    });

export const getWeatherByWoeid = (woeid = 2487956) => {
  return apiClient
    .get(`${GET_WEATHER_BY_WOEID}/${woeid}/`)
    .then((response) => response)
    .catch(function (error) {
      throw error;
    });
};
