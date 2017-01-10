<template>
  <div class="page-faq-nav mobile-only">
    <div
      class="toc-hidden-bar"
      v-show="!faqTocVisible"
      @click="showToc(true)">
      <i class="fa fa-bars"></i>
    </div>
    <div
      class="toc-hidden-bar"
      v-show="faqTocVisible"
      @click="showToc(false)">
      <i class="fa fa-times"></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Ps from 'perfect-scrollbar'
import watchTocClicks from '../scripts/watchTocClicks.js'
import inViewport from '../scripts/inViewport.js'
import visibleTocActivate from '../scripts/visibleTocActivate.js'
import percentageScrolling from '../scripts/percentageScrolling.js'
export default {
  name: 'page-faq-nav',
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

<style lang="stylus">
.page-faq-nav .minimal-toc ul > li > a
  font-weight 300
</style>
