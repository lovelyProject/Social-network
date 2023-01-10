import axios from "@/api/axios";

const getPosts = () => {
  return axios.get("/posts");
};

const getMyPosts = (apiURL) => {
  return axios.get(apiURL);
};
const createPost = (credentials) => {
  return axios.post("/posts", credentials);
};
export default {
  getPosts,
  getMyPosts,
  createPost,
};
