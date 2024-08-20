import axios from "axios";

const axiosB = axios.create({
  baseURL: "https://forum-back-end.onrender.com",
  // baseURL: "http://localhost:5200/api",
});

export default axiosB;