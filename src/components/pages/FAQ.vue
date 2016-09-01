<template>
  <div class="header-padding"></div>
  <div class="master-detail-wrapper" v-bind:class="{ 'toc-visible': tocVisible }">
    <div class="article-wrapper">
      <faq-toc :toc-visible.sync="tocVisible"></faq-toc>
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
  data () {
    return {
      tocVisible: true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
</style>
