import axios from "axios";
export const baseURL = "http://localhost:3000";

// axios instance for json data
const custAxios = axios.create({
  baseURL: baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default custAxios;
