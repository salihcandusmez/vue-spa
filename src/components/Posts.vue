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

export default {
  components: {
    Post
  },
  data() {
    return {
      id: this.$route.params.id,
      postsFrontEnd: [],
      postsMobile: [],
      posts: []
    }
  },
  methods: {
    loadPosts () {
      let postId = 2
      if (this.id === 'mobile') {
        postId = 11
      }
      appService.getPosts(postId).then(data => {
        this.posts = data
      })
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
      this.loadPosts()
    }
  },
  created () {
    this.loadPosts()
  }
}
</script>
