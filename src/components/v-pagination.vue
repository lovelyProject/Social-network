<template>
  <ul class="v-pagination">
    <li class="page-item" v-for="page in pages" :key="page">
      <router-link
        :to="{ path: url, query: { page: page } }"
        class="page-link"
        :class="{ 'page-active': currentPage === page }"
        >{{ page }}</router-link
      >
    </li>
  </ul>
</template>

<script>
import { range } from "@/helpers/utils";
export default {
  name: "v-pagination",
  props: {
    total: {
      type: Number,
      default: 0,
      required: true,
    },
    currentPage: {
      type: Number,
      default: 1,
      required: true,
    },
    limit: {
      type: Number,
      default: 10,
      required: true,
    },
    url: {
      type: String,
      default: "",
      required: true,
    },
  },
  computed: {
    pages() {
      const pagesCount = Math.ceil(this.total / this.limit);
      return range(1, pagesCount);
    },
  },
};
</script>

<style lang="sass">
.v-pagination
    display: flex
    flex-wrap: wrap
    justify-content: center
.page
    &-item
        list-style: none
        cursor: pointer
        &:hover
            opacity: 0.7
        &:not(:last-child)
            margin-right: 1rem
    &-link
        padding: 1rem
        border-radius: .1rem
    &-active
        padding: .9rem
        background-color: #fff
        color: #5932EA
        border: .1rem solid #5932EA
</style>
