import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchVehicles } from "../../redux/slices/vehicleSlice";

const VehicleList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {vehicles} = useSelector((state) => state.vehicles);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch]);

  const myVehicles = vehicles?.filter((v) => v.ownerId === user?._id);

  const handleVehicleClick = (id) => {
    navigate(`/vehicle/${id}`);
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        My Listed Vehicles
      </h2>

      {myVehicles.length === 0 ? (
        <p className="text-center text-gray-500">No vehicles listed yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myVehicles.map((v) => (
            <div
              key={v._id}
              onClick={() => handleVehicleClick(v._id)}
              className="cursor-pointer bg-white shadow-md hover:shadow-xl transition duration-300 p-4 rounded-lg border"
            >
              <img
                src={v.imageUrls?.[0]}
                alt={`${v.brand} ${v.model}`}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {v.brand} {v.model}
              </h3>
              <p className="text-sm text-gray-600">
                {v.color} • {v.fuelType} • {v.transmission}
              </p>
              <p className="text-sm text-gray-600">
                ₹{v.rentPerDay}/day • Seats: {v.seatingCapacity}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VehicleList;
