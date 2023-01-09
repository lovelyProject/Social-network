import feedApi from "@/api/feed.js";

const state = {
  posts: [],
  myPosts: [],
  isLoading: false,
  error: null,
};
export const mutationTypes = {
  getFeedStart: "[feed] Get feed start",
  getFeedSucces: "[feed] Get feed success",
  getFeedFailure: "[feed] Get feed failure",
  //
  getMyPostsStart: "[feed] Get my posts start",
  getMyPostsSucces: "[feed] Get my posts success",
  getMyPostsFailure: "[feed] Get my posts failure",
};

export const actionTypes = {
  getFeed: "[feed] Get feed",
  getMyPosts: "[feed] Get my posts",
};

export const mutations = {
  [mutationTypes.getFeedStart]: (state) => {
    state.isLoading = true;
    state.posts = null;
  },
  [mutationTypes.getFeedSucces]: (state, payload) => {
    state.posts = payload;
    state.isLoading = false;
  },
  [mutationTypes.getFeedFailure]: (state) => {
    state.isLoading = false;
  },
  //My posts
  [mutationTypes.getMyPostsStart]: (state) => {
    state.isLoading = true;
    state.myPosts = null;
  },
  [mutationTypes.getMyPostsSucces]: (state, payload) => {
    state.myPosts = payload;
    state.isLoading = false;
  },
  [mutationTypes.getFeedFailure]: (state) => {
    state.isLoading = false;
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
  [actionTypes.getFeed](context, { apiURL }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getFeedStart);
      feedApi
        .getMyPosts(apiURL)
        .then((response) => {
          context.commit(mutationTypes.getFeedSucces, response.data);
          resolve(response.data);
        })
        .catch((e) => {
          console.log("Can not get posts from API", e);
          context.commit(mutationTypes.getFeedFailure);
        });
    });
  },
  [actionTypes.getMyPosts](context, { apiURL }) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.getMyPostsStart);
      feedApi
        .getMyPosts(apiURL)
        .then((response) => {
          context.commit(mutationTypes.getMyPostsSucces, response.data);
          resolve(response.data);
        })
        .catch((e) => {
          console.log("Error to get my posts", e);
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
