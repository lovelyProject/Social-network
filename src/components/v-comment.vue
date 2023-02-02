<template>
  <div class="vpost-comments">
    <hr class="comment-line" />
    <div
      class="vpost-comment-item"
      v-for="(comment, idx) in comments"
      :key="idx"
    >
      <div class="vpost-comment">
        <div class="vpost-comment-logo">
          <img
            src="@/assets/pics/profile-photo.png"
            alt=""
            class="comment-logo"
          />
        </div>
        <div class="vpost-comment-content">
          <h3 class="vpost-comment-title">{{ comment.title }}</h3>
          <p class="vpost-comment-text">
            {{ comment.body }}
          </p>
          <hr class="comment-line" />
        </div>
      </div>
    </div>
    <Reply />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Reply from "@/components/v-replyBox.vue";
export default {
  name: "vpost-comments",
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.currentUser,
    }),
  },
  components: {
    Reply,
  },
  props: {
    comments: {
      type: Array,
    },
  },
};
</script>
<style lang="sass">
.comment
  &-line
    margin: 1rem 0
.vpost-comment
  display: flex
  &-logo
    width: 3.4rem
    height: 3.4rem
    & img
      width: 100%
  &-title
    font-size: 1.4rem
    font-weight: 600
    margin-bottom: .5rem
  &-content
    margin-left: 1rem
    padding: 0 0 .7rem 0
    flex-basis: 95%
  &-text
    font-size: 1.4rem
</style>
