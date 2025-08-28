const express = require("express");
const vehiclemodel = require("../models/vehiclemodel");
const router = express.Router();

router.post("/create-vehicle", async (req, res) => {
  try {
    console.log('====================================');
    console.log(req.body);
    console.log('====================================');
    const vehicle = new vehiclemodel(req.body);
    await vehicle.save();
   
    res.status(201).json({ message: "Vehicle added successfully", vehicle });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to add vehicle", error: err.message });
  }
});

router.get("/all-vehicles", async (req, res) => {
  try {
    const vehicles = await vehiclemodel.find({ isAvailable: true });
    res.status(200).json(vehicles);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch vehicles", error: err.message });
  }
});

router.put("/vehicle/:id", async (req, res) => {
  try {
    const updatedVehicle = await vehiclemodel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedVehicle) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    res
      .status(200)
      .json({ message: "Vehicle updated", vehicle: updatedVehicle });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to update vehicle", error: err.message });
  }
});

router.delete("/vehicle/:id", async (req, res) => {
  try {
    const deleted = await vehiclemodel.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Vehicle not found" });
    }
    res.status(200).json({ message: "Vehicle deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to delete vehicle", error: err.message });
  }
});

module.exports = router;
