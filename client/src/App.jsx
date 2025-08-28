import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import MyBookings from "./pages/MyBookings";
import AOS from "aos";
import "aos/dist/aos.css";
import VehicleDetailPage from "./pages/VehicleDetailPage";
import VehiclesPage from "./pages/VehiclesPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Admindashboard from "./pages/admin/admindashboard";
import VehicleList from "./pages/admin/VehicleList";
import BookingList from "./pages/admin/BookingList";
import AddVehicle from "./pages/admin/AddVehicle";
import Profile from "./pages/admin/Profile";
import ContactPage from "./pages/ContactPage";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/vehicles/:id" element={<VehicleDetailPage />} />
          <Route path="/vehicles" element={<VehiclesPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<Admindashboard />}>
            <Route path="vehiclelist" element={<VehicleList />} />
            <Route path="bookinglist" element={<BookingList />} />
            <Route path="add-vehicle" element={<AddVehicle />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
