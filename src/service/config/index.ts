import axios from "axios";
import { getDataFromCookie } from "@data-service";

const request = axios.create({
  baseURL: "https://alibekmoyliyev.uz/api",
});

request.interceptors.request.use((config) => {
  const token = getDataFromCookie("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

export default request;
