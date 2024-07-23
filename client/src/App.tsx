import { useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="read-the-docs text-red-400">
        <Button variant={'destructive'} >ff</Button>
      </p>
    </>
  )
}

export default App
