<template>
  <div>
    <Loader v-if="loading" />
    <h1>Detail Station</h1>
    <p>Name: {{ stationDetail.name }}</p>
    <p>Address: {{ stationDetail.address }}</p>
    <p>Province: {{ stationDetail.province }}</p>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";

export default {
  components: {
    Loader
  },
  created() {
    this.$store.dispatch("fetchDetailStations", this.$route.params.id);
  },
  computed: {
    loading() {
      return this.$store.state.stations.loading;
    },
    stationDetail() {
      return this.$store.state.stations.data;
    },
    error() {
      return this.$store.state.stations.err;
    }
  }
};
</script>

<style></style>
