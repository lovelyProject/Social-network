import authApi from "@/api/auth";
import { setItem } from "@/helpers/persistanceStorage";
const state = {
  isSubmiting: false,
  currentUser: null,
  isLoggedIn: true,
};
export const mutationTypes = {
  registerStart: "[auth] registerStart",
  registerSuccess: "[auth] registerSucces",
  registerFailure: "[auth registerFailure",
  loginStart: "[auth] loginStart",
  loginSuccess: "[auth] loginSucces",
  loginFailure: "[auth] loginFailure",
};

const mutations = {
  //register
  [mutationTypes.registerStart](state) {
    state.isSubmiting = true;
  },
  [mutationTypes.registerSuccess](state, payload) {
    state.isSubmiting = false;
    state.currentUser = payload;
    state.isLoggedIn = true;
  },
  [mutationTypes.registerFailure](state) {
    state.isSubmiting = false;
    state.isLoggedIn = null;
  },
  //login
  [mutationTypes.loginStart](state) {
    state.isSubmiting = true;
  },
  [mutationTypes.loginSuccess](state, payload) {
    state.isLoggedIn = true;
    state.isSubmiting = false;
    state.currentUser = payload;
  },
  [mutationTypes.loginFailure](state) {
    state.isSubmiting = false;
    state.isLoggedIn = null;
  },
};

export const actionTypes = {
  register: "[auth] register",
  login: "[auth] login",
};

const actions = {
  [actionTypes.register](context, credentials) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.registerStart);
      authApi
        .register(credentials)
        .then((response) => {
          context.commit(mutationTypes.registerSuccess, response.data.user);
          setItem("accessToken", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((error) => {
          console.log("errors:", error);
          context.commit(mutationTypes.registerFailure);
        });
    });
  },
  [actionTypes.login](context, credentials) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.loginStart);
      authApi
        .login(credentials)
        .then((response) => {
          context.commit(mutationTypes.loginSuccess, response.data.user);
          setItem("accessToken", response.data.user.token);
          resolve(response.data.user);
        })
        .catch((error) => {
          console.log("errors:", error);
          context.commit(mutationTypes.loginFailure);
        });
    });
  },
};
export default {
  state,
  mutations,
  actions,
};
