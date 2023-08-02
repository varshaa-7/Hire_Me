import { useState } from 'react'
import Navbar from "./Components/Navbar.jsx";
import './App.css'
import Hero from "./Components/Hero.jsx";
import Achivements from "./Components/Achivements.jsx";
import Loveus from "./Components/Loveus.jsx";
import Companies from "./Components/Companies.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        <Hero/>
        <Achivements/>
        <Loveus/>
        <Companies/>
    </>
  )
}

export default App
