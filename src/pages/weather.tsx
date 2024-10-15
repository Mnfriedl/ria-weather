import React from "react";

import type { City } from "@/types/cities";

type WeatherPageProps = {
  city: City;
}

export default function WeatherPage({ city }: WeatherPageProps) {
  return <div>Hola desde el weather page:
    {city.name}
  </div>
}
