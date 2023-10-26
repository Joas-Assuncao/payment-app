import axios from "axios";
import { AxiosResponse } from "axios";

export function apiService({
  method,
  url,
  data,
  headers,
}: IApiService): Promise<AxiosResponse> {
  const options = {
    method,
    url: `http://localhost:3001${url}`,
    data,
    headers: {
      ...headers,
    },
  };

  return axios.request(options);
}

interface IApiService {
  method: string;
  url: string;
  data?: object;
  headers?: object;
}
