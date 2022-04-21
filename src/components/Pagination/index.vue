<template>
  <Paginate
    v-model="page"
    :page-count="pagess"
    @click="onPageChange(pagess)"
    :class="[currentPage === pagess ? 'active' : '']"
  />
</template>

<script>
import { mapActions, mapState } from "vuex";
import Paginate from "vuejs-paginate-next";

export default {
  props: {
    pagess: Number,
  },

  data() {
    return {
      page: 1
    };
  },
  
  components: {
    Paginate,
  },

  methods: {
    ...mapActions(["handleLoadProduct", "handleActivePage"]),
    onPageChange() {
      this.$emit(
        "pageChanged",
        this.handleActivePage((this.currentPage = this.page))
      );
    },
  },

  computed: {
    ...mapState(["product", "totalPage", "currentPage"]),
  },
};
</script>

<style lang='scss'>
@import "./index.scss";
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css";
.active {
  background-color: #00bcc3;
}
</style>