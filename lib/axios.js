import axios from "axios";
const base = `http://${process.env.SERVER || "127.0.0.1:5000"}/api`;
axios.defaults.baseURL = base;
export default axios;
