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
          <select
            name=""
            id=""
            v-model="selected"
            @change="handleChangeBrand(selected)"
          >
            <option :value="all" disabled>All</option>
            <option :value="val.id" v-for="(val, key) in brands" :key="key">
              {{ val.name }}
            </option>
          </select>
        </div>
        <div class="card-container__select-make">
          <p>Model</p>
          <select
            :disabled="isDisabledModel"
            name=""
            id=""
            v-model="selectedModel"
            @change="handleChangeModel(selectedModel)"
          >
            <option :value="all">All</option>
            <option :value="val.id" v-for="(val, key) in model" :key="key">
              {{ val.name }}
            </option>
          </select>
        </div>
        <div class="card-container__select-make">
          <p>Trim</p>
          <select
            :disabled="isDisabledTrim"
            name=""
            id=""
            v-model="selectedTrim"
            @change="handleChangeTrim(selectedTrim)"
          >
            <option :value="all">All</option>
            <option
              :value="val.id"
              v-for="(val, key) in listModelID"
              :key="key"
            >
              {{ val.name }}
            </option>
          </select>
        </div>
        <div class="card-container__select-make">
          <p>Product Type</p>
          <select
            name=""
            id=""
            v-model="selectedUser"
            @change="handleChangeUser(selectedUser)"
          >
            <option value="">All</option>
            <option value="">Used</option>
            <option value="">New</option>
          </select>
        </div>
        <div class="card-container__select-make">
          <p>Product Location</p>
          <select
            name=""
            id=""
            v-model="selectLocation"
            @change="handleChangeLocation(selectLocation)"
          >
            <option value="" disabled>All</option>
            <option :value="val.id" v-for="(val, key) in location" :key="key">
              {{ val.name.slice(16) }}
            </option>
          </select>
        </div>
        <div class="card-container__select-make">
          <p>Created By</p>
          <select
            name=""
            id=""
            v-model="selectedUser"
            @change="handleChangeUser(selectedUser)"
          >
            <option value="" disabled>All</option>
            <option :value="val.id" v-for="(val, key) in user" :key="key">
              {{ val.full_name }}
            </option>
          </select>
        </div>
        <div class="card-container__select-make">
          <p>Product Status</p>
          <select
            name=""
            id=""
            v-model="selectedUser"
            @change="handleChangeUser(selectedUser)"
          >
            <option value="" disabled>All</option>
            <option :value="val.id" v-for="(val, key) in productStatus" :key="key">
              {{ val }}
            </option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  components: {},

  data() {
    return {
      selected: "",
      selectedModel: "",
      selectedTrim: "",
      selectedUser: "",
      selectLocation: "",
      all: "",
      isDisabledModel: true,
      isDisabledTrim: true,
      productStatus: [
        'All',
        'On Selling',
        'In review',
        'Blocked',
        'Sold',
        'Deleted',
        'In Transaction',
        'Locked'
      ]
    };
  },

  methods: {
    ...mapActions([
      "handleLoadBrands",
      "handleSetID",
      "handleLoadModel",
      "handleLoadProduct",
      "handleLoadModelDetail",
      "handleSetModelID",
      "handleSetTrim",
      "handleSetUser",
      "handleLoadUser",
      "handleGetLocation",
      "handleLoadLocation"
    ]),

    handleChangeBrand(id) {
      this.handleSetID(id);
      if (this.handleLoadModel(id)) {
        this.isDisabledModel = false;
        this.selectedModel = "";
      }
    },

    handleChangeModel(modelID) {
      this.handleSetModelID(modelID);
      if (this.handleLoadModelDetail(modelID)) {
        this.isDisabledTrim = false;
        this.selectedTrim = "";
      }
    },

    handleChangeTrim(trimID) {
      this.handleSetTrim(trimID);
    },

    handleChangeUser(id) {
      this.handleLoadUser(id);
    },

    handleChangeLocation(id) {
      this.handleLoadLocation(id)
    }
  },

  computed: {
    ...mapState(["product", "brands", "id", "model", "listModelID", "user", "location"]),
  },

  mounted() {
    this.handleLoadBrands();
    this.handleSetUser();
    this.handleGetLocation();
  },
};
</script>

<style lang='scss'>
@import "./index";
@import url("https://fonts.googleapis.com/css?family=Mogra|Roboto");
</style>