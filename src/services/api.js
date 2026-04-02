import axios from "axios";

//Instância AXIOS centralizada
const api = axios.create({
  baseURL: "https://lovecraftapirest.fly.dev/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  }
});

export default api;
