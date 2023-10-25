import axios from "axios";

// Envia uma requisição post
export function axiosService({
  method,
  url,
  data,
  headers,
}: AxiosServiceProps) {
  return axios({
    method,
    url,
    data,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    baseURL: "https://sandbox.asaas.com/api/v3",
  });
}

interface AxiosServiceProps {
  method: string;
  url: string;
  data?: object;
  headers?: object;
}
