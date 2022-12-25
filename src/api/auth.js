import axios from "@/api/axios";

const register = (credentials) => {
  return axios.post("/users", { user: credentials });
};

const login = () => {
  return axios.get("/users");
};

export default {
  register,
  login,
};
