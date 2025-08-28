import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50 px-6 md:px-20">
      <div className="max-w-7xl mx-auto py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Carbi
        </Link>

        <ul className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          {user && (
            <>
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link to="/vehicles" className="hover:text-blue-600">
              Vehicles
            </Link>
          </li>
          <li>
            <Link to="/my-bookings" className="hover:text-blue-600">
              Bookings
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/admin/profile"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Admin
            </Link>
          </li>
          <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </li>
          </>
          )}
          {/* {!user ? (
            <li>
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </Link>
            </li>
          ) : (
            <>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </li>
            </>
          )} */}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            to="/vehicles"
            onClick={() => setMobileOpen(false)}
            className="block hover:text-blue-600"
          >
            Vehicles
          </Link>
          <Link
            to="/my-bookings"
            onClick={() => setMobileOpen(false)}
            className="block hover:text-blue-600"
          >
            Bookings
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block hover:text-blue-600"
          >
            Contact
          </Link>
          <Link
            to="/detailpage"
            onClick={() => setMobileOpen(false)}
            className="block hover:text-blue-600"
          >
            Detail
          </Link>
          {user?.isAdmin && (
            <Link
              to="/admin/profile"
              onClick={() => setMobileOpen(false)}
              className="block hover:text-blue-600"
            >
              Admin
            </Link>
          )}

          {!user ? (
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-2"
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                to="/profile"
                onClick={() => setMobileOpen(false)}
                className="block hover:text-blue-600"
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMobileOpen(false);
                }}
                className="block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 mt-2 w-full text-left"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
