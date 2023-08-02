import { useState } from 'react'
import Navbar from "./Components/Navbar.jsx";
import './App.css'
import Hero from "./Components/Hero.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Hero/>
    </>
  )
}

export default App
