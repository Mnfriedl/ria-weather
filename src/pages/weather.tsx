import React from "react";

import clsx from "clsx";

import type { City } from "@/types/cities";
import NextHours from "@/components/weather/NextHours";
import NextDays from "@/components/weather/NextDays";

type WeatherPageProps = {
  containerClassName?: string;
  city: City;
};

export default function WeatherPage({ city, containerClassName }: WeatherPageProps) {
  return (
    <div className={clsx(
      "flex flex-col w-full gap-4",
      containerClassName
    )}>
      <h1 className="text-2xl font-semibold">{city.name}</h1>
      <NextHours />
      <NextDays />
    </div>
  )
}
