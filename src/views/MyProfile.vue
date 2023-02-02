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
              <img src="@/assets/icons/pin.svg" alt="" />
            </div>
            <div class="post-item post-item-2">
              <img src="@/assets/icons/photo.svg" alt="" @click="uploadFile" />
            </div>
            <div class="post-item post-item-3">
              <img src="@/assets/icons/video.svg" alt="" />
            </div>
            <div class="post-item post-item-4">
              <img src="@/assets/icons/send.svg" alt="" @click="sendPost()" />
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
            @click="showInfo(post)"
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
    showInfo(item) {
      console.log(item);
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
