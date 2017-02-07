<template>
  <div class="page-whitepaper-nav mobile-only">
    <div
      class="toc-hidden-bar"
      v-show="!whitepaperTocVisible"
      @click="showToc(true)">
      <i class="fa fa-bars"></i>
    </div>
    <div
      class="toc-hidden-bar"
      v-show="whitepaperTocVisible"
      @click="showToc(false)">
      <i class="fa fa-times"></i>
    </div>
  </div>
</template>

<script>
import Ps from 'perfect-scrollbar'
import watchTocClicks from '../scripts/watchTocClicks.js'
import inViewport from '../scripts/inViewport.js'
import visibleTocActivate from '../scripts/visibleTocActivate.js'
import percentageScrolling from '../scripts/percentageScrolling.js'
import { mapGetters } from 'vuex'
export default {
  name: 'page-whitepaper-nav',
  computed: {
    ...mapGetters([
      'whitepaperTocVisible',
      'whitepaperElementsVisible'
    ])
  },
  methods: {
    showToc (value) {
      if (value) {
        Ps.initialize(document.querySelector('.minimal-toc'))
        this.$store.commit('setWhitepaperTocVisible', true)
      } else {
        Ps.destroy(document.querySelector('.minimal-toc'))
        this.$store.commit('setWhitepaperTocVisible', false)
      }
    },
    initToc () {
      if (!this.whitepaperTocVisible) {
        document.querySelector('.minimal-toc').style.display = 'none'
      }
      Ps.initialize(document.querySelector('.minimal-toc'))
      watchTocClicks(this.showToc)
      this.$store.commit('setWhitepaperElementsVisible',
        inViewport(document.querySelectorAll('h2, h3, h4, h5')))
      percentageScrolling()
    }
  },
  mounted () {
    this.initToc()
  },
  props: ['toc-visible'],
  watch: {
    whitepaperElementsVisible () {
      visibleTocActivate(this.whitepaperElementsVisible)
    },
    whitepaperTocVisible (newVal, oldVal) {
      if (newVal === false) {
        document.querySelector('.minimal-toc').style.display = 'none'
      }
      if (newVal === true) {
        document.querySelector('.minimal-toc').style.display = 'block'
      }
    }
  }
}
</script>
