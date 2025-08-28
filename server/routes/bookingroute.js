const express = require("express");
const router = express.Router();
const bookingmodel = require("../models/bookingmodel");
const vehiclemodel = require("../models/vehiclemodel");

router.post("/create-booking", async (req, res) => {
  console.log('====================================');
  console.log(req.body);
  console.log('====================================');
  try {
    const {
      userId,
      vehicleId,
      startDate,
      endDate,
      totalHours,
      pickupLocation,
      dropoffLocation,
      pickupDropCharge,
      totalAmount,
    } = req.body;

    await vehiclemodel.findByIdAndUpdate(vehicleId, { isAvailable: false });

    const booking = await bookingmodel.create({
      userId,
      vehicleId,
      startDate,
      endDate,
      pickupLocation,
      dropoffLocation,
      pickupDropCharge,
      totalHours,
      totalAmount,
      paymentStatus: "pending",
      bookingStatus: "booked",
    });

    res.status(201).json({ message: "Booking confirmed", booking });
  } catch (err) {
    console.log('====================================');
    console.log(err);
    console.log('====================================');
    res
      .status(400)
      .json({ message: "Failed to create booking", error: err });
  }
});

router.get("/all-bookings", async (req, res) => {
  try {
    const bookings = await bookingmodel
      .find()
      .populate("userId", "name email")
      .populate("vehicleId", "brand model imageUrls");

    res.status(200).json(bookings);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to get bookings", error: err.message });
  }
});

router.get("/user-bookings/:userId", async (req, res) => {
  try {
    const bookings = await bookingmodel
      .find({ userId: req.params.userId })
      .populate("vehicleId", "brand model imageUrls");

    res.status(200).json(bookings);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to get user's bookings", error: err.message });
  }
});

router.get("/vehicle-bookings/:vehicleId", async (req, res) => {
  try {
    const bookings = await bookingmodel
      .find({ vehicleId: req.params.vehicleId })
      .populate("userId", "name phone");

    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({
      message: "Failed to get vehicle's bookings",
      error: err.message,
    });
  }
});

router.put("/bookings/:id/cancel", async (req, res) => {
  try {
    const booking = await bookingmodel.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    booking.bookingStatus = "cancelled";
    await booking.save();

    await vehiclemodel.findByIdAndUpdate(booking.vehicleId, {
      isAvailable: true,
    });

    res.status(200).json({ message: "Booking cancelled", booking });
  } catch (err) {
    res
      .status(400)
      .json({ message: "Failed to cancel booking", error: err.message });
  }
});

module.exports = router;
