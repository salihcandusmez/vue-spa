<template>
  <section>
    <div class="jumbotron">
      <h1 class="display-4">Lets Login !</h1>
      <p class="lead" v-if="isAuthenticated">
        Hello Authenticated
        <button v-on:click="logout()" class="btn btn-primary">
          Logout
        </button>
      </p>
      <form v-else>
        <div class="form-group">
          <label for="exampleInputEmail1">
            Username
          </label>
          <input v-model="username" type="text" class="form-control">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">
            Password
          </label>
          <input v-model="password" type="password" class="form-control">
        </div>
        <button v-on:click="login()" type="button" class="btn btn-primary btn-lg">
          Login
        </button>
      </form>
    </div>
  </section>
</template>

<script>
import appService from '../services/app.service.js'
export default {
  data () {
    return {
      username: '',
      password: '',
      isAuthenticated: false
    }
  },
  methods: {
    login () {
      appService.login({
        username: this.username,
        password: this.password
       }).then(res => {
        window.localStorage.setItem('token', res.token)
        window.localStorage.setItem('tokenExpiration', res.expiration)
        this.isAuthenticated = true
        this.username = ''
        this.password = ''
       }).catch(() => {
         window.alert('Could not login!')
       })
    },
    logout () {
      window.localStorage.setItem('token', null)
      window.localStorage.setItem('tokenExpiration', null)
      this.isAuthenticated = false
    }
  },
  created () {
    let expiration = window.localStorage.getItem('tokenExpiration')
    let unixTimestamp = new Date().getTime() / 1000
    if (expiration !== null && parseInt(expiration) - unixTimestamp > 0) {
      this.isAuthenticated = true
    }
  }
}
</script>
