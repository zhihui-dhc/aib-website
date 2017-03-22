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
      <a @click="goto('/blog')">{{ $t('siteHeader.blog') }}</a>
      <a @click="goto('/plan')">{{ $t('siteHeader.plan') }}</a>
      <a @click="goto('/faq')">{{ $t('siteHeader.faq') }}</a>
      <a @click="goto('/whitepaper')">{{ $t('siteHeader.whitepaper') }}</a>
      <a @click="goto('/about')">{{ $t('siteHeader.about') }}</a>
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
    <div v-if="desktop">Fundraiser</div>
  </div>

  <menu class="menu-popup menu-fundraiser" v-if="activeMenuUser">
    <nav class="nav-user">
      <a id="nav-fundraiser" class="live" v-if="fundraiseStarted"
        :href="config.SALE_URL">
        Fundraiser <span>Live</span>
      </a>
      <a id="nav-fundraiser" class="soon" v-else>
        Fundraiser
        <span class="soon"><time-left :date="startDate"></time-left></span>
      </a>
      <span class="desc">
        The Cosmos fundraiser will begin on <a href="https://www.worldtimebuddy.com/?qm=1&lid=5391959,2657908,2643743,1835848&h=5391959&date=2017-3-31&sln=6-7">{{ pdtStartDate }}</a>. Check back soon!
      </span>
      <a href="http://slack.cosmos.network">
         Discuss on <i class="fa fa-slack"></i> Slack
      </a>
    </nav>
  </menu>
</header>
</template>

<script>
import { mapGetters } from 'vuex'
import disableScroll from 'disable-scroll'
import moment from 'moment'
import TimeLeft from './TimeLeft'
export default {
  name: 'app-header',
  components: {
    TimeLeft
  },
  computed: {
    pdtStartDate () {
      let utc = moment.utc(this.config.START_DATETIME)
      let pdt = moment(utc).tz(this.config.TIMEZONE)
      return pdt.format('LLL z')
    },
    localStartDate () {
      let utc = moment.utc(this.config.START_DATETIME)
      let local = moment(utc).local()
      return moment(local).format('LLL z')
    },
    announcedDate () {
      return moment(moment.utc(this.config.ANNOUNCE_DATETIME)).local()
    },
    startDate () {
      return moment(moment.utc(this.config.START_DATETIME)).local()
    },
    endDate () {
      if (this.fundraiseStarted) {
        let utcEndDate = moment.utc(this.config.START_DATETIME)
          .add(this.config.ENDS_AFTER, 'days').valueOf()
        return moment(utcEndDate).local()
      } else {
        return this.startDate
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
      margin-left 0.5rem
    i.fa, div
      color txt

    img
      display block
      height 1.125rem
      width auto
    &.header-item-alert
      i.fa
        position relative
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
    nav
      span.desc a
        font-weight 500
        color link

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
    nav
      display flex
      flex-flow row
      align-items center
      a
        padding 0 1rem
        color txt
        &:hover
          color link

  .menu-fundraiser
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

      span.desc
        border-top 1px solid bc

      a, span.desc
        padding 0.75rem 0
        color txt
        border-bottom 1px solid bc
        &:last-of-type
          border-bottom none

      a:hover
        color link
</style>
