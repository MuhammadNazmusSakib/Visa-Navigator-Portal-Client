import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Home/navbar'

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default Root