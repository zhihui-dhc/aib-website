<template>
  <div class="toc-hidden-bar" v-show="!tocVisible" @click="showToc(true)">
    <i class="material-icons">menu</i>
  </div>
  <div class="mobile-only">
    <div class="toc-hidden-bar" v-show="tocVisible" @click="showToc(false)">
      <i class="material-icons">close</i>
    </div>
  </div>
  <div class="toc-wrapper" v-show="tocVisible">
    <div class="toc-header">
      <div class="toc-title">Table of Contents</div>
      <i class="toc-toggle material-icons desktop-only" @click="showToc(hide)">chevron_left</i>
      <i class="toc-toggle material-icons mobile-only" @click="showToc(hide)">close</i>
    </div>
    <ul>
      <li class="mobile-only"><a href="#page-top">Crowdfund Plan</a>
      <li><a href="#funding">Funding</a>
        <ul>
          <li><a href="#phase-0-the-prefund">Phase 0: the Prefund</a></li>
          <li><a href="#phase-1-the-crowdfund">Phase 1: the Crowdfund</a></li>
          <li><a href="#funding-milestones">Funding Milestones</a></li>
        </ul>
      </li>
      <li><a href="#definitions">Definitions</a></li>
      <li><a href="#timeline">Timeline</a></li>
    </ul>
  </div>
</template>

<script>
import Ps from 'perfect-scrollbar'
import watchTocClicks from '../../scripts/watchTocClicks.js'

export default {
  methods: {
    showToc (value) {
      if (value === true) {
        Ps.initialize(document.querySelector('.toc-wrapper'))
        this.$store.dispatch('SET_PLAN_TOC_VISIBLE', true)
      } else {
        Ps.destroy(document.querySelector('.toc-wrapper'))
        this.$store.dispatch('SET_PLAN_TOC_VISIBLE', false)
      }
    }
  },
  ready () {
    Ps.initialize(document.querySelector('.toc-wrapper'))
    watchTocClicks(this.showToc)
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
