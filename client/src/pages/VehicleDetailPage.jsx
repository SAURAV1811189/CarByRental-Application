import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import BookingForm from "../components/BookingForm";

const VehicleDetailPage = () => {
  const { id } = useParams();
  const { vehicles } = useSelector((state) => state.vehicles);

  const vehicle = vehicles.find((v) => v._id === id);

  if (!vehicle) {
    return <p className="text-center text-red-500 py-20">Vehicle not found</p>;
  }

  return (
    <section className="px-4 md:px-20 py-10 bg-gray-50 min-h-screen" data-aos="fade-up">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-indigo-700">
          {vehicle.brand} {vehicle.model}
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          {vehicle.vehicleType} • {vehicle.fuelType} • {vehicle.transmission}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-8">
          <div className="w-full h-[350px] rounded-xl overflow-hidden shadow-md">
            <img
              src={vehicle.imageUrls?.[0] || "/images/placeholder.jpg"}
              alt={`${vehicle.brand} ${vehicle.model}`}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex gap-4 overflow-x-auto">
            {vehicle.imageUrls?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="vehicle"
                className="w-40 h-28 rounded-lg shadow-sm object-cover"
              />
            ))}
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">🛠 Vehicle Specifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-800">
              <p>👥 Seats: <b>{vehicle.seatingCapacity}</b></p>
              <p>⚡ Top Speed: <b>{vehicle.topSpeed || "N/A"}</b></p>
              <p>🛣️ Mileage: <b>{vehicle.mileage} km/l</b></p>
              <p>🛞 Transmission: <b>{vehicle.transmission}</b></p>
              <p>⛽ Fuel: <b>{vehicle.fuelType}</b></p>
              <p>📍 Pickup: <b>{vehicle.pickupLocation}</b></p>
              <p>📍 Drop: <b>{vehicle.dropLocation}</b></p>
            </div>
          </div>

          {vehicle.features?.length > 0 && (
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-xl font-semibold text-indigo-700 mb-4">🚗 Included Features</h2>
              <ul className="flex flex-wrap gap-2">
                {vehicle.features.map((f, i) => (
                  <li key={i} className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-lg font-bold mb-3 text-gray-800">📜 Terms & Conditions</h2>
            <p className="text-sm text-gray-700">
              Cancellation & Refund: Full refund if canceled 24 hours before pickup.
              50% refund within 24 hours. No refund for last-minute or no-shows.
            </p>
            <p className="mt-4 text-sm text-green-600 font-medium">
              ✅ {vehicle?.cancellationPolicy || "Standard company terms apply."}
            </p>
          </div>
        </div>

        <div className="sticky top-10">
          <BookingForm vehicle={vehicle} />
        </div>
      </div>
    </section>
  );
};

export default VehicleDetailPage;
