<template>
  <div class="toc-hidden-bar" v-show="!tocVisible" @click="showToc(true)">
    <i class="material-icons">menu</i>
  </div>
  <div class="toc-wrapper" v-show="tocVisible">
    <div class="toc-header">
      <a class="toc-title" href="#page-top">Table of Contents</a>
      <i class="toc-toggle material-icons" @click="showToc(hide)">chevron_left</i>
    </div>
    <ul>
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
        this.tocVisible = value
      } else {
        Ps.destroy(document.querySelector('.toc-wrapper'))
        this.tocVisible = false
      }
    }
  },
  ready () {
    Ps.initialize(document.querySelector('.toc-wrapper'))
    watchTocClicks()
  },
  props: ['toc-visible']
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
</style>
