import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { updateProfile } from "../../redux/slices/authSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.auth); 
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    name: user?.name || "",
    phone: user?.phone || "",
    profilePic: user?.profilePic || "",
  });

  if (!user) return <p className="text-center">Loading profile...</p>;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/update`,
        form,
        { withCredentials: true }
      );

      dispatch(updateProfile(data.updatedUser)); 
      setEditing(false);
    } catch (error) {
      console.error("Profile update failed", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow p-6 rounded-md mt-6">
      <h2 className="text-2xl font-bold mb-4">👤 My Profile</h2>

      <div className="flex items-center gap-4 mb-6">
        <img
          src={form.profilePic || "https://via.placeholder.com/100"}
          alt="Profile"
          className="w-24 h-24 object-cover rounded-full border"
        />
        {editing && (
          <input
            type="text"
            name="profilePic"
            value={form.profilePic}
            onChange={handleChange}
            placeholder="Image URL"
            className="border p-1 rounded w-full"
          />
        )}
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium">Name</label>
          {editing ? (
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <p>{user.email}</p>
        </div>

        <div>
          <label className="block text-sm font-medium">Phone</label>
          {editing ? (
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="border p-2 w-full rounded"
            />
          ) : (
            <p>{user.phone}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        {editing ? (
          <div className="flex gap-4">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
