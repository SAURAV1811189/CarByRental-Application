import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../redux/slices/bookingSlice";
import { useNavigate } from "react-router-dom";

const BookingForm = ({ vehicle }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState(vehicle.pickupLocation);
  const [dropoffLocation, setDropoffLocation] = useState(vehicle.dropLocation);

  const calculateTotalDays = () => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  };

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!startDate || !endDate || !pickupLocation || !dropoffLocation) {
      alert("Please fill all the fields.");
      return;
    }

    const totalDays = calculateTotalDays();
    const totalAmount = vehicle.rentPerDay * totalDays;

    const bookingData = {
            userId: user._id,
            vehicleId: vehicle._id,
            startDate,
            endDate,
            pickupLocation,
            dropoffLocation,
            pickupDropCharge: 0, 
            totalHours: totalDays * 24,
            totalAmount,
          };

    try {
      // const { data } = await axios.post("https://localhost:5000/api/payments/create-order", {
      //   amount: totalAmount,
      // });

      // const options = {
      //   key: import.meta.env.VITE_RAZORPAY_KEY,
      //   amount: data.order.amount,
      //   currency: "INR",
      //   name: "Vehicle Rental",
      //   description: "Booking Payment",
      //   order_id: data.order.id,
      //   handler: async (response) => {
      //     const bookingData = {
      //       userId: user._id,
      //       vehicleId: vehicle._id,
      //       startDate,
      //       endDate,
      //       pickupLocation,
      //       dropoffLocation,
      //       pickupDropCharge: 0, 
      //       totalHours: totalDays * 24,
      //       totalAmount,
      //     };

          await dispatch(createBooking(bookingData));
          alert("Booking Confirmed!");
          navigate("/my-bookings");
        // },
        // prefill: {
        //   name: user.name,
        //   email: user.email,
        // },
        // theme: {
        //   color: "#4f46e5",
        // },
      // };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      // alert("Payment failed.");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleBooking}>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          📅 Start Date
        </label>
        <input
          type="date"
          className="w-full px-4 py-2 border border-gray-200 rounded-xl"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          📅 End Date
        </label>
        <input
          type="date"
          className="w-full px-4 py-2 border border-gray-200 rounded-xl"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          📍 Pickup Location
        </label>
        <input
          type="text"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-xl"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-600 mb-1">
          📍 Drop Location
        </label>
        <input
          type="text"
          value={dropoffLocation}
          onChange={(e) => setDropoffLocation(e.target.value)}
          className="w-full px-4 py-2 border border-gray-200 rounded-xl"
        />
      </div>

      <div className="text-gray-800 text-sm pt-4">
        <div className="flex justify-between font-medium">
          <span>💸 Price/Day</span>
          <span>₹{vehicle.rentPerDay}</span>
        </div>
        <div className="flex justify-between">
          <span>🧮 Total Amount</span>
          <span>₹{vehicle.rentPerDay * (calculateTotalDays() || 1)}</span>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-3 rounded-full font-semibold text-lg"
      >
        🚀 Confirm & Pay
      </button>
    </form>
  );
};

export default BookingForm;