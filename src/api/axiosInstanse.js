import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const API = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
