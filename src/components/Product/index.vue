<template>
  <div class="rowd">
    <div class="navb" style="margin-right: 10px">
      <NavBar />
    </div>
    <div
      class="flex"
      style="display: flex; align-items: center; flex-direction: column"
    >
      <ProductManagement />
      <table>
        <thead class="v-data-table-header">
          <tr>
            <th class="text-center">
              <span>ID</span>
            </th>
            <th v-for="(val, key) in columns" :key="key">
              <span> {{ val.value }} </span>
            </th>
          </tr>
        </thead>
        <tbody class="v-data-table-body">
          <tr v-for="(val, key) in product" :key="key">
            <td>
              <div>
                <span>{{ val.id }}</span>
              </div>
            </td>
            <td>
              <div style="height: 36px; width: 36px; margin: 0 auto">
                <img
                  :src="val.default_image"
                  style="object-fit: cover; height: 36px; width: 36px"
                />
              </div>
            </td>
            <td>
              <div style="font-size: 14px">
                <span style="font-weight: 700">{{
                  val.seller ? val.seller.name : ""
                }}</span>
                <p>{{ val.seller ? val.seller.type : "" }}</p>
              </div>
            </td>
            <td>
              <div>
                <button
                  :class="[
                    'v-btn__content used-status brand-product-page-btn',
                    val.used_status === 'new' ? 'bg-blue' : 'bg-black',
                  ]"
                >
                  <span class="v-btn__content">{{ val.used_status }}</span>
                </button>
              </div>
            </td>
            <td>
              <div class="d-flex flex-nowrap align-center">
                <img
                  :src="val.brand ? val.brand.logo : ''"
                  alt="alt"
                  style="width: 36px"
                />
                <span style="margin-left: 5px">{{
                  val.brand ? val.brand.name : ""
                }}</span>
              </div>
            </td>
            <td>
              <div style="font-weight: bold">{{ val.model_name }}</div>
              <div>{{ val.model_detail }}</div>
            </td>
            <td>
              <div>
                <span>{{ val.category }}</span>
              </div>
            </td>
            <td>
              <div style="text-align: center; font-size: 0.875rem">
                {{ val.location }}
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.release_year }}</span>
              </div>
            </td>
            <td>
              <div>
                <span
                  >{{ val.used_distance
                  }}<span style="font-weight: 600">㎞</span></span
                >
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.price }} đ</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ formatDate(val.created_at) }}</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.created_by || "-" }}</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ formatDate(val.status_latest_datetime) }}</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ formatDate(val.updated_at) }}</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.status_latest_user }}</span>
              </div>
            </td>
            <td>
              <div>
                <span
                  style="text-transform: capitalize"
                  :class="[
                    val.sales_status === 'locked' ? 'text-orange' : '',
                    val.sales_status === 'sold' ? 'text-black' : '',
                    val.sales_status === 'deleted' ? 'text-red' : '',
                    val.sales_status === 'done' ? 'text-green' : '',
                    val.sales_status === 'in review' ? 'text-purple' : '',
                  ]"
                >
                  {{ val.sales_status }}
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination @pageChanged="onclickPage" :pagess="total"> </Pagination>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import NavBar from "../NavBar/index.vue";
import Pagination from "../Pagination/index.vue";
import ProductManagement from "./ProductManagement.vue";
import moment from "moment";

export default {
  data() {
    return {
      columns: [
        { value: "Picture", key: "picture" },
        { value: "Subject", key: "Subject" },
        { value: "Product Type", key: "Product Type" },
        { value: "Make", key: "id" },
        { value: "Model(Trim)", key: "id" },
        { value: "Category", key: "id" },
        { value: "Location", key: "id" },
        { value: "Release Year", key: "id" },
        { value: "Used Distance", key: "id" },
        { value: "Price(VND)", key: "id" },
        { value: "Regitered Date", key: "id" },
        { value: "Create By", key: "id" },
        { value: "Last updated at", key: "id" },
        { value: "Status updated at", key: "id" },
        { value: "Status updated by", key: "id" },
        { value: "Status ", key: "id" },
      ],
    };
  },
  
  components: {
    NavBar,
    Pagination,
    ProductManagement,
  },

  methods: {
    ...mapActions(["handleLoadProduct", "handleActivePage", "setParams"]),
    onclickPage() {
      this.handleLoadProduct();
    },

    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format("DD.MM.YYYY hh:mm:ss");
      }
    },
  },

  computed: {
    ...mapState(["product", "totalPage", "currentPage"]),
    total() {
      return Math.ceil(this.totalPage / 50);
    },
  },

  mounted() {
    this.handleLoadProduct();
  },

  beforeUnmount() {
    this.setParams({
      page: 1,
      sort_by: 'updated_at',
      order_by: 'desc',
      start_date: null,
      end_date: null,
      type: null,
      brand_id: null,
      model_id: null,
      detail_model_id: null,
      location_id: null,
      sales_status: null,
      status_latest_datetime_from: null,
      status_latest_datetime_to: null,
      status_latest_user: null,
      created_by: null,
      count: 50
    })
    this.handleLoadProduct();
  }
};
</script>

<style lang='scss'>
@import "./index.scss";
</style>