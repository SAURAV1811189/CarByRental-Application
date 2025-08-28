import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVehicles } from "../redux/slices/vehicleSlice";
import { useNavigate } from "react-router-dom";

export default function VehiclesPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState("car");
  const [searchTerm, setSearchTerm] = useState("");

  const { vehicles, loading, error } = useSelector((state) => state.vehicles);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  const filteredVehicles = vehicles
    ?.filter((v) => v.vehicleType === selectedType)
    ?.filter((v) => {
      const lower = searchTerm.toLowerCase();
      return (
        v.brand?.toLowerCase().includes(lower) ||
        v.model?.toLowerCase().includes(lower) ||
        v.fuelType?.toLowerCase().includes(lower)
      );
    });

  return (
    <div data-aos="fade-up" className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Choose Your Ride</h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search by brand, model, or fuel..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="inline-flex mx-auto rounded-full bg-white justify-center mb-8">
        <button
          onClick={() => setSelectedType("car")}
          className={`px-5 py-2 rounded-full font-medium ${
            selectedType === "car" ? "bg-indigo-600 text-white" : "bg-white"
          }`}
        >
          Cars
        </button>
        <button
          onClick={() => setSelectedType("bike")}
          className={`px-5 py-2 rounded-full font-medium ${
            selectedType === "bike" ? "bg-indigo-600 text-white" : "bg-white"
          }`}
        >
          Bikes
        </button>
      </div>

      {loading && <p className="text-center text-lg">Loading vehicles...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 md:px-10 gap-6">
        {filteredVehicles?.length > 0 ? (
          filteredVehicles.map((v) => (
            <div
              key={v._id}
              onClick={() => navigate(`/vehicles/${v._id}`)}
              className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
            >
              <img
                src={v.imageUrls?.[0] || "/images/placeholder.jpg"}
                alt={`${v.brand} ${v.model}`}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {v.brand} {v.model}
                </h3>
                <p className="text-sm text-gray-500">
                  {v.vehicleType} • {v.fuelType} • {v.transmission}
                </p>
                <div className="text-sm text-gray-600 space-y-1">
                  {v.vehicleType === "car" ? (
                    <p>👥 {v.seatingCapacity} Seats</p>
                  ) : (
                    <p>⚡ Mileage: {v.mileage} km/l</p>
                  )}
                  <p>💰 ₹{v.rentPerDay}/day</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No vehicles found.
          </p>
        )}
      </div>
    </div>
  );
}
