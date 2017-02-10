<template>
  <div class="page-faq">
    <page-faq-nav></page-faq-nav>
    <toc-padding v-bind:class="{ 'toc-visible': faqTocVisible }">
      <vue-article-body>
        <text-content></text-content>
      </vue-article-body>
    </toc-padding>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageFaqNav from './PageFaqNav'
import TocPadding from './TocPadding'
import VueArticleBody from '@nylira/vue-article-body'
import TextContent from '../../content/en-US/FAQ.md'
export default {
  name: 'page-faq',
  components: {
    PageFaqNav,
    TocPadding,
    VueArticleBody,
    TextContent
  },
  computed: {
    ...mapGetters([
      'faqTocVisible'
    ])
  },
  data () {
    return {
      metadata: {
        page: 'FAQ',
        title: `FAQ - ${this.$t('site.title')}`,
        desc: 'Read the answers to frequently asked questions about Cosmos: The Internet of Blockchains.'
      }
    }
  },
  head: {
    title () {
      return {
        inner: this.metadata.page,
        separator: '-',
        complement: this.$t('site.title')
      }
    },
    meta () {
      return [
        { n: 'description', c: this.metadata.desc },
        { n: 'twitter:title', c: this.metadata.title },
        { n: 'twitter:description', c: this.metadata.desc },
        { p: 'og:title', c: this.metadata.title },
        { p: 'og:description', c: this.metadata.desc }
      ]
    }
  },
  mounted () {
    if (document.documentElement.clientWidth < 960) {
      this.$store.commit('setFaqTocVisible', false)
    }
  }
}
</script>
