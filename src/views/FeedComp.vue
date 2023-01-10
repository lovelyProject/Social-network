<template>
  <div class="feed">
    <div class="feed__items">
      <div v-if="isLoading" class="loading">loading...</div>
      <vPost v-else v-for="post in feed" :key="post.id" :post="post" />
    </div>
    <div class="feed__sort-container">
      <div class="feed__sort">
        <h3>Filter by:</h3>
        <div class="feed__sort-item">likes</div>
        <div class="feed__sort-item">favourites</div>
        <div class="feed__sort-item">sort by likes</div>
        <div class="feed__sort-item">sort by likes</div>
        <div class="feed__sort-item">sort by likes</div>
        <div class="feed__sort-item">sort by likes</div>
        <div class="feed__sort-item">sort by likes</div>
        <div class="feed__sort-item">sort by likes</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import vPost from "@/components/v-post.vue";
import { actionTypes } from "@/store/modules/feed";
export default {
  name: "GlobalFeed",
  components: {
    vPost,
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.feed.isLoading,
      feed: (state) => state.feed.posts,
      error: (state) => state.feed.error,
    }),
  },
  mounted() {
    this.$store.dispatch(actionTypes.getFeed, {
      apiURL: "http://localhost:3000/posts",
    });
  },
};
</script>
<style lang="sass">
$default-shadow: 0 .1rem .1rem .3rem #e7e7e7
$purple: #5932EA
@mixin shadow-block
  box-shadow: $default-shadow
  background-color: white
  border-radius: 2rem
.feed
  width: 100%
  background: #FAFBFF
  display: flex
  justify-content: space-between
.feed__items
  width: 60%
.feed__item
  width: 100%
  padding: 2rem
  font-size: 1.2rem
  margin-bottom: 2rem
  &-header
    margin-bottom: 1.5rem
    font-size: 1.6rem
  &-footer
    margin-top: 1rem
  &_spinner
    display: flex
    justify-content: center
    margin-top: 2rem
  &-image
    text-align: center
    margin-bottom: 1rem
    margin-top: 1rem
    img
      width: 100%
  @include shadow-block
.feed__sort-container
  width: 38%
.feed__sort
  min-height: 10rem
  @include shadow-block
  width: 100%
  padding: 2rem
  font-size: 2rem
.post-icon
  width: 2.4rem
  height: 2.4rem
.post-comment
  fill: none
.post-like
  stroke: $purple
  fill: $purple
</style>
