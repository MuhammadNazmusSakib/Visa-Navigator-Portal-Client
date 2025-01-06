import React from 'react'
import BannerSlider from './HomeComponents/BannerSlider'
import LatestVisas from './HomeComponents/LatestVisas'
import HowItWorks from './HomeComponents/HowItWorks'
import WhyChooseUs from '../Routes/WhyChooseUs'
import MakeAnAppointment from './HomeComponents/MakeAnAppointment.jsx'

const Home = () => {
  return (
    <div>
        <BannerSlider/>
        <WhyChooseUs/>
        <HowItWorks/>
        <MakeAnAppointment/>
        <LatestVisas/>
        
    </div>
  )
}

export default Home