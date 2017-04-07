<template>
  <div class="ni-links">
    <a class="ni-link" :href="config.FUNDRAISER_URL"><div class="ni-link-container">
      <i class="fa fa-external-link"></i> Open Fundraiser
    </div></a>
    <router-link class="ni-link" to="/blog/fundraiser-results">
      <div class="ni-link-container">
        <i class="fa fa-hourglass-end"></i>
        Fundraiser Results
      </div>
    </router-link>
    <a class="ni-link" :href="docs.terms"><div class="ni-link-container">
      <i class="fa fa-file-pdf-o"></i>
      Contribution Terms
    </div></a>
    <a class="ni-link" href="http://slack.cosmos.network"><div class="ni-link-container">
      <i class="fa fa-slick"></i>
      Discuss on Slack
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

.ni-link-container
  text-align center
  height 2rem
  width 100%
  max-width 20rem
  display flex
  align-items center
  justify-content center
  padding 0 1rem
  i.fa
    margin-right 0.375rem
    color dim
  &:hover
    color link
    i.fa
      color link

@media screen and (min-width: 360px)
  .ni-link-container
    height 2.5rem

@media screen and (min-width: 414px)
  .ni-link
    margin-bottom 0.5rem

  .ni-link-container
    height 2.5rem
    font-weight 400
    color txt
    border 1px solid lighten(ibc, 33.333%)
    background hsla(0,0,100%,0.25)
    &:last-of-type
      margin-bottom 0

@media screen and (min-width: 768px)
  .ni-links
    display flex
    flex-flow row wrap
    width 30.5rem

  .ni-link
    padding 0.25rem
    flex 0 0 50%
    margin 0

  .ni-link-container
    text-align left
    justify-content flex-start
    i.fa
      margin-right 0.5rem
</style>
