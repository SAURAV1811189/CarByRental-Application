const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users",require("./routes/userroute.js"));
app.use("/api/vehicles",require("./routes/vehicleroute.js"));
app.use("/api/bookings",require("./routes/bookingroute.js"));
app.use("/api/payments",require("./routes/paymentroute.js"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT || 5000, () =>{
      console.log(`Server running on port ${process.env.PORT || 5000}`)
      console.log("database connected");
  });
  })
  .catch((err) => console.error("MongoDB connection error:", err));
