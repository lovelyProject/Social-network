<template>
  <div class="my-profile">
    <div class="my-profile__header">
      <div class="my-profile__header-content">
        <div class="my-profile__photo"></div>
        <div class="my-profile__description">
          <h1 class="my-profile__name">Jessica Richardson</h1>
          <div class="my-profile__info">
            <span class="place">City: Lost-Angeles</span>
            <span class="study">Study: Oxford</span>
          </div>
        </div>
      </div>
    </div>
    <main class="main-section-container">
      <div class="main-section__left-block">
        <div class="post-block">
          <h2>NEW POST</h2>
          <hr class="line" />
          <textarea
            class="post-input"
            placeholder="What's on your mind?"
            v-model="postText"
          ></textarea>
          <div class="post-items">
            <div class="post-item post-item-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M21 11.4384L12.8446 19.4644C11.8455 20.4476 10.4904 21 9.07749 21C7.66455 21 6.30948 20.4476 5.31039 19.4644C4.31129 18.4811 3.75 17.1476 3.75 15.7571C3.75 14.3665 4.31129 13.033 5.31039 12.0497L13.4658 4.02375C14.1319 3.36825 15.0352 3 15.9772 3C16.9192 3 17.8225 3.36825 18.4886 4.02375C19.1547 4.67924 19.5289 5.56829 19.5289 6.4953C19.5289 7.42231 19.1547 8.31135 18.4886 8.96685L10.3243 16.9928C9.99129 17.3206 9.5396 17.5047 9.06862 17.5047C8.59764 17.5047 8.14595 17.3206 7.81291 16.9928C7.47988 16.6651 7.29279 16.2206 7.29279 15.7571C7.29279 15.2935 7.47988 14.849 7.81291 14.5213L15.3471 7.11537"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div class="post-item post-item-2">
              <svg
                @click="uploadFile"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.5 10C9.32843 10 10 9.32843 10 8.5C10 7.67157 9.32843 7 8.5 7C7.67157 7 7 7.67157 7 8.5C7 9.32843 7.67157 10 8.5 10Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 15L16 10L5 21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div class="post-item post-item-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.5">
                  <path
                    d="M19.038 3H4.962C3.87842 3 3 3.87842 3 4.962V19.038C3 20.1216 3.87842 21 4.962 21H19.038C20.1216 21 21 20.1216 21 19.038V4.962C21 3.87842 20.1216 3 19.038 3Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7.50053 3V21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 3V21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 12.0003H21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 7.50043H7.5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 16.5H7.5"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 16.5H21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M16.5 7.50043H21"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div class="post-item post-item-4">
              <svg
                @click="sendPost()"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="32"
                  height="32"
                  rx="4"
                  fill="url(#paint0_linear_2_746)"
                />
                <g clip-path="url(#clip0_2_746)">
                  <path
                    d="M21.6667 10.3333L14.3333 17.6666"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.6667 10.3333L17 23.6666L14.3333 17.6666L8.33333 15L21.6667 10.3333Z"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_2_746"
                    x1="16"
                    y1="0"
                    x2="16"
                    y2="32"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0077B5" />
                    <stop offset="1" stop-color="#0E6795" />
                  </linearGradient>
                  <clipPath id="clip0_2_746">
                    <rect
                      width="16"
                      height="16"
                      fill="white"
                      transform="translate(7 9)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        <!-- Посты -->
        <div v-if="isLoading" class="loading">loading...</div>
        <template v-if="myPosts">
          <vPost
            class="post"
            v-for="post in myPosts"
            :key="post.id"
            :post="post"
          />
        </template>
      </div>
      <div class="main-section__right-block">
        <div class="friends-block">
          <h2>Friends</h2>
          <div class="friends-container"></div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import vPost from "@/components/v-post.vue";
import { mapState } from "vuex";
import { actionTypes } from "@/store/modules/feed";

