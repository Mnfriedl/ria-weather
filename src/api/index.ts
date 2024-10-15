import axios from "axios";

import { apiKey } from "@/consts/weatherApi";

const api = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
  params: {
    appid: apiKey,
  }
});

export default api;
