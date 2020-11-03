<template>
  <!-- gắn bộ định tuyến để biết home có 2 trang -->
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./../../components/NavbarHome";
export default {
  components: { Navbar }
};
</script>

<style></style>
