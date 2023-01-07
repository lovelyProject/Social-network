<template>
  <div class="feed">
    <div class="feed__items">
      <vPost v-for="post in GET_POSTS" :key="post.id" :post="post" />
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
import vPost from "@/components/v-post.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "GlobalFeed",
  components: {
    vPost,
  },
  methods: {
    ...mapActions(["GET_POSTS_FROM_API"]),
  },
  computed: {
    ...mapGetters(["GET_POSTS"]),
  },
  mounted() {
    this.$store.dispatch("GET_POSTS_FROM_API");
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
