import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer data-aos="fade-up" className="bg-white text-black py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-2">Carbi</h3>
          <p className="text-sm text-gray-700">
            Rent cars & bikes at the most affordable prices in your city. Safe, reliable & easy to book.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/faqs" className="hover:text-white">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Rentals</h4>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><Link to="/cars" className="hover:text-white">Car Rentals</Link></li>
            <li><Link to="/bikes" className="hover:text-white">Bike Rentals</Link></li>
            <li><Link to="/offers" className="hover:text-white">Offers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Get in Touch</h4>
          <p className="text-sm text-gray-700">Email: support@autorent.com</p>
          <p className="text-sm text-gray-700">Phone: +91 9876543210</p>
          <p className="text-sm text-gray-700">Location: Delhi, India</p>
        </div>
      </div>

      <div className="text-center text-gray-700 text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} AutoRent. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
