
import { CustomerWithID } from "@/type";
import axios from "@/utils/axios";
import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

export function useCustomer() {
  return useQuery({
    queryKey: ["customers"],
    queryFn: async ():Promise<CustomerWithID[]> => {
      try {
        const response :AxiosResponse<CustomerWithID[]> = await axios.get("customer");
         // console.log(response,'customers');
          return (response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error :any) {
        throw new Error(error?.message  || "Failed to fetch customers");
      }
    },
  });
}
