import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Home/navbar'
import Footer from '../Home/Footer'


const Root = () => {
  return (
    <div className='min-h-screen bg-base-200 text-base-content'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root