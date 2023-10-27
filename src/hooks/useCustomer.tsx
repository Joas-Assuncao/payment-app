import { useQuery } from "react-query";
import { customerService } from "../services/customerService";

export function useGetCustomerById(id: string) {
  const { list } = customerService();
  return useQuery<ICustomer>(["customerlist", id], () => list(id));
}
