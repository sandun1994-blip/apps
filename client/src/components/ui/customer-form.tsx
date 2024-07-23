import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Customer,
  CustomerSchema,
  defaultCustomerData,
} from "@/schemas";
import { useCreateCustomer, useUpdateCustomer } from "@/services/mutaions";
import { CustomerWithID } from "@/type";

import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useMemo } from "react";
import { useForm } from "react-hook-form";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
  selectedItem: CustomerWithID;
  setSelectedItem: Dispatch<SetStateAction<CustomerWithID>>;
}
const CustomerForm = ({ setOpen, open, selectedItem, setSelectedItem }: Props) => {
  const handleReset = () => {
    setOpen((pre) => !pre);
    setSelectedItem(defaultCustomerData);
  };
  const { mutate: createCustomer, isPending } = useCreateCustomer(handleReset);

  const { mutate: updateCustomer, isPending: isPendingTwo } =
    useUpdateCustomer(handleReset);

  // form default data
  const defaultFormData = useMemo(() => {
    if (selectedItem.id) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...rest } = selectedItem;
      return rest;
    }

    return defaultCustomerData;
  }, [selectedItem]);

  const form = useForm<Customer>({
    resolver: zodResolver(CustomerSchema),
    defaultValues: defaultFormData,
  });

  // form submit function
  const onSubmit = (values: Customer) => {
    if (selectedItem.id) {
        updateCustomer({ ...values, id: selectedItem.id });
    } else {
        createCustomer(values);
    }
  };

  // form data reset
  const handleClose = () => {
    setOpen((pre) => !pre);
    setSelectedItem(defaultCustomerData);
  };
  return (
    <div>
      <Dialog onOpenChange={handleClose} open={open}>
        <DialogContent className="sm:max-w-[425px] md:max-w-[650px]">
          <DialogHeader>
            <DialogTitle>
              {selectedItem.id ? "Edit" : "Add"} Customer
            </DialogTitle>
            <DialogDescription>
              {selectedItem.id ? "Make changes to" : "Add"} customer here. Click
              save when you are done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Type  first name here"
                            type="text"
                            disabled={isPending || isPendingTwo}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Type last name here."
                            disabled={isPending || isPendingTwo}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Type email here."
                            disabled={isPending || isPendingTwo}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full border-b-0 mt-5"
                  disabled={isPending || isPendingTwo}
                >
                  Save
                </Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CustomerForm;
