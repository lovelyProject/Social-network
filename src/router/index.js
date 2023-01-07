import { createRouter, createWebHashHistory } from "vue-router";
import MyProfile from "@/views/MyProfile";
import SignIn from "@/views/SignInForm";
import SignUp from "@/views/SignUpForm";
import FeedComp from "@/views/FeedComp";

const routes = [
  {
    path: "/profile",
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
  {
    path: "/",
    name: "Feed",
    component: FeedComp,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
