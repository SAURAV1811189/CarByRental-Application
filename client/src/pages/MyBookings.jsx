import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserBookings } from "../redux/slices/bookingSlice";

const MyBookings = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("All");

  const { userBookings, loading, error } = useSelector((state) => state.booking);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (user?._id) {
      dispatch(fetchUserBookings(user._id));
    }
  }, [dispatch, user]);

  const filteredBookings =
    filter === "All"
      ? userBookings
      : userBookings.filter((b) => b.bookingStatus === filter);

  return (
    <section data-aos="fade-up" className="px-6 md:px-20 py-16 min-h-screen">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">My Bookings</h2>

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

      {loading && <p className="text-center">Loading bookings...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredBookings.map((booking) => (
          <div
            key={booking._id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={booking?.vehicleId?.imageUrls?.[0] || "/images/placeholder.jpg"}
              alt={booking?.vehicleId?.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 space-y-2">
              <h3 className="text-xl font-semibold text-gray-800">
                {booking?.vehicleId?.brand} {booking?.vehicleId?.model}
              </h3>
              <p className="text-sm text-gray-500">
                🚗 {booking?.vehicleId?.vehicleType} • ₹{booking.totalAmount} • {booking.paymentStatus}
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <p>📅 {booking.startDate?.slice(0, 10)} → {booking.endDate?.slice(0, 10)}</p>
                <p>📍 {booking.pickupLocation} → {booking.dropLocation}</p>
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
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredBookings.length === 0 && !loading && (
        <p className="text-center text-gray-500 mt-12 text-lg">No bookings found.</p>
      )}
    </section>
  );
};

export default MyBookings;
