<template>
  <div>
    <page-faq-nav></page-faq-nav>
    <div class="header-padding"></div>
    <div class="toc-padding" v-bind:class="{ 'toc-visible': faqTocVisible }">
    <page-faq-body></page-faq-body>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageFaqNav from './PageFaqNav'
import PageFaqBody from './PageFaqBody'

export default {
  name: 'page-faq',
  components: {
    PageFaqNav,
    PageFaqBody
  },
  computed: {
    ...mapGetters([
      'faqTocVisible'
    ])
  },
  head: {
    title () {
      return {
        inner: this.$t('siteHeader.faq'),
        separator: '-',
        complement: 'Cosmos - ' + this.$t('site.networkOfBlockchains')
      }
    }
  },
  mounted () {
    if (document.documentElement.clientWidth < 960) {
      this.$store.commit('setFaqTocVisible', false)
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'
</style>
