<template>
  <div class="feed">
    <div class="feed__items">
      <div v-if="isLoading" class="loading">loading...</div>
      <div class="" v-if="isServerAvailable === false">
        Server isn't available now, please try again later
      </div>
      <vPost
        v-else
        v-for="post in feed"
        :key="post.id"
        :post="post"
        @click="showInfo(post)"
      />
      <vPagination
        :total="total"
        :limit="limit"
        :current-page="currentPage"
        :url="baseUrl"
      />
    </div>
    <div class="feed__sort-container">
      <div class="feed__sort" v-if="isServerAvailable">
        <h3>Filter by:</h3>
        <div class="feed__sort-item"></div>
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
import vPagination from "@/components/v-pagination.vue";
import { limit } from "@/helpers/vars.js";
import queryString from "query-string";

export default {
  name: "GlobalFeed",
  components: {
    vPost,
    vPagination,
  },
  data() {
    return {
      limit,
      total: 0,
      url: "/",
      apiUrl: "http://localhost:3000/posts",
    };
  },
  watch: {
    currentPage() {
      this.fetchFeed();
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.feed.isLoading,
      feed: (state) => state.feed.posts,
      error: (state) => state.feed.error,
      isServerAvailable: (state) => state.feed.isServerAvailable,
    }),
    currentPage() {
      return parseInt(this.$route.query.page || "1");
    },
    baseUrl() {
      return this.$router.path;
    },
    offset() {
      return (this.currentPage - 1) * this.limit;
    },
  },
  methods: {
    fetchFeed() {
      const parsedUrl = queryString.parseUrl(this.apiUrl);
      const stringifyParams = queryString.stringify({
        _start: this.offset,
        _limit: limit,
        ...parsedUrl.query,
      });
      const apiUrlWithParams = `${parsedUrl.url}?${stringifyParams}`;
      console.log(apiUrlWithParams);
      this.$store
        .dispatch(actionTypes.getFeed, {
          apiURL: this.apiUrl,
        })
        .then((response) => {
          this.total = response === null ? 0 : response.length;
        });
      this.$store.dispatch(actionTypes.getFeed, {
        apiURL: apiUrlWithParams,
      });
    },
    showInfo(item) {
      console.log(item);
    },
  },
  mounted() {
    this.fetchFeed();
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
      width: 50%
  @include shadow-block
.feed__sort-container
  width: 38%
.feed__sort
  min-height: 10rem
  @include shadow-block
  width: 100%
  padding: 2rem
  font-size: 2rem
</style>
