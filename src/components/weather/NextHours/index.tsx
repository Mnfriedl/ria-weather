import React from "react";

import Card from "@/components/Card";
import HourCard from "./HourCard";
import type { ForecastDataPoint } from "@/types/weatherApi";

type NextHoursProps = {
  weatherData?: ForecastDataPoint[];
}

export default function NextHours({ weatherData }: NextHoursProps) {
  return (
    <Card>
      <h2 className="text-xl text-medium">Next hours</h2>
      <div className="flex flex-row overflow-x-auto divide-x gap-2 mt-4">
        {weatherData?.map((dataPoint) => (
          <HourCard key={dataPoint.dt} data={dataPoint} />
        ))}
      </div>
    </Card>
  )
}
