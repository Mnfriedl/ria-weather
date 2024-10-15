import React from "react";

import dayjs from 'dayjs';

import { ForecastDataPoint } from "@/types/weatherApi";

type HourCardProps = {
  data: ForecastDataPoint;
}

export default function HourCard({ data }: HourCardProps) {
  return (
    <div className="flex flex-col items-center justify-center px-2">
      <div className="text-lg text-semibold">{Math.round(data.main.temp)}°</div>
      <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`} />
      <div className="text-sm text-gray-700">{dayjs(data.dt * 1000).format("HH:mm:ss")}</div>
    </div>
  )
}
