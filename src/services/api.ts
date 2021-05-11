import axios from "axios";
import { getToken } from "./login";

const api = axios.create({
  baseURL: "https://pxpay-api-zhi4y.ondigitalocean.app/",
});

api.interceptors.request.use((config) => {
  const token = getToken();
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  return { ...config, headers };
});

export default api;
