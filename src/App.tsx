import React, { useState } from "react";

import "./App.css";
import CityTabs from "./components/layout/CityTabs";
import Navbar from "./components/layout/Navbar";
import WeatherPage from "./pages/weather";
import type { City } from "./types/cities";
import defaultCities from "./consts/cities";


//? We could add react-router here if we needed more pages, but we don"t, so keep it simple.
//? If we did so, an easier way to handle the selected city would be a store like zustand instead of useState

function App() {
  const [city, setCity] = useState<City>(defaultCities[0])

  return (
    <div className="flex flex-col bg-blue-300 h-[100vh]">
      <Navbar />
      <CityTabs selectedCity={city.name} setCity={setCity} />
      <WeatherPage city={city} containerClassName="max-w-lg m-auto px-4 flex-1 mt-8" />
    </div>
  )
}

export default App;
