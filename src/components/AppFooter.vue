<template>
  <footer class="app-footer" v-bind:class="{ 'toc-visible': tocVisible }">
    <section-call-to-action v-if="!isThisAFundPage"></section-call-to-action>
    <section-social-media></section-social-media>
    <div class="app-bottom">
      <p>&copy; 2016 Cosmos Network Foundation</p>
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
      'planTocVisible',
      'whitepaperTocVisible'
    ]),
    tocVisible () {
      let path = this.$route.path.replace('/', '')
      let visible = false
      if (path === 'faq' && this.faqTocVisible) {
        visible = true
      }
      if (path === 'plan' && this.planTocVisible) {
        visible = true
      }
      if (path === 'whitepaper' && this.whitepaperTocVisible) {
        visible = true
      }
      return visible
    },
    isThisAFundPage () {
      let path = this.$route.path.replace('/', '')
      if (path === 'fund') {
        return true
      }
      return false
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.app-footer
  position relative

.app-bottom
  background #fff
  height 3*x

  p
    padding 0 x
    line-height 3*x
    text-align center
    color light

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
