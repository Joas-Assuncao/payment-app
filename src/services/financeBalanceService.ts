import { AxiosResponse } from "axios";
import { toast } from "react-hot-toast";

import { IError } from "../models/Error";
import { IFinanceBalance } from "../models/financeBalance";
import { apiService } from "./axios";

export function financeService() {
  async function list(): Promise<IFinanceBalance | undefined> {
    try {
      const response: AxiosResponse<IFinanceBalance> = await apiService({
        method: "GET",
        url: "/finance/balance",
      });

      return response.data;
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
  };
}
