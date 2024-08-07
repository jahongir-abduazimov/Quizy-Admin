import axios from "axios";
import { getDataFromCookie } from "@data-service";

const request = axios.create({
  baseURL: "https://alibekmoyliyev.uz/api",
});

request.interceptors.request.use((config) => {
  const access_token = getDataFromCookie("access_token");
  if (access_token) {
    config.headers["Authorization"] = `Bearer ${access_token}`;
  }
  return config;
});

export default request;
