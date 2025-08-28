const mongoose  = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    profilePic: { type: String },
  },
  { timestamps: true }
);

const usermodel = mongoose.model("User", UserSchema);
module.exports = usermodel;
