import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Button } from "./ui/button";
  import { FaEdit } from "react-icons/fa";
  import { MdDeleteForever } from "react-icons/md";
  import { CustomerWithID } from "@/type";
  import { Dispatch, SetStateAction, useState } from "react";
import { AlertDialogBox } from "./alert-dialog";
 
  
  type Prop = {
    data: CustomerWithID[];
    setOpen: Dispatch<SetStateAction<boolean>>;
    setSelectedItem: Dispatch<SetStateAction<CustomerWithID>>;
  };
  
  export function DataGrid({ data, setOpen, setSelectedItem }: Prop) {
    const [openAlert, setOpenAlert] = useState(false);
    const [id, setId] = useState<undefined |string>(undefined);
  
    return (
      <>
        {openAlert && (
          <AlertDialogBox
            id={id}
            open={openAlert}
            setId={setId}
            setOpen={setOpenAlert}
          />
        )}
      { data.length>0 ? <Table className="w-full ">
          <TableCaption>A list of customers.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.email} className="text-start">
                <TableCell>{item.firstName}</TableCell>
                <TableCell>{item.lastName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>
                  <div className="flex gap-2 justify-center">
                    <Button
                      size={"sm"}
                      className="cursor-pointer flex items-center justify-around  bg-blue-800"
                      onClick={() => {
                        setSelectedItem(item);
                        setOpen((pre) => !pre);
                      }}
                    >
                      <FaEdit className="mr-3 h-4 w-4 flex-1" />
                      <span className="text-[12px] flex-1">Edit</span>
                    </Button>
                    <Button
                      size={"sm"}
                      variant={"destructive"}
                      className="cursor-pointer flex items-center justify-around "
                      onClick={() => {
                        setId(item.id);
                        setOpenAlert((pre) => !pre);
                      }}
                    >
                      <MdDeleteForever className="mr-3 h-4 w-4 flex-1" />
                      <span className="text-[12px] flex-1">Delete</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>:(<h1>No Data...</h1>)}
      </>
    );
  }
  