<template>
  <div class="card-container__select">
    <div class="card-container__select-make">
      <p>Registration date</p>
      <Datepicker
        v-model="selectedRegistrationDate"
        :value="selectedRegistrationDate"
        range
        multiCalendars
        placeholder="All day"
        @update:modelValue="handleRegistrationDate1(selectedRegistrationDate)"
      />
    </div>
    <div class="card-container__select-make">
      <p>Make</p>
      <select
        name=""
        id=""
        v-model="selected"
        @change="handleChangeBrand(selected)"
      >
        <option value="">All</option>
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
        <option value="">All</option>
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
        <option value="">All</option>
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
        <option value="">Any Location</option>
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
        <option value="">All</option>
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
      <p>Status Update At</p>
      <Datepicker
        v-model="selectedStatusUpdateDate"
        :value="selectedStatusUpdateDate"
        range
        multiCalendars
        placeholder="All day"
        @update:modelValue="handleStatusDate1(selectedStatusUpdateDate)"
      />
    </div>
    <div class="card-container__select-make">
      <p>Status UpDate By</p>
      <select
        name=""
        id=""
        v-model="selectStatusUpdateUser"
        @change="handleLoadStatusUpdateBy1(selectStatusUpdateUser)"
      >
        <option value="">All</option>
        <option value="auto">Auto approval</option>
        <option value="default">Default</option>
        <option :value="val.id" v-for="(val, key) in user" :key="key">
          {{ val.full_name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import moment from "moment";

export default {
  components: {
    Datepicker,
  },

  data() {
    return {
      startDate: "",
      endDate: "",
      selectedStatusUpdateDate: "",
      selectedRegistrationDate: "",
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
        { name: "All", value: "" },
        { name: "On Selling", value: "ing" },
        { name: "In review", value: "in review" },
        { name: "Blocked", value: "blocked" },
        { name: "Sold", value: "done" },
        { name: "Deleted", value: "delete" },
        { name: "In Transaction", value: "pending" },
        { name: "Locked", value: "locked" },
      ],
      query: {} 
    };
  },

  methods: {
    ...mapActions([
      "handleLoadBrands",
      "handleLoadMake",
      "handleLoadModel",
      "handleLoadModelDetail",
      "handleSetModelID",
      "handleSetTrim",
      "handleSetUser",
      "handleLoadUser",
      "handleGetLocation",
      "handleLoadLocation",
      "handleLoadProductType",
      "handleLoadProductStatus",
      "handleLoadStatusUpdateBy",
      "setParams",
      "handleRegistrationDate",
      "handleStatusDate",
    ]),

    handleChangeBrand(id) {
      this.handleLoadMake(id);
      if (this.handleLoadModel(id)) {
        this.isDisabledModel = false;
        this.selectedModel = "";
        this.selectedTrim = "";
        this.query.brand_id = id;
        this.params = this.$router.push({
          path: "/admin/product",
          query: this.query,
        });
      }
    },

    handleChangeModel(modelID) {
      this.handleSetModelID(modelID);
      if (this.handleLoadModelDetail(modelID)) {
        this.isDisabledTrim = false;
        this.selectedTrim = "";
        this.query.model_id = modelID;
        this.$router.push({
          path: "/admin/product",
          query: this.query,
        });
      }
    },

    handleChangeTrim(trimID) {
      this.handleSetTrim(trimID);
      this.query.detail_model_id = trimID
      this.$router.push({
        path: "/admin/product",
        query: this.query,
      });
    },

    handleChangeUser(id) {
      this.handleLoadUser(id);
      this.query.created_by = id
      this.$router.push({ path: "/admin/product", query: this.query });
    },

    handleChangeLocation(id) {
      this.handleLoadLocation(id)
      this.query.location_id = id;
      this.$router.push({ path: "/admin/product", query: this.query });
    },

    handleLoadProductType1(type) {
      this.handleLoadProductType(type)
      this.query.type = type;
      this.$router.push({ path: "/admin/product", query: this.query });
    },

    handleLoadProductStatus1(status) {
      this.handleLoadProductStatus(status);
      this.query.status = status
      this.$router.push({
        path: "/admin/product",
        query: this.query,
      });
    },

    handleLoadStatusUpdateBy1(status_user) {
      this.handleLoadStatusUpdateBy(status_user);
      this.query.status_user = status_user
      this.$router.push({
        path: "/admin/product",
        query: this.query,
      });
    },

    handleRegistrationDate1(date) {
      if (!date) return;
      let [date1, date2] = date;
      this.startDate = moment(date1).format("YYYY-MM-DD");
      this.endDate = moment(date2).format("YYYY-MM-DD");
      localStorage.setItem("startDate", this.startDate);
      localStorage.setItem("endDate", this.endDate);
      this.query.start_date = this.startDate;
      this.query.end_date = this.endDate
      this.handleRegistrationDate(this.startDate, this.endDate);
      this.$router.push({
        path: "/admin/product",
        query: this.query,
      });
    },

    handleStatusDate1(date) {
      if (!date) return;
      let [date1, date2] = date;
      this.startDate = moment(date1).format("YYYY-MM-DD");
      this.endDate = moment(date2).format("YYYY-MM-DD");
      localStorage.setItem("status_latest_datetime_from", this.startDate);
      localStorage.setItem("status_latest_datetime_to", this.endDate)
      this.query.status_latest_datetime_from = this.startDate;
      this.query.status_latest_datetime_to = this.endDate;
      this.handleStatusDate(this.startDate, this.endDate);
      this.$router.push({
        path: "/admin/product",
        query: this.query,
      });
    },
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
      "params"
    ]),
  },

  watch: {
    selectedRegistrationDate(val) {
      if (!val) {
        localStorage.setItem("startDate", "");
        localStorage.setItem("endDate", "");
        this.startDate = "";
        this.endDate = "";
        this.handleRegistrationDate();
        this.query.start_date = this.startDate;
        this.query.end_date = this.endDate;
        this.$router.push({
          path: "/admin/product",
          query: this.query,
        });
        return;
      }

      let [date1, date2] = val;
      this.startDate = moment(date1).format("YYYY-MM-DD");
      this.endDate = moment(date2).format("YYYY-MM-DD");
      this.handleRegistrationDate1();
    },

    selectedStatusUpdateDate(val) {
      if (!val) {
        localStorage.setItem("status_latest_datetime_from", "");
        localStorage.setItem("status_latest_datetime_to", "");
        this.startDate = "";
        this.endDate = "";
        this.query.status_latest_datetime_from = this.startDate;
        this.query.status_latest_datetime_to = this.endDate;
        this.handleStatusDate();
        this.$router.push({
          path: "/admin/product",
          query: this.query,
        });
        return;
      }

      let [date1, date2] = val;
      this.startDate = moment(date1).format("YYYY-MM-DD");
      this.endDate = moment(date2).format("YYYY-MM-DD");
      this.handleStatusDate1();
    },
  },

  mounted() {
    this.handleLoadBrands();
    this.handleSetUser();
    this.handleGetLocation();
  },

  created() {
    const params = this.$route.query;
    this.selected = params.brand_id ? params.brand_id : "";

    if (this.selectedModel === params.brand_id) {
      this.selectedModel = params.model_id;
      this.selectedTrim = params.detail_model_id;
    }

    if (this.selectedModel === params.model_id) {
      this.selectedTrim = params.detail_model_id;
    }

    this.selectedUser = params.created_by ? params.created_by : "";
    this.selectLocation = params.location_id ? params.location_id : "";
    this.selectProductType = params.type ? params.type : "";
    this.selectProductStatus = params.sales_status ? params.sales_status : "";
    this.selectStatusUpdateUser = params.status_latest_use
      ? params.status_latest_use
      : "";
    const startDate = localStorage.getItem("startDate");
    const endDate = localStorage.getItem("endDate");
    this.selectedRegistrationDate =  [startDate, endDate];
    this.selectedStatusUpdateDate = [
      localStorage.getItem("status_latest_datetime_from"),
      localStorage.getItem("status_latest_datetime_to"),
    ];
  },
};
</script>

<style>
</style>