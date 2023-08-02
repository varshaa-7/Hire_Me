import { useState } from 'react'
import Navbar from "./Components/Navbar.jsx";
import './App.css'
import Hero from "./Components/Hero.jsx";
import Achivements from "./Components/Achivements.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Hero/>
        <Achivements/>
    </>
  )
}

export default App
