<template>
  <div class="page-whitepaper-nav mobile-only">
    <toc-hidden-bar
      v-show="!whitepaperTocVisible"
      @click.native="showToc(true)"
      icon="list-ol">
    </toc-hidden-bar>
    <toc-hidden-bar
      v-show="whitepaperTocVisible"
      @click.native="showToc(false)"
      icon="times">
    </toc-hidden-bar>
  </div>
</template>

<script>
import Ps from 'perfect-scrollbar'
import watchTocClicks from '../scripts/watchTocClicks.js'
import inViewport from '../scripts/inViewport.js'
import visibleTocActivate from '../scripts/visibleTocActivate.js'
import percentageScrolling from '../scripts/percentageScrolling.js'
import TocHiddenBar from './TocHiddenBar'
import { mapGetters } from 'vuex'
export default {
  name: 'page-whitepaper-nav',
  components: {
    TocHiddenBar
  },
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
