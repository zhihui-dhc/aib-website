<template>
  <whitepaper-toc></whitepaper-toc>
  <div class="header-padding"></div>
  <div class="toc-padding" v-bind:class="{ 'toc-visible': tocVisible }">
    <div class="article-wrapper">
      <whitepaper-content></whitepaper-content>
    </div>
  </div>
</template>

<script>
import WhitepaperToc from '../content/WhitepaperToc.vue'
import WhitepaperContent from '../content/WhitepaperContent.vue'
import $ from 'jquery'

export default {
  components: {
    WhitepaperToc,
    WhitepaperContent
  },
  created () {
    document.title = 'Whitepaper - Cosmos'
  },
  ready () {
    let vw = $(window).width()
    if (vw < 960) {
      this.$store.dispatch('SET_WHITEPAPER_TOC_VISIBLE', false)
    }
  },
  vuex: {
    getters: {
      tocVisible: state => state.toc.whitepaper.tocVisible
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
</style>
