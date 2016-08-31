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
import $ from 'jquery'
import Ps from 'perfect-scrollbar'

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
    },
    watchClicks () {
      let self = this
      $('.toc-wrapper a').click(function (e) {
        e.preventDefault()
        let scrollSpeed = 666
        let targetElement = $(e.target).attr('href')
        let height

        if (targetElement === '#page-top') {
          height = 0
        } else {
          height = $(targetElement).offset().top - 48 - 16
        }

        // if it's a small screen, hide the toc on click
        let vw = $(window).width()
        if (vw < 960) {
          self.showToc(false)
        }

        // scroll to the element
        $('html, body').animate({ scrollTop: height }, scrollSpeed)
      })
    }
  },
  ready () {
    Ps.initialize(document.querySelector('.toc-wrapper'))
    this.watchClicks()
  },
  props: ['toc-visible']
}
</script>

<style lang="stylus" scoped>
@import '../../styles/variables.styl'
</style>
