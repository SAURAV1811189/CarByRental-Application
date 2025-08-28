import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchVehicles } from "../redux/slices/vehicleSlice";

const FeaturedVehicles = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { vehicles, loading, error } = useSelector((state) => state.vehicles);
  const { user} = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchVehicles());
  }, [dispatch,user]);

  return (
    <div className="px-20">
    <section data-aos="fade-up" className="py-20 px-6 md:px-16">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-indigo-700 mb-2">🚘 Featured Vehicles</h2>
        <p className="text-gray-600 text-lg">
          Top rated cars and bikes available for rent near you
        </p>
      </div>

      {loading && <p className="text-center">Loading vehicles...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {vehicles?.map((v) => (
          <div
            key={v._id}
            onClick={() => navigate(`/vehicles/${v._id}`)}
            className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-300"
          >
            <img
              src={v.imageUrls?.[0]}
              alt={v.brand + " " + v.model}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800">
                {v.brand} {v.model}
              </h3>
              <p className="text-sm text-gray-500">
                {v.vehicleType} • {v.fuelType} • {v.transmission}
              </p>
              <p className="text-gray-700 text-sm">💰 ₹{v.rentPerDay}/day</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-20">
        <Link to="/vehicles">
          <button className="hover:from-purple-700 hover:to-indigo-700 text-black text-lg font-semibold px-8 py-3 rounded-full shadow-md transition duration-300">
            🚀 Explore All Vehicles
          </button>
        </Link>
      </div>
    </section>
    </div>
  );
};

export default FeaturedVehicles;
