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
    <template v-if="sessionUser.email">
      <router-link to="/settings">{{ displayName }}</router-link>
      <a @click="signOut">Sign Out</a>
    </template>
    <template v-else>
      <a @click="signUp" exact>{{ $t('siteHeader.signup') }}</a>
      <a @click="signIn">{{ $t('siteHeader.signin') }}</a>
    </template>
  </nav>
</div>
</template>

<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'
export default {
  name: 'app-header',
  computed: {
    displayName () {
      if (this.sessionUser.displayName) {
        return this.sessionUser.displayName
      } else {
        return 'Loading...'
      }
    },
    isTocPage () {
      return this.$route.path === '/whitepaper' || this.$route.path === '/faq'
    },
    ...mapGetters([
      'sessionUser'
    ])
  },
  methods: {
    signUp () {
      this.$store.commit('setSessionRequest', this.$route.path)
      this.$router.push('/signup')
    },
    signIn () {
      this.$store.commit('setSessionRequest', this.$route.path)
      this.$router.push('/signin')
    },
    signOut () {
      firebase.auth().signOut().then(function () {
      }, function (error) {
        console.error('Sign Out Error', error)
      })
    }
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
  border-bottom 1px solid bc

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
    font-size 0.875rem
    a
      display block
      padding 0 0.5*x
      color txt
      default-border-top()
      line-height 3*x
      font-weight 400

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
  display flex
  justify-content flex-end
  z-index 1
  background #fff
  border-bottom 1px solid bc
  padding 0 0.333rem
  
  a
    color txt
    font-size 0.75rem
    padding 0 0.333rem
    line-height 1.5rem
    cursor pointer
    &:hover
      color link

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
