import axios from "axios";

const axiosB = axios.create({
  baseURL: "http://localhost:5200/api",
});

export default axiosB;