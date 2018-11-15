<template>
  <section class="d-flex flex-wrap align-items-stretch">
    <Post :post="post" v-for="post in posts" v-bind:key="post.id">
      <h6 slot="title">{{post.title}}</h6>
    </Post>
  </section>
</template>

<script>
import Post from './Post'

export default {
  components: {
    Post
  },
  data() {
    return {
      id: this.$route.params.id,
      postsFrontEnd: [
        {
          "id": 3,
          "title": "Vue examples",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
          "id": 4,
          "title": "Scss vs Less",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        }
      ],
      postsMobile: [
        {
          "id": 1,
          "title": "Mobile ui examples",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
          "id": 2,
          "title": "Swift frameworks",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
          "id": 5,
          "title": "Mobile development 2018",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        }
      ],
      posts: []
    }
  },
  methods: {
    loadPosts () {
      if (this.id === 'front-end') {
        this.posts = this.postsFrontEnd
      } else {
        this.posts = this.postsMobile
      }
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
