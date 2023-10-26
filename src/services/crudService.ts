import { AxiosResponse } from "axios";
import { toast } from "react-hot-toast";

import { IError } from "../models/Error";
import { apiService } from "./axios";

export function crudService(endpoint: string) {
  async function list(): Promise<any> {
    try {
      const response: AxiosResponse = await apiService({
        method: "GET",
        url: endpoint,
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
        url: endpoint,
        data: body,
      });

      return response;
    } catch (err: any) {
      errorHandler(err.errors);
    }
  }

  async function update(id: string, body: ICustomer): Promise<any> {
    try {
      const response: AxiosResponse = await apiService({
        method: "PUT",
        url: `${endpoint}/${id}`,
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
        url: `${endpoint}/${id}`,
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
        url: `${endpoint}/${id}/restore`,
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
    list,
    create,
    update,
    remove,
    restore,
  };
}
