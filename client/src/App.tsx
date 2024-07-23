import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { useCustomer } from './services/quires';

function App() {
  const { data, isLoading } = useCustomer();

  console.log(data);
  
  return (
    <>
      <p className="read-the-docs text-red-400">
        <Button variant={'destructive'} >ff</Button>
      </p>
    </>
  )
}

export default App
