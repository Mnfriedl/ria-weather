import React from "react";

import clsx from "clsx";
import { useQuery } from "react-query";

import { getFiveDaysForecast } from "@/api/weather";
import type { City } from "@/types/cities";
import NextHours from "@/components/weather/NextHours";
import NextDays from "@/components/weather/NextDays";
import Card from "@/components/Card";
import { ForecastDataPoint } from "@/types/weatherApi";

type WeatherPageProps = {
  containerClassName?: string;
  city: City;
};

export default function WeatherPage({ city, containerClassName }: WeatherPageProps) {
  const {
    data,
    isFetching,
    refetch
  } = useQuery({
    queryKey: ["getFiveDaysForecast", city.name],
    queryFn: async () => await getFiveDaysForecast({ lat: city.lat, lon: city.lon, units: "metric" }),
    staleTime: 300000 // 5 minutes
  })

  return (
    <div className={clsx(
      "flex flex-col w-full gap-4",
      containerClassName
    )}>
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-2xl font-semibold">{city.name}</h1>
        {/* Make this look like a button with a reload icon */}
        <div onClick={() => refetch()}>Reload</div>
      </div>
      {isFetching && (
        <Card containerClassName="animate-pulse h-48 bg-blue-200" />
      )}
      {!isFetching && (
        // use the next 4 data points for "next hours"
        <NextHours weatherData={data.list.slice(0, 4) as ForecastDataPoint[]} />
      )}
      {isFetching && (
        <Card containerClassName="animate-pulse h-48 bg-blue-200" />
      )}
      {!isFetching && (
        <NextDays />
      )}
    </div>
  )
}
