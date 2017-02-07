<template>
  <div class="page-whitepaper">
    <locale-menu path="whitepaper" :langs="['en-US', 'ko', 'pt', 'zh-CN']"></locale-menu>
    <page-whitepaper-nav></page-whitepaper-nav>
    <toc-padding v-bind:class="{ 'toc-visible': whitepaperTocVisible }">
      <vue-article-body>
        <text-ko v-if="$route.params.locale === 'ko'"></text-ko>
        <text-pt v-else-if="$route.params.locale === 'pt'"></text-pt>
        <text-zh-cn v-else-if="$route.params.locale === 'zh-CN'"></text-zh-cn>
        <text-en-us v-else></text-en-us>
      </vue-article-body>
    </toc-padding>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageWhitepaperNav from './PageWhitepaperNav'
import LocaleMenu from './LocaleMenu'
import TocPadding from './TocPadding'
import VueArticleBody from '@nylira/vue-article-body'
import TextEnUs from '../../content/en-US/WHITEPAPER.md'
import TextKo from '../../content/ko/WHITEPAPER.md'
import TextPt from '../../content/pt/WHITEPAPER.md'
import TextZhCn from '../../content/zh-CN/WHITEPAPER.md'
export default {
  components: {
    PageWhitepaperNav,
    LocaleMenu,
    TocPadding,
    VueArticleBody,
    TextEnUs,
    TextKo,
    TextPt,
    TextZhCn
  },
  computed: {
    ...mapGetters([
      'whitepaperTocVisible'
    ])
  },
  head: {
    title () {
      return {
        inner: this.$t('siteHeader.whitepaper'),
        separator: '-',
        complement: this.$t('site.title')
      }
    }
  },
  mounted () {
    if (document.documentElement.clientWidth < 960) {
      this.$store.commit('setWhitepaperTocVisible', false)
    }
  }
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'
.page-whitepaper
  padding-top 1rem
</style>
