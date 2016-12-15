<template>
<div class="page page-narrow">
  <page-header title="Sign Up" type="center">
  </page-header>
  <form class="form-default" v-on:submit.prevent.default="signUp">
    <div class="form-header">
      <div class="subtitle">Signing up enables commenting and gives you a head start on the fundraising event.</div>
    </div>
    <div class="form-group">
      <label for="user-signup-name">Name</label>
      <input
        v-model="name"
        type="text"
        id="user-signup-name"
        placeholder="Name"
        pattern=".{1,512}" required title="1 to 512 characters"
        required>
    </div>
    <div class="form-group">
      <label for="user-signup-email">Email</label>
      <input
        v-model="email"
        type="email"
        id="user-signup-email"
        placeholder="name@example.com"
        pattern=".{3,512}" required title="3 to 254 characters"
        required>
    </div>
    <div class="form-group">
      <label for="user-signup-password">Password</label>
      <input
        v-model="password"
        type="password"
        id="user-signup-password"
        placeholder="Password"
        pattern=".{8,512}" required title="8 to 512 characters"
        required>
    </div>
    <div class="form-footer">
      <input type="submit" class="btn" value="Sign Up">
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
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    signUp () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .catch(function (error) {
          // Handle Errors here.
          let errorCode = error.code
          let errorMessage = error.message
          console.log(errorCode, errorMessage)
        })

      // back to the homepage
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'
</style>
