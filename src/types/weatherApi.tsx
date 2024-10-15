type CityCoordinates = {
  lat: number;
  lon: number;
}

type AcceptedUnits = "metric" | "imperial" | "standard";

export type GetFiveDayForecastParams = CityCoordinates & {
  units?: AcceptedUnits;
}

export type ForecastDataPoint = {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: Array<{
    icon: string;
    id: number;
  }>;
}
