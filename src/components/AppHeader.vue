<template>
<div>
  <header class="app-header">
    <router-link to="/" class="nav-home" exact>
      <img src="../assets/images/cosmos_logo_m.png" alt="Cosmos Logo">
    </router-link>
    <nav class="app-nav">
      <router-link to="/blog" exact>{{ $t('siteHeader.blog') }}</router-link>
      <router-link to="/plan">{{ $t('siteHeader.plan') }}</router-link>
      <router-link to="/faq">{{ $t('siteHeader.faq') }}</router-link>
      <router-link to="/whitepaper">
        <span class="short">{{ $t('siteHeader.wp') }}</span>
        <span class="long">{{ $t('siteHeader.whitepaper') }}</span>
      </router-link>
      <a class="nav-github" href="https://github.com/cosmos/cosmos">
        <i class="fa fa-github"></i>
        <span class="label">GitHub</span>
      </a>
    </nav>
  </header>
  <nav v-if="!isTocPage" class="user-nav">
    <template v-if="user.email">
      <router-link to="/profile">{{ user.email }}</router-link>
      <a @click="signOut">Sign Out</a>
    </template>
    <template v-else>
      <router-link to="/signup" exact>{{ $t('siteHeader.signup') }}</router-link>
      <router-link to="/signin">{{ $t('siteHeader.signin') }}</router-link>
    </template>
  </nav>
</div>
</template>

<script>
import firebase from '../scripts/firebase.js'
export default {
  name: 'app-header',
  computed: {
    isTocPage () {
      return this.$route.path === '/whitepaper' || this.$route.path === '/faq'
    }
  },
  data () {
    return {
      user: {
        name: '',
        email: '',
        photoUrl: '',
        uid: ''
      }
    }
  },
  methods: {
    clearUser () {
      this.user = {
        name: '',
        email: '',
        photoUrl: '',
        uid: ''
      }
    },
    getUser () {
      let user = firebase.auth.currentUser

      if (user != null) {
        this.user.name = user.displayName
        this.user.email = user.email
        this.user.photoUrl = user.photoURL
        this.user.uid = user.uid
      }
    },
    signOut () {
      let self = this
      firebase.auth.signOut().then(function () {
        self.clearUser()
        console.log('Signed Out')
      }, function (error) {
        console.error('Sign Out Error', error)
      })
    }
  },
  mounted () {
    let self = this
    firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
        self.getUser()
      } else {
        // console.log('no user signed in')
      }
    })
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.app-header
  position fixed
  top 0
  left 0
  z-index 100
  width 100vw
  display flex
  flex-flow row wrap
  background #fff
  background hsla(0,0,100%,0.95)
  box-shadow hsla(0,0,0,0.04) 0 0.2rem 0.3rem

  a.nav-home
    height 3*x
    padding-left x
    display flex
    align-items center

    img
      display block
      height x
      width auto

  .app-nav
    flex 1
    display flex
    justify-content flex-end
    default-border-top()
    padding-right 0.5rem
    font-size 0.75rem
    a
      display block
      padding 0 0.5*x
      color txt
      default-border-top()
      line-height 3*x

      .short
        display inline
      .long
        display none
      &.nav-github
        display none
      &:hover
        color link
      &.router-link-active
        color light

.user-nav
  position absolute
  top 3rem
  left 0
  width 100vw
  background hsl(0,0,97%)
  display flex
  justify-content flex-end

  box-shadow hsla(0,0,0,0.04) 0 0.2rem 0.3rem
  z-index 1
  
  a
    color txt
    font-size 0.75rem
    padding 0 0.5rem
    line-height 1.5rem
    border-right 1px solid bc
    cursor pointer
    &:hover
      color link
    &:last-of-type
      border-right none

@media screen and (min-width: 360px)
  .app-header
    a.nav-home img
      height x*1.125
    .app-nav
      a
        font-size x*0.95

@media screen and (min-width: 400px)
  .app-header
    nav
      a
        font-size x
        .short
          display none
        .long
          display inline

@media screen and (min-width: 480px)
  .app-header
    .app-nav
      padding-left 0.75*x
      a
        padding 0 0.75*x
        &.nav-github
          display block

@media screen and (min-width: 640px)
  .app-header
    .app-nav
      a
        padding 0 1.5*x

@media screen and (min-width: 720px)
  .app-header
    .app-nav
      a
        i.fa
          margin-right 0.25*x
        .label
          display inline
</style>
