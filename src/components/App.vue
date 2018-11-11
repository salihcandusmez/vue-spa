<template>
  <section class="container mt-5">
    <Nav></Nav>
    <Header></Header>
    <Posts></Posts>  
  </section>
</template>

<script>
import Nav from './Nav'
import Header from './Header'
import Posts from './Posts'

export default {
  components: {
    Nav,
    Header,
    Posts
  }
};
</script>

<style lang="scss">
  @import "../styles/main.scss";
</style>
