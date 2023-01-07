import axios from "@/api/axios";

const getPosts = () => {
  return axios.get("/posts");
};

const getMyPosts = (apiURL) => {
  return axios.get(apiURL);
};
export default {
  getPosts,
  getMyPosts,
};
