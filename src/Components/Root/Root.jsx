import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Home/navbar'
import Footer from '../Home/Footer'


const Root = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root