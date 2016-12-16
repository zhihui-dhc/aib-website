<template>
<div class="page page-narrow">
  <page-header title="Settings" type="center">
  </page-header>
  <form class="form-default" v-on:submit.prevent.default="updateSettings">
    <div class="form-header">
      <div class="subtitle">Edit your user settings here.</div>
    </div>
    <div class="form-group">
      <label for="user-signup-name">Name</label>
      <input
        v-model="newName"
        type="text"
        id="user-settings-name"
        :placeholder="namePh"
        pattern=".{1,512}" required title="1 to 512 characters"
        required>
    </div>
    <div class="form-group">
      <label for="user-signup-email">Email</label>
      <input
        v-model="newEmail"
        type="email"
        id="user-settings-email"
        :placeholder="emailPh"
        pattern=".{3,512}" required title="3 to 254 characters"
        required>
    </div>
    <div class="form-group">
      <label for="user-signup-password">New Password</label>
      <input
        v-model="newPassword"
        type="password"
        id="user-settings-password"
        placeholder="New Password"
        pattern=".{8,512}" required title="8 to 512 characters"
        required>
    </div>
    <div class="form-footer">
      <input type="submit" class="btn" value="Update Settings">
    </div>
  </form>
</div>
</template>

<script>
import PageHeader from './PageHeader'
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'page-blog-index',
  components: {
    PageHeader
  },
  computed: {
    namePh () {
      if (this.sessionUser.displayName) { return this.sessionUser.displayName }
      return 'New Name'
    },
    emailPh () {
      if (this.sessionUser.email) { return this.sessionUser.email }
      return 'New Email'
    },
    ...mapGetters([
      'sessionUser'
    ])
  },
  data () {
    return {
      newName: '',
      newEmail: '',
      newPassword: ''
    }
  },
  mounted () {
    let self = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (!user) { self.$router.push('/') }
    })
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'
</style>
