import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API = "http://localhost:5000"; 


export const fetchVehicles = createAsyncThunk("vehicles/fetchAll", async () => {
  const res = await axios.get(`${API}/api/vehicles/all-vehicles`);
  return res.data;
});

export const addVehicle = createAsyncThunk("vehicles/add", async (vehicleData) => {
  const res = await axios.post(`${API}/api/vehicles/create-vehicle`, vehicleData);
  return res.data.vehicle;
});

export const updateVehicle = createAsyncThunk("vehicles/update", async ({ id, updateData }) => {
  const res = await axios.put(`${API}/api/vehicles/vehicle/${id}`, updateData);
  return res.data.vehicle;
});

export const deleteVehicle = createAsyncThunk("vehicles/delete", async (id) => {
  await axios.delete(`${API}/api/vehicles/vehicles/${id}`);
  return id; 
});

const initialState = {
  vehicles: [],
  loading: false,
  error: null,
};

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.vehicles = action.payload;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addVehicle.fulfilled, (state, action) => {
        state.vehicles.push(action.payload);
      })

      .addCase(updateVehicle.fulfilled, (state, action) => {
        const index = state.vehicles.findIndex(v => v._id === action.payload._id);
        if (index !== -1) {
          state.vehicles[index] = action.payload;
        }
      })

      .addCase(deleteVehicle.fulfilled, (state, action) => {
        state.vehicles = state.vehicles.filter(v => v._id !== action.payload);
      });
  },
});

export default vehicleSlice.reducer;
