<template>
  <div class="container">
    <h3>Stations</h3>
    <div class="row">
      <!--  -->
      <Loader v-if="loading" />
      <StationItem v-for="item in stations" :key="item._id" :station="item" />

      <!-- <div v-for="item in stations" class="col-Wsm-4" :key="item._id">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">{{ item.name }}</h4>
            <router-link class="btn btn-info" to="/">Detail</router-link>
          </div>
        </div>
      </div> -->
      <!--  -->
    </div>
  </div>
</template>

<script>
import StationItem from "./../../../components/StationItem";
import Loader from "./../../../components/Loader";
export default {
  components: {
    StationItem,
    Loader
  },
  created() {
    this.$store.dispatch("fetchListStations");
  },
  computed: {
    loading() {
      return this.$store.state.stations.loading;
    },
    stations() {
      return this.$store.state.stations.data;
    },
    error() {
      return this.$store.state.stations.err;
    }
  }
};
</script>

<style></style>
