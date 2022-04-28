<template>
  <Paginate
    v-model="page"
    :page-count="pagess"
    @click="onPageChange(page)"
    :class="[page === pagess ? 'active' : '']"
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
    ...mapActions(["handleActivePage", "setParams"]),
    onPageChange() {
      this.params.page = this.page
      const pageParams = Object.assign(this.params)
      for(let i in pageParams) {
        if (pageParams[i] === null) {
          delete pageParams[i]
        }
      }
      this.$emit(
        "pageChanged",
        this.handleActivePage(this.page),
        this.$router.push({ path: "/admin/product", query: pageParams})
      );
    },
  },

  computed: {
    ...mapState(["product", "totalPage", "params"]),
  },

  created() {
    const params = this.$route.query;
    this.page = params.page;
    this.setParams(params)
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