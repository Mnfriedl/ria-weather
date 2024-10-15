
import api from "./index";

import type { GetFiveDayForecastParams } from "@/types/weatherApi";

// TODO: Type the response of the api call
export async function getFiveDaysForecast(params: GetFiveDayForecastParams) {
  const { data } = await api.get("/forecast", { params });
  return data;
}
