import axios, { AxiosRequestConfig } from "axios";

//2b3ffcb2b9mshad614c7d2c5cc80p1dfdadjsn35ea857209b9

const axiosInstance = axios.create({
  baseURL: "https://ai-weather-by-meteosource.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": "",
    "X-RapidAPI-Host": "ai-weather-by-meteosource.p.rapidapi.com",
  },
});

class ApiClient<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get = (config: AxiosRequestConfig) => {
    return axiosInstance.get<T>(this.endpoint, config).then((res) => res.data);
  };
}

export default ApiClient;
