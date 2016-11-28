<template>
  <div class="page-plan">
    <page-faq-nav></page-faq-nav>
    <div class="toc-padding" v-bind:class="{ 'toc-visible': faqTocVisible }">
    <section class="section-default">
      <div class="section-container">
        <div class="section-content">
          <div class="article-body">
            <page-faq-body></page-faq-body>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageFaqNav from './PageFaqNav'
import PageFaqBody from './PageFaqBody'

export default {
  name: 'page-faq',
  components: {
    PageFaqNav,
    PageFaqBody
  },
  computed: {
    ...mapGetters([
      'faqTocVisible'
    ])
  },
  head: {
    title () {
      return {
        inner: this.$t('siteHeader.faq'),
        separator: '-',
        complement: 'Cosmos - ' + this.$t('site.networkOfBlockchains')
      }
    }
  },
  mounted () {
    if (document.documentElement.clientWidth < 960) {
      this.$store.commit('setFaqTocVisible', false)
    }
  }
}
</script>
