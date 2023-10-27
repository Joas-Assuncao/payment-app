import { AxiosResponse } from "axios";
import { toast } from "react-hot-toast";

import { IError } from "../models/Error";
import { apiService } from "./axios";

export function customerService() {
  async function listAll(): Promise<any> {
    try {
      const response: AxiosResponse = await apiService({
        method: "GET",
        url: "/customers",
      });

      return response.data;
    } catch (err: any) {
      errorHandler(err.errors);
    }
  }

  async function list(id: string): Promise<any> {
    try {
      const response: AxiosResponse = await apiService({
        method: "GET",
        url: `/customers/${id}`,
      });

      return response.data;
    } catch (err: any) {
      errorHandler(err.errors);
    }
  }

  async function create(body: ICustomer): Promise<any> {
    try {
      const response: AxiosResponse = await apiService({
        method: "POST",
        url: "/customers",
        data: body,
      });

      return response;
    } catch (err: any) {
      errorHandler(err.errors);
    }
  }

  async function update(body: ICustomer): Promise<any> {
    try {
      const response: AxiosResponse = await apiService({
        method: "PUT",
        url: `/customers/${body.id}`,
        data: body,
      });

      return response;
    } catch (err: any) {
      errorHandler(err.errors);
    }
  }

  async function remove(id: string) {
    try {
      const response: AxiosResponse = await apiService({
        method: "DELETE",
        url: `/customers/${id}`,
      });

      return response;
    } catch (err: any) {
      errorHandler(err.errors);
    }
  }

  async function restore(id: string): Promise<any> {
    try {
      const response: AxiosResponse = await apiService({
        method: "PUT",
        url: `/customers/${id}/restore`,
      });

      return response;
    } catch (err: any) {
      errorHandler(err.errors);
    }
  }

  function errorHandler(errors: IError[]) {
    errors.forEach((errorItem) => {
      toast.error(errorItem.description);
    });
  }

  return {
    listAll,
    list,
    create,
    update,
    remove,
    restore,
  };
}
