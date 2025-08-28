import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">📞 Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Reach Out</h2>
            <p className="text-gray-600 mb-4">
              Have questions or need assistance with your booking? We're here to help!
            </p>
            <ul className="text-gray-700 space-y-3">
              <li><strong>📍 Location:</strong> New Delhi, India</li>
              <li><strong>📞 Phone:</strong> +91 98765 43210</li>
              <li><strong>✉️ Email:</strong> support@rideease.com</li>
              <li><strong>🕒 Office Hours:</strong> 9:00 AM – 6:00 PM (Mon – Sat)</li>
            </ul>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
