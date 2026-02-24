// src/utils/api.js

import axios from "axios";

const BASE_URL = "https://cafe-production-6735.up.railway.app";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Contact API
export const sendContactMessage = async (contactData) => {
  try {
    const response = await api.post("/api/contact", contactData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Something went wrong" };
  }
};

// Table Booking API
export const bookTable = async (bookingData) => {
  try {
    const response = await api.post("/api/table-bookings", bookingData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Booking failed" };
  }
};

// Order API
export const bookOrder = async (orderData) => {
  try {
    const response = await api.post("/api/orders", orderData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Order failed" };
  }
};