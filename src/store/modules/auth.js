import authApi from "@/api/auth";
import { setItem } from "@/helpers/persistanceStorage";
const state = {
  isSubmiting: false,
  currentUser: null,
  isLoggedIn: false,
  invalidLoginOrPass: null,
  findMail: null,
};
export const mutationTypes = {
  //register
  registerStart: "[auth] registerStart",
  registerSuccess: "[auth] registerSucces",
  registerFailure: "[auth registerFailure",
  //check mail
  checkMailStart: "[auth] checkMailStart",
  checkMailSuccess: "[auth] checkMailSuccess",
  checkMailFailure: "[auth] checkMailFailure",
  //login
  loginStart: "[auth] loginStart",
  loginSuccess: "[auth] loginSucces",
  loginFailure: "[auth] loginFailure",
  //logout
  logOut: "[auth] logOut",
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
  //check mail
  [mutationTypes.checkMailStart](state) {
    state.findMail = null;
  },
  [mutationTypes.checkMailSuccess](state) {
    state.findMail = null;
  },
  [mutationTypes.checkMailFailure](state) {
    state.findMail = true;
  },
  //login
  [mutationTypes.loginStart](state) {
    state.isSubmiting = true;
  },
  [mutationTypes.loginSuccess](state, payload) {
    state.isLoggedIn = true;
    state.isSubmiting = false;
    state.currentUser = payload;
    state.invalidLoginOrPass = null;
  },
  [mutationTypes.loginFailure](state) {
    state.isSubmiting = false;
    state.isLoggedIn = null;
    state.invalidLoginOrPass = true;
  },
  [mutationTypes.logOut](state) {
    state.isLoggedIn = null;
  },
};

export const actionTypes = {
  register: "[auth] register",
  checkMail: "[auth] checkMail",
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
          const data = response.data;
          let currentUser = null;
          //Проверка на наличие такого логина и пароля
          for (let elem of data) {
            if (elem.user.mail == credentials.mail) {
              if (elem.user.password == credentials.password) {
                currentUser = elem;
              }
            }
          }
          if (currentUser) {
            //Если лог и пароль нашлись
            context.commit(mutationTypes.loginSuccess, currentUser);
            setItem("accesToken", currentUser.user.token);
            resolve(currentUser);
          } else {
            context.commit(mutationTypes.loginFailure);
            throw new Error("invalid login or password");
          }
        })
        .catch((error) => {
          console.log("errors:", error);
          context.commit(mutationTypes.loginFailure);
        });
    });
  },
  [actionTypes.checkMail](context, credentials) {
    return new Promise((resolve) => {
      context.commit(mutationTypes.checkMailStart);
      console.log("start mail");
      authApi
        .login(credentials)
        .then((response) => {
          const data = response.data;
          //Проверка на наличие такого логина
          for (let elem of data) {
            if (elem.user.mail == credentials.mail) {
              context.commit(mutationTypes.checkMailFailure);
              //Почта занята
              resolve(false);
            }
          }
          if (!state.findMail) {
            context.commit(mutationTypes.checkMailSuccess);
            //Почта не занята
            resolve(true);
          }
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
