<template>
  <nav class="page-item">
    <ul>
      <li
        class="page-link"
        href=""
        @click="onPageChange"
        v-for="(val, index) in totalPage"
        :key="index"
      >
        {{ val }}
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    ...mapActions(["handleLoadProduct", "handleActivePage"]),
    onPageChange(page) {
      this.currentPage = page;
      this.handleLoadProduct();
    },
  },

  computed: {
    ...mapState(["totalPage"]),
    total() {
      return Array.from(
        { length: this.totalPage / 50 },
        (_, index) => index + 1
      );
    },
  },
};
</script>

<style>
</style>