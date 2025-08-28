import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBookings } from "../../redux/slices/bookingSlice";

const BookingList = () => {
  const dispatch = useDispatch();
  const { bookings, loading, error } = useSelector((state) => state.booking);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    dispatch(fetchAllBookings());
  }, [dispatch]);

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter((b) => b.bookingStatus === filter);

  return (
    <section className="px-6 md:px-20 py-16 min-h-screen">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
        📋 Bookings on My Vehicles
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {["All", "Upcoming", "Completed", "Cancelled"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-6 py-2 rounded-full font-medium transition ${
              filter === status
                ? "bg-indigo-700 text-white"
                : "bg-white text-indigo-700 border border-indigo-700"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {loading && <p className="text-center text-indigo-500">Loading bookings...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Booking Cards */}
      <div className="px-50">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredBookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={
                booking?.vehicleId?.imageUrls?.[0] ||
                "/images/placeholder.jpg"
              }
              alt={booking?.vehicle?.brand}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {booking.vehicle?.brand} {booking.vehicle?.model}
              </h3>
              <p className="text-sm text-gray-500">
                🚗 {booking.vehicle?.vehicleType} • ₹{booking.totalAmount} • {booking.paymentStatus}
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>
                  👤 <strong>Booked by:</strong> {booking.user?.name}
                </p>
                <p>
                  📅 {booking.startDate?.slice(0, 10)} →{" "}
                  {booking.endDate?.slice(0, 10)}
                </p>
                <p>
                  📍 {booking.pickupLocation} → {booking.dropLocation}
                </p>
                <p className="font-semibold">
                  Status:{" "}
                  <span
                    className={`${
                      booking.bookingStatus === "Upcoming"
                        ? "text-yellow-600"
                        : booking.bookingStatus === "Completed"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {booking.bookingStatus}
                  </span>
                </p>
              </div>

              <button className="mt-4 w-full border hover:bg-indigo-700 hover:text-white text-black py-2 rounded-lg font-semibold transition">
                Update Booking
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>

      {filteredBookings.length === 0 && !loading && (
        <p className="text-center text-gray-500 mt-12 text-lg">No bookings found.</p>
      )}
    </section>
  );
};

export default BookingList;
