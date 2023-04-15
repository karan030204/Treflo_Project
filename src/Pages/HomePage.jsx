import React from 'react'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'
import ListPizza from '../Components/ListPizza'
import Navbar from '../Components/Navbar'
import OurServices from '../Components/OurServices'

const HomePage = () => {
  return (
    <>
      
      <Navbar />
      <Hero/>
      <ListPizza/>


      <Footer/>
    </>
  )
}

export default HomePage