<template>
  <section>
    <div class="jumbotron">
      <h1 class="display-4">Lets Login !</h1>
      <p class="lead" v-if="isAuthenticated">
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
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"])
  },
  methods: {
    ...mapActions({
      logout: "logout"
    }),
    login() {
      this.$store
        .dispatch("login", { username: this.username, password: this.password })
        .then(() => {
          this.username = "";
          this.password = "";
        });
    }
  }
};
</script>