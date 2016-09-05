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

export default {
  components: {
    FaqToc,
    FaqContent
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
