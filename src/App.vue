<template>
  <div id="app">
    <!-- bộ định tuyến -->
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("tryAutoLogin");
  }
};
</script>
<style lang="scss"></style>
