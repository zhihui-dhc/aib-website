<template>
  <menu class="menu-popup menu-fundraiser">
    <div class="container">
      <div class="bounds">
        <nav>
          <menu-fundraiser-links></menu-fundraiser-links>
          <p>The Cosmos fundraiser finished on {{ pdtEndDate }}.</p>
        </nav>
      </div>
    </div>
  </menu>
</template>

<script>
import { mapGetters } from 'vuex'
import MenuFundraiserLinks from './MenuFundraiserLinks'
export default {
  name: 'menu-fundraiser',
  components: {
    MenuFundraiserLinks
  },
  computed: {
    ...mapGetters(['config'])
  },
  data: () => ({
    pdtEndDate: 'April 6, 2017 6:28AM PDT'
  }),
  methods: {
    gotoFundraiser () {
      window.location.href = this.config.FUNDRAISER_URL
    }
  },
  props: ['status']
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

@media screen and (min-width: 1024px)
  .menu-fundraiser
    position fixed
    top 0
    left 0
    width 100vw
    height 100vh

    .container
      width 1024px
      height 100vh
      position relative
      margin 0 auto

    .bounds
      position absolute
      top 3rem
      right 0
      background c-app-fg
      width 20rem
      shadow()

    nav
      display flex
      flex-flow column
      padding 1.5rem 3rem
      > p
        padding 0.75rem 0
        color txt
        .ni-time-left
          display inline
          font-weight bold
</style>
