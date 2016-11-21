<template>
  <div>
  <whitepaper-toc></whitepaper-toc>
  <div class="header-padding"></div>
  <div class="toc-padding" v-bind:class="{ 'toc-visible': whitepaperTocVisible }">
    <div class="article-wrapper">
      <whitepaper-content></whitepaper-content>
    </div>
  </div>
  </div>
</template>

<script>
import WhitepaperToc from '../content/WhitepaperToc.vue'
import WhitepaperContent from '../content/WhitepaperContent.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    WhitepaperToc,
    WhitepaperContent
  },
  computed: {
    ...mapGetters([
      'whitepaperTocVisible'
    ])
  },
  head: {
    title: {
      inner: 'Whitepaper'
    }
  },
  mounted () {
    if (document.documentElement.clientWidth < 960) {
      this.$store.dispatch('SET_WHITEPAPER_TOC_VISIBLE', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
</style>
