const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    vehicleType: {
      type: String,
      enum: ["car", "bike"],
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    model: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      default: "Unknown",
    },

    fuelType: {
      type: String,
      enum: ["petrol", "diesel", "electric", "hybrid"],
      required: true,
    },

    transmission: {
      type: String,
      enum: ["manual", "automatic"],
      required: true,
    },

    seatingCapacity: {
      type: Number,
      default: 2,
    },

    mileage: {
      type: Number,
      default: 0,
    },

    rentPerHour: {
      type: Number,
      required: true,
    },

    rentPerDay: {
      type: Number,
      required: true,
    },

    isAvailable: {
      type: Boolean,
      default: true,
    },

    location: {
      type: String,
      required: true,
    },

    imageUrls: {
      type: [String],
      default: [],
    },

    features: {
      type: [String],
      default: [],
    },

    description: {
      type: String,
      default: "",
    },

    ratings: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const vehiclemodel = mongoose.model("Vehicle", vehicleSchema);
module.exports = vehiclemodel;
