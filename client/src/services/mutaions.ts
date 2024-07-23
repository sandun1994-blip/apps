/* eslint-disable @typescript-eslint/no-explicit-any */

import { Customer } from "@/schemas";
import { CustomerWithID } from "@/type";
import axios from "@/utils/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateCustomer(handleReset: () => void) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: Customer) => {
      try {
        const response = await axios.post("customer", data);
        return response.data;
      } catch (error: any) {
        throw new Error(error?.message || "Failed to create customer");
      }
    },

    onSuccess: () => {
      toast.success(`Customer created successfully!`, {
        position: "top-right",
        className: "text-green-500",
        duration: 5000,
      });
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      handleReset();
    },
    onError: (error) => {
      console.log(error.message, 88);

      toast.error(error.message, {
        position: "top-right",
        duration: 5000,
      });
    },
    onSettled: () => {},
  });
}

export function useUpdateCustomer(handleReset: () => void) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CustomerWithID) => {
      try {
        const response = await axios.patch(`customer/${data.id}`, data);
        return response.data;
      } catch (error: any) {
        throw new Error(error?.message || "Failed to update customer");
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      toast.success(`Customer updated successfully!`, {
        position: "top-right",
        className: "text-green-500",
        duration: 5000,
      });
      handleReset();
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-right",
        duration: 5000,
      });
    },
    onSettled: () => {},
  });
}

export function useDeleteCustomer(handleReset: () => void) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      try {
        const response = await axios.delete(`customer/${id}`);
        return response.data;
      } catch (error: any) {
        throw new Error(error?.message || "Failed to delete customer");
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["customers"] });
      toast.success(`Customer deleted successfully!`, {
        position: "top-right",
        className: "text-green-500",
        duration: 5000,
      });
      handleReset();
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-right",
        duration: 5000,
      });
    },
    onSettled: () => {},
  });
}
