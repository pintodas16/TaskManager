import axios from "axios";
const axiosinstance = axios.create({
  baseURL: "https://task-crud-backend.onrender.com/api",
  headers: { "X-Custom-Header": "foobar", "Content-Type": "application/json" },
});
export default axiosinstance;
