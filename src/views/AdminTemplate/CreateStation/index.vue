<template>
  <div>
    <template v-if="loading">
      <Loader />
    </template>
    <div v-else class="container">
      <div class="row">
        <div class="col-sm-6 mx-auto">
          <h3>Create Station</h3>
          <div class="alert alert-danger" v-if="err">{{err.response.data.message}}</div>
          <form @submit.prevent="handleCreateStation(formStation)">
            <div class="form-group">
              <label>Name:</label>
              <input type="text" class="form-control" v-model="formStation.name" />
            </div>
            <div class="form-group">
              <label>Address:</label>
              <input type="text" class="form-control" v-model="formStation.address" />
            </div>
            <div class="form-group">
              <label>Province:</label>
              <input type="text" class="form-control" v-model="formStation.province" />
            </div>
            <button type="submit" class="btn btn-success">Create</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./../../../components/Loader";
export default {
  components: {
    Loader
  },
  data() {
    return {
      formStation: {
        name: "",
        address: "",
        province: ""
      }
    };
  },
  computed: {
    loading() {
      return this.$store.state.stations.loading;
    },
    err() {
      return this.$store.state.stations.err;
    }
  },
  methods: {
    handleCreateStation(formStation) {
      this.$store.dispatch("fetchCreateStation", formStation);
    }
  }
};
</script>

<style>
</style>