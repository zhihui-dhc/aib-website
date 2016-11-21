<template>
  <div>
  <div class="header-padding"></div>
  <div class="article-wrapper">
    <plan-content></plan-content>
  </div>
  </div>
</template>

<script>
import PlanContent from '../content/PlanContent.vue'

export default {
  components: {
    PlanContent
  },
  created () {
    document.title = 'Plan - Cosmos'
  },
  mounted () {
    this.$store.dispatch('SET_PLAN_TOC_VISIBLE', false)
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
