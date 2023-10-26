import { AxiosResponse } from "axios";
import { apiService } from "./axios";

class CustomerService {
  async list() {
    try {
      const response: AxiosResponse = await apiService({
        method: "GET",
        url: "/customers",
      });

      return response.data;
    } catch (err) {
      console.log({ err });
    }
  }

  async create(body: ICustomer) {
    try {
      const response: AxiosResponse = await apiService({
        method: "POST",
        url: "/customers",
        data: body,
      });

      return response;
    } catch (err) {
      console.log({ err });
    }
  }

  async update(id: string, body: ICustomer) {
    try {
      const response: AxiosResponse = await apiService({
        method: "PUT",
        url: `/customers/${id}`,
        data: body,
      });

      return response;
    } catch (err) {
      console.log({ err });
    }
  }

  async delete(id: string) {
    try {
      const response: AxiosResponse = await apiService({
        method: "DELETE",
        url: `/customers/${id}`,
      });

      return response;
    } catch (err) {
      console.log({ err });
    }
  }

  async restore(id: string) {
    try {
      const response: AxiosResponse = await apiService({
        method: "PUT",
        url: `/customers/${id}/restore`,
      });

      return response;
    } catch (err) {
      console.log({ err });
    }
  }
}

export const customerService = new CustomerService();
