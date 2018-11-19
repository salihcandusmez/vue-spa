import appService from '../services/app.service'

const state = {
  posts: [],
  postId: 0
}

const getters = {
  posts: state => state.posts
}

const actions = {
  updatePosts ( { commit }, postId) {
    appService.getPosts(postId).then(res => {
      commit('updatePost', { postId, posts: res})
    })
  }
}

const mutations = {
  updatePost (state, post) {
    state.postId = post.categoryId,
    state.posts = post.posts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
