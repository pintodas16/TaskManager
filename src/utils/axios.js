import axios from "axios";
const axiosinstance = axios.create({
  baseURL: "http://localhost:8000/api",
  headers: { "X-Custom-Header": "foobar", "Content-Type": "application/json" },
});
export default axiosinstance;
