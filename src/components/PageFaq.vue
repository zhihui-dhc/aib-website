<template>
  <div class="page page-no-user">
    <page-faq-nav></page-faq-nav>
    <toc-padding v-bind:class="{ 'toc-visible': faqTocVisible }">
      <text-container>
        <text-content></text-content>
      </text-container>
    </toc-padding>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageFaqNav from './PageFaqNav'
import TocPadding from './TocPadding'
import TextContainer from './TextContainer'
import TextContent from '../locales/content/en-US/FAQ.md'
export default {
  name: 'page-faq',
  components: {
    PageFaqNav,
    TocPadding,
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
        complement: this.$t('site.title')
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
