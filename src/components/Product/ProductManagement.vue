<template>
  <div class="v-main__wrap">
    <div class="row notice-bar no-gutters">
      <span class="notice-bar__logo">NOTICE</span>
      <span class="notice-bar__post-title ml-o-5"
        >User Management With Advanced Authorization</span
      >
    </div>
    <div class="card-container">
      <div class="card-container__header">
        <div class="card-container__header-title">Product Management</div>
        <div class="card-container__header-action">
          About
          <span style="margin: 0px 5px; color: rgb(0, 188, 195)">
            116,425
          </span>
          results
        </div>
      </div>
      <div class="card-container__select">
        <div class="card-container__select-make">
          <p>Make</p>
        <select name="" id="" v-model="selected" @change="handleChangeBrand(selected)">
          <option value="" disabled>All</option>
          <option :value="val.id" v-for="(val, key) in brands" :key="key">
            {{ val.name }}
          </option>
        </select>
        </div>
        <div class="card-container__select-make">
          <p>Model</p>
        <select name="" id="" v-model="selected" @change="handleChangeBrand(selected)">
          <option value="" disabled>All</option>
          <option :value="val.id" v-for="(val, key) in brands" :key="key">
            {{ val.name }}
          </option>
        </select>
        </div>
        <div class="card-container__select-make">
          <p>Trim</p>
        <select name="" id="" v-model="selected" @change="handleChangeBrand(selected)">
          <option value="" disabled>All</option>
          <option :value="val.id" v-for="(val, key) in brands" :key="key">
            {{ val.name }}
          </option>
        </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  components: {},

  data() {
    return {
      selected: ""
    };
  },

  methods: {
    ...mapActions(["handleLoadBrands", "handleSetID", "handleLoadModel", "handleLoadProduct"]),
    ...mapMutations(["setID"]),

    handleChangeBrand(id) {
      this.handleSetID(id);
      this.handleLoadModel();
    }
  },

  computed: {
    ...mapState(["product", "brands", 'id']),
  },

  mounted() {
    this.handleLoadBrands();
  }
};
</script>

<style lang='scss'>
@import "./index";
</style>