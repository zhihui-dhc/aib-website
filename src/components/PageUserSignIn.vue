<template>
<div class="page page-narrow">
  <page-header title="Sign In"></page-header></page-header>
  <form class="form-default" v-on:submit.prevent.default="signIn">
    <div class="form-header">
      <div class="subtitle">Sign in to your account now.</div>
    </div>
    <div class="form-group">
      <label for="user-signin-email">Email</label>
      <input
        v-model="email"
        type="email"
        id="user-signin-email"
        placeholder="name@example.com"
        pattern=".{3,512}" required title="3 to 254 characters"
        required>
    </div>
    <div class="form-group">
      <label for="user-signin-password">Password</label>
      <input
        v-model="password"
        type="password"
        id="user-signin-password"
        placeholder="Password"
        pattern=".{8,512}" required title="8 to 512 characters"
        required>
    </div>
    <div class="form-footer">
      <router-link to="/reset">Forgot password?</router-link>
      <input type="submit" class="btn" value="Sign In">
    </div>
  </form>
</div>
</template>

<script>
import PageHeader from './PageHeader'
import firebase from '../scripts/firebase.js'
export default {
  name: 'page-blog-index',
  components: {
    PageHeader
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      let email = this.email
      let password = this.password
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          console.log(errorCode, errorMessage)
        })
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'
</style>
