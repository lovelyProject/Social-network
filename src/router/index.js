import { createRouter, createWebHistory } from "vue-router";
import MyProfile from "@/views/MyProfile";
import SignIn from "@/views/SignInForm";
import SignUp from "@/views/SignUpForm";
import FeedComp from "@/views/FeedComp";
import MyFriends from "@/views/MyFriends";
import MyChats from "@/views/MyChats";

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
  {
    path: "/friends",
    name: "MyFriends",
    component: MyFriends,
  },
  {
    path: "/chats",
    name: "MyChats",
    component: MyChats,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
