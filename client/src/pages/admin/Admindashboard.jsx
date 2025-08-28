import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";

const Admindashboard = () => {
  return (
    <div className="flex h-screen">
      <aside className="bg-gray-900 text-white w-60 p-5 min-h-screen sticky top-0">
        <h1 className="text-2xl font-bold mb-8 text-center">Admin Panel</h1>
        <nav className="space-y-4">
          <NavLink
            to="/admin/vehiclelist"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md hover:bg-gray-700 ${
                isActive ? "bg-gray-800 font-semibold" : ""
              }`
            }
          >
            🚗 My Vehicles
          </NavLink>

          <NavLink
            to="/admin/bookinglist"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md hover:bg-gray-700 ${
                isActive ? "bg-gray-800 font-semibold" : ""
              }`
            }
          >
            📅 My Bookings
          </NavLink>

          <NavLink
            to="/admin/add-vehicle"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md hover:bg-gray-700 ${
                isActive ? "bg-gray-800 font-semibold" : ""
              }`
            }
          >
            ➕ Add Vehicle
          </NavLink>

          <NavLink
            to="/admin/profile"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md hover:bg-gray-700 ${
                isActive ? "bg-gray-800 font-semibold" : ""
              }`
            }
          >
            👤 Profile
          </NavLink>

          <NavLink onClick={logout()}
            to="/logout"
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md hover:bg-gray-700 ${
                isActive ? "bg-gray-800 font-semibold" : ""
              }`
            }
          >
            🚪 Logout
          </NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default Admindashboard;
