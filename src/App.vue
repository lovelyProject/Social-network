<template>
  <div>
    <header class="header">
      <div class="header-container">
        <router-link
          class="header__logo"
          :to="{ name: 'Feed' }"
          id="header-logo"
        >
          H<span style="color: #5932ea">a</span>ndshake
        </router-link>
        <router-link
          v-if="!isLogIn"
          class="header__sign-in"
          :to="{ name: 'signIn' }"
          id="sign-in-link"
          >Sign in</router-link
        >
        <router-link
          v-if="isLogIn"
          class="header__sign-in"
          :to="{ name: 'signIn' }"
          id="Log-out"
          @click="logOut"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon-log-out"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path
              d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
            />
            <path d="M7 12h14l-3 -3m0 6l3 -3" />
          </svg>

          <span>Log out</span></router-link
        >
      </div>
    </header>
    <div class="general-block">
      <nav class="menu" v-if="isLogIn">
        <div class="profile-photo">
          <img src="./assets/pics/profile-photo.png" alt="profile-photo" />
        </div>
        <div class="profile-subcription">
          <h1>Edward</h1>
          <span>YOU</span>
        </div>
        <hr class="menu-line" />
        <!-- My profile -->
        <router-link class="menu__item" :to="{ name: 'profile' }"
          ><svg
            class="menu__item-icon"
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 0c-1.1 0-2 1.12-2 2.5s.9 2.5 2 2.5 2-1.12 2-2.5-.9-2.5-2-2.5zm-2.09 5c-1.06.05-1.91.92-1.91 2v1h8v-1c0-1.08-.84-1.95-1.91-2-.54.61-1.28 1-2.09 1-.81 0-1.55-.39-2.09-1z"
            />
          </svg>
          <span class="menu__item-text">My profile</span>
          <svg
            class="menu__item-arrow"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9.00012L5 5.00012L1 1.00012"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
        <!-- My messages -->
        <router-link class="menu__item" to="{ name: '' }">
          <svg
            class="menu__item-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z"
            />
          </svg>
          <span class="menu__item-text">My messages</span>
          <svg
            class="menu__item-arrow"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9.00012L5 5.00012L1 1.00012"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
        <!-- My friends -->
        <router-link class="menu__item" to="{ name: '' }"
          ><svg
            class="menu__item-icon"
            viewBox="0 0 24 24"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="peopleIconTitle"
            stroke="#000000"
            stroke-width="1"
            stroke-linecap="square"
            stroke-linejoin="miter"
            fill="none"
            color="#000000"
          >
            <path
              d="M1 18C1 15.75 4 15.75 5.5 14.25 6.25 13.5 4 13.5 4 9.75 4 7.25025 4.99975 6 7 6 9.00025 6 10 7.25025 10 9.75 10 13.5 7.75 13.5 8.5 14.25 10 15.75 13 15.75 13 18M12.7918114 15.7266684C13.2840551 15.548266 13.6874862 15.3832994 14.0021045 15.2317685 14.552776 14.9665463 15.0840574 14.6659426 15.5 14.25 16.25 13.5 14 13.5 14 9.75 14 7.25025 14.99975 6 17 6 19.00025 6 20 7.25025 20 9.75 20 13.5 17.75 13.5 18.5 14.25 20 15.75 23 15.75 23 18"
            />
            <path
              stroke-linecap="round"
              d="M12,16 C12.3662741,15.8763472 12.6302112,15.7852366 12.7918114,15.7266684"
            />
          </svg>
          <span class="menu__item-text">My friends</span>
          <svg
            class="menu__item-arrow"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9.00012L5 5.00012L1 1.00012"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
        <!-- News -->
        <router-link class="menu__item" :to="{ name: 'Feed' }"
          ><svg
            class="menu__item-icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 242.937 242.937"
            style="enable-background: new 0 0 242.937 242.937"
            xml:space="preserve"
          >
            <g>
              <path
                d="M235.437,60.699h-31.709V30.927c0-4.142-3.358-7.5-7.5-7.5H7.5c-4.142,0-7.5,3.358-7.5,7.5v161.478
		c0,14.945,12.159,27.104,27.104,27.104h188.728c14.945,0,27.105-12.159,27.105-27.104V68.199
		C242.937,64.057,239.579,60.699,235.437,60.699z M15,192.405V38.427h173.728v29.771v124.206c0,4.349,1.036,8.458,2.864,12.104
		H27.104C20.43,204.509,15,199.079,15,192.405z M215.832,204.509c-6.674,0-12.104-5.43-12.104-12.104V75.699h24.209v116.706
		C227.937,199.079,222.506,204.509,215.832,204.509z"
              />
              <path
                d="M39.351,78.374h125.025c4.142,0,7.5-3.358,7.5-7.5c0-4.142-3.358-7.5-7.5-7.5H39.351c-4.142,0-7.5,3.358-7.5,7.5
		C31.851,75.016,35.208,78.374,39.351,78.374z"
              />
              <path
                d="M39.008,115.893c0,12.44,10.12,22.561,22.56,22.561c12.438,0,22.558-10.121,22.558-22.561
		c0-12.441-10.119-22.563-22.558-22.563C49.128,93.33,39.008,103.452,39.008,115.893z M69.125,115.893
		c0,4.169-3.39,7.561-7.558,7.561c-4.168,0-7.56-3.392-7.56-7.561c0-4.17,3.391-7.563,7.56-7.563
		C65.735,108.33,69.125,111.723,69.125,115.893z"
              />
              <path
                d="M39.351,180.02c4.142,0,7.5-3.358,7.5-7.5v-8.361c0-3.899,3.174-7.072,7.075-7.072h15.277c3.903,0,7.078,3.172,7.078,7.072
		v8.361c0,4.142,3.358,7.5,7.5,7.5c4.142,0,7.5-3.358,7.5-7.5v-8.361c0-12.17-9.904-22.072-22.078-22.072H53.926
		c-12.172,0-22.075,9.901-22.075,22.072v8.361C31.851,176.662,35.208,180.02,39.351,180.02z"
              />
              <path
                d="M164.376,97.063h-57.763c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h57.763c4.142,0,7.5-3.358,7.5-7.5
		C171.876,100.421,168.518,97.063,164.376,97.063z"
              />
              <path
                d="M164.376,164.443h-57.763c-4.142,0-7.5,3.358-7.5,7.5s3.358,7.5,7.5,7.5h57.763c4.142,0,7.5-3.358,7.5-7.5
		S168.518,164.443,164.376,164.443z"
              />
              <path
                d="M164.376,130.753h-57.763c-4.142,0-7.5,3.358-7.5,7.5c0,4.142,3.358,7.5,7.5,7.5h57.763c4.142,0,7.5-3.358,7.5-7.5
		C171.876,134.111,168.518,130.753,164.376,130.753z"
              />
            </g>
          </svg>
          <span class="menu__item-text">Feed</span>
          <svg
            class="menu__item-arrow"
            viewBox="0 0 6 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9.00012L5 5.00012L1 1.00012"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
        <!-- <router-link class="menu__item" to="/signIn">Sign in</router-link>
        <router-link class="menu__item" to="/signUp">Sign up</router-link> -->
      </nav>

      <router-view />
    </div>
  </div>
