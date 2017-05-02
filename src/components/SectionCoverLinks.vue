<template>
  <div class="ni-links">
    <router-link class="ni-link" to="/blog/fundraiser-results">
      <div class="ni-link-container">
        <i class="fa fa-hourglass-end"></i>
        Fundraiser Results
      </div>
    </router-link>
    <a class="ni-link" href="http://slack.cosmos.network"><div class="ni-link-container">
      <i class="fa fa-slick"></i>
      Chat on Slack
    </div></a>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['docs', 'config'])
  }
}
</script>
<style lang="stylus">
@require '../styles/variables.styl'

.ni-link
  display block
  cursor pointer
  margin-bottom 0.5rem
  &:last-of-type
    margin-bottom 0

.ni-link-container
  text-align center
  display flex
  align-items center
  justify-content center
  padding 0 1.5rem

  height 2.5rem
  font-weight 400
  color txt
  background hsla(0,0,100%,0.5)
  i.fa
    margin-right 0.375rem
    color dim
  &:hover
    color link
    i.fa
      color link

@media screen and (min-width: 768px)
  .ni-link
    padding 0.25rem
    margin 0

  .ni-link-container
    i.fa
      margin-right 0.5rem
</style>
