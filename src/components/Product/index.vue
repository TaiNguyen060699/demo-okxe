<template>
  <Header />
  <div class="row">
    <div class="col-md-2">
      <NavBar />
    </div>
    <div class="col-md-10">
      <table>
        <thead class="v-data-table-header">
          <tr>
            <th class="text-center">
              <span>ID</span>
            </th>
            <th>
              <span>Picture</span>
            </th>
            <th>
              <span>Subject</span>
            </th>
            <th>
              <span>Product Type</span>
            </th>
            <th>
              <span>Make</span>
            </th>
            <th>
              <span>Model(Trim)</span>
            </th>
            <th>
              <span>Category</span>
            </th>
            <th>
              <span>Location</span>
            </th>
            <th>
              <span>Release Year</span>
            </th>
            <th>
              <span>Used Distance</span>
            </th>
            <th>
              <span>Price(VND)</span>
            </th>
            <th>
              <span>Registered Date</span>
            </th>
            <th>
              <span>Last updated at</span>
            </th>
            <th>
              <span>Status updated at</span>
            </th>
            <th>
              <span>Status updated by</span>
            </th>
            <th>
              <span>Status</span>
            </th>
          </tr>
        </thead>
        <tbody class="v-data-table-body">
          <tr v-for="(val, key) in listProduct" :key="key">
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
              <div>
                <span>{{ val.seller.name }}</span>
                <p>{{ val.seller.type }}</p>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.sales_status }}</span>
              </div>
            </td>
            <td>
              <div>
                <img :src="val.brand.logo" alt="" style="width: 36px" />
                <span>{{ val.brand.name }}</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.id }}</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.category }}</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.location }}</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.release_year }}</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.used_distance }} km</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.price }} đ</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.created_at }}</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.status_latest_datetime }}</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.updated_at }}</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.status_latest_user }}</span>
              </div>
            </td>
            <td>
              <div>
                <span>{{ val.sales_status }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="pagination">
      <Pagination />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import NavBar from "../NavBar/index.vue";
import Header from "../Header.vue";
import Pagination from '../Pagination.vue'

export default {
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },
  components: {
    Header,
    NavBar,
    Pagination,
  },

  methods: {
    ...mapActions(["handleLoadProduct", "handleActivePage"]),
  },

  computed: {
    ...mapState(["listProduct", "totalPage"]),
  },

  created() {
    this.handleLoadProduct();
    console.log(this.totalPage)
  },
};
</script>

<style lang='scss'>
@import './index.scss';
</style>