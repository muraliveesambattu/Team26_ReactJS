import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LifeCycleA from './Components/LifeCycleA'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LifeCycleA age={10} />
    </>
  )
}

export default App
