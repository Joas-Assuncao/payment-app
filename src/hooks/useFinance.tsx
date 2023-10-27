import { useQuery } from "react-query";
import { IFinanceBalance } from "../models/financeBalance";
import { financeService } from "../services/financeBalanceService";

export function useGetFinanceBalance() {
  const { list } = financeService();
  return useQuery<IFinanceBalance | undefined>(["financebalance"], list);
}
