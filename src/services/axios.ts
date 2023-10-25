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
    url: `https://try.readme.io/https://sandbox.asaas.com/api/v3${url}`,
    data,
    headers: {
      accept: "application/json",
      access_token:
        "$aact_YTU5YTE0M2M2N2I4MTliNzk0YTI5N2U5MzdjNWZmNDQ6OjAwMDAwMDAwMDAwMDAwNjgwNzk6OiRhYWNoXzUyMmQ2MjA3LTI0MDgtNGJlZi1iYWY3LTgyN2EwOWNmNjQ0ZA==",
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
