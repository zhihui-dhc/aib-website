<template>
  <div class="page page-no-user">
    <page-faq-nav></page-faq-nav>
    <div class="toc-padding" v-bind:class="{ 'toc-visible': faqTocVisible }">
    <text-container>
      <text-content></text-content>
    </text-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageFaqNav from './PageFaqNav'
import TextContainer from './TextContainer'
import TextContent from '../content/en/FAQ.md'
export default {
  name: 'page-faq',
  components: {
    PageFaqNav,
    TextContainer,
    TextContent
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
        complement: 'Cosmos - ' + this.$t('site.internetOfBlockchains')
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
