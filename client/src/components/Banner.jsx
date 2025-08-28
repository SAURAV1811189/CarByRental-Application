import React from 'react'
import  Ban  from '../assets/Car Rental - GreatStack_files/banner_car_image-B9uXTQkB.png'
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <div data-aos="fade-up" className='px-40 '>
       <div className="relative w-full text-white py-16 px-6 md:px-20 rounded-3xl overflow-hidden shadow-lg my-16">
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl opacity-30 animate-pulse"></div>

      <div className="relative text-black z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Drive Your Dream Ride Today!
          </h2>
          <p className="text-lg text-black mb-6">
            Whether it’s a long road trip or daily city travel, choose from a wide range of cars and bikes at affordable rates.
          </p>
          <Link to={'/vehicles'}>
          <button className="bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-100 transition">
            🚘 Book Your Vehicle
          </button>
          </Link>
        </div>

        <div className="w-full max-w-md">
          <img
            src={Ban}
            alt="Car Rental"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Banner
