<template>
  <footer class="app-footer" v-bind:class="{ 'toc-visible': tocVisible }">
    <section-call-to-action v-if="!thisIsAFundPage"></section-call-to-action>
    <section-social-media></section-social-media>
    <div class="app-bottom">
      <div class="copyright">
        &copy; 2016 Cosmos Network Foundation
      </div>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'
import SectionCallToAction from './SectionCallToAction'
import SectionSocialMedia from './SectionSocialMedia'
export default {
  name: 'app-footer',
  components: {
    SectionCallToAction,
    SectionSocialMedia
  },
  computed: {
    ...mapGetters([
      'faqTocVisible',
      'whitepaperTocVisible'
    ]),
    tocVisible () {
      let name = this.$route.name
      let visible = false
      if (name === 'faq' && this.faqTocVisible) { visible = true }
      if (name === 'whitepaper' && this.whitepaperTocVisible) { visible = true }
      return visible
    },
    thisIsAFundPage () { this.$route.name === 'fund' },
    thisIsWhitepaper () { return this.$route.name === 'whitepaper' }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.app-footer
  position relative

.app-bottom
  background #fff
  display flex
  flex-flow column
  justify-content space-between
  padding x 0

  .copyright, .langs
    line-height 2.25*x

  .copyright
    padding 0 x
    color light
    text-align center

  .langs
    display flex
    align-items center
    padding 0 0.25*x
    justify-content center
    a
      padding 0 0.75*x
      display block
      cursor pointer
      &.active
        color txt

@media screen and (min-width: 360px)
  .app-bottom
    .copyright, .langs
      line-height 2.5*x

@media screen and (min-width: 720px)
  .app-bottom
    flex-flow row
    padding x 0.5*x

@media screen and (min-width: 960px)
  .app-footer.toc-visible
    margin-right 15*x + x

@media screen and (min-width: 1200px)
  .app-footer.toc-visible
    margin-right 20*x + x

@media screen and (min-width: 1800px)
  .app-footer.toc-visible
    margin-right 25*x + x
</style>
