<template>
  <section>
    <!-- <Nav></Nav> -->
    <router-view></router-view>
  </section>
</template>

<script>
import Nav from './Nav'

export default {
  components: {
    Nav
  }
};
</script>

<style lang="scss">
  @import "../styles/main.scss";
</style>
