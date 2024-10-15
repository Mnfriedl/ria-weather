import React from "react";

import clsx from "clsx";

import type { City } from "@/types/cities"


type CityTabProps = {
  city: City;
  setCity: (newCity: City) => void;
  selected?: boolean;
}

export default function CityTab({ city, setCity, selected }: CityTabProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-center flex-1 py-2 bg-blue-200",
        "hover:cursor-pointer hover:bg-blue-100",
        selected && "bg-blue-100 border-b-2 border-b-blue-800 font-medium"
      )}
      onClick={() => setCity(city)}
    >
      {city.name}
    </div>
  )
}
