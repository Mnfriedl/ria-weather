
import api from "./index";

import type { GetCurrentWeatherParams, GetFiveDayForecastParams } from "@/types/weatherApi";

export async function getCurrentWeather(params: GetCurrentWeatherParams) {
  const { data } = await api.get("/weather", { params });
  return data;
};

export async function getFiveDaysForecast(params: GetFiveDayForecastParams) {
  const { data } = await api.get("/forecast", { params });
  return data;
}
