<template>
  <div class="header-padding"></div>
  <div class="master-detail-wrapper" v-bind:class="{ 'toc-visible': tocVisible }">
    <div class="article-wrapper">
      <whitepaper-toc toc-visible="tocVisible"></whitepaper-toc>
      <whitepaper-content></whitepaper-content>
    </div>
  </div>
</template>

<script>
import WhitepaperToc from '../content/WhitepaperToc.vue'
import WhitepaperContent from '../content/WhitepaperContent.vue'

export default {
  components: {
    WhitepaperToc,
    WhitepaperContent
  },
  data () {
    return {
      tocVisible: true
    }
  },
  methods: {
    toggleToc () {
      this.tocVisible = !this.tocVisible
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
</style>
