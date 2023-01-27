<template>
  <div class="v-pagination">
    {{ total }}
  </div>
</template>

<script>
export default {
  name: "v-pagination",
  props: {
    total: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
    limit: {
      type: Number,
      default: 10,
    },
  },
};
</script>
