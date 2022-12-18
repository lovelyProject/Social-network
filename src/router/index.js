import { createRouter, createWebHashHistory } from "vue-router";
import MyProfile from "@/views/MyProfile";
import SignIn from "@/views/SignInForm";
import SignUp from "@/views/SignUpForm";

const routes = [
  {
    path: "/",
    name: "profile",
    component: MyProfile,
  },
  {
    path: "/signIn",
    name: "signIn",
    component: SignIn,
  },
  {
    path: "/signUp",
    name: "signUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
