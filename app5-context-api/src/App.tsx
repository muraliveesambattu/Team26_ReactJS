import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './Components/User'
import Main from './Components/Main'
import MainComp from './Components/ContextDemo/MainComp'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    {/* <Main/> */}
    <MainComp/>
   </>
  )
}

export default App
