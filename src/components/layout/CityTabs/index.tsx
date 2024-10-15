import React from "react";

import cities from "@/consts/cities";
import type { City } from "@/types/cities";
import CityTab from "./Tabs";


type CityTabsProps = {
  selectedCity: string;
  setCity: (newCity: City) => void;
}

export default function CityTabs({ selectedCity, setCity }: CityTabsProps) {
  return (
    <div className="flex flex-row divide-x">
      {cities.map((city) => (
        <CityTab key={city.name} city={city} setCity={setCity} selected={city.name === selectedCity} />
      ))}
    </div>
  );
}
