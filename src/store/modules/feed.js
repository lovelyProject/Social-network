import postsApi from "@/api/feed.js";

const state = {
  posts: [],
  myPosts: [],
  isLoading: false,
  error: null,
};

const mutations = {
  SET_TO_POSTS: (state, payload) => {
    state.posts = payload;
  },
  SET_TO_MY_POSTS: (state, payload) => {
    state.myPosts = payload;
  },
};

const getters = {
  GET_POSTS(state) {
    return state.posts;
  },
  GET_MY_POSTS(state) {
    return state.myPosts;
  },
};

const actions = {
  GET_POSTS_FROM_API({ commit }) {
    return new Promise(() => {
      postsApi
        .getPosts()
        .then((response) => {
          commit("SET_TO_POSTS", response.data);
        })
        .catch((e) => {
          console.log("Can not get posts from API", e);
        });
    });
  },
  GET_MY_POSTS_FROM_API(context, credentials) {
    return new Promise(() => {
      console.log(credentials);
      postsApi.getMyPosts(credentials).then((response) => {
        context.commit("SET_TO_MY_POSTS", response.data);
      });
    });
  },
};

export default {
  state,
  actions,
  getters,
  mutations,
};
