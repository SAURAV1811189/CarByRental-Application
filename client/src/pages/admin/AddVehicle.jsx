import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addVehicle } from "../../redux/slices/vehicleSlice";
const AddVehicle = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    vehicleType: "car",
    brand: "",
    model: "",
    color: "",
    fuelType: "petrol",
    transmission: "manual",
    seatingCapacity: 4,
    rentPerHour: "",
    rentPerDay: "",
    location: "",
    imageUrls: [],
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await dispatch(addVehicle(formData)).unwrap();
      alert(res.message); 
    } catch (err) {
      alert(err?.message || "Failed to add vehicle");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
      <h2 className="text-xl font-bold mb-4">Add a New Vehicle</h2>

      <select name="vehicleType" onChange={handleChange} value={formData.vehicleType} className="w-full border p-2">
        <option value="car">Car</option>
        <option value="bike">Bike</option>
      </select>

      <input name="brand" placeholder="Brand" onChange={handleChange} className="w-full border p-2" />
      <input name="model" placeholder="Model" onChange={handleChange} className="w-full border p-2" />
      <input name="color" placeholder="Color" onChange={handleChange} className="w-full border p-2" />
      <input name="location" placeholder="Location" onChange={handleChange} className="w-full border p-2" />
      <input name="rentPerDay" type="number" placeholder="Rent Per Day" onChange={handleChange} className="w-full border p-2" />
      <input name="rentPerHour" type="number" placeholder="Rent Per Hour" onChange={handleChange} className="w-full border p-2" />
      <textarea name="description" placeholder="Description" onChange={handleChange} className="w-full border p-2"></textarea>

      <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Add Vehicle</button>
    </form>
  );
};

export default AddVehicle;
