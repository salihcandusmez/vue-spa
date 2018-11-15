import axios from 'axios'

axios.defaults.baseURL = 'https://api.fullstackweekly.com'

const appService = {
  getPosts (postId) {
    return new Promise ((resolve) => {
      axios.get(`/wp-json/wp/v2/posts?categories=${postId}&per_page=6`)
      .then(res => {
        resolve(res.data)
      })
    })
  },
  login (credentials) {
    return new Promise ((resolve, reject) => {
      axios.post('/services/auth.php', credentials)
      .then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }
}

export default appService
