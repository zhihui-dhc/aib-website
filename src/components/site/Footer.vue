<template>
  <footer id="site-footer" v-bind:class="{ 'toc-visible': tocVisible }">
    <section-call-to-action v-if="!isThisAFundPage"></section-call-to-action>
    <section-social-media></section-social-media>
    <div id="site-bottom">
      <p>&copy; 2016 Cosmos Network Foundation</p>
    </div>
  </footer>
</template>

<script>
import SectionCallToAction from '../sections/CallToAction.vue'
import SectionSocialMedia from '../sections/SocialMedia.vue'

export default {
  computed: {
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
  },
  components: {
    SectionCallToAction,
    SectionSocialMedia
  },
  vuex: {
    getters: {
      faqTocVisible: state => state.toc.faq.tocVisible,
      planTocVisible: state => state.toc.plan.tocVisible,
      whitepaperTocVisible: state => state.toc.whitepaper.tocVisible
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'

#site-footer
  position relative

#site-bottom
  background #fff
  height 3*x

  p
    padding 0 x
    line-height 3*x
    text-align center
    color light

@media screen and (min-width: 960px)
  #site-footer.toc-visible
    margin-right 15*x + x

@media screen and (min-width: 1200px)
  #site-footer.toc-visible
    margin-right 20*x + x

@media screen and (min-width: 1800px)
  #site-footer.toc-visible
    margin-right 25*x + x
</style>
