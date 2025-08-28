import React from "react";
import { FaCalendarAlt, FaCar, FaCarSide, FaMotorcycle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section data-aos="fade-up" className="relative  text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl text-black md:text-5xl font-bold leading-tight mb-6">
            Ride Your Way <br className="hidden md:block" />
            <span className="text-indigo-700">Rent Cars & Bikes Easily</span>
          </h1>
          <p className="text-lg text-black md:text-xl mb-10 max-w-xl">
            Explore affordable and flexible rental plans across the city. Your
            perfect ride is just a few clicks away.
          </p>
        </div>

        <div className="relative w-full max-w-xl mx-auto p-1  rounded-3xl shadow-xl">
      <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          🚘 Find Your Perfect Ride
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">          <div className="col-span-2 relative">
            <label className="block mb-2 text-sm font-semibold text-gray-700">Vehicle Type</label>
            <div className="flex items-center gap-2 border border-gray-300 bg-white rounded-xl px-4 py-3 focus-within:ring-2 ring-indigo-500">
              <FaCarSide className="text-indigo-600" />
              <select className="w-full bg-transparent focus:outline-none text-gray-800">
                <option value="">Select vehicle</option>
                <option value="car">🚗 Car</option>
                <option value="bike">🏍️ Bike</option>
              </select>
            </div>
          </div>

          <div className="relative">
            <label className="block mb-2 text-sm font-semibold text-gray-700">Start Date</label>
            <div className="flex items-center gap-2 border border-gray-300 bg-white rounded-xl px-4 py-3 focus-within:ring-2 ring-indigo-500">
              <FaCalendarAlt className="text-indigo-600" />
              <input
                type="date"
                className="w-full bg-transparent focus:outline-none text-gray-800"
              />
            </div>
          </div>

          <div className="relative">
            <label className="block mb-2 text-sm font-semibold text-gray-700">End Date</label>
            <div className="flex items-center gap-2 border border-gray-300 bg-white rounded-xl px-4 py-3 focus-within:ring-2 ring-indigo-500">
              <FaCalendarAlt className="text-indigo-600" />
              <input
                type="date"
                className="w-full bg-transparent focus:outline-none text-gray-800"
              />
            </div>
          </div>

          <div className="col-span-2">
            <Link to={'/vehicles'}>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl shadow-md transition duration-300"
            >
              🔍 Search Ride
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>

      </div>
    </section>
  );
};

export default Hero;
