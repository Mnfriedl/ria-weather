import React from "react";

import clsx from "clsx";
import { useQuery } from "react-query";

import { getCurrentWeather, getFiveDaysForecast } from "@/api/weather";
import type { City } from "@/types/cities";
import NextHours from "@/components/weather/NextHours";
import NextDays from "@/components/weather/NextDays";
import Card from "@/components/Card";

type WeatherPageProps = {
  containerClassName?: string;
  city: City;
};

export default function WeatherPage({ city, containerClassName }: WeatherPageProps) {
  const {
    data: currentWeatherData,
    isFetching: isLoadingCurrent,
    refetch: refetchCurrentWeather
  } = useQuery({
    queryKey: ["getCurrentWeather", city.name],
    queryFn: async () => await getCurrentWeather({ lat: city.lat, lon: city.lon, units: "metric" }),
    staleTime: 300000 // 5 minutes
  })

  const {
    data: forecastData,
    isFetching: isLoadingForecast,
    refetch: refetchForecast
  } = useQuery({
    queryKey: ["getFiveDaysForecast", city.name],
    queryFn: async () => await getFiveDaysForecast({ lat: city.lat, lon: city.lon, units: "metric" }),
    staleTime: 300000 // 5 minutes
  })

  const refetch = () => {
    refetchCurrentWeather();
    refetchForecast();
  }

  console.log({currentWeatherData, forecastData})

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
      {isLoadingCurrent && (
        <Card containerClassName="animate-pulse h-48 bg-blue-200" />
      )}
      {!isLoadingCurrent && (
        <NextHours />
      )}
      {isLoadingForecast && (
        <Card containerClassName="animate-pulse h-48 bg-blue-200" />
      )}
      {!isLoadingForecast && (
        <NextDays />
      )}
    </div>
  )
}
