<template>
<header class="app-header">
  <div class="container">

  <div class="header-item" @click="toggleMenuApp" v-if="!desktop">
    <i v-if="!activeMenuApp" class="fa fa-bars"></i>
    <i v-else class="fa fa-times"></i>
  </div>

  <router-link to="/" class="header-item">
    <img src="../assets/images/cosmos_logo_m.png" alt="Cosmos Logo">
  </router-link>

  <menu class="menu-popup menu-app" v-if="activeMenuApp || desktop">
    <nav class="nav-app">
      <router-link to="/blog" @click.native="closeMenus" exact>{{ $t('siteHeader.blog') }}</router-link>
      <router-link to="/plan" @click.native="closeMenus" exact>{{ $t('siteHeader.plan') }}</router-link>
      <router-link to="/faq" @click.native="closeMenus" exact>{{ $t('siteHeader.faq') }}</router-link>
      <router-link to="/whitepaper" @click.native="closeMenus" exact>{{ $t('siteHeader.whitepaper') }}</router-link>
      <router-link to="/about" @click.native="closeMenus" exact>{{ $t('siteHeader.about') }}</router-link>
    </nav>
    <nav>
      <a href="https://github.com/cosmos/cosmos">
        <i class="fa fa-github"></i>
        <span class="label">GitHub</span>
      </a>
    </nav>
  </menu>

  <div class="header-item header-item-alert" @click="toggleMenuFundraiser">
    <i v-if="!activeMenuUser" class="fa fa-bell-o">
      <span class="alert">1</span>
    </i>
    <i v-else class="fa fa-times"></i>
    <span class="label" v-if="desktop">Fundraiser</span>
  </div>

  <menu-fundraiser
    v-if="activeMenuUser"
    @click="toggleMenuFundraiser">
  </menu-fundraiser>

  </div>
</header>
</template>

<script>
import { mapGetters } from 'vuex'
import disableScroll from 'disable-scroll'
import moment from 'moment'
import MenuFundraiser from './MenuFundraiser'
export default {
  name: 'app-header',
  components: {
    MenuFundraiser
  },
  computed: {
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
    toggleMenuFundraiser () {
      this.activeMenuUser = !this.activeMenuUser
      if (this.activeMenuUser) disableScroll.on()
      else disableScroll.off()
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

  background alpha(#fff, 95%)
  backdrop-filter blur(0.125rem)
  shadow()

  .container
    max-width 1024px
    margin 0 auto
    display flex
    flex-flow row wrap
    justify-content space-between

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
      position relative
    i.fa + .label
      margin-left 0.5rem
    i.fa, .label
      color txt

    .label
      user-select none

    img
      display block
      height 1.125rem
      width auto

    &.header-item-alert
      .alert
        df()
        font-size 0.5rem
        font-weight 600
        line-height 1
        color #fff
        display flex
        align-items center
        justify-content center

        width 0.666rem
        height 0.666rem
        border-radius 0.333rem
        background #f00
        position absolute
        bottom -0.3rem
        right -0.3rem
    &:hover
      i.fa, .label
        color link

  #nav-fundraiser
    display flex
    justify-content space-between
    align-items center
    span
      padding 0 0.375rem
      border 1px solid link
      border-radius 0.125rem
      font-size 0.875rem
      height 1.5rem
      display flex
      align-items center
      color link

    &.soon
      cursor not-allowed
      color light

  .menu-app
    nav
      a,
        display flex
        align-items center
        cursor pointer
        i.fa
          margin-right 0.25rem
        img
          height 1rem
          margin-right 0.1rem

  .menu-popup
    z-index 100000
    user-select none
    nav
      span.desc a
        font-weight 500
        color link
        &:hover
          text-decoration underline

@media screen and (max-width:1023px)
  .menu-popup
    height 100vh
    position fixed
    top 3rem
    left 0
    bottom 0
    width 100vw

    background c-app-fg
    user-select none

    nav
      display flex
      flex-flow column
      padding 1.5rem 3rem

      a, span.desc
        padding 0.75rem 0
        color txt
        border-bottom 1px solid bc
      a
        &:last-of-type
          border-bottom none
        &:hover
          color link

@media screen and (min-width: 1024px)
  .menu-app
    display flex
    padding 0 1rem
    .container
      display flex
    nav
      display flex
      flex-flow row
      align-items center
      a
        padding 0 1rem
        color txt
        line-height 3rem
        &:hover
          color link
        &.router-link-active
          background linear-gradient(top, hsl(0,0,96%), hsl(0,0,98%))
          cursor default
          &:hover
            color txt

  .menu-fundraiser
    position fixed
    top 0
    left 0
    background transparent
    width 100vw
    height 100vh

    .container
      position fixed
      top 3rem
      right 0
      background c-app-fg
      width 20rem
      shadow()

    nav
      display flex
      flex-flow column
      padding 1.5rem 3rem

      a, span.desc
        padding 0.75rem 0
        color txt
        border-bottom 1px solid bc

      a
        &:last-of-type
          border-bottom none
        &:hover
          color link
</style>
