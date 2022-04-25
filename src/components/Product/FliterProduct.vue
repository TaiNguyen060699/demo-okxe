<template>
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
        <option :value="val.id" v-for="(val, key) in listModelID" :key="key">
          {{ val.name }}
        </option>
      </select>
    </div>
    <div class="card-container__select-make">
      <p>Product Type</p>
      <select
        name=""
        id=""
        v-model="selectProductType"
        @change="handleLoadProductType1(selectProductType)"
      >
        <option value="all" disabled>All</option>
        <option value="">All</option>
        <option value="used">Used</option>
        <option value="new">New</option>
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
        <option value="" disabled>Any Location</option>
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
        v-model="selectProductStatus"
        @change="handleLoadProductStatus1(selectProductStatus)"
      >
        <option value="" disabled>All</option>
        <option
          :value="val.value"
          v-for="(val, key) in productStatus"
          :key="key"
        >
          {{ val.name }}
        </option>
      </select>
    </div>
     <div class="card-container__select-make">
      <p>Status UpDate By</p>
      <select
        name=""
        id=""
        v-model="selectStatusUpdateUser"
        @change="handleLoadStatusUpdateBy1(selectStatusUpdateUser)"
      >
        <option value="all" disabled>All</option>
        <option value="" >All</option>
        <option value="auto" >Auto approval</option>
        <option value="default" >Default</option>
        <option :value="val.id" v-for="(val, key) in user" :key="key">
          {{ val.full_name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
   data() {
    return {
      selected: "",
      selectedModel: "",
      selectedTrim: "",
      selectedUser: "",
      selectLocation: "",
      selectProductType: "",
      selectProductStatus: "",
      selectStatusUpdateUser: "",
      all: "",
      isDisabledModel: true,
      isDisabledTrim: true,
      productStatus: [
       {name: "All", value: ''},
       {name: "On Selling", value: 'ing'},
       {name: "In review", value: 'in review'},
       {name: "Blocked", value: 'blocked'},
       {name: "Sold", value: 'done'},
       {name: "Deleted", value: 'delete'},
       {name: "In Transaction", value: 'pending'},
       {name: "Locked", value: 'locked'},
      ],
      brandsFilter: null
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
      "handleLoadLocation",
      "handleLoadProductType",
      "handleLoadProductStatus",
      "handleLoadStatusUpdateBy"
    ]),

    handleChangeBrand(id) {
      this.handleSetID(id);
      if (this.handleLoadModel(id)) {
        this.isDisabledModel = false;
        this.selectedModel = "";
        // this.$router.push({path: '/admin/product', query: this.query})
      }
    },

    handleChangeModel(modelID) {
      this.handleSetModelID(modelID);
      if (this.handleLoadModelDetail(modelID)) {
        this.isDisabledTrim = false;
        this.selectedTrim = "";
        // this.$router.push({path: '/admin/product', query: this.query})
      }
    },

    handleChangeTrim(trimID) {
      this.handleSetTrim(trimID);
    },

    handleChangeUser(id) {
      this.handleLoadUser(id);
    },

    handleChangeLocation(id) {
      this.handleLoadLocation(id);
    },

    handleLoadProductType1(type) {
      this.handleLoadProductType(type)
    },

    handleLoadProductStatus1(status) {
     this.handleLoadProductStatus(status);
    },

    handleLoadStatusUpdateBy1(status_user) {
     this.handleLoadStatusUpdateBy(status_user);
    }
  },

  computed: {
    ...mapState([
      "product",
      "brands",
      "id",
      "model",
      "listModelID",
      "user",
      "location",
      "currentPage",
    ]),
  },

  mounted() {
    this.handleLoadBrands();
    this.handleSetUser();
    this.handleGetLocation();
  },
};
</script>

<style>
</style>