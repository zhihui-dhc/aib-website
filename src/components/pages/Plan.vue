<template>
  <plan-toc></plan-toc>
  <div class="header-padding"></div>
  <div class="toc-padding" v-bind:class="{ 'toc-visible': tocVisible }">
    <div class="article-wrapper">
      <plan-content></plan-content>
    </div>
  </div>
</template>

<script>
import PlanToc from '../content/PlanToc.vue'
import PlanContent from '../content/PlanContent.vue'
import $ from 'jquery'

export default {
  components: {
    PlanToc,
    PlanContent
  },
  created () {
    document.title = 'Crowdfund Plan - Cosmos'
  },
  ready () {
    let vw = $(window).width()
    if (vw < 960) {
      this.$store.dispatch('SET_PLAN_TOC_VISIBLE', false)
    }
  },
  vuex: {
    getters: {
      tocVisible: state => state.toc.plan.tocVisible
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
</style>
