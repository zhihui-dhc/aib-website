<template>
  <div>
  <faq-toc></faq-toc>
  <div class="header-padding"></div>
  <div class="toc-padding" v-bind:class="{ 'toc-visible': faqTocVisible }">
    <div class="article-wrapper">
      <faq-content></faq-content>
    </div>
  </div>
  </div>
</template>

<script>
import FaqToc from '../content/FaqToc.vue'
import FaqContent from '../content/FaqContent.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    FaqToc,
    FaqContent
  },
  computed: {
    ...mapGetters([
      'faqTocVisible'
    ])
  },
  head: {
    title: {
      inner: 'FAQ'
    }
  },
  mounted () {
    if (document.documentElement.clientWidth < 960) {
      this.$store.dispatch('SET_FAQ_TOC_VISIBLE', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
</style>
