import React from 'react'
import BannerSlider from './HomeComponents/BannerSlider'
import LatestVisas from './HomeComponents/LatestVisas'
import WelcomeSection from './HomeComponents/WelcomeSection'
import HowItWorks from './HomeComponents/HowItWorks'

const Home = () => {
  return (
    <div>
        <BannerSlider/>
        <WelcomeSection/>
        <div className='bg-gray-200 h-2'></div>
        <HowItWorks/>
        <div className='bg-gray-200 h-2'></div>
        <LatestVisas/>
        
    </div>
  )
}

export default Home