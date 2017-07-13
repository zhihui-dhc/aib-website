<template>
  <router-link class="cover-alert" to="/hackatom">
    <span class="key">ANNOUNCEMENT:</span>
    <span class="value">
      We will be hosting HackAtom 2017 #2, a $50,000 Cosmos hackathon, in August.
    </span>
    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
  </router-link>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['config'])
  }
}
</script>

<style lang="stylus">
@require '../styles/variables.styl'

.cover-alert
  display block
  border 1px solid hsl(0,0,15%)
  padding 0.4375rem 0.75rem
  margin-bottom 2rem
  font-size 0.75rem
  position relative
  overflow hidden
  &:hover
    border-color hsl(0,0,35%)

  .ni-time-remaining
    display inline

  i.fa
    display block
    position absolute
    bottom -0.25rem
    right 0.25rem
    font-size 3rem
    line-height 1
    color hsl(0,0,25%)
    z-index -1

  .key
    text-transform uppercase
    color #fff
    font-weight 500
    color hsl(0,0,90%)
  .value
    color hsl(0,0,70%)

@media screen and (min-width:360px)
  .cover-alert
    font-size 0.875rem
    margin-bottom 2.5rem
@media screen and (min-width:400px)
  .cover-alert
    font-size 1rem
@media screen and (min-width:1200px)
  .cover-alert
    margin-bottom 3rem
</style>
