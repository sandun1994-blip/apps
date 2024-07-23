import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
  import { Button } from "@/components/ui/button";
import { useDeleteCustomer } from "@/services/mutaions";
  import { Dispatch, SetStateAction } from "react";
  
  interface Props {
    setOpen: Dispatch<SetStateAction<boolean>>;
    open: boolean;
    id: undefined | string;
    setId: Dispatch<SetStateAction<undefined | string>>;
  }
  
  export function AlertDialogBox({ open, setOpen, id, setId }: Props) {
    const handleReset = () => {
      setOpen((pre) => !pre);
      setId(undefined);
    };
  
    const { mutate: deleteCustomer, isPending } = useDeleteCustomer(handleReset);
    const handleClose = () => {
      setOpen((pre) => !pre);
      setId(undefined);
    };
  
    const deleteHandle = () => {
      if (id) {
        deleteCustomer(id);
      }
    };
  
    return (
      <AlertDialog open={open} onOpenChange={handleClose}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete customer
              .
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button size={"sm"} onClick={handleClose} className="mt-3 md:mt-0">
              Cancel
            </Button>
            <Button
              variant={"destructive"}
              size={"sm"}
              onClick={deleteHandle}
              disabled={isPending}
            >
              Continue
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  }
  