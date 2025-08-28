import React from 'react'
import Hero from '../components/Hero'
import FeaturedVehicles from '../components/FeaturedVehicles'
import Banner from '../components/Banner'
import NewsLetter from '../components/NewsLetter'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Banner/>
      <FeaturedVehicles/>
      <NewsLetter/>
    </div>
  )
}

export default HomePage
