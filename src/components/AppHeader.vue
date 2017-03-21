<template>
<header class="app-header">

  <div class="header-item" @click="toggleMenuApp" v-if="!desktop">
    <i v-if="!activeMenuApp" class="fa fa-bars"></i>
    <i v-else class="fa fa-times"></i>
  </div>

  <a @click="goto('/')" class="header-item">
    <img src="../assets/images/cosmos_logo_m.png" alt="Cosmos Logo">
  </a>

  <menu class="menu-popup menu-app" v-if="activeMenuApp || desktop">
    <nav class="nav-app">
      <a id="nav-fundraiser" class="live" v-if="fundraiseStarted"
        :href="config.SALE_URL">
        Fundraiser <span>Live</span>
      </a>
      <a id="nav-fundraiser" class="soon" v-else>
        Fundraiser <span class="soon">{{ fundraiseStartDate }}</span>
      </a>
      <a @click="goto('/blog')">{{ $t('siteHeader.blog') }}</a>
      <a @click="goto('/plan')">{{ $t('siteHeader.plan') }}</a>
      <a @click="goto('/faq')">{{ $t('siteHeader.faq') }}</a>
      <a @click="goto('/whitepaper')">{{ $t('siteHeader.whitepaper') }}</a>
      <a @click="goto('/team')">{{ $t('siteHeader.team') }}</a>
    </nav>
    <nav>
      <a href="https://github.com/cosmos/cosmos">
        <i class="fa fa-github"></i>
        <span class="label">GitHub</span>
      </a>
      <!--
      <a href="https://tendermint.com">
        <img src="../assets/images/tendermint-logo-tiny.png">
        <span class="label">Tendermint</span>
      </a>
      -->
    </nav>
  </menu>

  <div class="header-item" @click="toggleMenuUser">
    <i v-if="!activeMenuUser && !sessionUser.email" class="fa fa-user-o"></i>
    <i v-else-if="!activeMenuUser &&  sessionUser.email" class="fa fa-user"></i>
    <i v-else class="fa fa-times"></i>

    <template v-if="desktop">
      <div v-if="sessionUser.email">{{ sessionUser.displayName }}</div>
      <div v-else>Account</div>
    </template>
  </div>

  <menu class="menu-popup menu-user" v-if="activeMenuUser">
    <nav class="nav-user">
      <template v-if="sessionUser.email">
        <a @click="goto('/settings')">Settings</a>
        <a @click="signOut">Sign Out</a>
      </template>
      <template v-else>
        <a @click="signUp" exact>{{ $t('siteHeader.signup') }}</a>
        <a @click="signIn">{{ $t('siteHeader.signin') }}</a>
      </template>
    </nav>
  </menu>
</header>
</template>

<script>
import { mapGetters } from 'vuex'
import disableScroll from 'disable-scroll'
import firebase from 'firebase'
import moment from 'moment'
export default {
  name: 'app-header',
  computed: {
    fundraiseStartDate () {
      let local = moment(moment.utc(this.config.START_DATETIME)).local()
      return moment(local).format('MMMM DD')
    },
    fundraiseStarted () {
      return Date.now() >= moment(this.config.START_DATETIME).valueOf()
    },
    displayName () {
      if (this.sessionUser.displayName) {
        return this.sessionUser.displayName
      } else {
        return 'Loading...'
      }
    },
    isTocPage () {
      return this.$route.name === 'whitepaper' || this.$route.name === 'whitepaper-localized' || this.$route.name === 'faq' || this.$route.name === 'faq-localized' || this.$route.name === 'plan' || this.$route.name === 'plan-localized'
    },
    ...mapGetters(['config', 'sessionUser'])
  },
  data () {
    return {
      activeMenuApp: false,
      activeMenuUser: false,
      desktop: false
    }
  },
  methods: {
    closeMenus () {
      this.activeMenuApp = false
      this.activeMenuUser = false
      disableScroll.off()
    },
    goto (route) {
      this.closeMenus()
      // console.log('going to', route)
      this.$router.push(route)
      return
    },
    toggleMenuApp () {
      this.activeMenuApp = !this.activeMenuApp
      if (this.activeMenuApp) disableScroll.on()
      else disableScroll.off()
    },
    toggleMenuUser () {
      this.activeMenuUser = !this.activeMenuUser
      if (this.activeMenuUser) disableScroll.on()
      else disableScroll.off()
    },
    signUp () {
      this.closeMenus()
      this.$store.commit('setSessionRequest', this.$route.path)
      this.$router.push('/signup')
    },
    signIn () {
      this.closeMenus()
      this.$store.commit('setSessionRequest', this.$route.path)
      this.$router.push('/signin')
    },
    signOut () {
      this.closeMenus()
      firebase.auth().signOut().then(function () {
      }, function (error) {
        console.error('Sign Out Error', error)
      })
    },
    watchWindowSize () {
      let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
      if (w >= 1024) {
        this.closeMenus()
        this.desktop = true
        return
      }
      this.desktop = false
      return
    }
  },
  mounted () {
    this.watchWindowSize()
    window.onresize = this.watchWindowSize
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
  width 100%

  display flex
  flex-flow row wrap
  justify-content space-between

  background alpha(#fff, 95%)
  backdrop-filter blur(0.125rem)
  shadow()

  .header-item
    height 3*x
    display flex
    align-items center
    padding 0 1rem

    color txt
    cursor pointer
    &:hover
      color link

    i.fa
      width 1rem
      text-align center
    i.fa + div
      margin-left 0.25rem

    img
      display block
      height 1.125rem
      width auto

  .menu-app
    nav
      a
        display flex
        align-items center
        cursor pointer
        i.fa
          margin-right 0.25rem
        img
          height 1rem
          margin-right 0.1rem
        &#nav-fundraiser
          position relative
          span
            padding 0 0.25rem

            border 1px solid bc
            border-radius 0.125rem

            font-size 0.666rem
            height 1.25rem

            display flex
            align-items center
            color txt
          &.soon
            color light
            cursor not-allowed
          &.live
            span
              color hsl(120,100%,35%)
              border-color hsl(120,35%,65%)

@media screen and (max-width:1023px)
  .menu-popup
    height 100vh
    position fixed
    top 3rem
    left 0
    bottom 0
    width 100vw
    z-index 100000

    background c-app-fg
    user-select none

    nav
      display flex
      flex-flow column
      padding 1.5rem 3rem

      a
        padding 0.75rem 0
        color txt
        border-bottom 1px solid bc
        &:last-of-type
          border-bottom none
        &:hover
          color link

        &#nav-fundraiser
          position relative
          span
            display block
            position absolute
            top 50%
            right 0

            margin-top -0.625rem

@media screen and (min-width: 1024px)
  .menu-app
    display flex
    padding 0 1rem
    nav
      display flex
      flex-flow row
      align-items center
      a
        padding 0 1rem
        color txt
        &:hover
          color link
        &#nav-fundraiser
          span
            display inline-block
            margin-left 0.375rem

  .menu-user
    position fixed
    top 3rem
    right 0
    z-index 100000
    background c-app-fg
    user-select none

    border-left 1px solid bc
    border-bottom 1px solid bc
    width 20rem

    nav
      display flex
      flex-flow column
      padding 1.5rem 3rem

      a
        padding 0.75rem 0
        color txt
        border-bottom 1px solid bc
        &:last-of-type
          border-bottom none
        &:hover
          color link

</style>
