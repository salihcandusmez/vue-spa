<template>
  <section class="d-flex flex-wrap align-items-stretch">
    <Post :post="post" v-for="post in posts" v-bind:key="post.id">
      <h6 slot="title" v-html="post.title.rendered"></h6>
    </Post>
  </section>
</template>

<script>
import Post from './Post'
import appService from '../services/app.service.js'
import { mapGetters } from 'vuex'

export default {
  components: {
    Post
  },
  computed: {
    ...mapGetters('postsModule', ['posts'])
  },
  methods: {
    loadPosts () {
      let postId = 2
      if (this.$route.params.id === 'mobile') {
        postId = 11
      }
      this.$store.dispatch('postsModule/updatePosts', postId)
    }
  },
  watch: {
    '$route' (to, from) {
      this.loadPosts()
    }
  },
  created () {
    this.loadPosts()
  }
}
</script>
