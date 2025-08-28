const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vehicle",
      required: true,
    },

    startDate: {
      type: Date,
      required: true,
    },

    endDate: {
      type: Date,
      required: true,
    },

    pickupLocation: {
      type: String,
      required: true,
    },
    dropoffLocation: {
      type: String,
      required: true,
    },
    // pickupTime: {
    //   type: Date,
    //   required: true,
    // },
    // dropoffTime: {
    //   type: Date,
    //   required: true,
    // },
    pickupDropCharge: {
      type: Number,
      default: 0,
    },

    totalHours: {
      type: Number,
      required: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: ["upi", "netbanking", "card", "cod"],
      // required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    paymentDetails: {
      orderId: String,
      paymentId: String,
      signature: String,
    },

    bookingStatus: {
      type: String,
      enum: ["booked", "cancelled", "completed"],
      default: "booked",
    },
  },
  { timestamps: true }
);

const bookingmodel = mongoose.model("Booking", bookingSchema);
module.exports = bookingmodel;
