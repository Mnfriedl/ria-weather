import React from "react";
import Card from "@/components/Card";

type NextDaysProps = {
  // TODO: type this
  data?: Array<{
    date: string;
    maxTemp: number;
    minTemp: number;
    mostCommonDescription: string;
    mostCommonIcon: string;
  }>;
}

export default function NextDays({ data }: NextDaysProps) {
  return (
    <Card>
      {data?.map((day) => (
        <div className="flex flex-row gap-2">
          <div>{day.date}</div>
          <div>{Math.round(day.maxTemp)}°</div>
          <div>{Math.round(day.minTemp)}°</div>
          <div>{day.mostCommonDescription}</div>
          <img src={`https://openweathermap.org/img/wn/${day.mostCommonIcon}.png`} />
        </div>
      ))}
    </Card>
  )
}
