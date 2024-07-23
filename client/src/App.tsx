import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { useCustomer } from './services/quires';
import { RiAddLargeLine } from "react-icons/ri";
import { DataGrid } from './components/data-grid';
import { CustomerWithID } from './type';
import { defaultCustomerData } from './schemas';
import CustomerForm from './components/ui/customer-form';

function App() {
  const { data, isLoading } = useCustomer();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] =
  useState<CustomerWithID>(defaultCustomerData);
  
  return (
    <>
      {open && (
        <CustomerForm
          open={open}
          setOpen={setOpen}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      )}

      <div className="flex flex-col space-y-4 p-5 container">
        <div className="space-y-10">
          <div className="flex">
            {" "}
            <Button
              variant="outline"
              onClick={() => {
                setOpen(true);
              }}
            >
              {" "}
              <RiAddLargeLine className="w-4 h-4 mr-2 " /> Add Customer
            </Button>
          </div>

          <div className="w-full  md:flex space-y-4 md:space-y-0 items-center justify-between gap-10 ">
            {isLoading ? (
              "Loading..."
            ) : Array.isArray(data) ? (
              <DataGrid data={data}  setOpen={setOpen} 
              setSelectedItem={setSelectedItem} />
            ) : (
              "No Customer Data....."
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