</template>
<script>
import { mutationTypes } from "@/store/modules/auth";
import { getterTypes } from "@/store/modules/auth";
import { mapGetters } from "vuex";
import { actionTypes } from "@/store/modules/auth";

export default {
  computed: {
    ...mapGetters({
      currentUser: getterTypes.currentUser,
      isLogIn: getterTypes.isLoggedIn,
      isAnonymous: getterTypes.isAnonymous,
    }),
  },
  methods: {
    logOut() {
      this.$store.commit(mutationTypes.logOut);
    },
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser);
  },
};
</script>
<style lang="sass">
html
  font-size: 62.5%
*, ::after, ::before
  margin: 0
  padding: 0
  box-sizing: border-box
  font-size: 1.6rem

h1,h2,h3,h4,h5,h6,span,p
  cursor: default
a
  color: black
  text-decoration: none
#app
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap")
  font-family: 'Poppins', sans-serif
  margin: 0 auto
.general-block
  display: flex
  max-width: 192rem
  margin: 9rem auto 0 auto
  padding: 0 1.5rem
.menu
  width: 30rem
  height: 100vh
  background: #FAFBFF
  padding: 2rem 2.2rem 4.5rem 2.8rem
  box-shadow: 0 0 0.2rem 0 #363636
  margin-right: 2rem
.menu__item-icon
  fill: #9197B3
  width: 2rem
  height: 2rem
.menu__item-arrow
  stroke: #9197B3
.menu__item
  position: relative
  display: flex
  width: 100%
  padding: 1.3rem 1.8rem 1.3rem 1.3rem
  border-radius: 1rem
  color: #9197B3
  font-size: 1.4rem
  line-height: 2.1rem
  font-weight: 500
  &-arrow
    width: .8rem
    height: 1.6rem
    position: absolute
    top: 30%
    right: 1.8rem
  &-text
    margin-left: 1.8rem
    font-weight: 500
    cursor: pointer
  &_active

  &:hover
    opacity: 0.7
.profile-photo
  text-align: center
  border-radius: 50%
  img
    width: 15rem
    height: 15rem
.profile-subcription
  text-align: center
  margin-bottom: 3rem
  & h1
    font-weight: 500
    font-size: 2rem
    line-height: 3rem
.router-link-active
  color: white
  background-color: #5932EA
  & .menu__item-icon
    fill: white
  & .menu__item-arrow
    stroke: white !important
.header
  font-size: 1.6rem
  padding: 2rem 1.5rem
  box-shadow: 0 .3rem .4rem 0 #d3d3d3
  position: fixed
  top: 0
  width: 100%
  background-color: #fff
  z-index: 10000000000
  &-container
    max-width: 192rem
    display: flex
    justify-content: space-between
    margin: 0 auto
    align-items: center
  &__logo
    font-weight: 700
    font-size: 2.4rem
    & span
      font-size: 2.4rem
#sign-in-link
  background: white
  color: #5932EA
.header__sign-in:hover
  opacity: 0.7
#header-logo
  background-color: white
  color: black
.menu-line
  margin-bottom: 2rem
#Log-out
  color: red
  display: flex
  align-items: center
  cursor: pointer
  background-color: #fff
  span
    cursor: pointer
.icon-log-out
  width: 3.2rem
  margin-right: .8rem
  cursor: pointer
  background: white
</style>
