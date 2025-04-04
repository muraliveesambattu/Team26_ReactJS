import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Doctors from './Components/Doctors';
import Contact from './Components/Contact';

function App() {

  return (
    <>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to={''}>Home</Link>
            </li>
            <li>
              <Link to={'about'}>Context API</Link>

            </li>
            <li>
              <Link to={'doctors'}>HOC</Link>

            </li>
            <li>
              <Link to={'contact'}>Render Props</Link>
            </li>
            <li>
              <Link to={'contact'}>Life Cycle Hooks</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/doctors' element={<Doctors />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
