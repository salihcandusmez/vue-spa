<template>
  <section class="container mt-5">
    <Nav></Nav>
    <Header></Header>
    <router-view></router-view>
  </section>
</template>

<script>
import Nav from './Nav'
import Header from './Header'

export default {
  components: {
    Nav,
    Header
  }
};
</script>

<style lang="scss">
  @import "../styles/main.scss";
</style>
