import React, { useState } from 'react'
import Navbar from "./Components/Navbar.jsx";
import './App.css'
import Hero from "./Components/Hero.jsx";
import Achivements from "./Components/Achivements.jsx";
import Loveus from "./Components/Loveus.jsx";
import Companies from "./Components/Companies.jsx";
import FeatureCard from "./Components/FeatureCard.jsx";
import Reviews from "./Components/Reviews.jsx";
import Promise from "./Components/Promise.jsx";
import Footer from "./Components/Footer.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)



  return (
    <>

        <Navbar/>
        <Hero/>
        <Achivements/>
        <Loveus image='/public/recruter.svg'  heading="Why recruters love us?" message=" 8 million responsive and startup-ready candidates, with all the information you need to vet them.<br/>
                    Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free.<br/>
                    A free applicant tracking system, or free integration with any ATS you may already use
                    Plus, we can do the vetting for you! With Curated, we review the worlds top tech talent and highlight candidates directly to you 2x a week."/>
        <Loveus image='/public/rec3.svg' heading='What we provide' message="8 million responsive and startup-ready candidates, with all the information you need to vet them.<br/>
                    Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free.<br/>
                    A free applicant tracking system, or free integration with any ATS you may already use
                    Plus, we can do the vetting for you! With Curated, we review the worlds"/>
        <Companies/>
        <Reviews/>
        <Promise/>
        <Footer/>
    </>
  )
}

export default App
