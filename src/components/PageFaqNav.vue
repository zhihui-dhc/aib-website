<template>
  <div class="page-faq-nav mobile-only">
    <toc-hidden-bar
      v-show="!faqTocVisible"
      @click.native="showToc(true)"
      icon="bars">
    </toc-hidden-bar>
    <toc-hidden-bar
      v-show="faqTocVisible"
      @click.native="showToc(false)"
      icon="times">
    </toc-hidden-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TocHiddenBar from './TocHiddenBar'
import Ps from 'perfect-scrollbar'
import watchTocClicks from '../scripts/watchTocClicks.js'
import inViewport from '../scripts/inViewport.js'
import visibleTocActivate from '../scripts/visibleTocActivate.js'
import percentageScrolling from '../scripts/percentageScrolling.js'
export default {
  name: 'page-faq-nav',
  components: {
    TocHiddenBar
  },
  computed: {
    ...mapGetters([
      'faqTocVisible',
      'faqElementsVisible'
    ])
  },
  methods: {
    showToc (value) {
      if (value === true) {
        Ps.initialize(document.querySelector('.minimal-toc'))
        this.$store.commit('setFaqTocVisible', true)
        // document.querySelector('.minimal-toc').style.display = 'block'
      } else {
        Ps.destroy(document.querySelector('.minimal-toc'))
        this.$store.commit('setFaqTocVisible', false)
        // document.querySelector('.minimal-toc').style.display = 'none'
      }
    }
  },
  mounted () {
    if (!this.faqTocVisible) {
      document.querySelector('.minimal-toc').style.display = 'none'
    }
    Ps.initialize(document.querySelector('.minimal-toc'))
    watchTocClicks(this.showToc)
    this.$store.commit('setFaqElementsVisible',
      inViewport(document.querySelectorAll('h2, h3, h4')))
    percentageScrolling()
  },
  watch: {
    faqElementsVisible () {
      visibleTocActivate(this.faqElementsVisible)
    },
    faqTocVisible (newVal, oldVal) {
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