export default {
  name: "HomeView",
  components: {
    vPost,
  },
  data() {
    return {
      postText: "",
      apiUrl: "http://localhost:3000/posts",
    };
  },
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.currentUser,
      currentUserId: (state) => state.auth.currentUser.id,
      myPosts: (state) => state.feed.myPosts,
      isLoading: (state) => state.feed.isLoading,
    }),
  },
  mounted() {
    setTimeout(() => {
      this.$store.dispatch(actionTypes.getMyPosts, {
        apiURL: `${this.apiUrl}?userId=${this.currentUserId}`,
      });
    }, 500);
  },
  methods: {
    async sendPost() {
      if (this.postText) {
        this.$store
          .dispatch(actionTypes.sendPost, {
            body: this.postText,
            title: `${this.currentUser.user.firstName} ${this.currentUser.user.lastName}`,
            userId: this.currentUserId,
            image: "",
          })
          //Повторный запрос данных постов после создания
          .then(() => {
            this.$store.dispatch(actionTypes.getMyPosts, {
              apiURL: `http://localhost:3000/posts?userId=${this.currentUserId}`,
            });
          });
        this.postText = "";
      }
    },
    uploadFile() {
      // const apiKey = "A5Vp4El2WTKUTDT2mCyvMz";
      // const client = filestack.init(apiKey);
    },
  },
};
</script>

<style lang="sass" scoped>
$default-shadow: 0 .1rem .1rem .3rem #e7e7e7
@mixin shadow-block
  box-shadow: $default-shadow
  background-color: white
  border-radius: 2rem
.my-profile
  width: 100%
  background: #FAFBFF
.my-profile__header
  border-radius: 0rem 0rem 3rem 3rem
  background: url('https://4kwallpapers.com/images/wallpapers/lake-mountains-rocks-twilight-sunset-purple-sky-pink-sky-1920x1080-3775.jpg') center / cover
  display: flex
  flex-direction: column
  justify-content: flex-end
  min-height: 40rem
.my-profile__header-content
  box-shadow: $default-shadow
  border-radius: 2rem
  width: 100%
  min-height: 10rem
  background-color: #fff
  position: relative
.my-profile__photo
  background: #fff url(@/assets/pics/profile-photo.png) center / cover no-repeat
  width: 15rem
  height: 15rem
  border-radius: 50%
  padding: .1rem
  border: .4rem solid #e7e7e7
  z-index: 10
  position: absolute
  top: -75%
  left: 4%
.my-profile__description
  margin-left: 18%
  padding: 1.5rem 2rem
.my-profile__info
  margin-top: .5rem
  font-size: 1.6rem
  & span
    margin-right: .5rem
.main-section-container
  display: grid
  grid-template-columns: 8fr 4fr
  grid-column-gap: 1rem
  margin-top: 2rem
.post-block
  box-shadow: $default-shadow
  min-height: 13.5rem
  background-color: white
  border-radius: 2rem
  padding: 3rem 2.5rem
  color: #181818
.friends-block
  @include shadow-block
  min-height: 25.4rem
.line
  border: 0.5px solid #F4F4F4
  margin-top: 2rem
.post-input
  resize: none
  width: 100%
  margin-top: 2rem
  outline: none
  border: none
  font-family: "Poppins",sans-serif
  font-size: 1.8rem
  // &:focus
  //   min-height: 15rem
.post-item
  width: 2.6rem
  height: 2.6rem
  cursor: pointer
  margin-left: 2rem
  margin-top: 2rem
  &:hover
    opacity: .7
  &-4
    width: 3.2rem
    height: 3.2rem
.post-items
  display: flex
  justify-content: flex-end
  align-items: center
.friends-block
  padding: 2rem
  font-size: 1.2rem
.friends-container
  margin-top: 1rem
  width: 100%
  display: grid
  min-height: 20rem
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: repeat(4, 1fr)
  grid-gap: 2rem
.friends-item
  padding: .1rem
  background-color: grey
  border-radius: 50%
.friend-item__photo
  border-radius: 50%
  background: #777
.friend-item__name
  text-align: center
.post
  margin-top: 2rem
</style>
