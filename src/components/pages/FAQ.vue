<template>
  <faq-toc></faq-toc>
  <div class="header-padding"></div>
  <div class="toc-padding" v-bind:class="{ 'toc-visible': tocVisible }">
    <div class="article-wrapper">
      <faq-content></faq-content>
    </div>
  </div>
</template>

<script>
import FaqToc from '../content/FaqToc.vue'
import FaqContent from '../content/FaqContent.vue'
import $ from 'jquery'

export default {
  components: {
    FaqToc,
    FaqContent
  },
  created () {
    document.title = 'FAQ - Cosmos'
  },
  ready () {
    let vw = $(window).width()
    if (vw < 960) {
      this.$store.dispatch('SET_FAQ_TOC_VISIBLE', false)
    }
  },
  vuex: {
    getters: {
      tocVisible: state => state.toc.faq.tocVisible
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
</style>
