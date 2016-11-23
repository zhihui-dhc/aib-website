<template>
  <div>
  <page-whitepaper-nav></page-whitepaper-nav>
  <div class="header-padding"></div>
  <div class="toc-padding" v-bind:class="{ 'toc-visible': whitepaperTocVisible }">
    <page-whitepaper-body></page-whitepaper-body>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageWhitepaperNav from './PageWhitepaperNav'
import PageWhitepaperBody from './PageWhitepaperBody'

export default {
  components: {
    PageWhitepaperNav,
    PageWhitepaperBody
  },
  computed: {
    ...mapGetters([
      'whitepaperTocVisible'
    ])
  },
  head: {
    title () {
      return {
        inner: this.$t('siteHeader.whitepaper'),
        separator: '-',
        complement: 'Cosmos - ' + this.$t('site.networkOfBlockchains')
      }
    }
  },
  mounted () {
    if (document.documentElement.clientWidth < 960) {
      this.$store.commit('setWhitepaperTocVisible', false)
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'
</style>
