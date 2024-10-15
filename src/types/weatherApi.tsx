type CityCoordinates = {
  lat: number;
  lon: number;
}

type AcceptedUnits = "metric" | "imperial" | "standard";

export type GetCurrentWeatherParams = CityCoordinates & {
  units?: AcceptedUnits;
}

export type GetFiveDayForecastParams = GetCurrentWeatherParams;

