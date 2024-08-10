import React from 'react'
import Navbar from "../components/Navbar"
import Home from "../components/Home"
import Services from "../components/Services"
import About from "../components/About"
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
const Landing = () => {
  return (
    <> 
   <Navbar/>
   <Home/>
   <Services/>
   <About/>
   <Testimonials/>
   <Footer/>
  </>
  )
}

export default Landing
